import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft, HelpCircle, ShieldCheck, Clock, Star } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Básico",
    price: 49,
    features: [
      "2 cortes por mês",
      "Agendamento padrão",
      "Desconto de 10%",
    ],
    isPopular: false,
  },
  {
    name: "Premium",
    price: 89,
    features: [
      "Cortes ilimitados",
      "Prioridade no agendamento",
      "Desconto de 20%",
      "Barba grátis",
    ],
    isPopular: true,
  },
  {
    name: "VIP",
    price: 149,
    features: [
      "Tudo do Premium",
      "Atendimento domiciliar",
      "Produtos premium",
      "Consultor de estilo",
    ],
    isPopular: false,
  },
];

const Planos = () => {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="p-4 pb-24">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold font-beatford">Planos Premium</h1>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-6 w-6" />
          </Button>
        </header>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-beatford tracking-tight">Escolha seu Plano</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Desfrute de benefícios exclusivos e experiência premium
          </p>
        </div>

        {/* Plans Grid */}
        <div className="space-y-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
              "bg-muted/50 border-border/80 relative overflow-hidden transition-all",
              plan.isPopular && "border-2 border-primary shadow-lg shadow-primary/10"
            )}>
              {plan.isPopular && (
                <Badge className="absolute top-4 right-4 font-beatford">MAIS POPULAR</Badge>
              )}
              <CardHeader>
                <CardTitle className="font-beatford text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className={cn("w-full font-beatford", !plan.isPopular && "bg-secondary hover:bg-secondary/80")}>
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 space-y-4">
            <p className="text-xs text-muted-foreground">
                Cancele a qualquer momento. Sem taxas ocultas.
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>24/7</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4" />
                    <span>Premium</span>
                </div>
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Planos;