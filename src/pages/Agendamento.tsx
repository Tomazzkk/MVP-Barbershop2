import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PassoServico from "@/components/agendamento/PassoServico";
import PassoBarbeiroEHorario from "@/components/agendamento/PassoBarbeiroEHorario";
import PassoResumo from "@/components/agendamento/PassoResumo";
import PassoConcluido from "@/components/agendamento/PassoConcluido";
import { BackButton } from "@/components/BackButton";
import ServicosSelecionadosBottomNav from "@/components/agendamento/ServicosSelecionadosBottomNav";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Wind, Droplets, Eye, Smile, Star, SprayCan, PersonStanding } from "lucide-react";
import React from "react";

// Mock Data
const servicos = [
    { id: "cabelo", nome: "Corte Masculino", descricao: "Corte moderno com acabamento profissional", preco: 35.00, duracao: "45 min", rating: 4.9, reviews: 120, icon: Scissors },
    { id: "barba", nome: "Barba Completa", descricao: "Aparar, desenhar e finalizar com toalha quente", preco: 25.00, duracao: "30 min", rating: 4.8, reviews: 89, icon: Wind },
    { id: "lavagem", nome: "Lavagem + Hidratação", descricao: "Limpeza profunda com produtos premium", preco: 15.00, duracao: "20 min", rating: 4.7, reviews: 65, icon: Droplets },
    { id: "sobrancelha", nome: "Sobrancelha", descricao: "Desenho e aparar sobrancelhas masculinas", preco: 12.00, duracao: "15 min", rating: 4.6, reviews: 43, icon: Eye },
    { id: "relaxamento", nome: "Relaxamento", descricao: "Massagem relaxante no couro cabeludo", preco: 10.00, duracao: "10 min", rating: 4.9, reviews: 78, icon: Smile },
    { id: "combo", nome: "Combo Cabelo & Barba", descricao: "Pacote completo para um visual impecável.", preco: 55.00, duracao: "80 min", rating: 5.0, reviews: 210, icon: Star },
    { id: "depilacao-nariz", nome: "Depilação de Nariz", descricao: "Depilação feita com cera.", preco: 25.00, duracao: "10 min", rating: 4.5, reviews: 30, icon: SprayCan },
    { id: "depilacao-orelha", nome: "Depilação de Orelha", descricao: "Depilação feita com cera.", preco: 25.00, duracao: "10 min", rating: 4.5, reviews: 25, icon: SprayCan },
    { id: "acabamento-barba", nome: "Acabamento de Barba", descricao: "Ajuste e contorno da barba.", preco: 20.00, duracao: "15 min", rating: 4.7, reviews: 50, icon: Scissors },
    { id: "corte-infantil", nome: "Corte Infantil", descricao: "Corte especial para crianças.", preco: 50.00, duracao: "30 min", rating: 4.9, reviews: 40, icon: PersonStanding },
    { id: "freestyle", nome: "Freestyle", descricao: "Desenhos e estilos personalizados no cabelo.", preco: 90.00, duracao: "60 min", rating: 4.8, reviews: 15, icon: Star },
    { id: "hidratacao", nome: "Hidratação", descricao: "Tratamento para revitalizar os fios.", preco: 40.00, duracao: "20 min", rating: 4.7, reviews: 60, icon: Droplets },
    { id: "acabamento-cabelo", nome: "Acabamento de Cabelo", descricao: "Ajuste e contorno do corte.", preco: 20.00, duracao: "15 min", rating: 4.6, reviews: 70, icon: Scissors },
    { id: "platinado", nome: "Platinado com Corte", descricao: "Descoloração global para o tom platinado, inclui o corte.", preco: 250.00, duracao: "180 min", rating: 5.0, reviews: 5, icon: Star },
];

const barbeiros = [
  { id: "joao", nome: "João Silva", avatarUrl: "https://i.pravatar.cc/150?u=joao", iniciais: "JS", rating: 5.0, cortes: 127, especialidade: "Fade & Degradê", experienciaAnos: 5 },
  { id: "carlos", nome: "Carlos Souza", avatarUrl: "https://i.pravatar.cc/150?u=carlos", iniciais: "CS", rating: 4.9, cortes: 89, especialidade: "Cortes clássicos", experienciaAnos: 3 },
  { id: "pedro", nome: "Pedro Martins", avatarUrl: "https://i.pravatar.cc/150?u=pedro", iniciais: "PM", rating: 4.7, cortes: 54, especialidade: "Barba & Bigode", experienciaAnos: 2 },
];

// Type definitions
export type Servico = (typeof servicos)[0];
export type Barbeiro = {
  id: string;
  nome: string;
  avatarUrl: string;
  iniciais: string;
  rating: number;
  cortes: number;
  especialidade: string;
  experienciaAnos: number;
};

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
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>("14:00");

  useEffect(() => {
    const state = location.state as { servicoId?: string; barbeiroId?: string } | null;

    // Handle rebooking from history page
    if (state?.servicoId) {
        const servico = servicos.find(s => s.id === state.servicoId);
        if (servico) setServicosSelecionados([servico]);
        
        if (state.barbeiroId) {
            const barbeiro = barbeiros.find(b => b.id === state.barbeiroId);
            if (barbeiro) setBarbeiroSelecionado(barbeiro);
            setStep(2); // Pula para a seleção de barbeiro e horário
        }
    } 
    // Handle pre-selecting a barber from another page (like home)
    else if (state?.barbeiroId) {
        const barbeiro = barbeiros.find(b => b.id === state.barbeiroId);
        if (barbeiro) setBarbeiroSelecionado(barbeiro);
    }
  }, [location.state]);

  const proximoPasso = () => setStep((prev) => Math.min(prev + 1, 4));
  const passoAnterior = () => setStep((prev) => Math.max(prev - 1, 1));

  const stepTitles = [
    "Serviços",
    "Escolha seu barbeiro",
    "Confirmação",
    "Agendamento Concluído"
  ];

  const stepDescriptions = [
    "Garanta seu desconto em combos com 2 ou mais serviços.",
    "Selecione o profissional que irá cuidar do seu visual",
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
            barbeiroSelecionado={barbeiroSelecionado}
          />
        );
      case 2:
        return (
          <PassoBarbeiroEHorario
            barbeiros={barbeiros}
            barbeiroSelecionado={barbeiroSelecionado}
            setBarbeiroSelecionado={setBarbeiroSelecionado}
            horariosDisponiveis={["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]}
            dataSelecionada={dataSelecionada}
            setDataSelecionada={setDataSelecionada}
            horarioSelecionado={horarioSelecionado}
            setHorarioSelecionado={setHorarioSelecionado}
            proximoPasso={proximoPasso}
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
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-500 ease-in-out"
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