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
    <nav className="fixed bottom-4 inset-x-4 max-w-md mx-auto bg-black/80 backdrop-blur-lg border-2 border-primary/50 shadow-2xl shadow-primary/10 rounded-2xl z-50 md:bottom-6">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 w-full h-full rounded-lg transition-colors z-10",
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary/90"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute inset-0 bg-primary/20 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className={cn("h-7 w-7 flex items-center justify-center transition-transform", isActive && "scale-110")}>
                {item.href === "/perfil" ? (
                  <Avatar className={cn("h-full w-full border-2", isActive ? "border-primary/80" : "border-transparent")}>
                    <AvatarImage src={user.avatarUrl} alt="User avatar" />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                ) : (
                  <Icon className="h-6 w-6" />
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