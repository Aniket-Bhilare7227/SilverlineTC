'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 animate-fade-in">
              <h1 className="text-4xl font-heading font-bold mb-8 text-gradient">Terms of Service</h1>
              
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> March 15, 2025
              </p>

              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Agreement to Terms</h2>
                  <p className="leading-relaxed">
                    By accessing or using SilverlineTC's services, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                    prohibited from using our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Services Description</h2>
                  <p className="leading-relaxed mb-4">
                    SilverlineTC provides professional travel companion services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Airport and flight assistance</li>
                    <li>Door-to-door travel companionship</li>
                    <li>Medical-aware support during travel</li>
                    <li>Mobility assistance and coordination</li>
                    <li>Travel planning and logistics support</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Our services are designed to support safe and comfortable travel but do not constitute medical care 
                    or emergency medical services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Booking and Payments</h2>
                  <p className="leading-relaxed mb-4">
                    <strong>Quotes:</strong> All quotes are estimates based on information provided and may be adjusted 
                    based on actual service requirements.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>Payment Terms:</strong> Payment is required in advance of services. We accept major credit 
                    cards, bank transfers, and approved payment methods.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>Additional Costs:</strong> Clients are responsible for all companion travel expenses 
                    including airfare, accommodation, meals, and ground transportation as outlined in the service agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Cancellations and Refunds</h2>
                  <p className="leading-relaxed mb-4">
                    <strong>Client Cancellations:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>More than 14 days before travel: Full refund minus administrative fee</li>
                    <li>7-14 days before travel: 50% refund</li>
                    <li>Less than 7 days before travel: No refund (non-refundable expenses may apply)</li>
                  </ul>
                  <p className="leading-relaxed mt-4 mb-4">
                    <strong>Service Provider Cancellations:</strong> If we must cancel, you will receive a full refund 
                    or the option to reschedule without penalty.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Emergency Cancellations:</strong> Medical emergencies and extenuating circumstances will be 
                    evaluated on a case-by-case basis.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Client Responsibilities</h2>
                  <p className="leading-relaxed mb-4">Clients must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information about health, mobility, and assistance needs</li>
                    <li>Disclose any medical conditions, medications, or special requirements</li>
                    <li>Maintain valid travel documents (passport, visas, medical documentation)</li>
                    <li>Arrange appropriate travel insurance</li>
                    <li>Follow companion and airline safety instructions</li>
                    <li>Treat companions with respect and courtesy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Scope of Services</h2>
                  <p className="leading-relaxed mb-4">
                    <strong>What We Provide:</strong> Companions are trained professionals who provide assistance, 
                    support, and companionship during travel.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>What We Don't Provide:</strong> Our services do not include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Emergency medical care or nursing services</li>
                    <li>Physical lifting or extensive mobility assistance requiring medical equipment</li>
                    <li>Behavioral management or specialized care beyond our scope</li>
                    <li>Guarantee of airline, hotel, or third-party services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Limitations of Liability</h2>
                  <p className="leading-relaxed">
                    SilverlineTC and its companions will provide services with reasonable care and skill. However, 
                    we are not liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Flight delays, cancellations, or changes by airlines</li>
                    <li>Lost or damaged luggage</li>
                    <li>Medical emergencies or health complications</li>
                    <li>Acts of God, natural disasters, or unforeseen circumstances</li>
                    <li>Third-party service failures</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Our total liability for any claim shall not exceed the amount paid for services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Insurance and Licensing</h2>
                  <p className="leading-relaxed">
                    SilverlineTC maintains appropriate business liability insurance and ensures all companions are 
                    properly licensed, background-checked, and trained. Clients are strongly encouraged to maintain 
                    their own travel and medical insurance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Privacy and Confidentiality</h2>
                  <p className="leading-relaxed">
                    We respect your privacy and handle all personal and medical information in accordance with our 
                    Privacy Policy and applicable laws, including HIPAA where applicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Modifications to Service</h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify or discontinue services with reasonable notice. Significant changes 
                    to booked services will be communicated to clients in advance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Dispute Resolution</h2>
                  <p className="leading-relaxed">
                    Any disputes arising from these Terms or our services shall be resolved through binding arbitration 
                    in Travis County, Texas, in accordance with Texas state law. Both parties agree to waive the right 
                    to jury trial.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Governing Law</h2>
                  <p className="leading-relaxed">
                    These Terms are governed by the laws of the State of Texas, United States, without regard to 
                    conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Changes to Terms</h2>
                  <p className="leading-relaxed">
                    We may update these Terms of Service periodically. Continued use of our services after changes 
                    constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Contact Information</h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> legal@silverlinetc.com</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Mail:</strong> SilverlineTC, 123 Main Street, Austin, TX 78701</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Severability</h2>
                  <p className="leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
                    limited or eliminated to the minimum extent necessary, and the remaining provisions will remain 
                    in full force and effect.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
