import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Projects from "./pages/Projects";


const queryClient = new QueryClient();

const App = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

   
    return () => clearTimeout(timer);
  }, []);

  return (
 
    <QueryClientProvider client={queryClient}>
     
      <TooltipProvider>
       
        <Toaster />
        <Sonner />
       
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen />
          ) : (
        
            <BrowserRouter>
             
              <CustomCursor />
              <Navbar lang={lang} setLang={setLang} />
  
              <Routes>
                <Route path="/" element={<Index lang={lang} />} />
                <Route path="/about" element={<About lang={lang} />} />
                <Route path="/projects" element={<Projects lang={lang} />} />
                <Route path="/contact" element={<Contact lang={lang} />} />
              </Routes>
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;