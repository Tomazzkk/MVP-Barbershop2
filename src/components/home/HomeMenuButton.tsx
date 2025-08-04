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
        <Card className="bg-muted border-2 border-transparent group-hover:border-primary transition-all duration-300 ease-in-out">
          <CardContent className="flex items-center p-4">
            <div className="flex items-center justify-center h-12 w-12 bg-secondary rounded-lg mr-4">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground flex-1 font-beatford">{label}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};