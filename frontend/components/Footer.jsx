

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/oldsilver/logoofsilverline.webp"; // Replace with your actual logo path

const Footer = () => {
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
   // { label: "Careers", href: "/careers" }
  ];

  const resourceLinks = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 text-base md:text-lg"> {/* Increased base font */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {/* Logo & Company Info */}
          <div className="col-span-2 space-y-4 flex flex-col items-start">
            <div className="w-36 h-auto mb-4">
              <Image src={Logo} alt="Company Logo" className="w-full h-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-lg md:text-xl">
              Professional travel companions providing safe,Lets Travel.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mt-2">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg md:text-xl mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg md:text-xl">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg md:text-xl mb-3">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg md:text-xl">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg md:text-xl mb-3">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg md:text-xl">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg md:text-xl mb-3">Contact</h4>
            <div className="space-y-2 text-lg md:text-xl">
              {/* <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">123 Main Street</p>
                  <p className="text-primary-foreground/80">Austin, TX 78701</p>
                </div>
              </div> */}

              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <a href="tel:+19414046255" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (941) 404-6255
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <a href="mailto:info@silverlinetc.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@silverlinetc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-lg md:text-xl">
            <p className="text-primary-foreground/80">
              © 2025 SilverlineTC. Thank you Aniket.
            </p>
            <p className="text-primary-foreground/60">
           Testing Server.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
