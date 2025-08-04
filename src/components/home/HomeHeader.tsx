import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Bell, Check, AlertCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

type Notification = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

const notificationsData: Notification[] = [
  { id: 1, icon: Check, title: "Agendamento Confirmado", description: "Seu corte com João está confirmado para hoje às 15:30" },
  { id: 2, icon: AlertCircle, title: "Lembrete de Agendamento", description: "Não esqueça do seu corte hoje às 15:30" },
  { id: 3, icon: Star, title: "Avalie seu Atendimento", description: "Como foi seu corte com Carlos? Deixe sua avaliação" },
];

export const HomeHeader = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-muted-foreground">Bem-vindo de volta,</p>
          <h1 className="text-xl font-bold font-beatford">John Smith</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="grid gap-4">
              <div className="space-y-1">
                <h4 className="font-medium leading-none font-beatford">Notificações de Hoje</h4>
                <p className="text-sm text-muted-foreground">
                  Você tem {notificationsData.length} novas notificações.
                </p>
              </div>
              <Separator />
              <div className="grid gap-2">
                {notificationsData.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div key={notification.id} className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted">
                      <Icon className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Separator />
              <Button asChild variant="outline" size="sm">
                <Link to="/avisos">Ver todas as notificações</Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};