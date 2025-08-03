import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Historico = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Histórico de Agendamentos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Meus Agendamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Uma lista com o histórico de agendamentos virá aqui.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Historico;