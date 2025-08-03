import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const AdminServicos = () => {
  const servicos = [
    { id: 1, nome: "Corte de Cabelo", preco: "R$ 40,00", duracao: "30 min" },
    { id: 2, nome: "Barba", preco: "R$ 30,00", duracao: "25 min" },
    { id: 3, nome: "Combo (Cabelo + Barba)", preco: "R$ 65,00", duracao: "55 min" },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Gerenciar Serviços</CardTitle>
            <CardDescription>Adicione, edite ou remova serviços.</CardDescription>
          </div>
          <Button>Adicionar</Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-4">
          {servicos.map((servico) => (
            <Card key={servico.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{servico.nome}</p>
                  <p className="text-sm text-muted-foreground">{servico.preco} - {servico.duracao}</p>
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
              <TableHead>Nome do Serviço</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>
                <span className="sr-only">Ações</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servicos.map((servico) => (
              <TableRow key={servico.id}>
                <TableCell className="font-medium">{servico.nome}</TableCell>
                <TableCell>{servico.preco}</TableCell>
                <TableCell>{servico.duracao}</TableCell>
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
  );
};

export default AdminServicos;