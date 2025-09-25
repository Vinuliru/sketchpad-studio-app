import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WineCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "wine";
  className?: string;
}

export function WineCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  variant = "default",
  className 
}: WineCardProps) {
  const variantStyles = {
    default: "bg-card border-border",
    success: "bg-gradient-success text-success-foreground border-success/20",
    wine: "bg-gradient-wine text-wine-foreground border-wine/20"
  };

  return (
    <Card className={cn(
      "shadow-card hover:shadow-primary transition-all duration-300",
      variantStyles[variant],
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium opacity-90">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {subtitle && (
              <p className="text-xs opacity-75">{subtitle}</p>
            )}
          </div>
          {icon && (
            <div className="opacity-75">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}