import { Link } from "react-router-dom";
import { Bell, Scissors } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const user = {
  avatarUrl: "https://i.pravatar.cc/150?u=mvpbarber",
  initials: "MB",
};

export const HomeHeader = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-primary p-2 rounded-lg">
          <Scissors className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="font-bold text-xl font-beatford">BarberApp</span>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </Button>
        <Link to="/perfil">
          <Avatar className="h-10 w-10 border-2 border-primary/50">
            <AvatarImage src={user.avatarUrl} alt="User avatar" />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
};