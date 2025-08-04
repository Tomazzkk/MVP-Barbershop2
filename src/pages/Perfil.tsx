import AnimatedPage from "@/components/AnimatedPage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  MapPin, 
  Lock, 
  History, 
  Receipt, 
  Bell, 
  Star, 
  ChevronRight,
  Repeat
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

interface ProfileMenuItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  to?: string;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ icon: Icon, title, subtitle, to = "#" }) => (
  <Link to={to} className="flex items-center py-4 rounded-lg group transition-colors hover:bg-muted/50 px-2 -mx-2">
    <Icon className="h-5 w-5 text-primary mr-4 flex-shrink-0" />
    <div className="flex-1">
      <p className="font-medium text-sm font-beatford">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
  </Link>
);

const Perfil = () => {
  const user = {
    name: "Prime appbarber",
    email: "prime@starapp.com.br",
    avatarUrl: "https://i.pravatar.cc/150?u=primeappbarber",
    initials: "PA",
  };

  const menuItems: ProfileMenuItemProps[] = [
    { icon: User, title: "Meus Dados", subtitle: "Altere as informações do seu perfil" },
    { icon: MapPin, title: "Endereço", subtitle: "Altere seu endereço" },
    { icon: Lock, title: "Segurança", subtitle: "Altere sua senha de acesso" },
    { icon: History, title: "Histórico", subtitle: "Visualize seu histórico de agendamentos", to: "/historico" },
    { icon: Receipt, title: "Despesas", subtitle: "Acompanhe seus gastos" },
    { icon: Bell, title: "Notificações", subtitle: "Autorize as notificações em seu dispositivo" },
    { icon: Star, title: "Avaliar", subtitle: "Avalie nosso aplicativo na loja" },
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold font-beatford">{user.name}</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col">
          <div className="flex items-center py-4 rounded-lg group transition-colors hover:bg-muted/50 px-2 -mx-2">
            <Repeat className="h-5 w-5 text-primary mr-4 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-sm font-beatford">Alterar Unidade</p>
            </div>
            <Switch id="unidade-switch" />
          </div>
          
          <Separator />

          {menuItems.map((item, index) => (
            <React.Fragment key={item.title}>
              <ProfileMenuItem {...item} />
              {index < menuItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Perfil;