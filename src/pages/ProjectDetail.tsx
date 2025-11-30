import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import FnK from "@/assets/FoodandKitchen.png";
import Outvibe from "@/assets/Outvibe.png";
import EasyTravel from "@/assets/EasyTravel.png";

const projects = [
  {
    id: "shopswift",
    title: "F & K",
    img: FnK,
    link: "https://food-and-kitchen.vercel.app/",
    subtitle: "Food E-commerce Platform",
    description:
      "React + Node.js web app for online shopping with dynamic product recommendations and seamless checkout experience.",
    fullDescription:
      "F & K is a vibrant and modern food e-commerce web application designed to provide a premium, Gen-Z-friendly online ordering experience. The interface features vibrant orange branding (#FF7A00), smooth Framer Motion animations, and dark/light mode support inspired by industry-leading platforms like HelloFresh & Blue Apron. With a focus on convenience, visual aesthetics, and user engagement, F & K allows customers to browse cuisines, manage their cart, and experience a fluid checkout flow — all within a fully responsive, mobile-first UI.",
    features: [
      "UI & UX Design with Figma",
      "Ciore E-commerce Integration",
      "Product Catalog with Recommendations and categorization",
      "Advanced search with filters",
      "User authentication and profiles",
      "Subscription management",
      "Theme Control (Dark/Light Mode)",
      "Responsive design for mobile and desktop",
      "Secure payment processing with Stripe",
      "Order tracking and history",
    ],
    duration: "8 weeks",
    team: "5 developers",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Html5",
      "CSS3",
    ],
    gradient: "from-brand-purple to-brand-cyan",
  },
  {
    id: "tasky-pro",
    title: "Outvibe",
    img: Outvibe,
    link: "https://outvibe.vercel.app/",
    subtitle: "Your Vibe, Your Style - Fashion E-commerce",
    description:
      "Outvibe is a stylish and modern Gen Z–focused fashion e-commerce platform designed to deliver a smooth, engaging, and aesthetic online shopping experience.",
    fullDescription:
      "Outvibe is a stylish and modern Gen Z–focused fashion e-commerce platform designed to deliver a smooth, engaging, and aesthetic online shopping experience. Inspired by platforms like Myntra, but crafted with Gen Z taste, Outvibe combines pastel gradient designs, trendy fashion layouts, and fluid micro-animations to create an Instagram/TikTok-like shopping vibe. Users can quickly explore trending outfits, browse categories, filter fashion collections, and manage their cart and wishlist — all without requiring login. The interface is minimal, youthful, and mobile-first, making shopping effortless and visually delightful. Outvibe prioritizes both style and performance using Zustand for global state management, Framer Motion for buttery-smooth animations, and responsive UI tailored for modern shoppers.",
    features: [
      "Gen Z–centric UI/UX design",
      "Shopping cart and wishlist",
      "Filter, sort, and search functionality",
      "Animation and performance optimization",
      "Navigational ease with minimal clicks",
      "Offline mode support",
      "Responsive design for all devices",
    ],
    duration: "10 weeks",
    team: "6 developers",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Html5",
      "CSS3",
    ],
    gradient: "from-brand-coral to-brand-orange",
  },
  {
    id: "finedge",
    title: "Easy Travel",
    img: EasyTravel,
    link: "https://easy-travel-smoky.vercel.app/",
    subtitle: "Book Flights, Hotels and tours - Travel Booking Platform",
    description:
      "Easy Travel is a modern travel booking platform built with React, TypeScript, and Tailwind CSS. It offers users a seamless experience to search and book flights, hotels, and vacation packages with smart filtering and wishlist features.",
    fullDescription:
      "Easy Travel is a modern travel booking platform that lets users search and book flights, hotels, and vacation deals in one place. The platform features smart filtering, a wishlist system to save favorites, and combo packages offering discounted bundled trips. With a sleek responsive design supporting both light and dark modes, users can seamlessly browse 500+ destinations worldwide. The smooth single-page application ensures fast navigation without page reloads. Whether planning a quick getaway or a dream vacation, Easy Travel simplifies the entire booking journey.",
    features: [
      "Flight Booking - Browse and filter flights by price, duration, airlines, and stops",
      "Hotel Reservations - Search hotels with filters for amenities, price range, and ratings",
      "Combo Deals - Special packages combining flights + hotels + activities at discounted prices",
      "Wishlist - Save favorite flights, hotels, and deals (persisted in local storage)",
      "Responsive Design - Works seamlessly on desktop and mobile",
      "Dark/Light Mode - Theme toggle for user preference",
      "Smooth Navigation - Client-side routing with no page reloads",
      "Featured Destinations - Curated destination cards on homepage",
      "Advanced Filtering - Filter options for all listing pages",
      "Detail Pages - Individual pages for each flight, hotel, and deal",
    ],
    duration: "12 weeks",
    team: "7 developers",
    tech: [
      "React 18 + TypeScript",
      "React Router for navigation",
      "Zustand for state management",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Html5",
      "CSS3",
    ],
    gradient: "from-brand-cyan to-brand-purple",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

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
      <section
        className={`relative py-32 px-4 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
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
              <span className="flex items-center gap-3">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    if (project.link && project.link.startsWith("http")) {
                      window.open(
                        project.link,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    } else if (project.link) {
                      navigate(project.link);
                    }
                  }}
                >
                  {project.title}
                </span>

                {project.link && (
                  <ExternalLink
                    className="h-10 w-10 text-white/90 cursor-pointer"
                    onClick={() => {
                      if (project.link.startsWith("http")) {
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      } else {
                        navigate(project.link);
                      }
                    }}
                  />
                )}
              </span>
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

            <div
              className="glass-card rounded-2xl p-6 animate-slide-in-bottom"
              style={{ animationDelay: "0.1s" }}
            >
              <Users className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Size</h3>
              <p className="text-muted-foreground">{project.team}</p>
            </div>

            <div
              className="glass-card rounded-2xl p-6 animate-slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
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
          {/* Screenshot of project */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Screenshot</span>
            </h2>
            <div className="w-full flex justify-center">
              <img
                src={project.img}
                alt={`${project.title} Screenshot`}
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Key Features */}
          <div
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
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
          <div
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
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
          <div
            className="glass-card rounded-2xl p-12 text-center animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your{" "}
              <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Get in touch with us today for
              a free consultation.
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
