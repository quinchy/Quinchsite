import { ZodError } from "zod";
import { contactValidation } from "../../src/validation/contact";

interface Env {
  RESEND_API_KEY: string;
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

const sendEmail = async (
  data: ReturnType<typeof contactValidation.parse>,
  apiKey: string,
) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Quinchsite Contact <contact@quinchy.dev>",
      to: ["deguzmancyriljames.dev@gmail.com"],
      subject: data.subject,
      text: data.body,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend API error: ${response.status} ${await response.text()}`,
    );
  }
};

export const onRequestPost = async ({ request, env }: Context) => {
  try {
    const validatedData = contactValidation.parse(await request.json());

    await sendEmail(validatedData, env.RESEND_API_KEY);

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
