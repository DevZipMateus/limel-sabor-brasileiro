import { Phone, Mail, MapPin } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Fale Conosco
          </h2>
        </div>

        <div ref={content.ref} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Map & Factory Image */}
          <div className={`space-y-4 transition-all duration-700 ${content.isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-48 sm:h-56">
              <iframe
                title="Localização Sorvetes Limel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIEJlbmVkaXRvIEFsdmVzIFR1csOtYmlvLCA0MA!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <img
              src={aboutImg}
              alt="Fábrica Sorvetes Limel em Osasco"
              className="w-full h-40 sm:h-48 object-cover rounded-2xl border border-border shadow-lg"
            />
          </div>

          {/* Contact Info */}
          <div className={`bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-5 shadow-lg transition-all duration-700 ${content.isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
              Fale Conosco
            </h3>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Osasco – SP</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <a href="https://wa.me/5511965328237" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">(11) 96532-8237</a>
                <a href="https://wa.me/5511954208127" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">(11) 95420-8127</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a href="mailto:jefferson.limel@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                jefferson.limel@gmail.com
              </a>
            </div>

            <a
              href="https://wa.me/5511965328237"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg mt-2"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16.002c0 3.502 1.14 6.742 3.074 9.374L1.06 31.37l6.226-2.002a15.89 15.89 0 008.718 2.594C24.826 31.962 32 24.788 32 15.966 32 7.174 24.826 0 16.004 0zm9.318 22.594c-.39 1.1-2.292 2.1-3.152 2.168-.86.07-1.654.388-5.578-1.16-4.726-1.862-7.71-6.71-7.942-7.02-.234-.312-1.89-2.512-1.89-4.792s1.196-3.402 1.618-3.868c.424-.466.922-.582 1.228-.582.306 0 .61.002.878.016.282.014.66-.106.968.74.388.854 1.196 2.928 1.308 3.138.078.156.156.39.078.622-.156.31-.234.466-.466.7-.234.234-.486.524-.7.7-.234.234-.468.486-.194.934.274.448 1.196 1.966 2.572 3.182 1.766 1.566 3.25 2.05 3.714 2.284.466.234.738.194 1.01-.118.272-.312 1.166-1.36 1.478-1.826.31-.466.622-.388 1.05-.234.428.156 2.734 1.29 3.202 1.524.466.234.778.35.894.544.116.194.116 1.1-.274 2.2z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
