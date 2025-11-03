// "use client";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Facebook,
//   Instagram,
//   Linkedin,
// } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// export default function Contact() {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     tripDates: "",
//     origin: "",
//     destination: "",
//     assistanceLevel: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast({
//       title: "Thanks for reaching out!",
//       description: "We'll be in touch shortly to discuss your travel needs.",
//     });
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       tripDates: "",
//       origin: "",
//       destination: "",
//       assistanceLevel: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <section className="relative py-20 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
//           <div className="container mx-auto px-6 relative z-10">
//             <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//               <div className="animate-fade-in">
//                 <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
//                   Let's Plan Your Safe, Comfortable Trip
//                 </h1>
//                 <p className="text-xl text-muted-foreground mb-6">
//                   Tell us a few details and we'll reply quickly with options and
//                   a personalized quote.
//                 </p>
//                 <div className="flex flex-col space-y-4">
//                   <div className="flex items-center space-x-3 text-muted-foreground">
//                     <Phone className="w-5 h-5 text-accent" />
//                     <span>
//                       Call us:{" "}
//                       <a
//                         href="tel:+19414046255"
//                         className="text-primary hover:underline"
//                       >
//                         (941) 404-6255
//                       </a>
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-3 text-muted-foreground">
//                     <Mail className="w-5 h-5 text-accent" />
//                     <span>
//                       Email:{" "}
//                       <a
//                         href="mailto:info@silverlinetc.com"
//                         className="text-primary hover:underline"
//                       >
//                         info@silverlinetc.com
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="relative animate-fade-in"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 <div className="glass-card p-6 rounded-3xl overflow-hidden">
//                   <img
//                     src="/assets/communication-support.jpg"
//                     alt="Contact Silver Line Travel Companions"
//                     className="w-full h-auto rounded-2xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-20">
//           <div className="container mx-auto px-6">
//             <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
//               <div className="lg:col-span-2">
//                 <form
//                   onSubmit={handleSubmit}
//                   className="glass-card p-8 animate-fade-in"
//                 >
//                   <h2 className="text-2xl font-heading font-bold mb-6 text-gradient">
//                     Request a Quote
//                   </h2>
//                   <div className="grid md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <Label htmlFor="name">Full Name *</Label>
//                       <Input
//                         id="name"
//                         required
//                         value={formData.name}
//                         onChange={(e) =>
//                           setFormData({ ...formData, name: e.target.value })
//                         }
//                         className="mt-2"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="email">Email *</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         className="mt-2"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) =>
//                           setFormData({ ...formData, phone: e.target.value })
//                         }
//                         className="mt-2"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="tripDates">Trip Dates</Label>
//                       <Input
//                         id="tripDates"
//                         value={formData.tripDates}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             tripDates: e.target.value,
//                           })
//                         }
//                         placeholder="e.g., April 15-20, 2025"
//                         className="mt-2"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <Label htmlFor="origin">Origin City/Airport</Label>
//                       <Input
//                         id="origin"
//                         value={formData.origin}
//                         onChange={(e) =>
//                           setFormData({ ...formData, origin: e.target.value })
//                         }
//                         placeholder="e.g., Austin, TX"
//                         className="mt-2"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="destination">
//                         Destination City/Airport
//                       </Label>
//                       <Input
//                         id="destination"
//                         value={formData.destination}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             destination: e.target.value,
//                           })
//                         }
//                         placeholder="e.g., New York, NY"
//                         className="mt-2"
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <Label htmlFor="assistanceLevel">Assistance Needed</Label>
//                     <Select
//                       value={formData.assistanceLevel}
//                       onValueChange={(value) =>
//                         setFormData({ ...formData, assistanceLevel: value })
//                       }
//                     >
//                       <SelectTrigger className="mt-2">
//                         <SelectValue placeholder="Select assistance level" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="mobility">
//                           Mobility Assistance
//                         </SelectItem>
//                         <SelectItem value="medical">
//                           Medical-Aware Support
//                         </SelectItem>
//                         <SelectItem value="door-to-door">
//                           Door-to-Door Service
//                         </SelectItem>
//                         <SelectItem value="other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className="mb-6">
//                     <Label htmlFor="message">Additional Notes</Label>
//                     <Textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       placeholder="Tell us about any special requirements or questions..."
//                       className="mt-2 min-h-[120px]"
//                     />
//                   </div>

