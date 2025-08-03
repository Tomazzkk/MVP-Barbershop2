import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Gift, Ticket } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import { BackButton } from "@/components/BackButton";

// Mock data
const userPoints = 125;
const pointsHistory = [
  { id: 1, date: "15 de Julho, 2024", description: "Combo (Cabelo + Barba)", points: "+15" },
  { id: 2, date: "20 de Junho, 2024", description: "Corte de Cabelo", points: "+10" },
  { id: 3, date: "18 de Maio, 2024", description: "Resgate: Barba Grátis", points: "-100" },
  { id: 4, date: "15 de Maio, 2024", description: "Corte de Cabelo", points: "+10" },
];
const rewards = [
  { id: 1, name: "1 Barba Grátis", cost: 100, icon: <Ticket className="h-8 w-8 text-primary" /> },
  { id: 2, name: "Desconto de R$10", cost: 50, icon: <Gift className="h-8 w-8 text-primary" /> },
  { id: 3, name: "1 Produto para Cabelo", cost: 150, icon: <Award className="h-8 w-8 text-primary" /> },
];

const Pontos = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4 md:p-8 space-y-8">
        <BackButton />
        <div className="text-center">
          <h1 className="text-3xl font-bold">Programa de Fidelidade</h1>
          <p className="text-muted-foreground">Acumule pontos e troque por recompensas incríveis!</p>
        </div>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>Seu Saldo de Pontos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-primary">{userPoints}</p>
            <p className="text-muted-foreground">pontos</p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recompensas Disponíveis</CardTitle>
              <CardDescription>Use seus pontos para resgatar prêmios.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {rewards.map(reward => (
                <div key={reward.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    {reward.icon}
                    <div>
                      <p className="font-semibold">{reward.name}</p>
                      <p className="text-sm text-primary">{reward.cost} pontos</p>
                    </div>
                  </div>
                  <Button disabled={userPoints < reward.cost}>Resgatar</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Pontos</CardTitle>
              <CardDescription>Veja como você ganhou e usou seus pontos.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="text-right">Pontos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pointsHistory.map(item => (
                    <TableRow key={item.id}>
                      <TableCell className="text-muted-foreground">{item.date}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className={`text-right font-medium ${item.points.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {item.points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Pontos;