import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";
import { AdminSidebarNav } from "./AdminSidebarNav";

export const AdminSidebar = () => {
  return (
    <div className="hidden border-r bg-secondary md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="">MvpBarber Admin</span>
          </Link>
        </div>
        <div className="flex-1 py-2">
          <AdminSidebarNav />
        </div>
      </div>
    </div>
  );
};