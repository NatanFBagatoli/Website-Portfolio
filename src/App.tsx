// Import necessary components and hooks from libraries and local files
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

// Create a new QueryClient instance for managing API requests and caching
const queryClient = new QueryClient();

const App = () => {
  // State to control the loading screen visibility
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time when the app starts
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    // Cleanup function to clear the timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    // Wrap the app with QueryClientProvider for data fetching capabilities
    <QueryClientProvider client={queryClient}>
      {/* TooltipProvider enables tooltip functionality throughout the app */}
      <TooltipProvider>
        {/* Toast notifications components for showing alerts/messages */}
        <Toaster />
        <Sonner />
        {/* AnimatePresence enables exit animations when components unmount */}
        <AnimatePresence mode="wait">
          {/* Show loading screen or main content based on loading state */}
          {isLoading ? (
            <LoadingScreen />
          ) : (
            // BrowserRouter enables client-side routing
            <BrowserRouter>
              {/* Navigation bar component */}
              <CustomCursor />
              <Navbar />
              {/* Route definitions for different pages */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;