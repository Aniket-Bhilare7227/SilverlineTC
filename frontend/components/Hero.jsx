import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Heart, Plane, Shield } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-mesh overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
        <div className="floating-element-delayed absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
        <div className="floating-element absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust indicator */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">Trusted by 2,000+ families</span>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center glass-card px-4 py-2 mb-4">
                <Heart className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-gradient uppercase tracking-wide">Medical Travel Assistance</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-[0.9]">
                Travel assistance
                <br />
                <span className="text-gradient text-glow">made easy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
                Professional companions for seniors and travelers who deserve to explore the world safely and comfortably.
              </p>
            </div>

            {/* Modern CTAs inspired by GoMo */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Link href="/contact">
                <Button className="btn-primary group text-lg">
                  Get Started
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button variant="ghost" className="btn-outline group text-lg">
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  View Our Story
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">2K+</p>
                <p className="text-sm text-muted-foreground font-medium">Safe Journeys</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">98%</p>
                <p className="text-sm text-muted-foreground font-medium">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">24/7</p>
                <p className="text-sm text-muted-foreground font-medium">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl overflow-hidden">
                <img 
                  src="/assets/oldsilver/home1.webp" 
                  alt="Professional travel companions - airplane travel assistance" 
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl"
                />
                <div className="absolute inset-8 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-strong animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-success to-accent rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5★</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Excellence</p>
                    <p className="text-sm text-muted-foreground">in every journey</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl shadow-strong animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">Licensed</p>
                  <p className="text-xs text-muted-foreground">& Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
