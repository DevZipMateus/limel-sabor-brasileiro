import { Eye, Target, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import aboutImg from "@/assets/about-img.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  { icon: "🏆", title: "Qualidade acima de tudo", text: "Matérias-primas selecionadas e controle rigoroso na produção." },
  { icon: "🤝", title: "Honestidade e transparência", text: "Relações verdadeiras com clientes, fornecedores e parceiros." },
  { icon: "❤️", title: "Compromisso com o cliente", text: "O sucesso do nosso cliente também é o nosso sucesso." },
  { icon: "💰", title: "Preço justo", text: "Equilíbrio entre custo e benefício para parcerias duradouras." },
  { icon: "👨‍👩‍👧‍👦", title: "Tradição familiar", text: "Empresa construída com esforço, dedicação e responsabilidade." },
];

const AboutSection = () => {
  const title = useScrollReveal();
  const content = useScrollReveal();
  const valuesSection = useScrollReveal();

  return (
    <section
      id="sobre"
      className="relative py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div ref={title.ref} className={`transition-all duration-700 ${title.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-3 md:mb-4 text-foreground">
            Nossa história
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm sm:text-base leading-relaxed">
            A Sorvetes Limel nasceu de um sonho familiar e da vontade de construir algo próprio através do trabalho honesto.
          </p>
        </div>

        <div ref={content.ref} className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          <div className={`space-y-4 transition-all duration-700 ${content.isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img
              src={aboutImg}
              alt="Produção artesanal de sorvetes Limel"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg border border-border mb-4 hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                A empresa teve início como uma pequena produção artesanal, conduzida pelo pai da família, atendendo poucos clientes e produzindo de forma simples. Com o passar do tempo, o negócio foi assumido pela nova geração, que decidiu investir, modernizar e transformar a produção em uma fábrica estruturada.
              </p>
              <p>
                A produção foi sendo padronizada, novos sabores foram desenvolvidos e surgiram parcerias com comerciantes da região. Aos poucos, a marca passou a ser reconhecida não apenas pelo preço acessível, mas principalmente pela confiança e regularidade na entrega.
              </p>
            </div>
          </div>
          <div className={`space-y-4 md:space-y-6 transition-all duration-700 ${content.isVisible ? "animate-slide-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            {[
              { icon: Eye, title: "Visão", text: "Ser reconhecida como uma marca de sorvetes e açaí de confiança na região, levando sabor, qualidade e preço justo.", bgClass: "bg-primary/10", iconClass: "text-primary" },
              { icon: Target, title: "Missão", text: "Produzir sorvetes e açaí com qualidade, higiene e padronização, oferecendo produtos saborosos e acessíveis.", bgClass: "bg-secondary/10", iconClass: "text-secondary" },
              { icon: Heart, title: "Valores", text: "Qualidade, honestidade, compromisso com o cliente, preço justo e tradição familiar.", bgClass: "bg-primary/10", iconClass: "text-primary" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.bgClass} flex items-center justify-center`}>
                  <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.iconClass}`} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={valuesSection.ref}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-6 md:mb-10 text-foreground transition-all duration-700 ${valuesSection.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Nossos valores
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`bg-card border border-border rounded-xl p-4 sm:p-5 text-center hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ${valuesSection.isVisible ? "animate-scale-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-foreground text-xs sm:text-sm mb-1">{v.title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
