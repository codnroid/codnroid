import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const pricingTiers = [
  {
    name: "Starter Projects",
    description: "Landing pages, small websites, MVP apps",
    priceIndia: "₹25,000+",
    priceGlobal: "$700+",
    features: [
      "Responsive design",
      "Up to 5 pages",
      "Basic SEO optimization",
      "Mobile-friendly",
      "1 month support",
    ],
    gradient: "from-brand-coral to-brand-orange",
  },
  {
    name: "Growth Projects",
    description: "Full web apps, dashboards, API-driven systems",
    priceIndia: "₹75,000+",
    priceGlobal: "$2,000+",
    features: [
      "Everything in Starter",
      "Custom backend development",
      "Database integration",
      "User authentication",
      "3 months support",
      "Analytics integration",
    ],
    gradient: "from-brand-purple to-brand-cyan",
    popular: true,
  },
  {
    name: "Enterprise Solutions",
    description: "Custom SaaS platforms, multi-user systems",
    priceIndia: "₹2,00,000+",
    priceGlobal: "$5,000+",
    features: [
      "Everything in Growth",
      "Scalable architecture",
      "Advanced security",
      "Third-party integrations",
      "6 months support",
      "Dedicated project manager",
      "Custom features",
    ],
    gradient: "from-brand-cyan to-brand-purple",
  },
];

const Pricing = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            const cards = entry.target.querySelectorAll('.pricing-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 75);
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
    <section id="pricing" className="py-8 md:py-24 lg:py-32 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className={`text-left md:text-center mb-12 md:mb-16 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Project-Based Pricing</span> Tailored to Your Needs
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl md:mx-auto">
            We believe every idea is unique — so are its requirements. Custom pricing based on project goals, features, and complexity.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => {
            const isVisible = visibleCards.includes(index);
            const animationClass = index === 0 ? '-translate-x-full' : index === 2 ? 'translate-x-full' : 'translate-y-full';
            
            return (
              <div
                key={index}
                className={`pricing-card glass-card p-6 md:p-8 rounded-2xl relative hover:scale-105 transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-brand-purple' : ''
                } ${
                  isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${animationClass}`
                }`}
                style={{ 
                  transition: 'all 0.4s ease-out',
                  transitionDelay: isVisible ? `${index * 0.08}s` : '0s'
                }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full bg-gradient-to-r ${tier.gradient} text-white text-sm font-semibold`}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold gradient-text">{tier.priceIndia}</span>
                    <span className="text-muted-foreground text-sm">India</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold">{tier.priceGlobal}</span>
                    <span className="text-muted-foreground text-sm">USA/UK</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-br ${tier.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="h-3 w-3 text-white drop-shadow-sm" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white font-semibold`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 glass-card p-6 rounded-2xl max-w-2xl mx-auto animate-fade-in">
          <p className="text-muted-foreground">
            Need a custom quote? Let's discuss your project requirements and provide a tailored proposal.
          </p>
          <Button 
            variant="link" 
            className="text-brand-cyan hover:text-brand-purple mt-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
