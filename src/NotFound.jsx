import { Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function NotFound() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <NavBar />

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4 mb-20">
          <h1 className="text-6xl font-bold text-[#111] mb-4">404</h1>
          <p className="text-xl text-[#666] mb-2">Page not found</p>
          <p className="text-sm text-[#888]">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;