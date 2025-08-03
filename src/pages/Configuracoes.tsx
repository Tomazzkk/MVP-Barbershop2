import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import AnimatedPage from "@/components/AnimatedPage";
import { LogOut, Palette } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Configuracoes = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">Gerencie suas preferências e sua conta.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              Aparência
            </CardTitle>
            <CardDescription>
              Personalize a aparência do aplicativo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="font-medium">Tema</p>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>Conta</CardTitle>
            <CardDescription>
              Opções relacionadas à sua conta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="w-full">
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