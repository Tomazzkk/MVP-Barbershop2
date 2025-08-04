import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedPage from "@/components/AnimatedPage";
import { LogOut } from "lucide-react";
import { BackButton } from "@/components/BackButton";

const Configuracoes = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 max-w-2xl">
        <BackButton />
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-beatford">Configurações</h1>
          <p className="text-muted-foreground">Gerencie suas preferências e sua conta.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-beatford">Conta</CardTitle>
            <CardDescription>
              Opções relacionadas à sua conta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="w-full font-beatford">
              <LogOut className="mr-2 h-4 w-4" />
              Sair (Logout)
            </Button>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Configuracoes;