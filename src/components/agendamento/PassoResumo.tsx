import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Servico, Barbeiro } from "@/pages/Agendamento";
import { format } from "date-fns";
import { showSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

interface PassoResumoProps {
  servico: Servico | null;
  barbeiro: Barbeiro | null;
  data: Date | undefined;
  horario: string | null;
  passoAnterior: () => void;
}

const PassoResumo = ({ servico, barbeiro, data, horario, passoAnterior }: PassoResumoProps) => {
  const navigate = useNavigate();

  const handleConfirmar = () => {
    // Em uma aplicação real, aqui seria feita a chamada para a API.
    showSuccess("Agendamento confirmado com sucesso!");
    navigate("/historico");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-beatford">4. Resumo do Agendamento</CardTitle>
        <CardDescription>Confira os detalhes antes de confirmar.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Serviço:</span>
          <strong className="text-right">{servico?.nome || "Nenhum"}</strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Barbeiro:</span>
          <strong className="text-right">{barbeiro?.nome || "Nenhum"}</strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Data:</span>
          <strong className="text-right">
            {data ? format(data, "dd/MM/yyyy") : "Nenhuma"}
          </strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Horário:</span>
          <strong className="text-right">{horario || "Nenhum"}</strong>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>R$ {servico?.preco.toFixed(2) || "0.00"}</span>
        </div>
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={passoAnterior} className="font-beatford">
            Voltar
          </Button>
          <Button onClick={handleConfirmar} size="lg" className="font-beatford">
            Confirmar Agendamento
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassoResumo;