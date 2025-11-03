const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Tell us about the trip",
      text: "Share dates, destinations, mobility needs, and preferences.",
      gradient: "bg-gradient-to-r from-warning to-primary",
    },
    {
      number: "2",
      title: "We plan & prepare",
      text: "We coordinate logistics, seating, assistance, and special requests.",
      gradient: "bg-gradient-to-r from-accent to-primary",
    },
    {
      number: "3",
      title: "Travel together",
      text: "Your companion is with you—door to door—for a calm, safe journey.",
      gradient: "bg-gradient-to-r from-success to-primary",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, stress-free process designed to give you and your family
            complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card text-center">
              {/* Step Number */}
              <div
                className={`w-16 h-16 ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl`}
              >
                {step.number}
              </div>
              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.text}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
