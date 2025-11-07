import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import logo from "@/assets/codnroid-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="CODNROID" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Building world-class digital products for global clients.
            </p>
            <p className="text-sm text-muted-foreground">
              Based in India | Serving Worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-brand-cyan transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-brand-cyan transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-brand-cyan transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-brand-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg glass-card hover:scale-110 flex items-center justify-center transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg glass-card hover:scale-110 flex items-center justify-center transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg glass-card hover:scale-110 flex items-center justify-center transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg glass-card hover:scale-110 flex items-center justify-center transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} CODNROID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
