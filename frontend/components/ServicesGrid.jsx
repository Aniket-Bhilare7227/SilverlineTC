import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accessibility,
  Stethoscope,
  Route,
  BriefcaseMedical,
  ArrowRight,
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Route,
      title: "Planning",
      text: "All aspects of your journey are planned with attention to the smallest detail. Your preference for dates, destinations, and flight choices are optimized with our travel planning professionals.",
      gradient: "from-warning to-primary",
      delay: "0ms",
      image: "/assets/travel-map-planning.jpg",
    },
    {
      icon: Stethoscope,
      title: "Personal Assistance",
      text: "Your comfort and safety are of primary concern at all times. Medication reminders, meals, snacks, hydration, and personal hygiene assistance provided throughout your journey.",
      gradient: "from-warning to-primary",
      delay: "100ms",
      image: "/assets/personal-assistance.jpg",
    },
    {
      icon: BriefcaseMedical,
      title: "Equipment Management",
      text: "Expert assistance with wheelchairs, walkers, oxygen, and catheters. Skilled in airport and airline equipment for mobility challenges.",
      gradient: "from-warning to-primary",
      delay: "200ms",
      image: "/assets/medical-equipment.jpg",
    },
    {
      icon: Accessibility,
      title: "Communication",
      text: "We know communication is vital. Your travel companion will communicate to all family, friends, or designated professionals to ensure a seamless travel experience.",
      gradient: "from-warning to-primary",
      delay: "300ms",
      image: "/assets/communication-support.jpg",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-surface to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center glass-card px-6 py-3 mb-6">
            <span className="text-sm font-semibold text-gradient uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-foreground">Everything you need for </span>
            <span className="text-gradient text-glow">safe travel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the moment you leave home until you arrive at your destination,
            we're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="feature-card-modern animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.text}
                  </p>

                  {/* <div className="pt-2">
                    <span className="text-primary font-semibold group-hover:text-accent transition-colors duration-300 inline-flex items-center">
                      Learn more 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="btn-primary text-lg px-12 py-6">
              Explore All Services
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
