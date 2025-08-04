import { Servico, Barbeiro } from "@/pages/Agendamento";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock, Star, Check, Tag, Plus } from "lucide-react";

interface PassoServicoProps {
  servicos: Servico[];
  servicosSelecionados: Servico[];
  setServicosSelecionados: (servicos: Servico[]) => void;
  barbeiroSelecionado: Barbeiro | null;
}

const PassoServico = ({ servicos, servicosSelecionados, setServicosSelecionados, barbeiroSelecionado }: PassoServicoProps) => {
  const handleToggleServico = (servico: Servico) => {
    const isSelected = servicosSelecionados.some(s => s.id === servico.id);
    if (isSelected) {
      setServicosSelecionados(servicosSelecionados.filter(s => s.id !== servico.id));
    } else {
      setServicosSelecionados([...servicosSelecionados, servico]);
    }
  };

  return (
    <div className="space-y-4 pb-40">
      {barbeiroSelecionado && (
        <Card className="p-4 flex items-center gap-4 bg-muted">
          <Avatar className="h-12 w-12">
            <AvatarImage src={barbeiroSelecionado.avatarUrl} />
            <AvatarFallback>{barbeiroSelecionado.iniciais}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">{barbeiroSelecionado.nome}</p>
            <p className="text-sm text-muted-foreground">{barbeiroSelecionado.specialty}</p>
          </div>
        </Card>
      )}

      {servicos.map((servico) => {
        const isSelected = servicosSelecionados.some(s => s.id === servico.id);
        const Icon = servico.icon;

        return (
          <Card
            key={servico.id}
            onClick={() => handleToggleServico(servico)}
            className={cn(
              "p-0 cursor-pointer transition-all overflow-hidden",
              isSelected ? "border-primary bg-primary/5" : "border-border bg-muted"
            )}
          >
            <div className="p-4 flex items-start gap-4">
              <div className="bg-background p-3 rounded-lg mt-1">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold font-beatford">{servico.nome}</h3>
                <p className="text-sm text-muted-foreground">{servico.descricao}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    <span>{servico.duracao}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-3 w-3" />
                    <span>{servico.rating} ({servico.reviews} avaliações)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">R$ {servico.preco.toFixed(2).replace('.', ',')}</p>
                {isSelected && <Check className="h-5 w-5 text-primary ml-auto mt-1" />}
              </div>
            </div>
            {isSelected && (
              <div className="bg-primary/10 mt-2 px-4 py-2 border-t border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
                <Check className="h-4 w-4" />
                Selecionado
              </div>
            )}
          </Card>
        );
      })}

      <Card className="p-4 flex items-center gap-4 bg-muted cursor-pointer">
        <div className="bg-background p-3 rounded-lg">
          <Tag className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">Tem um cupom de desconto?</p>
          <p className="text-sm text-muted-foreground">Adicione aqui para economizar</p>
        </div>
        <Button variant="ghost" size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </Card>
    </div>
  );
};

export default PassoServico;