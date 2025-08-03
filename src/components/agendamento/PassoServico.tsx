import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Servico } from "@/pages/Agendamento";

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
    <div>
      <div className="space-y-6">
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

      <div className="flex justify-end mt-6">
        <Button onClick={proximoPasso} disabled={servicosSelecionados.length === 0} className="w-full md:w-auto font-beatford" size="lg">
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default PassoServico;