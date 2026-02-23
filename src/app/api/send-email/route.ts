import { NextRequest, NextResponse } from "next/server";
import { contactValidation } from "@/validation/contact";
import { ZodError } from "zod";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1 d"),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
    const { success, remaining } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You have hit the rate limit. You can only send 5 messages per day.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const nodemailer = require("nodemailer");

    const validatedData = contactValidation.parse(body);
    const emailSubject = validatedData.subject;
    const emailBody = validatedData.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      text: emailBody,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        remaining,
        data: validatedData,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
