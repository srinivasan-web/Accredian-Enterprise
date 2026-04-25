import { cn } from "@/lib/utils";

export default function Button({
  as: Component = "button",
  className = "",
  variant = "primary",
  children,
  ...props
}) {
  return (
    <Component className={cn("button", `button--${variant}`, className)} {...props}>
      {children}
    </Component>
  );
}
