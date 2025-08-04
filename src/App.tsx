import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Agendamento from "./pages/Agendamento";
import Layout from "./components/Layout";
import Perfil from "./pages/Perfil";
import EditarPerfil from "./pages/EditarPerfil";
import Historico from "./pages/Historico";
import Planos from "./pages/Planos";
import Pontos from "./pages/Pontos";
import Produtos from "./pages/Produtos";
import Profissionais from "./pages/Profissionais";
import Barbearias from "./pages/Barbearias";
import Configuracoes from "./pages/Configuracoes";
import Avisos from "./pages/Avisos";

// Admin imports
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminBarbeiros from "./pages/admin/AdminBarbeiros";
import AdminServicos from "./pages/admin/AdminServicos";
import AdminPlanos from "./pages/admin/AdminPlanos";

const queryClient = new QueryClient();

const AdminRoutes = () => (
  <AdminLayout>
    <Outlet />
  </AdminLayout>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        
        {/* Client-facing routes */}
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/agendamento" element={<Layout><Agendamento /></Layout>} />
        <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
        <Route path="/perfil/editar" element={<Layout><EditarPerfil /></Layout>} />
        <Route path="/configuracoes" element={<Layout><Configuracoes /></Layout>} />
        <Route path="/historico" element={<Layout><Historico /></Layout>} />
        <Route path="/planos" element={<Layout><Planos /></Layout>} />
        <Route path="/pontos" element={<Layout><Pontos /></Layout>} />
        <Route path="/produtos" element={<Layout><Produtos /></Layout>} />
        <Route path="/profissionais" element={<Layout><Profissionais /></Layout>} />
        <Route path="/barbearias" element={<Layout><Barbearias /></Layout>} />
        <Route path="/avisos" element={<Layout><Avisos /></Layout>} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminRoutes />}>
          <Route index element={<AdminDashboard />} />
          <Route path="barbeiros" element={<AdminBarbeiros />} />
          <Route path="servicos" element={<AdminServicos />} />
          <Route path="planos" element={<AdminPlanos />} />
        </Route>

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;