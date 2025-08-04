import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface Barber {
  id: string;
  name: string;
  lastName: string;
  description: string;
  rating: number;
  price: number;
  avatarUrl: string;
  initials: string;
  isOnline: boolean;
}

interface BarberCardProps {
  barber: Barber;
}

export const BarberCard = ({ barber }: BarberCardProps) => {
  return (
    <Card className="bg-muted border-border/80">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-16 w-16">
            <AvatarImage src={barber.avatarUrl} alt={barber.name} />
            <AvatarFallback>{barber.initials}</AvatarFallback>
          </Avatar>
          {barber.isOnline && (
            <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-muted" />
          )}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold font-beatford text-lg leading-tight">{barber.name}</h3>
              <p className="font-semibold font-beatford text-lg leading-tight -mt-1">{barber.lastName}</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-bold">{barber.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{barber.description}</p>
          <div className="flex justify-between items-end pt-1">
            <p className="text-primary font-bold text-lg">
              R$ <span className="font-beatford">{barber.price.toFixed(2).replace('.', ',')}</span>
            </p>
            <Button asChild size="sm" className="font-beatford">
              <Link to={`/agendamento?barbeiro=${barber.id}`}>Agendar</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};