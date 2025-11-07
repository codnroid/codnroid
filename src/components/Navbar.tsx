import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/codnroid-logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Main Nav */}
      <div className="glass-card border-b border-border">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div
              className="cursor-pointer flex-shrink-0 animate-slide-in-left"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={logo}
                alt="CODNROID"
                className="h-[8rem] md:h-[8rem] w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 animate-slide-in-top">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground hover:text-brand-cyan transition-colors font-medium relative group text-sm lg:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-cyan group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button & Theme Toggle (Desktop) */}
            <div className="hidden md:flex items-center gap-3 animate-slide-in-right">
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white font-semibold text-sm lg:text-base"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent/10 transition"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden glass-card border-b border-border overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="w-full px-4 sm:px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-3 py-3 hover:bg-accent/10 rounded-lg transition-colors font-medium text-base"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
