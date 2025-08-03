import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { addDays, format, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PassoHorarioProps {
  horariosDisponiveis: string[];
  dataSelecionada: Date | undefined;
  setDataSelecionada: (date: Date | undefined) => void;
  horarioSelecionado: string | null;
  setHorarioSelecionado: (horario: string) => void;
  proximoPasso: () => void;
  passoAnterior: () => void;
}

const PassoHorario = ({
  horariosDisponiveis,
  dataSelecionada,
  setDataSelecionada,
  horarioSelecionado,
  setHorarioSelecionado,
  proximoPasso,
  passoAnterior,
}: PassoHorarioProps) => {
  const dates = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => addDays(today, i));
  }, []);

  const horariosManha = useMemo(() => horariosDisponiveis.filter(h => parseInt(h.split(':')[0]) < 12), [horariosDisponiveis]);
  const horariosTarde = useMemo(() => horariosDisponiveis.filter(h => parseInt(h.split(':')[0]) >= 12), [horariosDisponiveis]);

  return (
    <div className="space-y-8">
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

export default PassoHorario;