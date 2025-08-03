import { Barbeiro } from "@/pages/Agendamento";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useMemo } from "react";
import { addDays, format, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PassoBarbeiroEHorarioProps {
  barbeiros: Barbeiro[];
  barbeiroSelecionado: Barbeiro | null;
  setBarbeiroSelecionado: (barbeiro: Barbeiro | null) => void;
  horariosDisponiveis: string[];
  dataSelecionada: Date | undefined;
  setDataSelecionada: (date: Date | undefined) => void;
  horarioSelecionado: string | null;
  setHorarioSelecionado: (horario: string) => void;
  proximoPasso: () => void;
  passoAnterior: () => void;
}

const PassoBarbeiroEHorario = ({
  barbeiros,
  barbeiroSelecionado,
  setBarbeiroSelecionado,
  horariosDisponiveis,
  dataSelecionada,
  setDataSelecionada,
  horarioSelecionado,
  setHorarioSelecionado,
  proximoPasso,
  passoAnterior,
}: PassoBarbeiroEHorarioProps) => {
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

  const dates = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => addDays(today, i));
  }, []);

  const horariosManha = useMemo(() => horariosDisponiveis.filter(h => parseInt(h.split(':')[0]) < 12), [horariosDisponiveis]);
  const horariosTarde = useMemo(() => horariosDisponiveis.filter(h => parseInt(h.split(':')[0]) >= 12), [horariosDisponiveis]);

  return (
    <div className="space-y-8">
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

      {/* Seleção de Data */}
      <div>
        <h2 className="text-lg font-semibold font-beatford mb-3 capitalize">{format(dataSelecionada || new Date(), "MMMM", { locale: ptBR })}</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
          {dates.map(date => (
            <button
              key={date.toISOString()}
              onClick={() => setDataSelecionada(date)}
              className={cn(
                "flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-lg border transition-colors",
                isSameDay(date, dataSelecionada || new Date())
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 hover:bg-muted"
              )}
            >
              <span className="text-2xl font-bold">{format(date, "d")}</span>
              <span className="text-xs capitalize">{format(date, "eee", { locale: ptBR })}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Seleção de Horário */}
      <div className="space-y-6">
        {horariosManha.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3 font-beatford">Manhã</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {horariosManha.map(horario => (
                <Button
                  key={horario}
                  variant={horarioSelecionado === horario ? "default" : "outline"}
                  onClick={() => setHorarioSelecionado(horario)}
                  className="font-beatford"
                >
                  {horario}
                </Button>
              ))}
            </div>
          </div>
        )}
        {horariosTarde.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3 font-beatford">Tarde</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {horariosTarde.map(horario => (
                <Button
                  key={horario}
                  variant={horarioSelecionado === horario ? "default" : "outline"}
                  onClick={() => setHorarioSelecionado(horario)}
                  className="font-beatford"
                >
                  {horario}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navegação */}
      <div className="flex justify-between mt-8 gap-4">
        <Button variant="outline" onClick={passoAnterior} className="w-full md:w-auto font-beatford">
          Voltar
        </Button>
        <Button onClick={proximoPasso} disabled={!dataSelecionada || !horarioSelecionado} className="w-full md:w-auto font-beatford">
          {horarioSelecionado ? 'Próximo' : 'Selecione um horário'}
        </Button>
      </div>
    </div>
  );
};

export default PassoBarbeiroEHorario;