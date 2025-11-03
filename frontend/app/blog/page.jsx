'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Essential Travel Tips for Seniors: A Complete Guide",
      excerpt: "Discover practical advice for making your travel experience safe, comfortable, and stress-free.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Travel Tips",
      slug: "essential-travel-tips-for-seniors"
    },
    {
      title: "How to Prepare for Air Travel with Mobility Assistance",
      excerpt: "Everything you need to know about navigating airports and flights with mobility support.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Guides",
      slug: "preparing-for-air-travel-mobility"
    },
    {
      title: "Understanding Travel Companion Services: What to Expect",
      excerpt: "Learn about professional travel companion services and how they can make your journey easier.",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Services",
      slug: "understanding-travel-companion-services"
    },
    {
      title: "Medical Considerations for Long-Distance Travel",
      excerpt: "Important health and safety tips for seniors planning extended trips.",
      date: "February 28, 2025",
      readTime: "8 min read",
      category: "Health",
      slug: "medical-considerations-long-distance"
    },
    {
      title: "Family Guide: Arranging Travel Support for Aging Parents",
      excerpt: "A comprehensive resource for families planning safe travel for their loved ones.",
      date: "February 20, 2025",
      readTime: "6 min read",
      category: "Family Resources",
      slug: "family-guide-travel-support"
    },
    {
      title: "Airport Navigation Made Easy: Step-by-Step Guide",
      excerpt: "Breaking down the airport experience into manageable steps with professional support.",
      date: "February 15, 2025",
      readTime: "5 min read",
      category: "Guides",
      slug: "airport-navigation-guide"
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
                  Travel Stories & Guides
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Tips, insights, and stories for stress-free, supported travel. Learn from our experts and real experiences.
                </p>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="glass-card p-6 rounded-3xl overflow-hidden">
                  <img 
                    src="/assets/airplane-wing-view.jpg" 
                    alt="Travel guides and stories" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <article 
                  key={post.slug} 
                  className="glass-card overflow-hidden hover-scale animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4 text-gradient">
                Ready to Plan Your Journey?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get personalized support and a free quote for your upcoming trip.
              </p>
              <Link href="/contact">
                <Button className="btn-primary">Request a Companion</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
