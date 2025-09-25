import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle,
  LogOut,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Truck
} from "lucide-react";

export default function Profile() {
  const achievements = [
    { title: "Eco Warrior", description: "50+ rotas otimizadas", icon: "🌱" },
    { title: "Efficiency Master", description: "95% taxa de sucesso", icon: "⚡" },
    { title: "Network Builder", description: "20+ parcerias ativas", icon: "🤝" }
  ];

  const stats = [
    { label: "Rotas Criadas", value: "127" },
    { label: "CO₂ Economizado", value: "2.3t" },
    { label: "Parceiros", value: "23" }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold">João Silva</h2>
              <p className="text-muted-foreground">Gestor Logístico</p>
              <Badge variant="secondary" className="mt-2">
                Membro Premium
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Informações de Contato
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">joao.silva@winesense.pt</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">+351 912 345 678</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Porto, Portugal</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Transportes Silva Lda.</span>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-card text-center">
            <CardContent className="p-4">
              <p className="text-lg font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Conquistas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <p className="font-medium">{achievement.title}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Settings Options */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-3" />
            Configurações Gerais
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-3" />
            Notificações
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <Shield className="h-4 w-4 mr-3" />
            Privacidade e Segurança
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="h-4 w-4 mr-3" />
            Ajuda e Suporte
          </Button>
        </CardContent>
      </Card>

      {/* Logout */}
      <Button variant="destructive" className="w-full">
        <LogOut className="h-4 w-4 mr-2" />
        Sair da Conta
      </Button>

      {/* App Version */}
      <div className="text-center text-sm text-muted-foreground">
        WineSense v1.2.0
      </div>
    </div>
  );
}