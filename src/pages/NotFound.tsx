import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-gradient-cyan mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-cyan text-primary-foreground px-6 py-3 rounded-xl font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

