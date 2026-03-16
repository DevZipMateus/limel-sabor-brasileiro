import logo from "@/assets/logo.png";
import heroProducts from "@/assets/hero-products.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-24 pb-16 md:pb-0 overflow-hidden"
    >
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(273,65%,30%)] via-[hsl(273,55%,42%)] to-[hsl(280,50%,55%)]" />

      {/* Decorative colorful splashes at top */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 overflow-hidden pointer-events-none">
        <div className="absolute -top-8 left-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[hsl(340,80%,55%)] opacity-50 blur-2xl" />
        <div className="absolute -top-4 left-[30%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[hsl(45,90%,55%)] opacity-40 blur-2xl" />
        <div className="absolute -top-6 left-[55%] w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[hsl(145,63%,42%)] opacity-40 blur-2xl" />
        <div className="absolute -top-4 left-[75%] w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[hsl(200,80%,55%)] opacity-40 blur-2xl" />
        <div className="absolute -top-10 right-[5%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[hsl(15,85%,55%)] opacity-40 blur-2xl" />
      </div>

      {/* Wavy bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0V40Z" fill="hsl(0, 0%, 97%)" />
        </svg>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="max-w-xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 md:mb-5 rounded-full bg-card flex items-center justify-center shadow-2xl animate-scale-up">
              <img
                src={logo}
                alt="Logo Sorvetes Limel"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-extrabold text-primary-foreground mb-2 md:mb-3 leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Sorvetes Limel
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-primary-foreground/90 mb-2 animate-fade-up leading-snug" style={{ animationDelay: "0.3s" }}>
              Qualidade e sabor que conquistam clientes desde 2008
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/70 font-body mb-6 md:mb-8 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Indústria de sorvetes e açaí em Osasco – SP. Atendemos lojistas, mercados e revendedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://wa.me/5511965328237?text=Olá! Tenho interesse em revender os produtos Sorvetes Limel."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:brightness-110 hover:scale-105 transition-all duration-200 text-center shadow-lg"
              >
                Quero Revender
              </a>
              <a
                href="https://wa.me/5511965328237"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/40 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-foreground/25 hover:border-primary-foreground/60 hover:scale-105 transition-all duration-200 text-center backdrop-blur-sm"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <img
              src={heroProducts}
              alt="Sorvetes, picolés e açaí Limel"
              className="w-full max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
