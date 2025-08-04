import React from "react";
import { MadeWithDyad } from "./made-with-dyad";
import { BottomNav } from "./BottomNav";
import AnimatedIconBackground from "./AnimatedIconBackground";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const mainNavPaths = ['/', '/planos', '/perfil', '/avisos', '/historico'];
  const showBottomNav = mainNavPaths.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedIconBackground />
      <main className="flex-grow pb-20">
        {children}
      </main>
      <footer className="py-4 hidden">
        <MadeWithDyad />
      </footer>
      <AnimatePresence>
        {showBottomNav && <BottomNav />}
      </AnimatePresence>
    </div>
  );
};

export default Layout;