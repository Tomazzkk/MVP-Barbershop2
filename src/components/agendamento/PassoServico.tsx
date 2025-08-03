import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Servico } from "@/pages/Agendamento";
import ServicosSelecionadosBottomNav from "./ServicosSelecionadosBottomNav";

interface PassoServicoProps {
  servicos: Servico[];
  servicosSelecionados: Servico[];
  setServicosSelecionados: (servicos: Servico[]) => void;
  proximoPasso: () => void;
}

const PassoServico = ({ servicos, servicosSelecionados, setServicosSelecionados, proximoPasso }: PassoServicoProps) => {
  const handleToggleServico = (servico: Servico) => {
    const isSelected = servicosSelecionados.some(s => s.id === servico.id);
    if (isSelected) {
      setServicosSelecionados(servicosSelecionados.filter(s => s.id !== servico.id));
    } else {
      setServicosSelecionados([...servicosSelecionados, servico]);
    }
  };

  return (
    <div className="relative">
      <div className="space-y-6 pb-56">
        {servicos.map((servico, index) => {
          const isSelected = servicosSelecionados.some(s => s.id === servico.id);
          return (
            <div key={servico.id}>
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold font-beatford text-lg">{servico.nome}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{servico.descricao}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-sm font-bold text-primary">R$ {servico.preco.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">{servico.duracao}</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleToggleServico(servico)}
                  variant={isSelected ? "secondary" : "default"}
                  size="sm"
                  className="font-beatford"
                >
                  {isSelected ? "Remover" : "Adicionar"}
                </Button>
              </div>
              {index < servicos.length - 1 && <Separator className="mt-6" />}
            </div>
          );
        })}
      </div>

      <ServicosSelecionadosBottomNav 
        servicosSelecionados={servicosSelecionados}
        proximoPasso={proximoPasso}
      />
    </div>
  );
};

export default PassoServico;