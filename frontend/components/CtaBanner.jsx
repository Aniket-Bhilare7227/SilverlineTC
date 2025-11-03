import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Heart } from "lucide-react";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="floating-element-delayed absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Heart className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            Ready to travel with
            <br />
            <span className="text-white/90">confidence again?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of families who trust SilverlineTC for safe, comfortable journeys. 
            Get your personalized quote in under 2 minutes.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-bold shadow-strong group rounded-2xl"
              >
                Get Your Free Quote
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <div className="flex items-center">
              <span className="text-white/70 text-lg hidden lg:block mr-8">or</span>
              
              <a 
                href="tel:+19414046255" 
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-xl">(941) 404-6255</p>
                  <p className="text-white/80 text-sm">Speak with a specialist now</p>
                </div>
              </a>
            </div>
          </div>

          {/* Trust elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 font-medium">Free consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 font-medium">No hidden fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-white/90 font-medium">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
