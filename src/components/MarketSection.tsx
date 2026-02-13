import { Store, ShoppingBag, Coffee, UtensilsCrossed, Users, Building } from "lucide-react";
import marketBg from "@/assets/market-bg.jpg";
import deliveryImg from "@/assets/delivery.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const partners = [
  { icon: Store, label: "Mercearias e mercadinhos" },
  { icon: Coffee, label: "Lanchonetes e padarias" },
  { icon: ShoppingBag, label: "Adegas e conveniências" },
  { icon: UtensilsCrossed, label: "Açaíterias e sorveterias" },
  { icon: Users, label: "Revendedores autônomos" },
  { icon: Building, label: "Clientes de balcão" },
];

const MarketSection = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal();
  const cta = useScrollReveal();

  return (
    <section
      id="mercado"
      className="relative py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url(${marketBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2 sm:mb-3 text-primary-foreground">
            Para quem vendemos
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
            Atendemos diferentes perfis de clientes com produtos de giro rápido, preço competitivo e padronização.
          </p>
        </div>

        <div ref={grid.ref} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-8 md:mb-12">
          {partners.map((p, i) => (
            <div
              key={p.label}
              className={`flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-5 border border-border hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ${grid.isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary/20 flex items-center justify-center">
                <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-xs sm:text-sm md:text-base">{p.label}</span>
            </div>
          ))}
        </div>

        <div ref={cta.ref} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <img
            src={deliveryImg}
            alt="Entrega de sorvetes Limel"
            className={`w-full h-56 sm:h-64 md:h-full object-cover rounded-2xl shadow-lg border border-border min-h-[200px] md:min-h-[250px] hover:scale-[1.02] transition-all duration-300 ${cta.isVisible ? "animate-slide-left" : "opacity-0"}`}
          />
          <div className={`bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-border text-center flex flex-col justify-center hover:shadow-xl transition-all duration-300 ${cta.isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3 text-foreground">
              Seja um parceiro Limel
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
              Mais do que um fornecedor, buscamos ser um parceiro estratégico de crescimento para o seu negócio. Produtos com boa margem de lucro e demanda constante durante o ano todo.
            </p>
            <a
              href="https://wa.me/5511965328237?text=Olá! Tenho interesse em ser parceiro da Sorvetes Limel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Quero ser parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
