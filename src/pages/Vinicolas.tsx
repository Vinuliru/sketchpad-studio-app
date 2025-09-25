import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Building2, 
  Plus, 
  Edit2, 
  MapPin,
  Wine,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Vinicola {
  id: string;
  name: string;
  mainWine: string;
  routes: string[];
  location: string;
}

export default function Vinicolas() {
  const navigate = useNavigate();
  const [vinicolas] = useState<Vinicola[]>([
    {
      id: "1",
      name: "Vinícola do Vale",
      mainWine: "Cabernet Sauvignon",
      routes: ["São Paulo → Rio de Janeiro", "Minas Gerais → São Paulo"],
      location: "Vale dos Vinhedos, RS"
    },
    {
      id: "2", 
      name: "Casa da Montanha",
      mainWine: "Chardonnay",
      routes: ["Rio de Janeiro → São Paulo", "Paraná → Santa Catarina"],
      location: "Serra Gaúcha, RS"
    },
    {
      id: "3",
      name: "Vinhos do Sul",
      mainWine: "Merlot",
      routes: ["São Paulo → Paraná"],
      location: "Bento Gonçalves, RS"
    },
    {
      id: "4",
      name: "Adega Premium",
      mainWine: "Pinot Noir",
      routes: ["Minas Gerais → Rio de Janeiro", "São Paulo → Minas Gerais"],
      location: "São Roque, SP"
    }
  ]);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Gerenciar Vinícolas
          </h2>
          <p className="text-muted-foreground">
            Gerencie os dados das vinícolas integradas
          </p>
        </div>
      </div>

      {/* Add New Button */}
      <Button className="w-full" variant="wine">
        <Plus className="h-4 w-4 mr-2" />
        Adicionar Nova Vinícola
      </Button>

      {/* Vinícolas List */}
      <div className="space-y-4">
        {vinicolas.map((vinicola) => (
          <Card key={vinicola.id} className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {vinicola.name}
                </div>
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Company Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Wine className="h-4 w-4 text-wine" />
                  <span className="text-sm font-medium">Vinho Principal:</span>
                  <span className="text-sm text-muted-foreground">{vinicola.mainWine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">Localização:</span>
                  <span className="text-sm text-muted-foreground">{vinicola.location}</span>
                </div>
              </div>

              {/* Routes */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Rotas Criadas:</h4>
                <div className="space-y-1">
                  {vinicola.routes.map((route, index) => (
                    <div key={index} className="bg-muted/50 p-2 rounded-md">
                      <span className="text-xs text-muted-foreground">{route}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Detalhes
                </Button>
                <Button variant="wine" size="sm" className="flex-1">
                  Criar Rota
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}