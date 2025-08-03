import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedPage from "@/components/AnimatedPage";

const AdminBarbeiros = () => {
  const barbeiros = [
    { id: 1, nome: "João Silva", especialidade: "Corte Clássico", avatarUrl: "https://i.pravatar.cc/150?u=joao", iniciais: "JS" },
    { id: 2, nome: "Carlos Souza", especialidade: "Barba e Bigode", avatarUrl: "https://i.pravatar.cc/150?u=carlos", iniciais: "CS" },
    { id: 3, nome: "Pedro Martins", especialidade: "Corte Moderno", avatarUrl: "https://i.pravatar.cc/150?u=pedro", iniciais: "PM" },
  ];

  return (
    <AnimatedPage>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gerenciar Barbeiros</CardTitle>
              <CardDescription>Adicione, edite ou remova barbeiros.</CardDescription>
            </div>
            <Button>Adicionar</Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-4">
            {barbeiros.map((barbeiro) => (
              <Card key={barbeiro.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={barbeiro.avatarUrl} alt={`Foto de ${barbeiro.nome}`} />
                      <AvatarFallback>{barbeiro.iniciais}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{barbeiro.nome}</p>
                      <p className="text-sm text-muted-foreground">{barbeiro.especialidade}</p>
                    </div>
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
    </AnimatedPage>
  );
};

export default AdminBarbeiros;