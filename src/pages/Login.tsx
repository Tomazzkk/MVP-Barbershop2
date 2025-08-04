import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import { ArrowLeft, Scissors, Mail, Eye, EyeOff } from "lucide-react";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
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
  email: z.string().email({
    message: "E-mail inválido. Verifique o formato.",
  }),
  password: z.string().min(1, { message: "Senha é obrigatória." }),
  remember: z.boolean().default(false),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Em uma aplicação real, aqui você faria a chamada para a API de login.
    // A verificação de e-mail/senha incorretos seria feita no backend.
    // Ex: if (error.message === 'invalid_credentials') { form.setError('root', { message: 'E-mail ou senha inválidos.' }) }
    console.log(values);
    showSuccess("Login realizado com sucesso!");
    navigate("/");
  }

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background text-foreground flex flex-col p-6">
        <header className="flex items-center justify-center relative mb-8">
          <Button variant="ghost" size="icon" className="absolute left-0" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold font-beatford">Entrar</h1>
        </header>

        <div className="flex-grow flex flex-col items-center justify-center text-center pt-4 pb-8">
          <div className="bg-muted h-20 w-20 rounded-full flex items-center justify-center mb-6">
            <Scissors className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-beatford">Bem-vindo de volta</h2>
          <p className="text-muted-foreground mt-2">Entre na sua conta para continuar</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-6 pb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-left w-full block text-sm font-medium text-muted-foreground">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input id="email" type="email" placeholder="seu@email.com" {...field} className="pl-4 pr-10 h-12 bg-muted border-border/80 focus:bg-muted/50 focus:ring-primary" />
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
                      <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" {...field} className="pl-4 pr-10 h-12 bg-muted border-border/80 focus:bg-muted/50 focus:ring-primary" />
                      <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Eye className="h-5 w-5 text-muted-foreground" /> : <EyeOff className="h-5 w-5 text-muted-foreground" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="bg-muted border-border/80 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium">
                        Lembrar de mim
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Link to="#" className="text-sm font-medium text-primary hover:underline">
                Esqueci a senha
              </Link>
            </div>

            <Button type="submit" className="w-full h-12 font-beatford text-base" size="lg">Entrar</Button>

            <div className="flex items-center gap-4">
              <div className="flex-grow h-px bg-border"></div>
              <span className="text-sm text-muted-foreground">ou continue com</span>
              <div className="flex-grow h-px bg-border"></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="h-12 bg-muted border-border/80 hover:bg-muted/80">
                <GoogleIcon className="h-6 w-6" />
              </Button>
              <Button variant="outline" className="h-12 bg-muted border-border/80 hover:bg-muted/80">
                <AppleIcon className="h-6 w-6" />
              </Button>
              <Button variant="outline" className="h-12 bg-muted border-border/80 hover:bg-muted/80">
                <FacebookIcon className="h-6 w-6" />
              </Button>
            </div>

            <div className="text-center text-sm">
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="font-bold text-primary hover:underline">
                Cadastre-se
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </AnimatedPage>
  );
};

export default Login;