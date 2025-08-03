import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AdminBarbeiros = () => {
  const barbeiros = [
    { id: 1, nome: "João Silva", especialidade: "Corte Clássico", avatarUrl: "https://i.pravatar.cc/150?u=joao", iniciais: "JS" },
    { id: 2, nome: "Carlos Souza", especialidade: "Barba e Bigode", avatarUrl: "https://i.pravatar.cc/150?u=carlos", iniciais: "CS" },
    { id: 3, nome: "Pedro Martins", especialidade: "Corte Moderno", avatarUrl: "https://i.pravatar.cc/150?u=pedro", iniciais: "PM" },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Gerenciar Barbeiros</CardTitle>
            <CardDescription>Adicione, edite ou remova barbeiros da sua equipe.</CardDescription>
          </div>
          <Button>Adicionar Barbeiro</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Foto</span>
              </TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Especialidade</TableHead>
              <TableHead>
                <span className="sr-only">Ações</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {barbeiros.map((barbeiro) => (
              <TableRow key={barbeiro.id}>
                <TableCell className="hidden sm:table-cell">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={barbeiro.avatarUrl} alt={`Foto de ${barbeiro.nome}`} />
                    <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{barbeiro.nome}</TableCell>
                <TableCell>{barbeiro.especialidade}</TableCell>
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

export default AdminBarbeiros;