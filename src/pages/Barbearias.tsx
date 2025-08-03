import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import { BackButton } from "@/components/BackButton";

const barbearias = [
    { id: 1, nome: "BarberPro - Centro", endereco: "Rua Principal, 123, Centro" },
    { id: 2, nome: "BarberPro - Bairro Sul", endereco: "Avenida Sul, 456, Bairro Sul" },
    { id: 3, nome: "BarberPro - Shopping Plaza", endereco: "Shopping Plaza, Loja 15" },
];

const Barbearias = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8">
        <BackButton />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Nossas Unidades</h1>
          <p className="text-muted-foreground">Encontre a barbearia mais próxima de você.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {barbearias.map((unidade) => (
            <Card key={unidade.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {unidade.nome}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{unidade.endereco}</p>
                <Button variant="outline" className="w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Ver no mapa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Barbearias;