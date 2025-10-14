import { Shield, Award, Globe, Zap } from "lucide-react";

const TrustBar = () => {
  const badges = [
    {
      icon: Shield,
      label: "Licensed & Insured",
      description: "Fully certified professionals",
      gradient: "from-warning to-primary"
    },
    {
      icon: Award,
      label: "Background-Checked",
      description: "Thoroughly vetted companions",
      gradient: "from-warning to-primary"
    },
    {
      icon: Globe,
      label: "Nationwide Coverage",
      description: "Travel anywhere you need",
      gradient: "from-warning to-primary"
    },
    {
      icon: Zap,
      label: "24/7 Support",
      description: "Always here when you need us",
      gradient: "from-warning to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-surface via-background to-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient mb-4">
            Your safety is our priority
          </h2>
          <p className="text-lg text-muted-foreground">
            Every companion meets our highest standards for care and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="trust-badge-modern group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${badge.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-foreground text-lg">
                    {badge.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 glass-card p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">2,000+</p>
              <p className="text-muted-foreground font-medium">Safe Journeys Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">98%</p>
              <p className="text-muted-foreground font-medium">Client Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">5★</p>
              <p className="text-muted-foreground font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
