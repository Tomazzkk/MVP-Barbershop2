import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Scissors, Star } from "lucide-react";

const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/barbeiros", icon: Users, label: "Barbeiros" },
    { href: "/admin/servicos", icon: Scissors, label: "Serviços" },
    { href: "/admin/planos", icon: Star, label: "Planos" },
];

export const AdminSidebarNav = () => {
  const { pathname } = useLocation();

  return (
    <>
      {navItems.map(item => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            pathname === item.href && "bg-muted text-primary"
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </>
  );
};