import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock Data - Em uma aplicação real, viria de uma API
const servicos = [
  { id: "corte", nome: "Corte de Cabelo", preco: 40.00, duracao: "30 min" },
  { id: "barba", nome: "Barba", preco: 30.00, duracao: "25 min" },
  { id: "combo", nome: "Combo (Cabelo + Barba)", preco: 65.00, duracao: "55 min" },
];

const barbeiros = [
  { id: "joao", nome: "João Silva", avatarUrl: "https://i.pravatar.cc/150?u=joao", iniciais: "JS" },
  { id: "carlos", nome: "Carlos Souza", avatarUrl: "https://i.pravatar.cc/150?u=carlos", iniciais: "CS" },
  { id: "pedro", nome: "Pedro Martins", avatarUrl: "https://i.pravatar.cc/150?u=pedro", iniciais: "PM" },
];

const horariosDisponiveis = ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "16:00"];

const Agendamento = () => {
  const [servicoSelecionado, setServicoSelecionado] = useState<(typeof servicos)[0] | null>(null);
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<(typeof barbeiros)[0] | null>(null);
  const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  const todosOsPassosCompletos = servicoSelecionado && barbeiroSelecionado && dataSelecionada && horarioSelecionado;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Passo 1: Serviços */}
          <Card>
            <CardHeader>
              <CardTitle>1. Escolha o serviço</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {servicos.map((servico) => (
                <button
                  key={servico.id}
                  onClick={() => setServicoSelecionado(servico)}
                  className={cn(
                    "p-4 rounded-lg border text-left transition-all",
                    servicoSelecionado?.id === servico.id
                      ? "border-primary ring-2 ring-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <h3 className="font-semibold">{servico.nome}</h3>
                  <p className="text-sm text-muted-foreground">{servico.duracao}</p>
                  <p className="font-bold mt-2">R$ {servico.preco.toFixed(2)}</p>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Passo 2: Barbeiros */}
          <Card>
            <CardHeader>
              <CardTitle>2. Escolha o profissional</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {barbeiros.map((barbeiro) => (
                <button
                  key={barbeiro.id}
                  onClick={() => setBarbeiroSelecionado(barbeiro)}
                  className={cn(
                    "p-4 rounded-lg border text-left transition-all flex flex-col items-center justify-center gap-2",
                    barbeiroSelecionado?.id === barbeiro.id
                      ? "border-primary ring-2 ring-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <Avatar>
                    <AvatarImage src={barbeiro.avatarUrl} alt={barbeiro.nome} />
                    <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{barbeiro.nome}</h3>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Passo 3: Data e Hora */}
          <Card>
            <CardHeader>
              <CardTitle>3. Escolha a data e hora</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
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
            </CardContent>
          </Card>
        </div>

        {/* Resumo */}
        <div className="lg:sticky top-24 self-start">
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Agendamento</CardTitle>
              <CardDescription>Confira os detalhes antes de confirmar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Serviço:</span>
                <strong className="text-right">{servicoSelecionado?.nome || "Nenhum"}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Barbeiro:</span>
                <strong className="text-right">{barbeiroSelecionado?.nome || "Nenhum"}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Data:</span>
                <strong className="text-right">
                  {dataSelecionada ? format(dataSelecionada, "dd/MM/yyyy") : "Nenhuma"}
                </strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Horário:</span>
                <strong className="text-right">{horarioSelecionado || "Nenhum"}</strong>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>R$ {servicoSelecionado?.preco.toFixed(2) || "0.00"}</span>
              </div>
              <Button className="w-full" size="lg" disabled={!todosOsPassosCompletos}>
                Confirmar Agendamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;