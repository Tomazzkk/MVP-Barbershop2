import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Crown } from "lucide-react";

const actions = [
  { to: "/agendamento", icon: Calendar, label: "Agendar" },
  { to: "/planos", icon: Crown, label: "Planos VIP" },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      {actions.map((action) => (
        <Link to={action.to} key={action.label}>
          <Card className="bg-muted border-border/80 hover:border-primary transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
              <div className="bg-primary/20 p-3 rounded-lg">
                <action.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-sm font-beatford">{action.label}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};