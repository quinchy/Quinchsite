import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "solid" | "outline" | "ghost" | "dashed" | "link";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

const baseClass =
  "inline-flex items-center justify-center spacing-xs padding-xs text-sm animation-fast disabled:cursor-not-allowed disabled:opacity-50";

const variantClass: Record<ButtonVariant, string> = {
  solid:
    "bg-primary font-semibold text-background brightness-75 hover:brightness-100 active:scale-95 active:brightness-90",
  outline:
    "border border-border font-semibold hover:bg-primary hover:text-background",
  ghost: "hover:bg-muted",
  dashed:
    "border border-dashed border-border text-primary hover:border-primary hover:bg-muted/50",
  link: "text-foreground/75 underline-offset-2 hover:text-foreground hover:underline",
};

export function Button({
  children,
  className,
  variant = "outline",
  ...props
}: ButtonProps) {
  const classes = cx(baseClass, variantClass[variant], className);

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
