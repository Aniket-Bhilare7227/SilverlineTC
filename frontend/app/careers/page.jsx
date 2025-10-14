'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const positions = [
    {
      title: "Travel Companion - Licensed Nurse",
      type: "Full-time",
      location: "Nationwide",
      description: "Join our team of compassionate professionals providing safe travel support for seniors and special needs travelers."
    },
    {
      title: "Travel Companion - Certified Caregiver",
      type: "Part-time / Contract",
      location: "Major US Cities",
      description: "Flexible opportunities to support travelers with mobility assistance and companionship during their journeys."
    },
    {
      title: "Operations Coordinator",
      type: "Full-time",
      location: "Austin, TX",
      description: "Coordinate travel logistics, companion scheduling, and client communications for seamless travel experiences."
    }
  ];

  const benefits = [
    { icon: Heart, title: "Meaningful Work", text: "Make a real difference in people's lives every day" },
    { icon: TrendingUp, title: "Competitive Pay", text: "Industry-leading compensation and benefits" },
    { icon: Users, title: "Supportive Team", text: "Join a caring, professional community" },
    { icon: Briefcase, title: "Flexible Schedule", text: "Work-life balance with flexible assignments" }
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
                  Join Our Caring Team
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Help us make travel accessible and enjoyable for everyone who needs compassionate support. Build a meaningful career while making a real difference.
                </p>
                <Link href="/contact">
                  <Button size="lg">View Open Positions</Button>
                </Link>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img 
                  src="/assets/careers-hero.jpg" 
                  alt="Join the SilverlineTC team" 
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Why Join SilverlineTC?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Open Positions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {positions.map((position, index) => (
                <div key={position.title} className="glass-card p-8 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="btn-primary">Apply Now</Button>
                    </Link>
                  </div>
                  <p className="text-muted-foreground">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4 text-gradient">
                Don't See the Right Role?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented, compassionate professionals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link href="/contact">
                <Button className="btn-primary">Get In Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
