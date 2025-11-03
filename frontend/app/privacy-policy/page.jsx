'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 animate-fade-in">
              <h1 className="text-4xl font-heading font-bold mb-8 text-gradient">Privacy Policy</h1>
              
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> March 15, 2025
              </p>

              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Introduction</h2>
                  <p className="leading-relaxed">
                    This Privacy Policy explains how SilverlineTC ("we," "us," or "our") collects, uses, and safeguards 
                    your information when you use our travel companion services and visit our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Information We Collect</h2>
                  <p className="leading-relaxed mb-4">We collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact details (name, email, phone number, address)</li>
                    <li>Travel information (dates, destinations, preferences)</li>
                    <li>Medical and mobility information necessary for safe travel support</li>
                    <li>Payment and billing information</li>
                    <li>Communications between you and our team</li>
                    <li>Website usage data (cookies, IP address, browser type)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">How We Use Your Information</h2>
                  <p className="leading-relaxed mb-4">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our travel companion services</li>
                    <li>Coordinate with airlines, hotels, and healthcare providers</li>
                    <li>Communicate with you and your family about travel arrangements</li>
                    <li>Process payments and maintain financial records</li>
                    <li>Ensure safety and security during travel</li>
                    <li>Comply with legal obligations</li>
                    <li>Send service updates and promotional communications (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Information Sharing</h2>
                  <p className="leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Travel companions and healthcare professionals providing your service</li>
                    <li>Airlines, hotels, and other travel service providers</li>
                    <li>Emergency contacts and family members (as authorized by you)</li>
                    <li>Healthcare providers (with your consent and as necessary for care)</li>
                    <li>Payment processors and financial institutions</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We do not sell or rent your personal information to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Data Security</h2>
                  <p className="leading-relaxed">
                    We implement industry-standard security measures to protect your information, including encryption, 
                    secure servers, and restricted access. However, no method of transmission over the internet is 100% 
                    secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Data Retention</h2>
                  <p className="leading-relaxed">
                    We retain your information for as long as necessary to provide our services, comply with legal 
                    obligations, resolve disputes, and enforce our agreements. Medical and travel records are retained 
                    in accordance with healthcare and business record-keeping requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Your Rights</h2>
                  <p className="leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent for data processing (where applicable)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Cookies and Tracking</h2>
                  <p className="leading-relaxed">
                    We use cookies and similar technologies to enhance your website experience, analyze usage patterns, 
                    and provide personalized content. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Children's Privacy</h2>
                  <p className="leading-relaxed">
                    Our services are not directed to individuals under 18. We do not knowingly collect information from 
                    children without parental consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Changes to This Policy</h2>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
                    the updated policy on our website with a new "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> privacy@silverlinetc.com</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Mail:</strong> SilverlineTC, 123 Main Street, Austin, TX 78701</p>
                  </div>
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
