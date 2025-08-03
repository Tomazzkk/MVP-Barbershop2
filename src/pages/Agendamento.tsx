import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PassoServico from "@/components/agendamento/PassoServico";
import PassoBarbeiroEHorario from "@/components/agendamento/PassoBarbeiroEHorario";
import PassoResumo from "@/components/agendamento/PassoResumo";
import PassoConcluido from "@/components/agendamento/PassoConcluido";
import { BackButton } from "@/components/BackButton";
import ServicosSelecionadosBottomNav from "@/components/agendamento/ServicosSelecionadosBottomNav";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const servicos = [
  { id: "combo", nome: "Combo Cabelo & Barba", descricao: "Pacote completo para um visual impecável.", preco: 120.00, duracao: "80 min" },
  { id: "sobrancelha", nome: "Sobrancelha", descricao: "Nesse serviço é feita a limpeza da sobrancelha com pinça.", preco: 30.00, duracao: "20 min" },
  { id: "cabelo", nome: "Cabelo", descricao: "Oferecemos 12 cortes exclusivos, ajustáveis ao seu gosto por barbeiros especializados na escolha do estilo ideal.", preco: 70.00, duracao: "40 min" },
  { id: "depilacao-nariz", nome: "Depilação de Nariz", descricao: "Depilação feita com cera.", preco: 25.00, duracao: "10 min" },
  { id: "barba", nome: "Barba", descricao: "Barbear tradicional com lâminas descartáveis, incluindo preparação prévia da pele, uso de toalhas quentes, aplicação de creme ou gel, e cuidados pós-barba.", preco: 60.00, duracao: "40 min" },
  { id: "depilacao-orelha", nome: "Depilação de Orelha", descricao: "Depilação feita com cera.", preco: 25.00, duracao: "10 min" },
  { id: "acabamento-barba", nome: "Acabamento de Barba", descricao: "Ajuste e contorno da barba.", preco: 20.00, duracao: "15 min" },
  { id: "corte-infantil", nome: "Corte Infantil", descricao: "Corte especial para crianças.", preco: 50.00, duracao: "30 min" },
  { id: "freestyle", nome: "Freestyle", descricao: "Desenhos e estilos personalizados no cabelo.", preco: 90.00, duracao: "60 min" },
  { id: "hidratacao", nome: "Hidratação", descricao: "Tratamento para revitalizar os fios.", preco: 40.00, duracao: "20 min" },
  { id: "acabamento-cabelo", nome: "Acabamento de Cabelo", descricao: "Ajuste e contorno do corte.", preco: 20.00, duracao: "15 min" },
  { id: "platinado", nome: "Platinado com Corte", descricao: "Descoloração global para o tom platinado, inclui o corte.", preco: 250.00, duracao: "180 min" },
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

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Agendamento = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [servicosSelecionados, setServicosSelecionados] = useState<Servico[]>([]);
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<Barbeiro | null>(null);
  const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.servicoId) {
      const servico = servicos.find(s => s.id === location.state.servicoId);
      if (servico) setServicosSelecionados([servico]);
      
      if (location.state.barbeiroId) {
        const barbeiro = barbeiros.find(b => b.id === location.state.barbeiroId);
        if (barbeiro) setBarbeiroSelecionado(barbeiro);
      }
      setStep(2); // Pula para a seleção de barbeiro e horário
    }
  }, [location.state]);

  const proximoPasso = () => setStep((prev) => Math.min(prev + 1, 4));
  const passoAnterior = () => setStep((prev) => Math.max(prev - 1, 1));

  const stepTitles = [
    "Serviços",
    "Profissional e Horário",
    "Confirmação",
    "Agendamento Concluído"
  ];

  const stepDescriptions = [
    "Garanta seu desconto em combos com 2 ou mais serviços.",
    "Selecione seu profissional, a data e o horário.",
    "Revise os detalhes e confirme seu horário.",
    "Tudo certo! Seu horário está garantido."
  ];

  const progressPercentage = (step / 3) * 100;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PassoServico
            servicos={servicos}
            servicosSelecionados={servicosSelecionados}
            setServicosSelecionados={setServicosSelecionados}
          />
        );
      case 2:
        return (
          <PassoBarbeiroEHorario
            barbeiros={barbeiros}
            barbeiroSelecionado={barbeiroSelecionado}
            setBarbeiroSelecionado={setBarbeiroSelecionado}
            horariosDisponiveis={horariosDisponiveis}
            dataSelecionada={dataSelecionada}
            setDataSelecionada={setDataSelecionada}
            horarioSelecionado={horarioSelecionado}
            setHorarioSelecionado={setHorarioSelecionado}
            proximoPasso={proximoPasso}
            passoAnterior={passoAnterior}
          />
        );
      case 3:
        return (
          <PassoResumo
            servicos={servicosSelecionados}
            barbeiro={barbeiroSelecionado}
            data={dataSelecionada}
            horario={horarioSelecionado}
            passoAnterior={passoAnterior}
            proximoPasso={proximoPasso}
          />
        );
      case 4:
        return <PassoConcluido />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <BackButton />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 font-beatford">{stepTitles[step - 1]}</h1>
          <p className="text-muted-foreground">{stepDescriptions[step - 1]}</p>
        </div>
        
        {step <= 3 && (
          <div className="mb-8 px-4">
            <div className="w-full bg-background border rounded-full h-4 overflow-hidden">
              <div 
                className="bg-primary h-full animate-stripes bg-[linear-gradient(45deg,rgba(0,0,0,.15)_25%,transparent_25%,transparent_50%,rgba(0,0,0,.15)_50%,rgba(0,0,0,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Passo {step} de 3
            </p>
          </div>
        )}

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {step === 1 && (
        <ServicosSelecionadosBottomNav 
          servicosSelecionados={servicosSelecionados}
          proximoPasso={proximoPasso}
        />
      )}
    </>
  );
};

export default Agendamento;