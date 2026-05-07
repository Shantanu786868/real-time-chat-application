import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Join from "@/pages/Join";
import Rooms from "@/pages/Rooms";
import Room from "@/pages/Room";

const queryClient = new QueryClient();

function Router() {
  const username = localStorage.getItem("chat_username");

  return (
    <Switch>
      <Route path="/" component={username ? Rooms : Join} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/rooms/:id" component={Room} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
