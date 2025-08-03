import { HomeMenuButton } from "@/components/home/HomeMenuButton";
import { Calendar, ShoppingBag, Users, Store, Settings, Instagram } from "lucide-react";
import { MessageSquare } from "lucide-react"; // Usado para representar o WhatsApp

const menuItems = [
  { to: "/agendamento", icon: Calendar, label: "Agendar" },
  { to: "/produtos", icon: ShoppingBag, label: "Produtos" },
  { to: "/profissionais", icon: Users, label: "Profissionais" },
  { to: "/barbearias", icon: Store, label: "Unidades" },
  { to: "/configuracoes", icon: Settings, label: "Configurações" },
];

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 flex flex-col h-full">
      <div className="text-center mb-8">
         <h1 className="text-3xl font-bold">BarberPro</h1>
         <p className="text-muted-foreground">Selecione uma opção para começar.</p>
      </div>
      <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
        {menuItems.map((item) => (
          <HomeMenuButton
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            className="w-full"
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-12">
        <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram className="h-8 w-8" />
        </a>
        <a href="#" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
          <MessageSquare className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Index;