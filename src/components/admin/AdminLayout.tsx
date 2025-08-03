import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { MadeWithDyad } from "../made-with-dyad";
import { AdminMobileHeader } from "./AdminMobileHeader";
import AnimatedIconBackground from "../AnimatedIconBackground";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <AnimatedIconBackground />
      <AdminSidebar />
      <div className="flex flex-col">
        <AdminMobileHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6" style={{ perspective: "1200px" }}>
          {children}
        </main>
        <footer className="py-4">
          <MadeWithDyad />
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;