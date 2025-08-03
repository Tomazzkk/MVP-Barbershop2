import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Servico, Barbeiro } from "@/pages/Agendamento";
import { format } from "date-fns";
import { showSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

interface PassoResumoProps {
  servicos: Servico[];
  barbeiro: Barbeiro | null;
  data: Date | undefined;
  horario: string | null;
  passoAnterior: () => void;
}

const PassoResumo = ({ servicos, barbeiro, data, horario, passoAnterior }: PassoResumoProps) => {
  const navigate = useNavigate();
  const totalPreco = servicos.reduce((total, servico) => total + servico.preco, 0);

  const handleConfirmar = () => {
    // Em uma aplicação real, aqui seria feita a chamada para a API.
    showSuccess("Agendamento confirmado com sucesso!");
    navigate("/historico");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-beatford">4. Confirmação</CardTitle>
        <CardDescription>Confira os detalhes antes de confirmar.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Serviços Selecionados:</h4>
          {servicos.length > 0 ? (
            <ul className="space-y-1">
              {servicos.map(s => (
                <li key={s.id} className="flex justify-between">
                  <span>{s.nome}</span>
                  <span>R$ {s.preco.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum serviço selecionado.</p>
          )}
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Barbeiro:</span>
          <strong className="text-right">{barbeiro?.nome || "Sem preferência"}</strong>
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
        <Separator />
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>R$ {totalPreco.toFixed(2)}</span>
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