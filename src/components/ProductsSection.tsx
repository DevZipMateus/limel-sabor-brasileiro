import productPicoles from "@/assets/product-picoles.jpg";
import productSorvetes from "@/assets/product-sorvetes.jpg";
import productAcai from "@/assets/product-acai.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const products = [
  {
    name: "Picolés",
    desc: "Cremosos e de frutas para todos os gostos.",
    image: productPicoles,
    alt: "Picolés coloridos de frutas",
  },
  {
    name: "Sorvetes",
    desc: "Sorvetes de massa em diversos sabores.",
    image: productSorvetes,
    alt: "Sorvetes de massa variados",
  },
  {
    name: "Açaí",
    desc: "Açaí cremoso e irresistível.",
    image: productAcai,
    alt: "Açaí bowl com granola e frutas",
  },
];

const ProductsSection = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section id="produtos" className="py-14 sm:py-18 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-10 md:mb-14 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3 relative inline-block">
            Nossos Produtos
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base mt-5">
            Produção própria com ingredientes selecionados e sabores irresistíveis.
          </p>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-3 gap-5 sm:gap-7 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ${grid.isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="h-44 sm:h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-display font-bold text-foreground text-lg mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
