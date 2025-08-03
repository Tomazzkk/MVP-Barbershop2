import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HomeMenuButtonProps {
  to: string;
  icon: React.ElementType;
  label: string;
  className?: string;
}

export const HomeMenuButton = ({ to, icon: Icon, label, className }: HomeMenuButtonProps) => {
  return (
    <Link to={to} className={cn("block group", className)}>
      <Card className="h-full bg-card hover:bg-muted active:scale-95 transition-all duration-200 ease-in-out">
        <CardContent className="flex flex-col items-center justify-center p-6 h-full aspect-square">
          <Icon className="h-10 w-10 mb-3 text-primary" />
          <span className="text-base font-semibold text-center text-card-foreground">{label}</span>
        </CardContent>
      </Card>
    </Link>
  );
};