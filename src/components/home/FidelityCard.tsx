import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Gift } from "lucide-react";

export const FidelityCard = () => {
  const totalCuts = 5;
  const completedCuts = 3;

  return (
    <section className="px-4">
      <Link to="/pontos">
        <Card className="bg-gradient-to-br from-primary to-yellow-400 text-primary-foreground relative overflow-hidden">
          <CardContent className="p-6 space-y-3">
            <Gift className="absolute top-4 right-4 h-6 w-6 text-primary-foreground/50" />
            <div>
              <h3 className="text-lg font-bold font-beatford">Cartão Fidelidade</h3>
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalCuts }).map((_, index) => (
                <div
                  key={index}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    index < completedCuts ? 'bg-black/80' : 'bg-black/20 border-2 border-dashed border-white/50'
                  }`}
                >
                  {index < completedCuts && <Check className="h-5 w-5 text-primary" />}
                </div>
              ))}
            </div>
            <p className="font-semibold text-sm">{completedCuts}/{totalCuts} cortes - Próximo grátis!</p>
          </CardContent>
        </Card>
      </Link>
    </section>
  );
};