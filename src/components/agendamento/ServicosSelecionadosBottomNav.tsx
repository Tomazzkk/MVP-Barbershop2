import { Button } from "@/components/ui/button";
import { Servico } from "@/pages/Agendamento";
import { motion, AnimatePresence } from "framer-motion";
import { NumberTicker } from "../ui/number-ticker";

interface ServicosSelecionadosBottomNavProps {
  servicosSelecionados: Servico[];
  proximoPasso: () => void;
}

const ServicosSelecionadosBottomNav = ({ servicosSelecionados, proximoPasso }: ServicosSelecionadosBottomNavProps) => {
  const totalPreco = servicosSelecionados.reduce((total, servico) => total + servico.preco, 0);

  return (
    <AnimatePresence>
      {servicosSelecionados.length > 0 && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 bg-background border-t border-border z-50"
        >
          <div className="container mx-auto p-4 max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">{servicosSelecionados.length} serviço{servicosSelecionados.length > 1 ? 's' : ''} selecionado</p>
              <p className="font-bold text-lg">
                R$ <NumberTicker value={totalPreco} />
              </p>
            </div>
            <Button onClick={proximoPasso} className="w-full font-beatford" size="lg">
              Continuar para Horários
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicosSelecionadosBottomNav;