import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center pt-16 md:pt-20 pb-12 md:pb-0"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 mb-4 md:mb-6 rounded-full bg-white flex items-center justify-center shadow-2xl">
            <img
              src={logo}
              alt="Logo Sorvetes Limel"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white mb-3 md:mb-4 leading-tight">
            Sorvetes Limel
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-white/90 font-body mb-6 md:mb-8 leading-relaxed max-w-lg">
            Sabor artesanal, qualidade de fábrica. Sorvetes e açaí que conquistam paladares e geram lucro para o seu negócio.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/5511965328237"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:opacity-90 transition-opacity text-center shadow-lg"
            >
              Peça agora pelo WhatsApp
            </a>
            <a
              href="/vitrine"
              className="bg-white/15 text-white border border-white/50 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-white/25 hover:border-white/70 transition-all text-center backdrop-blur-sm"
            >
              🛒 Ver vitrine de produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
