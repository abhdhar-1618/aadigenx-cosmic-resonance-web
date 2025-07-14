import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import SrijanPeethPage from "./pages/SrijanPeethPage";
import GalleryPage from "./pages/GalleryPage";
import BlogsPage from "./pages/BlogsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/naad" element={<div className="min-h-screen flex items-center justify-center text-2xl">AadiNaad - Coming Soon</div>} />
          <Route path="/srijan" element={<SrijanPeethPage />} />
          <Route path="/kul" element={<div className="min-h-screen flex items-center justify-center text-2xl">AadiKul - Coming Soon</div>} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
