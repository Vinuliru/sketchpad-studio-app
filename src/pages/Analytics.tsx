import { WineCard } from "@/components/WineCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Download,
  Filter,
  PieChart,
  Activity
} from "lucide-react";

export default function Analytics() {
  const regions = [
    { name: "São Paulo", percentage: 35, color: "bg-primary" },
    { name: "Rio de Janeiro", percentage: 28, color: "bg-wine" },
    { name: "Minas Gerais", percentage: 22, color: "bg-success" },
    { name: "Paraná", percentage: 15, color: "bg-accent" }
  ];

  const monthlyData = [
    { month: "Jan", volume: 1200, savings: 18 },
    { month: "Fev", volume: 1350, savings: 22 },
    { month: "Mar", volume: 1150, savings: 15 },
    { month: "Abr", volume: 1450, savings: 28 },
    { month: "Mai", volume: 1620, savings: 32 }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Gestão Logística
          </h2>
          <p className="text-muted-foreground">
            Em Tempo Real via App
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-2 gap-4">
        <WineCard
          title="Volume Total"
          value="7.2k L"
          subtitle="Este mês"
          variant="default"
          icon={<BarChart3 className="h-6 w-6" />}
        />
        <WineCard
          title="Crescimento"
          value="+24%"
          subtitle="Vs. mês anterior"
          variant="success"
          icon={<TrendingUp className="h-6 w-6" />}
        />
      </div>

      {/* Regional Distribution */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Distribuição por Região
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {regions.map((region) => (
            <div key={region.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{region.name}</span>
                <span className="text-muted-foreground">{region.percentage}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${region.color} transition-all duration-500`}
                  style={{ width: `${region.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Performance Mensal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">{data.month}</span>
                  </div>
                  <div>
                    <p className="font-medium">{data.volume}L</p>
                    <p className="text-xs text-muted-foreground">Volume transportado</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-success">+{data.savings}%</p>
                  <p className="text-xs text-muted-foreground">Economia</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="shadow-card text-center">
          <CardContent className="p-4">
            <PieChart className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-lg font-bold">89%</p>
            <p className="text-xs text-muted-foreground">Eficiência</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-4">
            <MapPin className="h-6 w-6 text-wine mx-auto mb-2" />
            <p className="text-lg font-bold">45</p>
            <p className="text-xs text-muted-foreground">Pontos</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-4">
            <Calendar className="h-6 w-6 text-success mx-auto mb-2" />
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-muted-foreground">Dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="wine" className="h-14 flex-col gap-1">
          <BarChart3 className="h-5 w-5" />
          <span className="text-xs">Relatório Completo</span>
        </Button>
        
        <Button variant="success" className="h-14 flex-col gap-1">
          <Download className="h-5 w-5" />
          <span className="text-xs">Exportar Dados</span>
        </Button>
      </div>

      {/* Recent Insights */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Insights Recentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg">
            <TrendingUp className="h-4 w-4 text-success mt-0.5" />
            <div>
              <p className="text-sm font-medium">Melhoria na Eficiência</p>
              <p className="text-xs text-muted-foreground">
                Rotas otimizadas resultaram em 15% menos tempo de entrega
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-wine/10 rounded-lg">
            <MapPin className="h-4 w-4 text-wine mt-0.5" />
            <div>
              <p className="text-sm font-medium">Nova Região Expandida</p>
              <p className="text-xs text-muted-foreground">
                Aveiro agora representa 8% do volume total
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
            <BarChart3 className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium">Pico de Demanda</p>
              <p className="text-xs text-muted-foreground">
                Abril registrou o maior volume de transportes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}