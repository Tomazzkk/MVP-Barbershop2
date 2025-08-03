import { Barbeiro, Servico } from "@/pages/Agendamento";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useMemo } from "react";

interface PassoBarbeiroProps {
  servicosSelecionados: Servico[];
  barbeiros: Barbeiro[];
  barbeiroSelecionado: Barbeiro | null;
  setBarbeiroSelecionado: (barbeiro: Barbeiro | null) => void;
  proximoPasso: () => void;
  passoAnterior: () => void;
}

const PassoBarbeiro = ({
  servicosSelecionados,
  barbeiros,
  barbeiroSelecionado,
  setBarbeiroSelecionado,
  proximoPasso,
  passoAnterior,
}: PassoBarbeiroProps) => {
  const totalPreco = useMemo(() => servicosSelecionados.reduce((total, servico) => total + servico.preco, 0), [servicosSelecionados]);

  const barbeirosComSemPreferencia = useMemo(() => [
    { id: "qualquer", nome: "Sem preferência", avatarUrl: "", iniciais: "??", experiencia: "", disponibilidade: "" },
    ...barbeiros
  ], [barbeiros]);

  const handleBarberSelection = (barbeiro: (typeof barbeirosComSemPreferencia)[0]) => {
    if (barbeiro.id === 'qualquer') {
      setBarbeiroSelecionado(null);
    } else {
      setBarbeiroSelecionado(barbeiro as Barbeiro);
    }
  };

  const isBarberSelected = (barbeiro: (typeof barbeirosComSemPreferencia)[0]) => {
    if (barbeiro.id === 'qualquer') {
      return barbeiroSelecionado === null;
    }
    return barbeiroSelecionado?.id === barbeiro.id;
  };

  return (
    <div className="space-y-8">
      {/* Resumo dos Serviços */}
      <div>
        <h3 className="text-lg font-semibold font-beatford mb-2">Serviços Selecionados</h3>
        <div className="p-4 border rounded-lg bg-muted/50">
          {servicosSelecionados.map(servico => (
            <div key={servico.id} className="flex justify-between items-center text-sm">
              <span>{servico.nome}</span>
              <span className="font-medium">R$ {servico.preco.toFixed(2)}</span>
            </div>
          ))}
          <Separator className="my-2" />
          <div className="flex justify-between items-center font-bold">
            <span>Total</span>
            <span>R$ {totalPreco.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Seleção de Barbeiro */}
      <div>
        <h3 className="text-lg font-semibold font-beatford mb-3">Profissional</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {barbeirosComSemPreferencia.map((barbeiro) => (
            <button
              key={barbeiro.id}
              onClick={() => handleBarberSelection(barbeiro)}
              className={cn(
                "flex-shrink-0 w-28 flex flex-col items-center gap-2 p-2 rounded-lg border text-center transition-all",
                isBarberSelected(barbeiro)
                  ? "border-primary ring-2 ring-primary bg-primary/10"
                  : "hover:bg-muted"
              )}
            >
              <Avatar className="h-16 w-16">
                {barbeiro.avatarUrl ? (
                  <>
                    <AvatarImage src={barbeiro.avatarUrl} alt={barbeiro.nome} />
                    <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted rounded-full">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </Avatar>
              <span className="text-xs font-medium font-beatford">{barbeiro.nome}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navegação */}
      <div className="flex justify-between mt-8 gap-4">
        <Button variant="outline" onClick={passoAnterior} className="w-full md:w-auto font-beatford">
          Voltar
        </Button>
        <Button onClick={proximoPasso} className="w-full md:w-auto font-beatford">
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default PassoBarbeiro;