import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Brush, Wind } from 'lucide-react';

const servicos = [
  {
    nome: "Corte de Cabelo",
    descricao: "Estilo moderno e clássico, adaptado para você.",
    icon: Scissors,
  },
  {
    nome: "Barba Terapia",
    descricao: "Cuidado completo para sua barba com toalhas quentes.",
    icon: Brush,
  },
  {
    nome: "Combo Completo",
    descricao: "Cabelo, barba e sobrancelha para um visual impecável.",
    icon: Wind,
  },
];

const NossosServicos = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Nossos Serviços" subtitle="Oferecemos o melhor para o seu estilo." />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card key={index} className="text-center h-full border-border/80 hover:border-primary/60 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <servico.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-beatford text-xl">{servico.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{servico.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossosServicos;