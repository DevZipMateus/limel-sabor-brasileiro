import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section
      id="contato"
      className="relative py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url(${contactBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div ref={header.ref} className={`text-center mb-8 md:mb-12 transition-all duration-700 ${header.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-3">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Estamos prontos para atender você. Entre em contato por telefone, e-mail ou visite nossa fábrica.
          </p>
        </div>

        <div ref={content.ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className={`space-y-3 sm:space-y-5 transition-all duration-700 ${content.isVisible ? "animate-slide-left" : "opacity-0"}`}>
            {[
              { icon: Phone, title: "Telefones", bgClass: "bg-primary/10", iconClass: "text-primary", content: (
                <>
                  <a href="https://wa.me/5511965328237" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block text-sm">(11) 96532-8237</a>
                  <a href="https://wa.me/5511954208127" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block text-sm">(11) 95420-8127</a>
                </>
              )},
              { icon: Mail, title: "E-mail", bgClass: "bg-secondary/10", iconClass: "text-secondary", content: (
                <a href="mailto:jefferson.limel@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">jefferson.limel@gmail.com</a>
              )},
              { icon: MapPin, title: "Endereço", bgClass: "bg-primary/10", iconClass: "text-primary", content: (
                <p className="text-muted-foreground text-sm">Av. Benedito Alves Turíbio, 40</p>
              )},
              { icon: Clock, title: "Horário de funcionamento", bgClass: "bg-secondary/10", iconClass: "text-secondary", content: (
                <p className="text-muted-foreground text-sm">Segunda a sexta: 08:00 às 17:00</p>
              )},
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full ${item.bgClass} flex items-center justify-center`}>
                  <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.iconClass}`} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          <div className={`rounded-2xl overflow-hidden border border-border shadow-lg min-h-[280px] sm:min-h-[350px] hover:shadow-xl transition-shadow duration-300 ${content.isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <iframe
              title="Localização Sorvetes Limel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIEJlbmVkaXRvIEFsdmVzIFR1csOtYmlvLCA0MA!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