//                   <Button type="submit" className="btn-primary w-full">
//                     Request a Quote
//                   </Button>
//                 </form>
//               </div>

//               <div
//                 className="space-y-6 animate-fade-in"
//                 style={{ animationDelay: "0.1s" }}
//               >
//                 <div className="glass-card p-6">
//                   <h3 className="text-xl font-heading font-bold mb-4">
//                     Contact Information
//                   </h3>
//                   <div className="space-y-4">
//                     {/* <div className="flex items-start space-x-3">
//                       <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
//                       <div>
//                         <p className="text-muted-foreground">123 Main Street</p>
//                         <p className="text-muted-foreground">
//                           Austin, TX 78701
//                         </p>
//                       </div>
//                     </div> */}
//                     <div className="flex items-center space-x-3">
//                       <Phone className="w-5 h-5 text-accent flex-shrink-0" />
//                       <a
//                         href="tel:+19414046255"
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                       >
//                         (941) 404-6255
//                       </a>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Mail className="w-5 h-5 text-accent flex-shrink-0" />
//                       <a
//                         href="mailto:info@silverlinetc.com"
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                       >
//                         info@silverlinetc.com
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="glass-card p-6">
//                   <h3 className="text-xl font-heading font-bold mb-4">
//                     Follow Us
//                   </h3>
//                   <div className="flex space-x-4">
//                     <a
//                       href="#"
//                       className="w-12 h-12 rounded-full flex items-center justify-center 
//                  bg-gradient-to-br from-[hsl(var(--warning))] to-[hsl(var(--primary))] 
//                  hover:shadow-glow transition-all"
//                     >
//                       <Facebook className="w-6 h-6 text-white" />
//                     </a>
//                     <a
//                       href="#"
//                       className="w-12 h-12 rounded-full flex items-center justify-center 
//                  bg-gradient-to-br from-[hsl(var(--warning))] to-[hsl(var(--primary))] 
//                  hover:shadow-glow transition-all"
//                     >
//                       <Instagram className="w-6 h-6 text-white" />
//                     </a>
//                     <a
//                       href="#"
//                       className="w-12 h-12 rounded-full flex items-center justify-center 
//                  bg-gradient-to-br from-[hsl(var(--warning))] to-[hsl(var(--primary))] 
//                  hover:shadow-glow transition-all"
//                     >
//                       <Linkedin className="w-6 h-6 text-white" />
//                     </a>
//                   </div>
//                 </div>

//                 <div className="glass-card p-6">
//                   <h3 className="text-xl font-heading font-bold mb-4">
//                     Business Hours
//                   </h3>
//                   <div className="space-y-2 text-muted-foreground">
//                     <p>Monday - Friday: 8am - 8pm</p>
//                     <p>Saturday: 9am - 6pm</p>
//                     <p>Sunday: 10am - 4pm</p>
//                     <p className="text-sm text-accent mt-4">
//                       24/7 emergency support available
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }


