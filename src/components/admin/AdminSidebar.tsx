import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Scissors, Star } from "lucide-react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        isActive && "bg-muted text-primary"
      )}
    >
      {children}
    </Link>
  );
};

export const AdminSidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="">BarberPro Admin</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink href="/admin">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink href="/admin/barbeiros">
              <Users className="h-4 w-4" />
              Barbeiros
            </NavLink>
            <NavLink href="/admin/servicos">
              <Scissors className="h-4 w-4" />
              Serviços
            </NavLink>
            <NavLink href="/admin/planos">
              <Star className="h-4 w-4" />
              Planos
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};