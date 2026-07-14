import nodemailer from "nodemailer";
import { ZodError } from "zod";
import { contactValidation } from "../../src/validation/contact";

interface Env {
  EMAIL_USER: string;
  EMAIL_PASS: string;
}

interface Context {
  request: Request;
  env: Env;
}

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const onRequestPost = async ({ request, env }: Context) => {
  try {
    const validatedData = contactValidation.parse(await request.json());

    await nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: env.EMAIL_USER,
          pass: env.EMAIL_PASS,
        },
      })
      .sendMail({
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
