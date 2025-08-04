import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Award, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const navItems = [
  { href: "/", icon: Home, label: "Início" },
  { href: "/historico", icon: Calendar, label: "Minha Agenda" },
  { href: "/pontos", icon: Award, label: "Fidelidade" },
  { href: "/perfil", icon: User, label: "Perfil" },
];

const user = {
  avatarUrl: "https://i.pravatar.cc/150?u=primeappbarber",
  initials: "PA",
};

export const BottomNav = () => {
  const { pathname } = useLocation();
  const hiddenPaths = [
    '/agendamento',
    '/produtos',
    '/profissionais',
    '/barbearias',
    '/configuracoes',
  ];

  if (pathname.startsWith('/admin') || pathname === '/login' || hiddenPaths.some(path => pathname.startsWith(path))) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black border-t border-border z-50 md:hidden">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href === "/historico" && pathname.startsWith("/agendamento"));
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 p-2 flex-1 transition-colors h-full",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute top-0 h-1 w-10 bg-primary rounded-b-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className={cn("h-7 w-7 flex items-center justify-center transition-transform", isActive && "scale-110")}>
                {item.href === "/perfil" ? (
                  <Avatar className="h-full w-full border-2 border-transparent group-hover:border-primary">
                    <AvatarImage src={user.avatarUrl} alt="User avatar" />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                ) : (
                  <Icon className="h-full w-full" />
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};