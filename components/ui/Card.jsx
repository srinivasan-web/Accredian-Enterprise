import { cn } from "@/lib/utils";

export default function Card({ className = "", children }) {
  return <div className={cn("card", className)}>{children}</div>;
}
