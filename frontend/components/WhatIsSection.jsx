import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Users, Shield, Heart, Phone } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-surface via-background to-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="relative animate-fade-in">
            <div className="glass-card p-6 rounded-3xl overflow-hidden">
              <img 
                src="/assets/oldsilver/silverine1.jpg" 
                alt="Airport assistance and travel support services" 
                className="w-full h-[400px] object-cover rounded-2xl mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-heading font-bold text-gradient mb-2">Professional Assistance</h3>
                <p className="text-sm text-muted-foreground">From planning to arrival</p>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <div className="inline-flex items-center glass-card px-4 py-2">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-semibold text-gradient uppercase tracking-wide">What We Do</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-bold">
                <span className="text-foreground">What is a </span>
                <span className="text-gradient text-glow">Travel Companion?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                A travel companion is an extra hand when you need it most. For many people of all ages, 
                long-distance travel seems impossible, but not anymore.
              </p>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Whether you or someone you care about has mobility and/or cognitive issues, suffers from anxiety, 
                  requires medical assistance, or just doesn't like traveling alone, our registered nurse travel 
                  companions make every journey manageable.
                </p>
                
                <p>
                  From helping with travel logistics to providing personalized assistance throughout your journey, 
                  we provide comprehensive support to make traveling a reality again!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Learn More About Our Services
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              
              <a href="tel:+19414046255" className="flex items-center space-x-3 glass-card px-6 py-3 hover:shadow-medium transition-all duration-300 group">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold text-foreground">(941) 404-6255</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
