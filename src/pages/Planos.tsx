import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";

const Planos = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Nossos Planos</h1>
        <p className="text-center text-muted-foreground mb-8">Escolha o plano que melhor se adapta a você.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Gratuito</CardTitle>
              <p className="text-2xl font-bold">R$ 0<span className="text-sm font-normal">/mês</span></p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Agendamentos básicos</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Histórico de 1 mês</li>
              </ul>
              <Button variant="outline" className="w-full">Plano Atual</Button>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <p className="text-2xl font-bold">R$ 19,90<span className="text-sm font-normal">/mês</span></p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Agendamentos ilimitados</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Histórico completo</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Lembretes por e-mail</li>
              </ul>
              <Button className="w-full">Fazer Upgrade</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <p className="text-2xl font-bold">R$ 39,90<span className="text-sm font-normal">/mês</span></p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Todos os benefícios do Básico</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Descontos exclusivos</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Sugestões de horário com IA</li>
              </ul>
              <Button variant="outline" className="w-full">Fazer Upgrade</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Planos;