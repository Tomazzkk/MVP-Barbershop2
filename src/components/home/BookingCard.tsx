import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Scissors } from "lucide-react";

export const BookingCard = () => {
  return (
    <Card className="bg-muted border-border/80 relative overflow-hidden mx-4">
      <CardContent className="p-6 space-y-4">
        <Scissors className="absolute -top-2 -right-2 h-16 w-16 text-foreground/5" />
        <div className="relative">
          <h2 className="text-2xl font-bold font-beatford">Seu próximo corte perfeito</h2>
          <p className="text-muted-foreground">Agende com os melhores barbeiros da cidade</p>
        </div>
        <Button asChild size="lg" className="w-full md:w-auto font-beatford">
          <Link to="/agendamento">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Agora
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};