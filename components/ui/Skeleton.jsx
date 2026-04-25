import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function Skeleton({ className = "", children }) {
  return (
    <Card className={cn("skeleton", className)} aria-hidden="true">
      {children}
    </Card>
  );
}
