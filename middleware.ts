// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Runs ONLY on "/"
  const res = NextResponse.next();
  // Example: signal the page to show splash
  res.headers.set("x-show-splash", "1");
  return res;
}

// Limit execution to "/"
export const config = {
  matcher: ["/"],
};
