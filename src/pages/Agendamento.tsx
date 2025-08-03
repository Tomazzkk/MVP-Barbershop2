import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PassoServico from "@/components/agendamento/PassoServico";
import PassoBarbeiro from "@/components/agendamento/PassoBarbeiro";
import PassoDataHora from "@/components/agendamento/PassoDataHora";
import PassoResumo from "@/components/agendamento/PassoResumo";
import { Progress } from "@/components/ui/progress";
import AnimatedPage from "@/components/AnimatedPage";
import { BackButton } from "@/components/BackButton";

// Mock Data
const servicos = [
  { id: "corte", nome: "Corte de Cabelo", descricao: "Estilo personalizado para o seu cabelo.", preco: 40.00, duracao: "30 min" },
  { id: "barba", nome: "Barba", descricao: "Modelagem e cuidados para sua barba.", preco: 30.00, duracao: "25 min" },
  { id: "combo", nome: "Combo (Cabelo + Barba)", descricao: "Pacote completo para um visual impecável.", preco: 65.00, duracao: "55 min" },
];

const barbeiros = [
  { id: "joao", nome: "João Silva", avatarUrl: "https://i.pravatar.cc/150?u=joao", iniciais: "JS", experiencia: "Sênior", disponibilidade: "Horários abertos hoje" },
  { id: "carlos", nome: "Carlos Souza", avatarUrl: "https://i.pravatar.cc/150?u=carlos", iniciais: "CS", experiencia: "Pleno", disponibilidade: "Agenda a partir de amanhã" },
  { id: "pedro", nome: "Pedro Martins", avatarUrl: "https://i.pravatar.cc/150?u=pedro", iniciais: "PM", experiencia: "Júnior", disponibilidade: "Horários abertos hoje" },
];

const horariosDisponiveis = ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "16:00"];

// Type definitions
export type Servico = (typeof servicos)[0];
export type Barbeiro = (typeof barbeiros)[0];

const Agendamento = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<Barbeiro | null>(null);
  const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.servicoId && location.state?.barbeiroId) {
      const servico = servicos.find(s => s.id === location.state.servicoId);
      const barbeiro = barbeiros.find(b => b.id === location.state.barbeiroId);

      if (servico) setServicoSelecionado(servico);
      if (barbeiro) setBarbeiroSelecionado(barbeiro);

      // Pula para a etapa de seleção de data/hora
      setStep(3);
    }
  }, [location.state]);

  const proximoPasso = () => setStep((prev) => Math.min(prev + 1, 4));
  const passoAnterior = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / 4) * 100;

  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <BackButton />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 font-beatford">Faça seu Agendamento</h1>
          <p className="text-muted-foreground">Siga os passos para garantir seu horário.</p>
        </div>
        
        <div className="mb-8 px-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground text-center mt-2">Passo {step} de 4</p>
        </div>

        <div className="min-h-[400px]">
          {step === 1 && (
            <PassoServico
              servicos={servicos}
              servicoSelecionado={servicoSelecionado}
              setServicoSelecionado={setServicoSelecionado}
              proximoPasso={proximoPasso}
            />
          )}
          {step === 2 && (
            <PassoBarbeiro
              barbeiros={barbeiros}
              barbeiroSelecionado={barbeiroSelecionado}
              setBarbeiroSelecionado={setBarbeiroSelecionado}
              proximoPasso={proximoPasso}
              passoAnterior={passoAnterior}
            />
          )}
          {step === 3 && (
            <PassoDataHora
              horariosDisponiveis={horariosDisponiveis}
              dataSelecionada={dataSelecionada}
              setDataSelecionada={setDataSelecionada}
              horarioSelecionado={horarioSelecionado}
              setHorarioSelecionado={setHorarioSelecionado}
              proximoPasso={proximoPasso}
              passoAnterior={passoAnterior}
            />
          )}
          {step === 4 && (
            <PassoResumo
              servico={servicoSelecionado}
              barbeiro={barbeiroSelecionado}
              data={dataSelecionada}
              horario={horarioSelecionado}
              passoAnterior={passoAnterior}
            />
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Agendamento;