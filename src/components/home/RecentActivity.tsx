import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const RecentActivity = () => {
  return (
    <section className="px-4">
      <h2 className="text-xl font-bold font-beatford mb-4">Atividade Recente</h2>
      <Link to="/historico">
        <Card className="bg-muted border-border/80 hover:border-primary transition-colors">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-green-500/20 p-2 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Agendamento confirmado</p>
              <p className="text-sm text-muted-foreground">Carlos Silva - Hoje, 15:30</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </Link>
    </section>
  );
};