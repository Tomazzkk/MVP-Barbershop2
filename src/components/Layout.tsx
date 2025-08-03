import React from "react";
import Header from "./Header";
import { MadeWithDyad } from "./made-with-dyad";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>
      <footer className="py-4 hidden md:block">
        <MadeWithDyad />
      </footer>
      <BottomNav />
    </div>
  );
};

export default Layout;