import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Perfil = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>
      <Card>
        <CardHeader>
          <CardTitle>Informações do Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Detalhes do perfil do usuário virão aqui.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Perfil;