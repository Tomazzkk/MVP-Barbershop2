import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, History, Award, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const navItems = [
  { href: "/", icon: Home, label: "Início" },
  { href: "/agendamento", icon: Calendar, label: "Agendar" },
  { href: "/historico", icon: History, label: "Histórico" },
  { href: "/pontos", icon: Award, label: "Pontos" },
  { href: "/perfil", icon: User, label: "Perfil" },
];

// Mock user data for avatar. In a real app, this would come from auth context.
const user = {
  avatarUrl: "https://i.pravatar.cc/150?u=primeappbarber",
  initials: "PA",
};

const NavLink = ({ href, label, children }: { href: string; label:string; children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "relative flex flex-col items-center justify-center gap-1 p-2 flex-1 transition-colors z-10",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active-nav-highlight"
          className="absolute inset-0 bg-primary/10 rounded-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div className={cn("h-6 w-6 flex items-center justify-center transition-transform", isActive && "scale-110")}>
        {children}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export const BottomNav = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border z-50 md:hidden">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.href} href={item.href} label={item.label}>
              {item.href === "/perfil" ? (
                <Avatar className="h-full w-full">
                  <AvatarImage src={user.avatarUrl} alt="User avatar" />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              ) : (
                <Icon className="h-full w-full" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};