import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import AnimatedPage from "@/components/AnimatedPage";

const AdminPlanos = () => {
  const planos = [
    { id: 1, nome: "Básico", preco: "R$ 19,90/mês", beneficios: "Agendamentos ilimitados, Histórico completo" },
    { id: 2, nome: "Premium", preco: "R$ 39,90/mês", beneficios: "Benefícios do Básico + Descontos exclusivos" },
  ];

  return (
    <AnimatedPage>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="font-beatford">Gerenciar Planos</CardTitle>
              <CardDescription>Adicione, edite ou remova os planos.</CardDescription>
            </div>
            <Button className="font-beatford">Adicionar</Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-4">
            {planos.map((plano) => (
              <Card key={plano.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{plano.nome} ({plano.preco})</p>
                    <p className="text-sm text-muted-foreground">{plano.beneficios}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop View */}
          <Table className="hidden md:table">
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Plano</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Benefícios</TableHead>
                <TableHead>
                  <span className="sr-only">Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planos.map((plano) => (
                <TableRow key={plano.id}>
                  <TableCell className="font-medium">{plano.nome}</TableCell>
                  <TableCell>{plano.preco}</TableCell>
                  <TableCell>{plano.beneficios}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AnimatedPage>
  );
};

export default AdminPlanos;