import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";
import { useEffect } from "react";

const PassoConcluido = () => {
  const navigate = useNavigate();

  useEffect(() => {
    showSuccess("Agendamento confirmado com sucesso!");
  }, []);

  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto bg-green-100 dark:bg-green-900/50 rounded-full h-16 w-16 flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle className="text-2xl font-beatford">Agendamento Concluído!</CardTitle>
        <CardDescription>
          Seu horário foi confirmado. Você pode ver os detalhes na seção "Minha Agenda".
        </CardDescription>
        <div className="flex gap-4 pt-4">
          <Button variant="outline" onClick={() => navigate("/")} className="w-full font-beatford">
            Voltar ao Início
          </Button>
          <Button onClick={() => navigate("/historico")} className="w-full font-beatford">
            Ver Meus Agendamentos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassoConcluido;