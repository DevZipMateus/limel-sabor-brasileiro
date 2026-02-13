import { IceCreamCone, ShoppingBag } from "lucide-react";
import productsBg from "@/assets/products-bg.jpg";
import acaiBowl from "@/assets/acai-bowl.jpg";
import popsicles from "@/assets/popsicles.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const products = [
  { name: "Copão", desc: "Porção generosa para momentos especiais", icon: "🍨" },
  { name: "Copinhos", desc: "Porção individual prática e saborosa", icon: "🥤" },
  { name: "Sundae", desc: "Combinação clássica com cobertura irresistível", icon: "🍧" },
  { name: "Cony", desc: "Casquinha crocante com recheio cremoso", icon: "🍦" },
  { name: "Extrusados", desc: "Picolés diferenciados com formato especial", icon: "🧊" },
  { name: "Potes 2 litros", desc: "Ideal para a família e revenda", icon: "🫙" },
  { name: "Caixa 10 litros", desc: "Para estabelecimentos e grandes eventos", icon: "📦" },
  { name: "Picolés", desc: "Variedade de sabores para todos os gostos", icon: "🍡" },
];

const ProductsSection = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal();
  const images = useScrollReveal();
  const cta = useScrollReveal();

  return (
    <section
      id="produtos"
      className="relative py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url(${productsBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 md:mb-4">
            <IceCreamCone className="w-4 h-4" />
            Nossos produtos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Sorvetes e açaí para todos os gostos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Produção própria com ingredientes selecionados. Variedade que gera giro rápido e lucro para o seu negócio.
          </p>
        </div>

        <div ref={grid.ref} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-white border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${grid.isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-foreground text-sm sm:text-lg mb-1">{p.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div ref={images.ref} className={`grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-10 transition-all duration-700 ${images.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <img
            src={acaiBowl}
            alt="Açaí bowl com granola e frutas"
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-2xl shadow-lg border border-border hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          />
          <img
            src={popsicles}
            alt="Picolés coloridos no gelo"
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-2xl shadow-lg border border-border hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            style={{ animationDelay: "0.15s" }}
          />
        </div>

        <div ref={cta.ref} className={`mt-8 md:mt-12 bg-white border border-border rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 shadow-lg hover:shadow-xl transition-all duration-300 ${cta.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center animate-pulse-soft">
            <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1 sm:mb-2">
              Confira nossa vitrine completa
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Veja todos os nossos produtos com fotos, descrições e preços. Encontre o sorvete perfeito para o seu negócio ou para a sua família.
            </p>
          </div>
          <a
            href="/vitrine"
            className="inline-block bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap"
          >
            🛒 Ver vitrine
          </a>
        </div>

        <div className={`mt-6 md:mt-8 text-center transition-all duration-700 ${cta.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <a
            href="https://wa.me/5511965328237?text=Olá! Gostaria de saber mais sobre os produtos da Sorvetes Limel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Solicitar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
