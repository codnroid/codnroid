import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            setTimeout(() => setFormVisible(true), 200);
            setTimeout(() => setInfoVisible(true), 400);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-8 md:py-24 lg:py-32 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className={`text-left md:text-center mb-12 md:mb-16 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Let's Build <span className="gradient-text">Something Amazing</span> Together
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl md:mx-auto">
            Tell us about your project — we'll get back within 24 hours with a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className={`glass-card p-6 md:p-10 rounded-2xl transition-all duration-700 ${
            formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-card border-2"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass-card border-2"
                  required
                />
              </div>

              <div>
                <Input
                  placeholder="Company / Project Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="glass-card border-2"
                />
              </div>

              <div>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="glass-card border-2">
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-2">
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="app">Mobile App</SelectItem>
                    <SelectItem value="both">Website & App</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-card border-2 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white font-semibold text-lg h-12"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className={`space-y-8 transition-all duration-700 ${
            infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact details */}
            <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white drop-shadow-md" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-coral to-brand-orange flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white drop-shadow-md" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-muted-foreground">contact@codnroid.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white drop-shadow-md" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-muted-foreground">Based in India | Serving Worldwide</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass-card p-6 md:p-8 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10">
              <h3 className="text-xl font-bold mb-3">Prefer WhatsApp?</h3>
              <p className="text-muted-foreground mb-4">
                Get instant responses to your queries through WhatsApp.
              </p>
              <Button
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
                onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
