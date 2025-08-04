import { Button } from "@/components/ui/button";
import { Servico } from "@/pages/Agendamento";
import { motion, AnimatePresence } from "framer-motion";

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 inset-x-4 max-w-md mx-auto bg-black/80 backdrop-blur-lg border-2 border-primary/50 shadow-2xl shadow-primary/10 rounded-2xl z-50 p-4"
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg mb-3">Serviços selecionados</h4>
              <div className="space-y-2">
                {servicosSelecionados.map((servico) => (
                  <div key={servico.id} className="flex justify-between items-center text-base border-b border-muted/50 pb-2">
                    <span className="text-muted-foreground">{servico.nome}</span>
                    <span className="font-medium text-foreground">R$ {servico.preco.toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <p className="font-semibold text-lg">Total</p>
              <p className="font-bold text-xl text-foreground">
                R$ {totalPreco.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button onClick={proximoPasso} className="font-beatford rounded-full px-12" size="lg">
              Continuar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicosSelecionadosBottomNav;