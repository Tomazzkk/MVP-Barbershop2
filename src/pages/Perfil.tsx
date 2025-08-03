import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { History, Star, Award, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import { BackButton } from "@/components/BackButton";

const user = {
  name: "Carlos Andrade",
  email: "carlos.andrade@example.com",
  avatarUrl: "https://i.pravatar.cc/150?u=carlosandrade",
  initials: "CA",
  plan: "Premium",
  points: 125,
};

const recentAppointments = [
  { id: 1, service: "Combo (Cabelo + Barba)", date: "15 de Julho, 2024", barber: "João Silva", evaluated: false },
  { id: 2, service: "Corte de Cabelo", date: "20 de Junho, 2024", barber: "Pedro Martins", evaluated: true },
];

const Perfil = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 space-y-6">
        <BackButton />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Meu Perfil</h1>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <Card className="self-start">
              <CardHeader className="items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                  <CardTitle className="text-lg">Plano Atual</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                  <Badge variant={user.plan === 'Premium' ? 'default' : 'secondary'} className="text-lg py-1 px-4">{user.plan}</Badge>
                  <Button asChild className="w-full">
                      <Link to="/planos">Gerenciar Assinatura</Link>
                  </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Programa de Fidelidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Saldo atual</p>
                  <p className="text-2xl font-bold text-primary">{user.points} pontos</p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/pontos">Ver Recompensas e Histórico</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  Histórico Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentAppointments.map(appt => (
                    <li key={appt.id} className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="font-semibold">{appt.service}</p>
                        <p className="text-sm text-muted-foreground">{appt.date} com {appt.barber}</p>
                      </div>
                      {appt.evaluated ? (
                        <div className="flex items-center gap-1 text-sm text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span>Avaliado</span>
                        </div>
                      ) : (
                        <Button variant="outline" size="sm">
                          <Star className="mr-2 h-4 w-4" />
                          Avaliar
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link to="/historico">Ver todo o histórico</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Perfil;