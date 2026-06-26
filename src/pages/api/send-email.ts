import { env } from "cloudflare:workers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
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
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    });

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(5, "1 d"),
    });

    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for") ??
      "anonymous";
    const { success, remaining } = await ratelimit.limit(ip);

    if (!success) {
      return json(
        {
          success: false,
          message:
            "You have hit the rate limit. You can only send 5 messages per day.",
        },
        429,
      );
    }

    const body = await request.json();
    const validatedData = contactValidation.parse(body);

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
        remaining,
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
