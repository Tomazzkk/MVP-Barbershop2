import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import { ArrowLeft, Scissors, Mail, User, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({
    message: "E-mail inválido. Verifique o formato.",
  }),
  password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
});

const Cadastro = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Em uma aplicação real, aqui você faria a chamada para a API de registro.
    // A verificação de e-mail duplicado seria feita no backend.
    // Ex: if (error.message === 'email_in_use') { form.setError('email', { message: 'Este e-mail já está cadastrado.' }) }
    console.log(values);
    showSuccess("Cadastro realizado com sucesso!");
    navigate("/login");
  }

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background text-foreground flex flex-col p-6">
        <header className="flex items-center justify-center relative mb-8">
          <Button variant="ghost" size="icon" className="absolute left-0" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold font-beatford">Criar Conta</h1>
        </header>

        <div className="flex-grow flex flex-col items-center justify-center text-center pt-4 pb-8">
          <div className="bg-muted h-20 w-20 rounded-full flex items-center justify-center mb-6">
            <Scissors className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-beatford">Crie sua conta</h2>
          <p className="text-muted-foreground mt-2">É rápido e fácil. Vamos começar!</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-6 pb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block text-sm font-medium text-muted-foreground">Nome</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Seu nome completo" {...field} className="pl-4 pr-10 h-12 bg-muted border-border/80 focus:bg-muted/50 focus:ring-primary" />
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block text-sm font-medium text-muted-foreground">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="email" placeholder="seu@email.com" {...field} className="pl-4 pr-10 h-12 bg-muted border-border/80 focus:bg-muted/50 focus:ring-primary" />
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block text-sm font-medium text-muted-foreground">Senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type={showPassword ? "text" : "password"} placeholder="••••••••" {...field} className="pl-4 pr-10 h-12 bg-muted border-border/80 focus:bg-muted/50 focus:ring-primary" />
                      <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Eye className="h-5 w-5 text-muted-foreground" /> : <EyeOff className="h-5 w-5 text-muted-foreground" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12 font-beatford text-base" size="lg">Criar Conta</Button>

            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link to="/login" className="font-bold text-primary hover:underline">
                Entrar
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </AnimatedPage>
  );
};

export default Cadastro;