import { Store, ShoppingBag, Coffee, UtensilsCrossed, Users, Building } from "lucide-react";

const partners = [
  { icon: Store, label: "Mercearias e mercadinhos" },
  { icon: Coffee, label: "Lanchonetes e padarias" },
  { icon: ShoppingBag, label: "Adegas e conveniências" },
  { icon: UtensilsCrossed, label: "Açaíterias e sorveterias" },
  { icon: Users, label: "Revendedores autônomos" },
  { icon: Building, label: "Clientes de balcão" },
];

const MarketSection = () => {
  return (
    <section id="mercado" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Para quem vendemos
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Atendemos diferentes perfis de clientes com produtos de giro rápido, preço competitivo e padronização.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {partners.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <p.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary-foreground/20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-3">
            Seja um parceiro Limel
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Mais do que um fornecedor, buscamos ser um parceiro estratégico de crescimento para o seu negócio. Produtos com boa margem de lucro e demanda constante durante o ano todo.
          </p>
          <a
            href="https://wa.me/5511965328237?text=Olá! Tenho interesse em ser parceiro da Sorvetes Limel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            Quero ser parceiro
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
