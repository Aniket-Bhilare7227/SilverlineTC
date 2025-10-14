import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jan Carper",
      location: "Michigan",
      rating: 5,
      quote: "I want you to know how much I appreciated and valued your service. You saved our evening when you met my husband, Ken, and I at the St. Petersburg airport late. You met us immediately upon arrival, took charge of our situation, and restored oxygen to Ken. We will never forget you.",
      gradient: "from-warning to-primary"
    },
    {
      name: "Cassie", 
      location: "Client Family",
      rating: 5,
      quote: "When making tough decisions about the person you love the most. I needed to bring my dad from West Virginia to Sarasota. Amber worked tirelessly, planning the trip in a short amount of time. She concentrated on his needs and comfort the entire journey and dad was smiling when they arrived.",
      gradient: "from-warning to-primary"
    },
    {
      name: "Mark Porter",
      location: "Client Family",
      rating: 5,
      quote: "GOD SENT! I cannot express the relief that we felt that our dad was in such good hands. This company truly does care about the people that they help. From the first phone call to the final destination, they were professional and kind.",
      gradient: "from-warning to-primary"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-surface via-background to-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center glass-card px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-warning mr-2" />
            <span className="text-sm font-semibold text-gradient uppercase tracking-wide">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-foreground">Stories that </span>
            <span className="text-gradient text-glow">inspire trust</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real experiences from families who chose Silver Line Travel Companions for their loved ones' travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:shadow-strong transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground font-medium">5.0</span>
              </div>

              {/* Quote */}
              <blockquote className="mb-8">
                <p className="text-foreground leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border/30">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 glass-card p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-bold text-gradient mb-2">4.9/5</p>
              <p className="text-muted-foreground font-medium">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient mb-2">2,000+</p>
              <p className="text-muted-foreground font-medium">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient mb-2">98%</p>
              <p className="text-muted-foreground font-medium">Would Recommend</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient mb-2">24/7</p>
              <p className="text-muted-foreground font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
