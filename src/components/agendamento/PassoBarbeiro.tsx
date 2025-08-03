import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Barbeiro } from "@/pages/Agendamento";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface PassoBarbeiroProps {
  barbeiros: Barbeiro[];
  barbeiroSelecionado: Barbeiro | null;
  setBarbeiroSelecionado: (barbeiro: Barbeiro) => void;
  proximoPasso: () => void;
  passoAnterior: () => void;
}

const PassoBarbeiro = ({ barbeiros, barbeiroSelecionado, setBarbeiroSelecionado, proximoPasso, passoAnterior }: PassoBarbeiroProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>2. Escolha o profissional</CardTitle>
        <CardDescription>Selecione o seu barbeiro de preferência.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {barbeiros.map((barbeiro) => (
            <button
              key={barbeiro.id}
              onClick={() => setBarbeiroSelecionado(barbeiro)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all flex flex-col items-center justify-center gap-2 h-full",
                barbeiroSelecionado?.id === barbeiro.id
                  ? "border-primary ring-2 ring-primary"
                  : "hover:bg-muted"
              )}
            >
              <Avatar className="h-16 w-16">
                <AvatarImage src={barbeiro.avatarUrl} alt={barbeiro.nome} />
                <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mt-2">{barbeiro.nome}</h3>
              <Badge variant="secondary">{barbeiro.experiencia}</Badge>
              <p className="text-xs text-muted-foreground text-center mt-1">{barbeiro.disponibilidade}</p>
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={passoAnterior}>
            Voltar
          </Button>
          <Button onClick={proximoPasso} disabled={!barbeiroSelecionado}>
            Próximo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassoBarbeiro;