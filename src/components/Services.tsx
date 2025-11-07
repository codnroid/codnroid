import { Code2, Smartphone, Server, Palette, TrendingUp, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Build fast, secure, and scalable web apps using React.js, Next.js, Spring Boot, or Django.",
    gradient: "from-brand-purple to-brand-cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Craft cross-platform mobile experiences using React Native for Android & iOS.",
    gradient: "from-brand-coral to-brand-orange",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Design reliable, high-performance backends with Node.js, Express, and Spring Boot.",
    gradient: "from-brand-cyan to-brand-purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Deliver delightful experiences through intuitive design and user-focused interfaces.",
    gradient: "from-brand-orange to-brand-coral",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance Optimization",
    description: "Rank higher, load faster, and convert better with our optimization strategies.",
    gradient: "from-brand-purple to-brand-coral",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Stay future-ready with ongoing maintenance, version upgrades, and bug fixes.",
    gradient: "from-brand-cyan to-brand-orange",
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 50);
            });
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

  return (
    <section id="services" className="py-8 md:py-24 lg:py-32 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className={`text-left md:text-center mb-12 md:mb-16 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Our Expertise — <span className="gradient-text">Full-Stack Development</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl md:mx-auto">
            Whether you're launching an MVP, building a mobile app, or scaling your SaaS — we've got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`service-card glass-card p-4 md:p-8 rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-300 group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transition: 'all 0.4s ease-out',
                  transitionDelay: isVisible ? `${index * 0.05}s` : '0s'
                }}
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white drop-shadow-md group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