"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tripDates: "",
    origin: "",
    destination: "",
    assistanceLevel: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thanks for reaching out!",
      description: "We'll be in touch shortly to discuss your travel needs.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      tripDates: "",
      origin: "",
      destination: "",
      assistanceLevel: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
                  Let's Plan Your Safe, Comfortable Trip
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Tell us a few details and we'll reply quickly with options and
                  a personalized quote.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>
                      Call us:{" "}
                      <a
                        href="tel:+19414046255"
                        className="text-primary hover:underline"
                      >
                        (941) 404-6255
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:info@silverlinetc.com"
                        className="text-primary hover:underline"
                      >
                        info@silverlinetc.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="relative animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="glass-card p-6 rounded-3xl overflow-hidden">
                  <img
                    src="/assets/communication-support.jpg"
                    alt="Contact Silver Line Travel Companions"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              <div className="lg:col-span-2">
                <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 animate-fade-in text-lg md:text-xl"
                >
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
                    Request a Quote
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name" className="text-lg md:text-xl">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2 text-lg md:text-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-lg md:text-xl">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2 text-lg md:text-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="phone" className="text-lg md:text-xl">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2 text-lg md:text-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tripDates" className="text-lg md:text-xl">
                        Trip Dates
                      </Label>
                      <Input
                        id="tripDates"
                        value={formData.tripDates}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tripDates: e.target.value,
                          })
                        }
                        placeholder="e.g., April 15-20, 2025"
                        className="mt-2 text-lg md:text-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="origin" className="text-lg md:text-xl">
                        Origin City/Airport
                      </Label>
                      <Input
                        id="origin"
                        value={formData.origin}
                        onChange={(e) =>
                          setFormData({ ...formData, origin: e.target.value })
                        }
                        placeholder="e.g., Austin, TX"
                        className="mt-2 text-lg md:text-xl"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="destination"
                        className="text-lg md:text-xl"
                      >
                        Destination City/Airport
                      </Label>
                      <Input
                        id="destination"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            destination: e.target.value,
                          })
                        }
                        placeholder="e.g., New York, NY"
                        className="mt-2 text-lg md:text-xl"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="assistanceLevel"
                      className="text-lg md:text-xl"
                    >
                      Assistance Needed
                    </Label>
                    <Select
                      value={formData.assistanceLevel}
                      onValueChange={(value) =>
                        setFormData({ ...formData, assistanceLevel: value })
                      }
                    >
                      <SelectTrigger className="mt-2 text-lg md:text-xl">
                        <SelectValue placeholder="Select assistance level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobility" className="text-lg md:text-xl">
                          Mobility Assistance
                        </SelectItem>
                        <SelectItem value="medical" className="text-lg md:text-xl">
                          Medical-Aware Support
                        </SelectItem>
                        <SelectItem value="door-to-door" className="text-lg md:text-xl">
                          Door-to-Door Service
                        </SelectItem>
                        <SelectItem value="other" className="text-lg md:text-xl">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message" className="text-lg md:text-xl">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about any special requirements or questions..."
                      className="mt-2 min-h-[120px] text-lg md:text-xl"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg md:text-xl">
                    Request a Quote
                  </Button>
                </form>
              </div>

              {/* Contact Info & Follow Us */}
              <div
                className="space-y-6 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="glass-card p-6 text-lg md:text-xl">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <a
                        href="tel:+19414046255"
                        className="hover:text-primary transition-colors"
                      >
                        (941) 404-6255
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <a
                        href="mailto:info@silverlinetc.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@silverlinetc.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 text-lg md:text-xl">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full flex items-center justify-center 
                 bg-gradient-to-br from-[hsl(var(--warning))] to-[hsl(var(--primary))] 
                 hover:shadow-glow transition-all"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full flex items-center justify-center 
                 bg-gradient-to-br from-[hsl(var(--warning))] to-[hsl(var(--primary))] 
                 hover:shadow-glow transition-all"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full flex items-center justify-center 
                 bg-gradient-to-br from-[hsl(var(--warning))] to-[hsl(var(--primary))] 
                 hover:shadow-glow transition-all"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                <div className="glass-card p-6 text-lg md:text-xl">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 8am - 8pm</p>
                    <p>Saturday: 9am - 6pm</p>
                    <p>Sunday: 10am - 4pm</p>
                    <p className="text-sm text-accent mt-4">
                      24/7 emergency support available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
