import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or near top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 transition-transform duration-300 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 via-blue-500 to-teal-400 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              ED
            </div>

            {/* Text */}
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              EBA Dynamics
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;