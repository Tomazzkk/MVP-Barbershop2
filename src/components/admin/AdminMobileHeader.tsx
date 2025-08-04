import { Link } from "react-router-dom";
import { Menu, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AdminSidebarNav } from "./AdminSidebarNav";

export const AdminMobileHeader = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-secondary px-4 lg:h-[60px] lg:px-6 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Scissors className="h-6 w-6 text-primary" />
              <span>BarberPro Admin</span>
            </Link>
          </div>
          <div className="flex-1 py-2">
            <AdminSidebarNav />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};