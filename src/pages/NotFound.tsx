
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-navy flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-brand-lime mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-brand-silver mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-brand-silver text-black hover:bg-brand-silver/90 font-semibold">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-brand-silver/20">
            <p className="text-brand-silver text-sm mb-4">
              Need help? Get in touch with our team.
            </p>
            <Link to="/contact">
              <Button variant="ghost" className="text-brand-lime hover:text-brand-lime-dark">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
