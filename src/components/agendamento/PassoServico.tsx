import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Servico } from "@/pages/Agendamento";

interface PassoServicoProps {
  servicos: Servico[];
  servicoSelecionado: Servico | null;
  setServicoSelecionado: (servico: Servico) => void;
  proximoPasso: () => void;
}

const PassoServico = ({ servicos, servicoSelecionado, setServicoSelecionado, proximoPasso }: PassoServicoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>1. Escolha o serviço</CardTitle>
        <CardDescription>Selecione o serviço que você deseja agendar.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {servicos.map((servico) => (
            <button
              key={servico.id}
              onClick={() => setServicoSelecionado(servico)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all flex justify-between items-center",
                servicoSelecionado?.id === servico.id
                  ? "border-primary ring-2 ring-primary"
                  : "hover:bg-muted"
              )}
            >
              <div>
                <h3 className="font-semibold">{servico.nome}</h3>
                <p className="text-sm text-muted-foreground mt-1">{servico.duracao}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">R$ {servico.preco.toFixed(2)}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <Button onClick={proximoPasso} disabled={!servicoSelecionado} className="w-full md:w-auto">
            Próximo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassoServico;