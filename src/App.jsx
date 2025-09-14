import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./componets/navigation/Navigation";
import AppRouter from "./componets/navigation/AppRouter";
import Footer from "./componets/navigation/Footer";
import Loader from "./componets/ui/Loader ";
import { Loader2 } from "lucide-react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader once the page is fully loaded
    const handleLoad = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
      setLoading(false);
    };

    // If the page is already loaded (fast reload), call immediately
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navigation />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
