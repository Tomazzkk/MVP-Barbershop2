import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center text-center py-16 md:py-24">
        <Scissors className="h-24 w-24 text-primary mb-4 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo ao BarberPro</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A forma mais inteligente de gerenciar sua barbearia e agendar seus cortes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/agendamento">Quero agendar um horário</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/admin">Sou dono de barbearia</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;