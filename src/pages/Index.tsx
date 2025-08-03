import { HomeMenuButton } from "@/components/home/HomeMenuButton";
import { Calendar, ShoppingBag, Users, Store, Settings } from "lucide-react";

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
      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <HomeMenuButton
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            className={menuItems.length % 2 !== 0 && index === menuItems.length - 1 ? 'col-span-2' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;