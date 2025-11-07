import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

const projects = [
  {
    id: "shopswift",
    title: "ShopSwift",
    subtitle: "E-Commerce Platform",
    description: "React + Node.js web app for online shopping with dynamic product recommendations and seamless checkout experience.",
    fullDescription: "A comprehensive e-commerce platform built with modern web technologies. Features include real-time inventory management, personalized product recommendations using AI, secure payment processing with Stripe, and an intuitive admin dashboard for managing orders and analytics.",
    features: [
      "AI-powered product recommendations",
      "Real-time inventory tracking",
      "Secure payment gateway integration",
      "Advanced search with filters",
      "Order tracking and notifications",
      "Admin analytics dashboard"
    ],
    duration: "8 weeks",
    team: "5 developers",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-brand-purple to-brand-cyan",
  },
  {
    id: "tasky-pro",
    title: "Tasky Pro",
    subtitle: "Project Management App",
    description: "Real-time project collaboration tool for teams across devices with task tracking, time management, and team chat.",
    fullDescription: "A powerful project management solution designed for modern teams. Tasky Pro enables seamless collaboration with real-time updates, task assignments, time tracking, and integrated team communication. Built with React Native for cross-platform compatibility.",
    features: [
      "Real-time task synchronization",
      "Team collaboration and chat",
      "Time tracking and reporting",
      "Kanban and list views",
      "Push notifications",
      "Offline mode support"
    ],
    duration: "10 weeks",
    team: "6 developers",
    tech: ["React Native", "Firebase", "WebSocket"],
    gradient: "from-brand-coral to-brand-orange",
  },
  {
    id: "finedge",
    title: "FinEdge",
    subtitle: "Finance Tracker SaaS",
    description: "Helps users track expenses, visualize spending data, and manage financial goals with intelligent insights.",
    fullDescription: "A comprehensive finance management SaaS platform that helps individuals and small businesses track expenses, create budgets, and achieve financial goals. Features advanced data visualization, automated categorization, and AI-powered financial insights.",
    features: [
      "Automated expense tracking",
      "Budget planning and alerts",
      "Financial goal setting",
      "Interactive charts and reports",
      "Bank account integration",
      "AI-powered spending insights"
    ],
    duration: "12 weeks",
    team: "7 developers",
    tech: ["Next.js", "PostgreSQL", "Chart.js"],
    gradient: "from-brand-cyan to-brand-purple",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-32 px-4 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 glass-card text-white hover:bg-white/20 border border-white/30"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {project.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Project Info Cards */}
            <div className="glass-card rounded-2xl p-6 animate-slide-in-left">
              <Calendar className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-slide-in-bottom" style={{ animationDelay: "0.1s" }}>
              <Users className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Size</h3>
              <p className="text-muted-foreground">{project.team}</p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <ExternalLink className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Status</h3>
              <p className="text-muted-foreground">Completed & Deployed</p>
            </div>
          </div>

          {/* About the Project */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About the <span className="gradient-text">Project</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key <span className="gradient-text">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-4 flex items-start gap-3 hover:scale-105 transition-transform"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.tech.map((tech, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-full px-6 py-3 text-lg font-semibold hover:scale-110 transition-transform"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card rounded-2xl p-12 text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Get in touch with us today for a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white font-semibold"
                onClick={() => navigate("/#contact")}
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass-card font-semibold hover:scale-105 transition-all border-2"
                onClick={() => navigate("/#projects")}
              >
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
