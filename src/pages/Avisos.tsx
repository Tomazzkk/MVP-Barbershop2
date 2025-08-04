import AnimatedPage from "@/components/AnimatedPage";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const Avisos = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 max-w-2xl">
        <BackButton />
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-beatford">Avisos</h1>
          <p className="text-muted-foreground">Suas notificações e avisos importantes.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-beatford">Notificações</CardTitle>
            <CardDescription>
              Nenhuma notificação nova no momento.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center text-center text-muted-foreground h-48">
            <Bell className="h-12 w-12 mb-4" />
            <p>Você está em dia!</p>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Avisos;