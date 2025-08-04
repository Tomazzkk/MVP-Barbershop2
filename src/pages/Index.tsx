import { HomeMenuButton } from "@/components/home/HomeMenuButton";
import { Calendar, ShoppingBag, Users, Store, Settings, Instagram } from "lucide-react";
import { MessageSquare } from "lucide-react"; // Usado para representar o WhatsApp
import AnimatedPage from "@/components/AnimatedPage";
import NossosServicos from "@/components/home/NossosServicos";

const menuItems = [
  { to: "/agendamento", icon: Calendar, label: "Agendar" },
  { to: "/produtos", icon: ShoppingBag, label: "Produtos" },
  { to: "/profissionais", icon: Users, label: "Profissionais" },
  { to: "/barbearias", icon: Store, label: "Unidades" },
  { to: "/configuracoes", icon: Settings, label: "Configurações" },
];

const Index = () => {
  return (
    <AnimatedPage>
      {/* Hero/Menu Section */}
      <section className="container mx-auto p-4 md:p-6 flex flex-col min-h-[80vh] justify-center">
        <div className="text-center pt-8">
          <img src="/placeholder.svg" alt="BarberPro Logo" className="w-36 h-auto mx-auto mb-4" />
          <h1 className="text-4xl font-beatford text-primary tracking-wider">BarberPro</h1>
          <p className="text-muted-foreground mt-2">Selecione uma opção para começar.</p>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center gap-3 w-full max-w-md mx-auto">
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

        <div className="flex justify-center items-center gap-6 pb-4">
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="#" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageSquare className="h-8 w-8" />
          </a>
        </div>
      </section>
      
      {/* Services Section */}
      <NossosServicos />
    </AnimatedPage>
  );
};

export default Index;