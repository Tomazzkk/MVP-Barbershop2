import { Link, useLocation } from "react-router-dom";
import { Scissors, LogIn, User, LayoutDashboard, Calendar, History, Star, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const DesktopNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")}>
      {children}
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center p-4 h-16">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Scissors className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">BarberPro</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
           <DesktopNavLink to="/agendamento">Agendar</DesktopNavLink>
           <DesktopNavLink to="/historico">Histórico</DesktopNavLink>
           <DesktopNavLink to="/pontos">Pontos</DesktopNavLink>
           <DesktopNavLink to="/planos">Planos</DesktopNavLink>
           <DesktopNavLink to="/admin">Admin</DesktopNavLink>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;