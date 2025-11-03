'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    {
      category: "Travel Arrangements",
      questions: [
        {
          q: "How are the travel arrangements made?",
          a: "Our staff at Silver Line puts the utmost emphasis on the clients' request for their desired airport, time frame for travel, physical comfort, and safety. If travel includes relocating from a community where professional staff is assisting, we coordinate travel with those persons as well for a seamless transition to your new home. An itinerary is formulated for your review and acceptance, and we take it from there. All details are managed and confirmed prior to travel and communicated to whomever you desire. A match for the perfect travel companion will be made."
        },
        {
          q: "What happens if my flight is delayed or cancelled?",
          a: "Unfortunately, this is becoming more common with air travel. Our team is prepared to navigate the necessary modifications for you as we remain by your side. Your comfort and safety are our top priorities. All parties involved are notified immediately as travel plans are updated."
        },
        {
          q: "Can you remain with the traveler for an extended trip?",
          a: "Yes. Separate sleeping accommodations will be made for extended travel. Some such trips have included cruises, weddings, graduations, overseas travel or extended holiday visits with family."
        }
      ]
    },
    {
      category: "Billing & Payment",
      questions: [
        {
          q: "How is the billing configured?",
          a: "Each journey is unique. Prices and fees vary depending on flight availability, preferences, level of care and duration. We make every effort to minimize ground time for our team members upon completion of your journey while assuring sufficient time is built in for delays and a successful closure to your trip. Discounts are given for extended travel requests. Payments gladly accepted are cash, check, Visa, Mastercard, and some forms of electronic payment."
        }
      ]
    },
    {
      category: "Medical & Equipment",
      questions: [
        {
          q: "How is medication managed?",
          a: "Excellent question! We do employ nurses as part of the Silver Line team yet our policy dictates medication cannot be directly administered. We gladly remind the traveler to take their medications as prescribed. In the case of diabetic testing, if using the finger prick method, the client must be able to complete this independently."
        },
        {
          q: "Can I take my oxygen on the plane?",
          a: "Of course. Our staff manages the necessary documentation for use of oxygen in air travel. You must have your own approved oxygen supply."
        }
      ]
    },
    {
      category: "Travel with Pets",
      questions: [
        {
          q: "Can I travel with my pet?",
          a: "That would be wonderful! Silver Line will provide the forms needed to facilitate bringing your loyal companion on board. Airlines differ on their regulations for pet transport, and we gladly assist in this process. We are animal lovers ourselves and are happy to travel with fluffy if your traveling plans take you in different directions at different times. In that scenario we manage all aspects of delivering fluffy safe and sound to your chosen destination."
        }
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
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our travel companion services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((section, sectionIndex) => (
                <div key={section.category} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                  <h2 className="text-2xl font-heading font-bold mb-6 text-gradient">{section.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`} className="glass-card px-6">
                        <AccordionTrigger className="text-left font-semibold hover:text-primary">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4 text-gradient">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to help. Reach out and we'll answer any questions you have about our services.
              </p>
              <Link href="/contact">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
