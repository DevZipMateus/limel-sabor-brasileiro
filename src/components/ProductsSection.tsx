import banner300ml from "@/assets/banner-300ml.jpg";
import banner250ml from "@/assets/banner-250ml.jpg";
import banner2litros from "@/assets/banner-2litros.jpg";
import banner2litrosMesclas from "@/assets/banner-2litros-mesclas.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const products = [
  {
    name: "Pote 300ml",
    image: banner300ml,
    alt: "Banner sorvetes Limel pote 300ml",
  },
  {
    name: "Pote 250ml",
    image: banner250ml,
    alt: "Banner sorvetes Limel pote 250ml",
  },
  {
    name: "2 Litros",
    image: banner2litros,
    alt: "Banner sorvetes Limel pote 2 litros",
  },
  {
    name: "2 Litros Mesclados",
    image: banner2litrosMesclas,
    alt: "Banner sorvetes Limel pote 2 litros mesclados",
  },
];

const ProductsSection = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Produção própria com ingredientes selecionados e sabores irresistíveis.
          </p>
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${grid.isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-display font-bold text-foreground text-lg">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
