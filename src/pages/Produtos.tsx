import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const Produtos = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <p className="text-muted-foreground">Confira nossa seleção de produtos para cabelo e barba.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Nossos Produtos
          </CardTitle>
          <CardDescription>
            Em breve, uma lista de produtos disponíveis em nossas barbearias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-48 bg-muted rounded-lg">
            <p className="text-muted-foreground">Conteúdo em construção...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Produtos;