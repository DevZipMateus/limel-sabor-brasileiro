import logo from "@/assets/logo.png";
import heroProducts from "@/assets/hero-products.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center pt-16 md:pt-20 pb-12 md:pb-0 overflow-hidden bg-hero-overlay"
    >
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-white flex items-center justify-center shadow-2xl animate-scale-up">
              <img
                src={logo}
                alt="Logo Sorvetes Limel"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-3 md:mb-4 leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Sorvetes Limel
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white/95 mb-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Qualidade e sabor que conquistam clientes desde 2008
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-body mb-6 md:mb-8 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Indústria de sorvetes e açaí em Osasco – SP. Atendemos lojistas, mercados e revendedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://wa.me/5511965328237?text=Olá! Tenho interesse em revender os produtos Sorvetes Limel."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:opacity-90 hover:scale-105 transition-all duration-200 text-center shadow-lg"
              >
                Quero Revender
              </a>
              <a
                href="https://wa.me/5511965328237"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 text-white border border-white/50 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-white/25 hover:border-white/70 hover:scale-105 transition-all duration-200 text-center backdrop-blur-sm"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <img
              src={heroProducts}
              alt="Sorvetes, picolés e açaí Limel"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
