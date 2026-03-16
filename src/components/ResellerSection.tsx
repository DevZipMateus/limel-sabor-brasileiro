import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const benefits = [
  "Alta Qualidade",
  "Excelente Lucro",
  "Entrega Rápida",
  "Suporte ao Parceiro",
];

const ResellerSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section id="revendedores" className="py-12 sm:py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Seja um Revendedor Limel
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Lucre mais com nossos sorvetes e açaí!
          </p>
        </div>

        <div ref={content.ref} className={`max-w-3xl mx-auto transition-all duration-700 ${content.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {benefits.map((b, i) => (
              <div
                key={b}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5511965328237?text=Olá! Tenho interesse em ser revendedor da Sorvetes Limel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-secondary-foreground px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Quero Ser Revendedor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
