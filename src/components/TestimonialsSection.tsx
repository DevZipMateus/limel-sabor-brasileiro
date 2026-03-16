import testimonial1 from "@/assets/testimonial-1.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-muted/50">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground relative inline-block">
            Depoimentos
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
          </h2>
        </div>

        <div ref={content.ref} className={`max-w-2xl mx-auto transition-all duration-700 ${content.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg relative">
            {/* Quote mark */}
            <div className="absolute top-4 left-6 sm:top-6 sm:left-8">
              <span className="text-5xl sm:text-6xl text-primary/20 font-serif leading-none select-none">"</span>
            </div>

            <div className="pt-8 sm:pt-6">
              <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 italic">
                Os produtos têm ótima saída na minha loja. Os clientes sempre voltam pedindo mais. A qualidade e a variedade de sabores fazem toda a diferença.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial1}
                  alt="Maria Souza, revendedora Limel"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/30 shadow-sm"
                />
                <div>
                  <p className="font-display font-bold text-foreground text-sm sm:text-base">Maria Souza</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Revendedora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
