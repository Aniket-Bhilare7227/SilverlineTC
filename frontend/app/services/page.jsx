'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Car, Stethoscope, MapPin, Clock, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: "Planning",
      summary: "All aspects of your journey are planned with attention to the smallest detail.",
      features: [
        "Dates, destinations, and flight choices optimized",
        "Medical backgrounds and skillful planning",
        "Individual challenges considered",
        "Travel planning by professionals",
        "Coordination with all parties involved"
      ],
    },
    {
      icon: Plane,
      title: "Personal Assistance",
      summary: "Your comfort and safety are of primary concern at all times.",
      features: [
        "Medication reminders",
        "Meals, snacks and hydration provided",
        "Personal hygiene assistance",
        "All luggage tagged and transported",
        "Checked and carry-on items managed"
      ]
    },
    {
      icon: Stethoscope,
      title: "Equipment Management",
      summary: "Experts in mobility and safety with various medical equipment.",
      features: [
        "Wheelchair management",
        "Walker assistance",
        "Oxygen equipment coordination",
        "Catheter management",
        "Airport and airline equipment expertise"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
                  Our Services
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Silver Line designs and implements a specialized plan of travel for your non-emergency travel needs from door to door.
                </p>
                <Link href="/contact">
                  <Button size="lg">Get a Free Quote</Button>
                </Link>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="glass-card p-6 rounded-3xl overflow-hidden">
                  <img 
                    src="/assets/oldsilver/services1.png" 
                    alt="Senior travel assistance and companion services" 
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={service.title} className="glass-card overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-8 p-8`}>
                    {index % 2 === 0 ? (
                      <>
                        <div>
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-gradient">{service.title}</h2>
                          </div>
                          <p className="text-muted-foreground mb-6 text-lg">{service.summary}</p>
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start space-x-3">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                          <img 
                            src={index === 0 ? "/assets/travel-map-planning.jpg" : index === 1 ? "/assets/personal-assistance.jpg" : "/assets/medical-equipment.jpg"} 
                            alt={service.title} 
                            className="w-full h-full object-cover min-h-[300px]"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="rounded-2xl overflow-hidden order-2 md:order-1">
                          <img 
                            src={index === 0 ? "/assets/oldsilver/services2.png" : index === 1 ? "/assets/personal-assistance.jpg" : "/assets/medical-equipment.jpg"} 
                            alt={service.title} 
                            className="w-full h-full object-cover min-h-[300px]"
                          />
                        </div>
                        <div className="order-1 md:order-2">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-gradient">{service.title}</h2>
                          </div>
                          <p className="text-muted-foreground mb-6 text-lg">{service.summary}</p>
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start space-x-3">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-6 text-gradient">Transparent Pricing</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-left">Quotes based on distance, duration, and level of support needed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-left">No hidden fees—travel and lodging line items included</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-left">Insurance and documentation support available</p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="btn-primary">Get a Personalized Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
