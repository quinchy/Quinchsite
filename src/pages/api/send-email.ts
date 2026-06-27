import { env } from "cloudflare:workers";
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { ZodError } from "zod";
import { contactValidation } from "@/validation/contact";

export const prerender = false;

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const validatedData = contactValidation.parse(body);

    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "anonymous";
    const { success } = await env.CONTACT_RATE_LIMITER.limit({ key: ip });

    if (!success) {
      return json(
        {
          success: false,
          message:
            "You have hit the rate limit. Please wait a minute before sending another message.",
        },
        429,
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: env.EMAIL_USER,
      to: env.EMAIL_USER,
      subject: validatedData.subject,
      text: validatedData.body,
    });

    return json(
      {
        success: true,
        message: "Email sent successfully",
        data: validatedData,
      },
      200,
    );
  } catch (error) {
    console.error("[send-email] handler error:", error);
    if (error instanceof ZodError) {
      return json(
        {
          success: false,
          message: "Validation error",
          errors: error.issues,
        },
        400,
      );
    }

    return json(
      {
        success: false,
        message: "Internal server error",
      },
      500,
    );
  }
};
