import { Link } from "react-router-dom";
import { BarberCard, Barber } from "./BarberCard";

const barbers: Barber[] = [
  { id: "carlos", name: "Carlos", lastName: "Silva", description: "Especialista em cortes clássicos", rating: 4.9, price: 35.00, avatarUrl: "https://i.pravatar.cc/150?u=carlos-silva", initials: "CS", isOnline: true },
  { id: "joao", name: "João", lastName: "Santos", description: "Expert em barbas e degradês", rating: 4.8, price: 40.00, avatarUrl: "https://i.pravatar.cc/150?u=joao-santos", initials: "JS", isOnline: true },
];

export const RecommendedBarbers = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-xl font-bold font-beatford">Barbeiros Recomendados</h2>
        <Link to="/profissionais" className="text-sm font-semibold text-primary hover:underline">
          Ver todos
        </Link>
      </div>
      <div className="space-y-3 px-4">
        {barbers.map((barber) => (
          <BarberCard key={barber.id} barber={barber} />
        ))}
      </div>
    </section>
  );
};