import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MoreVertical, 
  Check, 
  AlertCircle, 
  Star, 
  Gift, 
  Calendar, 
  Crown, 
  UserPlus, 
  Scissors,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";

type Notification = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  time: string;
};

const notificationsData = {
  hoje: [
    { id: 1, icon: Check, title: "Agendamento Confirmado", description: "Seu corte com João está confirmado para hoje às 15:30", time: "há 2 horas" },
    { id: 2, icon: AlertCircle, title: "Lembrete de Agendamento", description: "Não esqueça do seu corte hoje às 15:30 na Barbearia Central", time: "há 30 min" },
    { id: 3, icon: Star, title: "Avalie seu Atendimento", description: "Como foi seu corte com Carlos? Deixe sua avaliação", time: "há 1 hora" },
  ],
  essaSemana: [
    { id: 4, icon: Gift, title: "Promoção Especial", description: "20% de desconto no seu próximo corte. Válido até domingo!", time: "2 dias atrás" },
    { id: 5, icon: Calendar, title: "Novo Horário Disponível", description: "João liberou um horário para amanhã às 10:00. Quer agendar?", time: "3 dias atrás" },
    { id: 6, icon: Crown, title: "Plano VIP Ativo", description: "Seu plano VIP foi renovado com sucesso. Aproveite os benefícios!", time: "4 dias atrás" },
  ],
  maisAntigas: [
    { id: 7, icon: UserPlus, title: "Bem-vindo ao App", description: "Obrigado por se cadastrar! Explore nossos serviços e agende seu primeiro corte", time: "1 semana atrás" },
    { id: 8, icon: Scissors, title: "Primeiro Agendamento", description: "Seu primeiro corte foi agendado com sucesso! Esperamos você na barbearia", time: "1 semana atrás" },
  ]
};

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const Icon = notification.icon;
  return (
    <div className="bg-muted/80 p-4 rounded-lg flex items-start gap-4 relative">
      <div className="bg-background/50 rounded-full p-2 mt-1">
        <Icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-foreground">{notification.title}</h3>
        <p className="text-sm text-muted-foreground">{notification.description}</p>
        <p className="text-xs text-muted-foreground/70 mt-2">{notification.time}</p>
      </div>
      <Button variant="ghost" size="icon" className="h-6 w-6 absolute top-3 right-3">
        <X className="h-4 w-4 text-muted-foreground" />
      </Button>
    </div>
  );
};

const Avisos = () => {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="p-4 pb-24">
        <header className="flex items-center justify-between mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold font-beatford">Notificações</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-6 w-6" />
          </Button>
        </header>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Hoje</h2>
            <div className="space-y-3">
              {notificationsData.hoje.map(n => <NotificationCard key={n.id} notification={n} />)}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Essa Semana</h2>
            <div className="space-y-3">
              {notificationsData.essaSemana.map(n => <NotificationCard key={n.id} notification={n} />)}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Mais Antigas</h2>
            <div className="space-y-3">
              {notificationsData.maisAntigas.map(n => <NotificationCard key={n.id} notification={n} />)}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button variant="outline" className="w-full font-beatford">
            Marcar Todas como Lidas
          </Button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Avisos;