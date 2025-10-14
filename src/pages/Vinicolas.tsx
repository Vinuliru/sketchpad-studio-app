import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Building2, 
  Plus, 
  Edit2, 
  MapPin,
  Wine,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface Vinicola {
  id: string;
  name: string;
  mainWine: string;
  routes: string[];
  location: string;
}

export default function Vinicolas() {
  const navigate = useNavigate();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedVinicola, setSelectedVinicola] = useState<Vinicola | null>(null);
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
      <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
        <DialogTrigger asChild>
          <Button className="w-full" variant="wine">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Nova Vinícola
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Nova Vinícola</DialogTitle>
            <DialogDescription>
              Preencha os dados da nova vinícola para integrá-la ao sistema.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome da Vinícola</Label>
              <Input id="name" placeholder="Ex: Vinícola do Vale" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wine">Vinho Principal</Label>
              <Input id="wine" placeholder="Ex: Cabernet Sauvignon" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Localização</Label>
              <Input id="location" placeholder="Ex: Vale dos Vinhedos, RS" />
            </div>
            <Button 
              className="w-full" 
              variant="wine"
              onClick={() => {
                toast({ title: "Sucesso", description: "Vinícola adicionada com sucesso!" });
                setOpenAddDialog(false);
              }}
            >
              Adicionar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setSelectedVinicola(vinicola);
                    setOpenEditDialog(true);
                  }}
                >
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    setSelectedVinicola(vinicola);
                    setOpenDetailsDialog(true);
                  }}
                >
                  Ver Detalhes
                </Button>
                <Button 
                  variant="wine" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    toast({ 
                      title: "Criar Rota", 
                      description: `Criando rota para ${vinicola.name}...` 
                    });
                    setTimeout(() => navigate('/transport'), 1000);
                  }}
                >
                  Criar Rota
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Vinícola</DialogTitle>
            <DialogDescription>
              Atualize os dados da vinícola {selectedVinicola?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Nome da Vinícola</Label>
              <Input id="edit-name" defaultValue={selectedVinicola?.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-wine">Vinho Principal</Label>
              <Input id="edit-wine" defaultValue={selectedVinicola?.mainWine} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-location">Localização</Label>
              <Input id="edit-location" defaultValue={selectedVinicola?.location} />
            </div>
            <Button 
              className="w-full" 
              variant="wine"
              onClick={() => {
                toast({ title: "Sucesso", description: "Vinícola atualizada com sucesso!" });
                setOpenEditDialog(false);
              }}
            >
              Salvar Alterações
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedVinicola?.name}</DialogTitle>
            <DialogDescription>
              Detalhes completos da vinícola
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wine className="h-4 w-4 text-wine" />
                <span className="text-sm font-medium">Vinho Principal:</span>
                <span className="text-sm text-muted-foreground">{selectedVinicola?.mainWine}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Localização:</span>
                <span className="text-sm text-muted-foreground">{selectedVinicola?.location}</span>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium">Rotas Criadas:</span>
                <div className="space-y-1">
                  {selectedVinicola?.routes.map((route, index) => (
                    <div key={index} className="bg-muted/50 p-2 rounded-md">
                      <span className="text-xs text-muted-foreground">{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}