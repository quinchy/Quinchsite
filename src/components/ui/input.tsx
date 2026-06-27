import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

const fieldClass =
  "border border-border bg-background padding-xs text-sm text-foreground caret-primary animation-fast placeholder:text-foreground/70 focus-ring disabled:cursor-not-allowed disabled:opacity-50";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cx(fieldClass, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cx(fieldClass, "max-h-30 min-h-30 resize-none", className)}
      {...props}
    />
  );
}
