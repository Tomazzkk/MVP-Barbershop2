import AnimatedPage from "@/components/AnimatedPage";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

// Mock data based on the screenshot with generic images
const produtos = [
  {
    id: 1,
    name: "Pomada Brilho",
    price: 90.00,
    points: 550,
    imageUrl: "https://picsum.photos/seed/pomada-brilho/400/400",
  },
  {
    id: 2,
    name: "Pomada efeito mate",
    price: 90.00,
    points: 550,
    imageUrl: "https://picsum.photos/seed/pomada-mate/400/400",
  },
  {
    id: 3,
    name: "Balm para barba",
    price: 90.00,
    points: 550,
    imageUrl: "https://picsum.photos/seed/balm-barba/400/400",
  },
  {
    id: 4,
    name: "Óleo para barba",
    price: 70.00,
    points: 470,
    imageUrl: "https://picsum.photos/seed/oleo-barba/400/400",
  },
  {
    id: 5,
    name: "Old School Grooming",
    price: 85.00,
    points: 520,
    imageUrl: "https://picsum.photos/seed/old-school/400/400",
  },
  {
    id: 6,
    name: "Shampoo Refresh",
    price: 75.00,
    points: 480,
    imageUrl: "https://picsum.photos/seed/shampoo-refresh/400/400",
  },
];

const Produtos = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-6">
          <Link to="/" className="text-foreground">
            <ChevronLeft className="h-8 w-8" />
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight font-beatford">Produtos</h1>
        <p className="text-muted-foreground mt-1 mb-8">
          Faça o resgate dos produtos usando seus pontos de fidelidade
        </p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="group">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted border-2 border-transparent group-hover:border-primary transition-colors">
                <img
                  src={produto.imageUrl}
                  alt={produto.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 space-y-0.5">
                <h3 className="font-semibold text-foreground text-base leading-tight font-beatford">{produto.name}</h3>
                <p className="text-sm text-muted-foreground">
                  R$ {produto.price.toFixed(2).replace('.', ',')}
                </p>
                <p className="text-sm font-medium text-primary">
                  {produto.points} pontos
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Produtos;