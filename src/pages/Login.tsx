import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, EyeOff, Mail, Lock, LayoutDashboard, BarChart3, Truck, User, Wine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const navigate = useNavigate();

  const pages = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard, description: "Visão geral do sistema" },
    { name: "Análises", path: "/analytics", icon: BarChart3, description: "Métricas e relatórios" },
    { name: "Transporte", path: "/transport", icon: Truck, description: "Gestão de rotas" },
    { name: "Vinícolas", path: "/vinicolas", icon: Wine, description: "Gerenciar vinícolas" },
    { name: "Perfil", path: "/profile", icon: User, description: "Configurações do usuário" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check specific credentials
    if (email === "Winesense@wine.com.br" && password === "Winesense") {
      navigate("/dashboard");
    } else {
      toast.error("Credenciais inválidas. Verifique seu email e senha.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">🍷</span>
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">WineSense</h1>
          <p className="text-primary-foreground/80">
            Faça login para continuar
          </p>
        </div>

        {/* Login Form */}
        <Card className="shadow-wine border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle>Entrar</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label 
                  htmlFor="remember" 
                  className="text-sm font-normal cursor-pointer"
                >
                  Lembrar-me
                </Label>
              </div>

              <Button type="submit" variant="mobile" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-muted-foreground">
                Esqueceu a senha?
              </Button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Explorar páginas disponíveis{" "}
                <Dialog open={showPages} onOpenChange={setShowPages}>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0 h-auto font-semibold">
                      Ver todas
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Páginas Disponíveis</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 py-4">
                      {pages.map((page) => (
                        <Button
                          key={page.path}
                          variant="outline"
                          className="w-full justify-start h-auto py-4"
                          onClick={() => {
                            navigate(page.path);
                            setShowPages(false);
                          }}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <page.icon className="h-5 w-5 text-primary" />
                            <div className="text-left">
                              <div className="font-semibold">{page.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {page.description}
                              </div>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Inteligência logística para o setor vinícola
          </p>
        </div>
      </div>
    </div>
  );
}