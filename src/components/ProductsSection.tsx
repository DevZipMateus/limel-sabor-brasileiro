import { IceCreamCone } from "lucide-react";
import productsBg from "@/assets/products-bg.jpg";
import acaiBowl from "@/assets/acai-bowl.jpg";
import popsicles from "@/assets/popsicles.jpg";
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
  return (
    <section
      id="produtos"
      className="relative py-20"
      style={{ backgroundImage: `url(${productsBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <IceCreamCone className="w-4 h-4" />
            Nossos produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Sorvetes e açaí para todos os gostos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Produção própria com ingredientes selecionados. Variedade que gera giro rápido e lucro para o seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-white border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-black text-lg mb-1">{p.name}</h3>
              <p className="text-sm text-black/70">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <img
            src={acaiBowl}
            alt="Açaí bowl com granola e frutas"
            className="w-full h-56 object-cover rounded-2xl shadow-lg border border-border"
          />
          <img
            src={popsicles}
            alt="Picolés coloridos no gelo"
            className="w-full h-56 object-cover rounded-2xl shadow-lg border border-border"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5511965328237?text=Olá! Gostaria de saber mais sobre os produtos da Sorvetes Limel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            Solicitar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
