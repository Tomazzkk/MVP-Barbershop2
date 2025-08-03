import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { Star } from "lucide-react";
import { useMemo } from "react";

interface PassoDataHoraProps {
  horariosDisponiveis: string[];
  dataSelecionada: Date | undefined;
  setDataSelecionada: (date: Date | undefined) => void;
  horarioSelecionado: string | null;
  setHorarioSelecionado: (horario: string) => void;
  proximoPasso: () => void;
  passoAnterior: () => void;
}

// Mock da lógica de IA para sugestão de horários
const getSugestoes = (horarios: string[]): string[] => {
  // Em uma aplicação real, isso usaria o histórico do cliente, a preferência do barbeiro e dados de horários de pico.
  // Por enquanto, vamos sugerir os 2 primeiros horários disponíveis que não sejam em horário de almoço.
  const nonPeak = horarios.filter(h => !h.startsWith("12:") && !h.startsWith("13:"));
  return nonPeak.slice(0, 2);
};

const PassoDataHora = ({
  horariosDisponiveis,
  dataSelecionada,
  setDataSelecionada,
  horarioSelecionado,
  setHorarioSelecionado,
  proximoPasso,
  passoAnterior,
}: PassoDataHoraProps) => {
  const sugestoes = useMemo(() => getSugestoes(horariosDisponiveis), [horariosDisponiveis]);
  const outrosHorarios = useMemo(() => horariosDisponiveis.filter(h => !sugestoes.includes(h)), [horariosDisponiveis, sugestoes]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>3. Escolha a data e hora</CardTitle>
        <CardDescription>Selecione o melhor dia e horário para você. Nossas sugestões inteligentes estão em destaque.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={dataSelecionada}
              onSelect={setDataSelecionada}
              className="rounded-md border"
              locale={ptBR}
              disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
            />
          </div>
          <div className="space-y-6">
            {sugestoes.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                  <Star className="h-5 w-5" />
                  Recomendado para você
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {sugestoes.map((horario) => (
                    <Button
                      key={`sugestao-${horario}`}
                      variant={horarioSelecionado === horario ? "default" : "outline"}
                      className={horarioSelecionado !== horario ? "border-primary text-primary hover:bg-primary/10" : ""}
                      onClick={() => setHorarioSelecionado(horario)}
                    >
                      {horario}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">Outros horários</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 content-start">
                {outrosHorarios.map((horario) => (
                  <Button
                    key={horario}
                    variant={horarioSelecionado === horario ? "default" : "outline"}
                    onClick={() => setHorarioSelecionado(horario)}
                  >
                    {horario}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={passoAnterior}>
            Voltar
          </Button>
          <Button onClick={proximoPasso} disabled={!dataSelecionada || !horarioSelecionado}>
            Próximo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassoDataHora;