import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <Button
          size="lg"
          className="glass-card hover:bg-white/10 shadow-xl group"
          onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
        >
          <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          WhatsApp
        </Button>
        
        <Button
          size="lg"
          className="glass-card hover:bg-white/10 shadow-xl group"
          onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'}
        >
          <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Call Us
        </Button>
        
        <Button
          size="lg"
          className="glass-card hover:bg-white/10 shadow-xl group"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Email
        </Button>
      </div>

      {/* Main toggle button */}
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 shadow-2xl shadow-brand-purple/50 transition-all hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </Button>
    </div>
  );
};

export default FloatingCTA;
