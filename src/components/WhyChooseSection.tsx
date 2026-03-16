import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { number: "+15", label: "anos de experiência" },
  { number: "+100", label: "parceiros atendidos" },
  { number: "+50", label: "sabores deliciosos" },
];

const WhyChooseSection = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Por que escolher a Limel?
          </h2>
        </div>

        <div ref={grid.ref} className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-primary text-primary-foreground rounded-2xl p-5 sm:p-8 text-center hover:scale-105 transition-all duration-300 ${grid.isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-1 sm:mb-2">
                {s.number}
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/85 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
