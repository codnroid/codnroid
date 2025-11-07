import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Alex M.",
    role: "Founder at TaskyPro",
    content: "CODNROID helped us launch our SaaS product in just 6 weeks. Their team is fast, communicative, and technically solid.",
    rating: 5,
  },
  {
    name: "Ravi S.",
    role: "CEO of FinEdge",
    content: "Excellent app quality and great support even after delivery. Highly recommend CODNROID for startups.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Marketing Director",
    content: "Professional, reliable, and creative. They transformed our vision into a beautiful, functional website that exceeded expectations.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            const cards = entry.target.querySelectorAll('.testimonial-card');
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
    <section id="testimonials" className="py-8 md:py-24 lg:py-32 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className={`text-left md:text-center mb-12 md:mb-16 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl md:mx-auto">
            Don't just take our word for it — hear from businesses we've helped grow.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`testimonial-card glass-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transition: 'all 0.4s ease-out',
                  transitionDelay: isVisible ? `${index * 0.08}s` : '0s'
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
