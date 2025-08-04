import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Crown, User, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", icon: Home, label: "Início" },
  { href: "/agendamento", icon: Calendar, label: "Agendar" },
  { href: "/planos", icon: Crown, label: "Planos" },
  { href: "/perfil", icon: User, label: "Perfil" },
  { href: "/avisos", icon: Bell, label: "Avisos", notificationCount: 3 },
];

export const BottomNav = () => {
  const { pathname } = useLocation();
  const mainNavPaths = ['/', '/agendamento', '/planos', '/perfil', '/avisos'];

  // Hide if it's an admin path, login, or not a main nav path
  if (pathname.startsWith('/admin') || pathname === '/login' || !mainNavPaths.includes(pathname)) {
    return null;
  }

  return (
    <nav className="fixed bottom-4 inset-x-4 max-w-md mx-auto bg-black/80 backdrop-blur-lg border-2 border-primary/50 shadow-2xl shadow-primary/10 rounded-2xl z-50 md:bottom-6 p-1">
      <div className="flex justify-around items-center h-16 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 w-full h-full rounded-xl transition-colors z-10",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute inset-0 bg-primary/20 rounded-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className={cn("relative h-7 w-7 flex items-center justify-center transition-transform", isActive && "scale-110")}>
                <Icon className="h-6 w-6" />
                {item.notificationCount && item.notificationCount > 0 && (
                   <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                     {item.notificationCount}
                   </span>
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