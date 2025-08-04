import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-muted-foreground">Bem-vindo de volta,</p>
          <h1 className="text-xl font-bold font-beatford">John Smith</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/avisos">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </Button>
        </Link>
      </div>
    </header>
  );
};