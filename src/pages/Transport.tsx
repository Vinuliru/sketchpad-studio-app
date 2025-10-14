import { useState } from "react";
import { WineCard } from "@/components/WineCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Truck, 
  Route, 
  Leaf, 
  Clock,
  MapPin,
  Package,
  TrendingDown,
  Users
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Transport() {
  const [openNewRoute, setOpenNewRoute] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  
  const routes = [
    {
      id: 1,
      origin: "São Paulo",
      destination: "Rio de Janeiro",
      status: "active",
      capacity: "750L",
      co2Saved: "15%",
      time: "5h 30m"
    },
    {
      id: 2,
      origin: "Paraná",
      destination: "Santa Catarina",
      status: "scheduled",
      capacity: "500L",
      co2Saved: "22%",
      time: "4h 20m"
    },
    {
      id: 3,
      origin: "Minas Gerais",
      destination: "Rio Grande do Sul",
      status: "completed",
      capacity: "1200L",
      co2Saved: "18%",
      time: "8h 45m"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "scheduled":
        return "bg-wine text-wine-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Em Trânsito";
      case "scheduled":
        return "Agendado";
      case "completed":
        return "Concluído";
      default:
        return status;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Transportador Descobrira
        </h2>
        <p className="text-muted-foreground">
          Otimização de rotas e controle de emissões
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <WineCard
          title="Volume de Carga"
          value="2.4k L"
          subtitle="Este mês"
          variant="default"
          icon={<Package className="h-6 w-6" />}
        />
        <WineCard
          title="CO₂ Reduzido"
          value="18%"
          subtitle="Vs. mês anterior"
          variant="success"
          icon={<Leaf className="h-6 w-6" />}
        />
      </div>

      {/* Route Optimization Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="shadow-card text-center">
          <CardContent className="p-4">
            <TrendingDown className="h-6 w-6 text-success mx-auto mb-2" />
            <p className="text-lg font-bold">32%</p>
            <p className="text-xs text-muted-foreground">Redução Custos</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-4">
            <Clock className="h-6 w-6 text-wine mx-auto mb-2" />
            <p className="text-lg font-bold">4.2h</p>
            <p className="text-xs text-muted-foreground">Tempo Médio</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-muted-foreground">Parceiros</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Routes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Rotas Ativas</h3>
          <Dialog open={openNewRoute} onOpenChange={setOpenNewRoute}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Route className="h-4 w-4 mr-2" />
                Nova Rota
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Nova Rota</DialogTitle>
                <DialogDescription>
                  Configure uma nova rota de transporte otimizada.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origem</Label>
                  <Input id="origin" placeholder="Ex: São Paulo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destino</Label>
                  <Input id="destination" placeholder="Ex: Rio de Janeiro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacidade (L)</Label>
                  <Input id="capacity" type="number" placeholder="Ex: 750" />
                </div>
                <Button 
                  className="w-full" 
                  variant="wine"
                  onClick={() => {
                    toast({ title: "Rota criada", description: "Nova rota otimizada com sucesso!" });
                    setOpenNewRoute(false);
                  }}
                >
                  Criar Rota
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-3">
          {routes.map((route) => (
            <Card key={route.id} className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{route.origin}</span>
                        <span className="text-muted-foreground">→</span>
                        <span className="font-medium">{route.destination}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{route.capacity}</span>
                        <span>{route.time}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(route.status)}>
                    {getStatusText(route.status)}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium text-success">
                      -{route.co2Saved} CO₂
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedRoute(route);
                      setOpenDetails(true);
                    }}
                  >
                    Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant="wine" 
          className="h-14 flex-col gap-1"
          onClick={() => toast({ 
            title: "Otimização iniciada", 
            description: "Analisando rotas para encontrar a melhor otimização..." 
          })}
        >
          <Route className="h-5 w-5" />
          <span className="text-xs">Otimizar Rotas</span>
        </Button>
        
        <Button 
          variant="success" 
          className="h-14 flex-col gap-1"
          onClick={() => toast({ 
            title: "Gerando relatório", 
            description: "Seu relatório de emissões CO₂ está sendo preparado..." 
          })}
        >
          <Leaf className="h-5 w-5" />
          <span className="text-xs">Relatório CO₂</span>
        </Button>
      </div>

      {/* Route Details Dialog */}
      <Dialog open={openDetails} onOpenChange={setOpenDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalhes da Rota</DialogTitle>
            <DialogDescription>
              Informações completas sobre a rota selecionada
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Rota:</span>
                <span className="text-sm text-muted-foreground">
                  {selectedRoute?.origin} → {selectedRoute?.destination}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-wine" />
                <span className="text-sm font-medium">Capacidade:</span>
                <span className="text-sm text-muted-foreground">{selectedRoute?.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Tempo:</span>
                <span className="text-sm text-muted-foreground">{selectedRoute?.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">CO₂ Economizado:</span>
                <span className="text-sm text-success">{selectedRoute?.co2Saved}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Status:</span>
                <Badge className={getStatusColor(selectedRoute?.status || "")}>
                  {getStatusText(selectedRoute?.status || "")}
                </Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}