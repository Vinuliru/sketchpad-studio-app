import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Transport from "./pages/Transport";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Vinicolas from "./pages/Vinicolas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <MobileLayout>
              <Dashboard />
            </MobileLayout>
          } />
          <Route path="/analytics" element={
            <MobileLayout>
              <Analytics />
            </MobileLayout>
          } />
          <Route path="/transport" element={
            <MobileLayout>
              <Transport />
            </MobileLayout>
          } />
          <Route path="/profile" element={
            <MobileLayout>
              <Profile />
            </MobileLayout>
          } />
          <Route path="/vinicolas" element={
            <MobileLayout>
              <Vinicolas />
            </MobileLayout>
          } />
          <Route path="/" element={<Login />} />
          <Route path="*" element={
            <MobileLayout>
              <NotFound />
            </MobileLayout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
