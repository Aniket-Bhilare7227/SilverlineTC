'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Plane, Heart, Shield } from "lucide-react";

export default function Partners() {
  const partnerCategories = [
    {
      icon: Plane,
      title: "Airline Partners",
      description: "Coordinated assistance programs with major airlines"
    },
    {
      icon: Heart,
      title: "Care Communities",
      description: "Trusted by senior living facilities nationwide"
    },
    {
      icon: Shield,
      title: "Insurance Providers",
      description: "Accepted by Medicare Advantage and private plans"
    },
    {
      icon: Building2,
      title: "Healthcare Facilities",
      description: "Partnerships with medical centers and clinics"
    }
  ];

  const partners = [
    {
      name: "Delta Airlines",
      category: "Airline Partner",
      description: "Coordinated travel assistance and priority boarding arrangements for our clients."
    },
    {
      name: "United Airlines",
      category: "Airline Partner",
      description: "Special assistance coordination and wheelchair services for seamless travel."
    },
    {
      name: "American Airlines",
      category: "Airline Partner",
      description: "Dedicated support for travelers with mobility and medical assistance needs."
    },
    {
      name: "Sunrise Senior Living",
      category: "Care Community",
      description: "Trusted partnership providing travel support for residents and their families."
    },
    {
      name: "Brookdale Senior Living",
      category: "Care Community",
      description: "Comprehensive travel companion services for community residents nationwide."
    },
    {
      name: "Medicare Advantage Plans",
      category: "Insurance Partner",
      description: "Accepted provider for non-emergency medical transportation benefits."
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
                  Our Trusted Partners
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Working together with leading airlines, care communities, and healthcare providers to deliver exceptional travel support.
                </p>
                <Link href="/contact">
                  <Button size="lg">Become a Partner</Button>
                </Link>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="glass-card p-6 rounded-3xl overflow-hidden">
                  <img 
                    src="/assets/plane-on-tarmac.jpg" 
                    alt="Partnership opportunities with Silver Line" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold text-center mb-12 text-gradient">Partnership Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
              {partnerCategories.map((category, index) => (
                <div key={category.title} className="glass-card p-6 text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-heading font-bold text-center mb-12">Current Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <div key={partner.name} className="glass-card p-8 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4"></div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {partner.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold mt-4 mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4 text-gradient">
                Become a Partner
              </h2>
              <p className="text-muted-foreground mb-8">
                Are you an airline, healthcare provider, or senior care community interested in partnering with SilverlineTC? Let's talk about how we can work together.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
