import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AnimatedPage from "@/components/AnimatedPage";
import { BackButton } from "@/components/BackButton";

const barbeiros = [
  { id: "joao", nome: "João Silva", avatarUrl: "https://i.pravatar.cc/150?u=joao", iniciais: "JS", especialidade: "Corte Clássico", experiencia: "Sênior" },
  { id: "carlos", nome: "Carlos Souza", avatarUrl: "https://i.pravatar.cc/150?u=carlos", iniciais: "CS", especialidade: "Barba e Bigode", experiencia: "Pleno" },
  { id: "pedro", nome: "Pedro Martins", avatarUrl: "https://i.pravatar.cc/150?u=pedro", iniciais: "PM", especialidade: "Corte Moderno", experiencia: "Júnior" },
];

const Profissionais = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8">
        <BackButton />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-beatford">Nossos Profissionais</h1>
          <p className="text-muted-foreground">Conheça a equipe que vai cuidar do seu estilo.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbeiros.map((barbeiro) => (
            <Card key={barbeiro.id} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Avatar className="h-24 w-24 mx-auto mb-4 border-2 border-primary">
                  <AvatarImage src={barbeiro.avatarUrl} alt={barbeiro.nome} />
                  <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-beatford">{barbeiro.nome}</CardTitle>
                <CardDescription>{barbeiro.especialidade}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{barbeiro.experiencia}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Profissionais;