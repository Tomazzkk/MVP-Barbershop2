import { Link, useLocation } from "react-router-dom";
import { Scissors, LogIn, User, LayoutDashboard, Calendar, History, Star, Award } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Button variant="ghost" asChild className={cn(isActive && "text-primary bg-card")}>
      <Link to={to}>{children}</Link>
    </Button>
  );
};

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Scissors className="h-6 w-6 text-primary" />
          <span>BarberPro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/agendamento">
            <Calendar className="h-4 w-4 mr-2" />
            Agendar
          </NavLink>
          <NavLink to="/historico">
            <History className="h-4 w-4 mr-2" />
            Histórico
          </NavLink>
          <NavLink to="/pontos">
            <Award className="h-4 w-4 mr-2" />
            Meus Pontos
          </NavLink>
          <NavLink to="/planos">
            <Star className="h-4 w-4 mr-2" />
            Planos
          </NavLink>
          <NavLink to="/admin">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Admin
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavLink to="/perfil">
            <User className="h-4 w-4 mr-2" />
            Perfil
          </NavLink>
          <Button asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;