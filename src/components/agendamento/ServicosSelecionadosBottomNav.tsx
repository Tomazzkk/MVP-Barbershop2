import { Button } from "@/components/ui/button";
import { Servico } from "@/pages/Agendamento";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "../ui/separator";

interface ServicosSelecionadosBottomNavProps {
  servicosSelecionados: Servico[];
  proximoPasso: () => void;
}

const ServicosSelecionadosBottomNav = ({ servicosSelecionados, proximoPasso }: ServicosSelecionadosBottomNavProps) => {
  const totalPreco = servicosSelecionados.reduce((total, servico) => total + servico.preco, 0);
  const comboDiscount = 0; // Placeholder for combo discount
  const finalTotal = totalPreco - comboDiscount;

  return (
    <AnimatePresence>
      {servicosSelecionados.length > 0 && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-[51]"
        >
          <div className="container mx-auto max-w-4xl p-4">
            <h3 className="font-semibold mb-2 font-beatford">Serviços selecionados</h3>
            <div className="space-y-1 text-sm">
              {servicosSelecionados.map(servico => (
                <div key={servico.id} className="flex justify-between">
                  <span className="text-muted-foreground">{servico.nome}</span>
                  <span>R$ {servico.preco.toFixed(2).replace('.', ',')}</span>
                </div>
              ))}
            </div>
            <Separator className="my-3" />
            <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Nenhum combo</span>
                    <span>R$ {comboDiscount.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            <Button onClick={proximoPasso} className="w-full mt-4 font-beatford" size="lg">
              Avançar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicosSelecionadosBottomNav;