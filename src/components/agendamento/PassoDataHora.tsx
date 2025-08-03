import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";

interface PassoDataHoraProps {
  horariosDisponiveis: string[];
  dataSelecionada: Date | undefined;
  setDataSelecionada: (date: Date | undefined) => void;
  horarioSelecionado: string | null;
  setHorarioSelecionado: (horario: string) => void;
  proximoPasso: () => void;
  passoAnterior: () => void;
}

const PassoDataHora = ({
  horariosDisponiveis,
  dataSelecionada,
  setDataSelecionada,
  horarioSelecionado,
  setHorarioSelecionado,
  proximoPasso,
  passoAnterior,
}: PassoDataHoraProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>3. Escolha a data e hora</CardTitle>
        <CardDescription>Selecione o melhor dia e horário para você.</CardDescription>
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
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 content-start">
            {horariosDisponiveis.map((horario) => (
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