"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Heart,
  Shield,
  Users,
  Award,
  Plane,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
                  Assisted Travel for the Ones You Love
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  More than 50 years of combined experience as occupational
                  therapists caring for the senior population.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services">
                    <Button size="lg">Our Services</Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="relative animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="glass-card p-6 rounded-3xl overflow-hidden">
                  <img
                    src="/assets/oldsilver/home2.png"
                    alt="Compassionate travel companion services"
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Images */}
        <section
          id="about"
          className="py-20 bg-gradient-to-br from-surface/50 to-background scroll-mt-20"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-12">
              <div className="relative animate-fade-in">
                <div className="glass-card p-6 rounded-2xl">
                  <img
                    src="/assets/founders-group.webp"
                    alt="Amber Lyon and Danielle Vance - Co-Owners"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="text-center mt-4">
                    <p className="font-bold text-xl text-gradient">
                      Amber Lyon & Danielle Vance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      OTR/L, Co-Owners
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      50+ Years Combined Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 lg:p-12 animate-fade-in">
                <h2 className="text-4xl font-heading font-bold mb-6 text-gradient">
                  About Us
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  As co-owners of Silver Line Travel Companions,{" "}
                  <strong>Amber Lyon, OTR/L</strong>, and{" "}
                  <strong>Danielle Vance, OTR/L</strong>, have more than{" "}
                  <strong>50 years of combined experience</strong> as
                  occupational therapists caring for the senior population.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We will provide a safe and caring non-emergency medical travel
                  experience for you and/or your loved one.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We saw a great need for a service to assist those who desire
                  to travel or relocate close to family and friends. Family
                  members were always willing but not always comfortable
                  assisting a loved one with mobility challenges through the
                  maze of travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section with Image */}
        <section id="mission" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="glass-card p-8 lg:p-12 animate-fade-in">
                <h2 className="text-4xl font-heading font-bold mb-6 text-gradient">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  <strong>Silver Line was incorporated in 2006</strong> to meet
                  the needs of our clients to bring families together and
                  provide travel opportunities not previously thought possible.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team consists of{" "}
                  <strong>licensed medical professionals</strong> which include
                  occupational therapists, physical therapists, nurses,
                  emergency medical technicians, and paramedics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our travel companions have passed stringent background checks
                  and thorough training from Amber and Danielle streamlining
                  exemplary travel services for the concierge experience.
                </p>
              </div>
              <div
                className="relative animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="glass-card p-6 rounded-3xl overflow-hidden">
                  <img
                    src="/assets/oldsilver/about1.png"
                    alt="Professional travel planning and assistance"
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section with Enhanced Cards */}
        <section
          id="values"
          className="py-20 bg-gradient-to-br from-surface/50 to-background scroll-mt-20"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold text-center mb-4 text-gradient">
              Our Values
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              These core principles guide every interaction and decision we make
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  text: "We lead with empathy and patience in every interaction, treating each traveler like family.",
                  gradient: "from-warning to-primary",
                },
                {
                  icon: Shield,
                  title: "Safety",
                  text: "Your comfort and safety guide every decision we make, with trained professionals always ready.",
                  gradient: "from-warning to-primary",
                },
                {
                  icon: Users,
                  title: "Dignity",
                  text: "We respect each traveler's independence and preferences, empowering rather than limiting.",
                  gradient: "from-warning to-primary",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  text: "Professional, licensed, and dedicated to quality service that exceeds expectations.",
                  gradient: "from-warning to-primary",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="glass-card p-6 hover-scale animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-glow`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission Statement Card */}
            <div className="glass-card p-8 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">
                OUR MISSION IS TO PROVIDE ASSISTED TRAVEL FOR THE ONES YOU LOVE
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                All Silver Line travel companions are experienced travelers and
                carry current passports for the international travel needs of
                our clients.
              </p>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold text-center mb-4 text-gradient">
              Why Choose Silver Line
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              What sets us apart in travel companion services
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Plane,
                  title: "2,000+ Safe Journeys",
                  text: "Trusted by thousands of families for domestic and international travel assistance.",
                },
                {
                  icon: MapPin,
                  title: "Nationwide Coverage",
                  text: "Professional companions available across the country, ready when you need them.",
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  text: "Round-the-clock support and care, because travel doesn't follow a 9-to-5 schedule.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-8 text-center hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-warning to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-heading font-bold mb-6 text-gradient">
              Ready to Travel with Confidence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For peace of mind and safety for yourself or your loved ones
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Get Started Today</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
