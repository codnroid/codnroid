import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "shopswift",
    title: "ShopSwift",
    subtitle: "E-Commerce Platform",
    description: "React + Node.js web app for online shopping with dynamic product recommendations and seamless checkout experience.",
    gradient: "from-brand-purple to-brand-cyan",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "tasky-pro",
    title: "Tasky Pro",
    subtitle: "Project Management App",
    description: "Real-time project collaboration tool for teams across devices with task tracking, time management, and team chat.",
    gradient: "from-brand-coral to-brand-orange",
    tech: ["React Native", "Firebase", "WebSocket"],
  },
  {
    id: "finedge",
    title: "FinEdge",
    subtitle: "Finance Tracker SaaS",
    description: "Helps users track expenses, visualize spending data, and manage financial goals with intelligent insights.",
    gradient: "from-brand-cyan to-brand-purple",
    tech: ["Next.js", "PostgreSQL", "Chart.js"],
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
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
    <section id="projects" className="py-8 md:py-24 lg:py-32 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className={`text-left md:text-center mb-12 md:mb-16 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Our Work — <span className="gradient-text">What We've Built</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl md:mx-auto">
            Real projects. Real results. Real impact on businesses worldwide.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const direction = index % 2 === 0 ? 'translate-x-[-100%]' : 'translate-x-[100%]';
            
            return (
              <div
                key={index}
                onClick={() => navigate(`/project/${project.id}`)}
                className={`project-card glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${direction}`
                }`}
                style={{ 
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: isVisible ? `${index * 0.08}s` : '0s'
                }}
              >
                {/* Gradient header */}
                <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-white/70 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-14 left-20 w-1 h-1 bg-white/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                      <Sparkles className="h-16 w-16 text-white opacity-70 group-hover:opacity-0 transition-all duration-300 absolute inset-0" />
                      <ArrowRight className="h-16 w-16 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full glass group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Details Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold pt-2 group-hover:gap-4 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-card font-semibold group hover:scale-105 transition-all border-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ready to Start Your Project?
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
