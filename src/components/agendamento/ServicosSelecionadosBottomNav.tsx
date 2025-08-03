import { Button } from "@/components/ui/button";
import { Servico } from "@/pages/Agendamento";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "../ui/separator";
import { NumberTicker } from "../ui/number-ticker";

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
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "120%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 inset-x-4 bg-card/80 backdrop-blur-lg border border-border shadow-2xl rounded-2xl z-[51] overflow-hidden"
        >
          <div className="p-4">
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
                    <span>R$ <NumberTicker value={finalTotal} /></span>
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