import { Barbeiro } from "@/pages/Agendamento";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Calendar as CalendarIcon, Edit, Star, Scissors, Clock, CheckCircle2, Shuffle, Zap, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useMemo, useState } from "react";

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
}: PassoBarbeiroEHorarioProps) => {
  
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const formattedDate = useMemo(() => {
    if (!dataSelecionada) return { day: '', month: '', year: '', weekday: '' };
    const date = new Date(dataSelecionada);
    // Adicionando verificação para data inválida
    if (isNaN(date.getTime())) {
        return { day: '', month: '', year: '', weekday: '' };
    }
    return {
      day: format(date, "d"),
      month: format(date, "MMM yyyy", { locale: ptBR }),
      weekday: format(date, "EEE", { locale: ptBR }).toUpperCase(),
    };
  }, [dataSelecionada]);

  const horariosManha = useMemo(() => horariosDisponiveis.filter(h => parseInt(h.split(':')[0]) < 12), [horariosDisponiveis]);
  const horariosTarde = useMemo(() => horariosDisponiveis.filter(h => parseInt(h.split(':')[0]) >= 12), [horariosDisponiveis]);

  const handleDateTimeSave = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="space-y-8 pb-24">
      {/* Data e Horário Card */}
      <Card className="bg-muted/50">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-lg font-semibold font-beatford">Data e Horário</CardTitle>
          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-background/50 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">Data selecionada</p>
              <p className="text-sm font-bold">{formattedDate.weekday}</p>
              <p className="text-3xl font-bold">{formattedDate.day}</p>
              <p className="text-sm font-bold uppercase">{formattedDate.month}</p>
            </div>
            <div className="text-center bg-background/50 p-3 rounded-lg flex flex-col justify-center">
              <p className="text-xs text-muted-foreground">Horário selecionado</p>
              <p className="text-4xl font-bold">{horarioSelecionado || "--:--"}</p>
              <p className="text-sm text-primary">{horarioSelecionado ? "Disponível" : "Selecione"}</p>
            </div>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Alterar data e horário
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-2xl max-h-[90vh] flex flex-col">
              <SheetHeader>
                <SheetTitle>Selecione a data e o horário</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-6 overflow-y-auto flex-1">
                <Calendar
                  mode="single"
                  selected={dataSelecionada}
                  onSelect={setDataSelecionada}
                  className="rounded-md border p-0 mx-auto"
                  locale={ptBR}
                />
                <div className="space-y-4">
                  {horariosManha.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2 font-beatford">Manhã</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {horariosManha.map(horario => (
                          <Button key={horario} variant={horarioSelecionado === horario ? "default" : "outline"} onClick={() => setHorarioSelecionado(horario)}>
                            {horario}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  {horariosTarde.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2 font-beatford">Tarde</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {horariosTarde.map(horario => (
                          <Button key={horario} variant={horarioSelecionado === horario ? "default" : "outline"} onClick={() => setHorarioSelecionado(horario)}>
                            {horario}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Button onClick={handleDateTimeSave} className="w-full mt-4" size="lg">Salvar</Button>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      {/* Barbeiros Disponíveis */}
      <div>
        <h3 className="text-lg font-semibold font-beatford mb-1">Barbeiros disponíveis</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Para {dataSelecionada ? format(dataSelecionada, "dd MMM", { locale: ptBR }) : ''} às {horarioSelecionado || '...'}
        </p>
        <div className="space-y-3">
          {barbeiros.map((barbeiro) => {
            const isSelected = barbeiroSelecionado?.id === barbeiro.id;
            return (
              <Card
                key={barbeiro.id}
                onClick={() => setBarbeiroSelecionado(barbeiro)}
                className={cn(
                  "p-3 cursor-pointer transition-all bg-muted/50",
                  isSelected && "border-primary ring-2 ring-primary"
                )}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={barbeiro.avatarUrl} />
                    <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-bold">{barbeiro.nome}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 text-primary fill-primary" />
                      <span className="text-white font-semibold">{barbeiro.rating.toFixed(1)}</span>
                      <span>• {barbeiro.cortes} cortes</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Scissors className="h-3 w-3" />
                        <span>{barbeiro.especialidade}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        <span>{barbeiro.experienciaAnos} anos exp.</span>
                      </div>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="h-6 w-6 text-primary" />}
                </div>
              </Card>
            );
          })}
          {/* Qualquer disponível */}
          <Card
            onClick={() => setBarbeiroSelecionado(null)}
            className={cn(
              "p-3 cursor-pointer transition-all bg-muted/50",
              barbeiroSelecionado === null && "border-primary ring-2 ring-primary"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-background/50 rounded-full flex items-center justify-center">
                <Shuffle className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Qualquer disponível</h4>
                <p className="text-xs text-muted-foreground">Primeiro barbeiro livre no horário selecionado</p>
                <Badge variant="secondary" className="mt-1">
                  <Zap className="h-3 w-3 mr-1" />
                  Mais rápido
                </Badge>
              </div>
              {barbeiroSelecionado === null ? (
                <CheckCircle2 className="h-6 w-6 text-primary" />
              ) : (
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t border-border z-40">
        <Button 
          onClick={proximoPasso} 
          disabled={!dataSelecionada || !horarioSelecionado} 
          className="w-full font-beatford" 
          size="lg"
        >
          Continuar para Resumo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PassoBarbeiroEHorario;