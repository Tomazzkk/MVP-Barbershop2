import AnimatedPage from "@/components/AnimatedPage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft, Settings, Edit, Scissors } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Mock Data
const user = {
  name: "Carlos Silva",
  email: "carlos.silva@email.com",
  avatarUrl: "https://i.pravatar.cc/150?u=carlos-silva",
  initials: "CS",
};

const fidelity = {
  completed: 7,
  total: 10,
};

const history = [
  {
    id: 1,
    barber: "João Santos",
    avatarUrl: "https://i.pravatar.cc/150?u=joao-santos",
    initials: "JS",
    date: "15 Jan 2025",
    time: "14:30",
    services: "Corte + Barba",
    status: "Concluído",
  },
  {
    id: 2,
    barber: "Pedro Lima",
    avatarUrl: "https://i.pravatar.cc/150?u=pedro-lima",
    initials: "PL",
    date: "08 Jan 2025",
    time: "16:00",
    services: "Corte Social",
    status: "Concluído",
  },
  {
    id: 3,
    barber: "Marcus Costa",
    avatarUrl: "https://i.pravatar.cc/150?u=marcus-costa",
    initials: "MC",
    date: "02 Jan 2025",
    time: "10:15",
    services: "Corte + Sobrancelha",
    status: "Cancelado",
  },
];

const stats = {
  cuts: 24,
  spent: 1240,
};

const Perfil = () => {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="p-4 pb-24 space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold font-beatford">Meu Perfil</h1>
          <Button asChild variant="ghost" size="icon">
            <Link to="/configuracoes">
              <Settings className="h-6 w-6" />
            </Link>
          </Button>
        </header>

        {/* User Info */}
        <div className="flex flex-col items-center gap-3">
          <Avatar className="h-24 w-24 border-4 border-muted">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl font-bold font-beatford">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
          <Button variant="secondary" className="font-beatford">
            <Edit className="mr-2 h-4 w-4" />
            Editar Perfil
          </Button>
        </div>

        {/* Fidelity Card */}
        <Card className="bg-muted/80">
          <CardHeader>
            <CardTitle className="font-beatford">Cartão Fidelidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-baseline mb-4">
              <p className="text-sm text-muted-foreground">Cortes realizados</p>
              <p className="font-bold">{fidelity.completed}/{fidelity.total}</p>
            </div>
            <div className="grid grid-cols-5 gap-3 mb-4">
              {Array.from({ length: fidelity.total }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "aspect-square rounded-full flex items-center justify-center",
                    index < fidelity.completed
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/50 border-2 border-dashed border-muted-foreground/50"
                  )}
                >
                  <Scissors className={cn("h-5 w-5", index >= fidelity.completed && "text-muted-foreground/50")} />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Faltam apenas {fidelity.total - fidelity.completed} cortes para ganhar um <span className="font-bold text-primary">CORTE GRÁTIS!</span>
            </p>
          </CardContent>
        </Card>

        {/* History */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold font-beatford">Histórico de Agendamentos</h3>
            <Link to="/historico" className="text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            {history.map((item) => (
              <Card key={item.id} className="bg-muted/80 p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={item.avatarUrl} alt={item.barber} />
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold">{item.barber}</h4>
                      <Badge variant={item.status === "Concluído" ? "secondary" : "destructive"}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.date} • {item.time}</p>
                    <p className="text-sm font-medium">{item.services}</p>
                    <Button variant="secondary" className="w-full mt-2 font-beatford">
                      {item.status === "Cancelado" ? "Reagendar" : "Repetir Agendamento"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-muted/80 p-4 text-center">
            <p className="text-3xl font-bold font-beatford">{stats.cuts}</p>
            <p className="text-sm text-muted-foreground">Cortes realizados</p>
          </Card>
          <Card className="bg-muted/80 p-4 text-center">
            <p className="text-3xl font-bold font-beatford">R$ {stats.spent.toLocaleString('pt-BR')}</p>
            <p className="text-sm text-muted-foreground">Total investido</p>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Perfil;