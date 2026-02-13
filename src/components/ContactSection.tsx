import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="relative py-20"
      style={{ backgroundImage: `url(${contactBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estamos prontos para atender você. Entre em contato por telefone, e-mail ou visite nossa fábrica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Telefones</h3>
                <a href="https://wa.me/5511965328237" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block">
                  (11) 96532-8237
                </a>
                <a href="https://wa.me/5511954208127" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block">
                  (11) 95420-8127
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">E-mail</h3>
                <a href="mailto:jefferson.limel@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  jefferson.limel@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">Av. Benedito Alves Turíbio, 40</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Horário de funcionamento</h3>
                <p className="text-muted-foreground">Segunda a sexta: 08:00 às 17:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg min-h-[350px]">
            <iframe
              title="Localização Sorvetes Limel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIEJlbmVkaXRvIEFsdmVzIFR1csOtYmlvLCA0MA!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
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
