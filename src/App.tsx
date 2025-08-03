import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Agendamento from "./pages/Agendamento";
import AdminDashboard from "./pages/AdminDashboard";
import Layout from "./components/Layout";
import Perfil from "./pages/Perfil";
import Historico from "./pages/Historico";
import Planos from "./pages/Planos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/agendamento" element={<Layout><Agendamento /></Layout>} />
          <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
          <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
          <Route path="/historico" element={<Layout><Historico /></Layout>} />
          <Route path="/planos" element={<Layout><Planos /></Layout>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;