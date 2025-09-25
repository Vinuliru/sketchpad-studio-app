import { WineCard } from "@/components/WineCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Truck, 
  Building2, 
  Users, 
  Leaf,
  BarChart3,
  MapPin,
  Clock
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Bem-vindo ao WineSense
        </h2>
        <p className="text-muted-foreground">
          Inteligência logística para o setor vinícola
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <WineCard
          title="Economia"
          value="40%"
          subtitle="Redução nos custos"
          variant="success"
          icon={<TrendingUp className="h-6 w-6" />}
        />
        <WineCard
          title="CO₂ Reduzido"
          value="25%"
          subtitle="Menor emissão"
          variant="default"
          icon={<Leaf className="h-6 w-6" />}
        />
      </div>

      {/* Integration Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Integrações Ativas</h3>
        
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Vinícolas</h4>
                  <p className="text-sm text-muted-foreground">12 integradas</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Gerenciar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-wine/10 rounded-lg flex items-center justify-center">
                  <Truck className="h-5 w-5 text-wine" />
                </div>
                <div>
                  <h4 className="font-medium">Transportadores</h4>
                  <p className="text-sm text-muted-foreground">8 parceiros</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Ver Rotas
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-medium">Pontos de Venda</h4>
                  <p className="text-sm text-muted-foreground">45 ativos</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Explorar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Ações Rápidas</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="mobile" className="h-16 flex-col gap-1">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Analytics</span>
          </Button>
          
          <Button variant="wine" className="h-16 flex-col gap-1">
            <MapPin className="h-5 w-5" />
            <span className="text-xs">Rotas</span>
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Atividade Recente
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Rota otimizada</p>
              <p className="text-xs text-muted-foreground">São Paulo → Rio de Janeiro, economia de 15%</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-wine rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Nova parceria</p>
              <p className="text-xs text-muted-foreground">Vinícola Gaúcha integrada</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Relatório gerado</p>
              <p className="text-xs text-muted-foreground">Análise mensal disponível</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}