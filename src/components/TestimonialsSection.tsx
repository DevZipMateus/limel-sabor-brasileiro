import testimonial1 from "@/assets/testimonial-1.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Depoimentos
          </h2>
        </div>

        <div ref={content.ref} className={`max-w-2xl mx-auto transition-all duration-700 ${content.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl sm:text-5xl text-primary/30 font-serif mb-4">"</div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 italic">
              Os produtos têm ótima saída na minha loja. Os clientes sempre voltam pedindo mais. A qualidade e a variedade de sabores fazem toda a diferença.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial1}
                alt="Maria Souza, revendedora Limel"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-display font-bold text-foreground text-sm sm:text-base">Maria Souza</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Revendedora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
