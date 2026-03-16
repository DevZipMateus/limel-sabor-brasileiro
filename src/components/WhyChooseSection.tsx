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
    <section className="py-14 sm:py-18 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground relative inline-block">
            Por que escolher a Limel?
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
          </h2>
        </div>

        <div ref={grid.ref} className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-card border-2 border-primary/20 rounded-2xl p-5 sm:p-8 text-center hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 ${grid.isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-primary mb-1 sm:mb-2">
                {s.number}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
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
