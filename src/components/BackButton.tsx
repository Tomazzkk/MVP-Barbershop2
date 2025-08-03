import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
    className?: string;
}

export const BackButton = ({ className }: BackButtonProps) => {
    return (
        <Button asChild variant="outline" size="sm" className={cn("mb-6 hidden md:inline-flex", className)}>
            <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Início
            </Link>
        </Button>
    );
};