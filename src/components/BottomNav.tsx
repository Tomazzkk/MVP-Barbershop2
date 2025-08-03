import { Link, useLocation } from "react-router-dom";
import { Calendar, History, Award, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/agendamento", icon: Calendar, label: "Agendar" },
  { href: "/historico", icon: History, label: "Histórico" },
  { href: "/pontos", icon: Award, label: "Pontos" },
  { href: "/perfil", icon: User, label: "Perfil" },
];

const NavLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 p-2 flex-1 transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export const BottomNav = () => {
  // A navegação some em telas maiores (md:hidden)
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border z-50 md:hidden">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
        ))}
      </div>
    </nav>
  );
};