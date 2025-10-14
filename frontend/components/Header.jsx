// import { Button } from "@/components/ui/button";
// import { Menu, Phone, Sparkles } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigation = [
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//   // { label: "Stories", href: "/blog" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="glass-nav sticky top-0 z-50">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-4">
//           <div className="relative">
//             <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-medium">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-glow"></div>
//           </div>
//           <div>
//             <h1 className="text-2xl font-heading font-bold text-gradient">SilverlineTC</h1>
//             <p className="text-xs text-muted-foreground font-medium tracking-wide">TRAVEL COMPANIONS</p>
//           </div>
//         </Link>

//         {/* Navigation + CTA aligned to right */}
//         <div className="hidden lg:flex items-center ml-auto space-x-8">
//           <nav className="flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
//               >
//                 {item.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Buttons */}
//           <a
//             href="tel:+19414046255"
//             className="flex items-center space-x-3 glass-card px-4 py-2 hover:shadow-medium transition-all duration-300 group"
//           >
//             <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
//               <Phone className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-foreground">(941) 404-6255</p>
//               <p className="text-xs text-muted-foreground">Call now</p>
//             </div>
//           </a>

//           <Link href="/contact">
//             <Button className="btn-primary">
//               Get Started
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Menu */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="lg:hidden p-3 glass-card hover:shadow-medium transition-all duration-300"
//         >
//           <Menu size={20} />
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden mt-6 glass-card p-6 animate-fade-in">
//           <nav className="flex flex-col space-y-4">
//             {navigation.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 border-b border-border/50 last:border-0"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <div className="pt-4 space-y-4">
//               <a href="tel:+19414046255" className="flex items-center space-x-3 text-primary">
//                 <Phone size={18} />
//                 <span className="font-semibold">(941) 404-6255</span>
//               </a>
//               <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
//                 <Button className="btn-primary w-full">
//                   Get Started
//                 </Button>
//               </Link>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


'use client'

import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    // { label: "Stories", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto px-10 py-4 flex items-center justify-between">
        
        {/* Logo as Image */}
        <Link href="/" className="flex items-center">
          <div className="w-32 h-22">
            <img 
              src="/assets/oldsilver/logo.webp"  // <-- Replace with your logo image path
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Navigation + CTA aligned to right */}
        <div className="hidden lg:flex items-center ml-auto space-x-8">
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <a
            href="tel:+19414046255"
            className="flex items-center space-x-3 glass-card px-4 py-2 hover:shadow-medium transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">(941) 404-6255</p>
              <p className="text-xs text-muted-foreground">Call now</p>
            </div>
          </a>

          <Link href="/contact">
            <Button className="btn-primary">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 glass-card hover:shadow-medium transition-all duration-300"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-6 glass-card p-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 border-b border-border/50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <a href="tel:+19414046255" className="flex items-center space-x-3 text-primary">
                <Phone size={18} />
                <span className="font-semibold">(941) 404-6255</span>
              </a>
              <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="btn-primary w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
