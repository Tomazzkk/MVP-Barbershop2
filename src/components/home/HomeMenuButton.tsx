import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface HomeMenuButtonProps {
  to: string;
  icon: React.ElementType;
  label: string;
  className?: string;
}

export const HomeMenuButton = ({ to, icon: Icon, label, className }: HomeMenuButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Link to={to} className={cn("block group", className)}>
        <Card className="bg-card hover:bg-muted transition-colors duration-200 ease-in-out">
          <CardContent className="flex items-center p-3">
            <div className="flex items-center justify-center h-12 w-12 bg-muted rounded-lg mr-4">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-base font-semibold text-card-foreground flex-1 font-beatford">{label}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};