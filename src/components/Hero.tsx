import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/codnroid-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-background to-brand-cyan/20 animate-glow" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div className="animate-scale-in lg:h-36">
            <img
              src={logo}
              alt="CODNROID"
              className="h-0 md:h-24 lg:h-48 w-auto"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight animate-slide-in-bottom">
            We Build{" "}
            <span className="gradient-text animate-float inline-block">
              Scalable Web & Mobile
            </span>
            <br />
            Experiences That Drive Growth
          </h1>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            At CODNROID, we help startups and businesses turn bold ideas into
            high-performance digital products — from elegant websites to
            powerful apps.
          </p>

          <p
            className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            We specialize in full-stack development, blending modern
            technologies with beautiful design to deliver seamless, reliable,
            and scalable digital solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 transition-opacity text-white font-semibold group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Build Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:scale-105 transition-all font-semibold border-2"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request a Quote
            </Button>
          </div>

          {/* Stats or trust indicators */}
          <div
            className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-16 w-full animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="glass-card p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
                50+
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground mt-1 md:mt-2">
                Projects Delivered
              </div>
            </div>
            <div className="glass-card p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
                30+
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground mt-1 md:mt-2">
                Happy Clients
              </div>
            </div>
            <div className="glass-card p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
                100%
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground mt-1 md:mt-2">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
