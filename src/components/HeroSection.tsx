import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full bg-white flex items-center justify-center shadow-2xl">
            <img
              src={logo}
              alt="Logo Sorvetes Limel"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-4 leading-tight">
            Sorvetes Limel
          </h1>
          <h2 className="text-lg md:text-xl text-white/90 font-body mb-8 leading-relaxed max-w-lg">
            Sabor artesanal, qualidade de fábrica. Sorvetes e açaí que conquistam paladares e geram lucro para o seu negócio.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511965328237"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:opacity-90 transition-opacity text-center shadow-lg"
            >
              Peça agora pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="bg-white/15 text-white border border-white/50 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/25 hover:border-white/70 transition-all text-center backdrop-blur-sm"
            >
              Conheça nossos produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
