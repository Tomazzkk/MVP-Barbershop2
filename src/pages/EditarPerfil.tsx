import AnimatedPage from "@/components/AnimatedPage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditarPerfil = () => {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="p-4 pb-24 space-y-8 max-w-2xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold font-beatford">Editar Perfil</h1>
          <div className="w-9 h-9" /> {/* Spacer */}
        </header>

        {/* Profile Picture */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-muted">
              <AvatarImage src="https://i.pravatar.cc/150?u=carlos-silva" alt="Carlos Silva" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Personal Info Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-beatford">Informações Pessoais</CardTitle>
            <CardDescription>Atualize seu nome, e-mail e número de contato.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" defaultValue="Carlos Silva" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Endereço de E-mail</Label>
              <Input id="email" type="email" defaultValue="carlos.silva@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Número de Contato</Label>
              <Input id="phone" type="tel" defaultValue="(11) 98765-4321" />
            </div>
          </CardContent>
        </Card>

        {/* Password Change Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-beatford">Alterar Senha</CardTitle>
            <CardDescription>Para sua segurança, insira sua senha atual para fazer alterações.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Nova Senha</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
        </Card>
        
        <Button size="lg" className="w-full font-beatford">Salvar Alterações</Button>
      </div>
    </AnimatedPage>
  );
};

export default EditarPerfil;