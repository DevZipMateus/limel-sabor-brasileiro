import banner250ml from "@/assets/banner-250ml.jpg";
import banner300ml from "@/assets/banner-300ml.jpg";
import banner2litros from "@/assets/banner-2litros.jpg";
import banner2litrosMesclas from "@/assets/banner-2litros-mesclas.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const banners = [
  { src: banner250ml, alt: "Banner Sorvetes Limel 250ml" },
  { src: banner300ml, alt: "Banner Sorvetes Limel 300ml" },
  { src: banner2litros, alt: "Banner Sorvetes Limel 2 Litros" },
  { src: banner2litrosMesclas, alt: "Banner Sorvetes Limel 2 Litros Mesclas" },
];

const BannersSection = () => {
  const section = useScrollReveal();

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-muted/30">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={section.ref} className={`grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto transition-all duration-700 ${section.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {banners.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={b.src}
                alt={b.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
