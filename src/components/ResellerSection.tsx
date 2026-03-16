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
    <section id="revendedores" className="relative py-14 sm:py-18 md:py-24 overflow-hidden">
      {/* Gradient background matching reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(273,65%,35%)] to-[hsl(280,50%,50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(273,45%,60%)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2 sm:mb-3">
            Seja um Revendedor Limel
          </h2>
          <p className="text-primary-foreground/75 max-w-xl mx-auto text-sm sm:text-base">
            Lucre mais com nossos sorvetes e açaí!
          </p>
        </div>

        <div ref={content.ref} className={`max-w-3xl mx-auto transition-all duration-700 ${content.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {benefits.map((b, i) => (
              <div
                key={b}
                className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-primary-foreground/25 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-primary-foreground">{b}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5511965328237?text=Olá! Tenho interesse em ser revendedor da Sorvetes Limel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-secondary-foreground px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-xl"
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
