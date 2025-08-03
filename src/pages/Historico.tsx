import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { Repeat } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";

// Mock data
const agendamentos = [
  { id: 1, servico: "Combo (Cabelo + Barba)", servicoId: "combo", barbeiro: "João Silva", barbeiroId: "joao", data: "15 de Julho, 2024", preco: "R$ 65,00" },
  { id: 2, servico: "Corte de Cabelo", servicoId: "corte", barbeiro: "Pedro Martins", barbeiroId: "pedro", data: "20 de Junho, 2024", preco: "R$ 40,00" },
  { id: 3, servico: "Barba", servicoId: "barba", barbeiro: "Carlos Souza", barbeiroId: "carlos", data: "25 de Maio, 2024", preco: "R$ 30,00" },
];

const Historico = () => {
  const navigate = useNavigate();

  const handleCortarNovamente = (agendamento: typeof agendamentos[0]) => {
    navigate('/agendamento', { 
      state: { 
        servicoId: agendamento.servicoId, 
        barbeiroId: agendamento.barbeiroId 
      } 
    });
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Histórico de Agendamentos</h1>
        <Card>
          <CardHeader>
            <CardTitle>Meus Agendamentos</CardTitle>
            <CardDescription>Veja seus agendamentos passados e agende novamente com um clique.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Barbeiro</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agendamentos.map((agendamento) => (
                  <TableRow key={agendamento.id}>
                    <TableCell className="font-medium">{agendamento.servico}</TableCell>
                    <TableCell>{agendamento.barbeiro}</TableCell>
                    <TableCell>{agendamento.data}</TableCell>
                    <TableCell>{agendamento.preco}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => handleCortarNovamente(agendamento)}>
                        <Repeat className="mr-2 h-4 w-4" />
                        Cortar Novamente
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Historico;