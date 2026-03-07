import { AlertTriangle, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import AnimatedSection from "@/components/AnimatedSection";

const ClaimsSection = () => (
  <section className="py-20 md:py-28 gradient-hero">
    <div className="container text-center">
      <AnimatedSection>
        <AlertTriangle size={40} className="text-gold mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Precisa acionar um sinistro?
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Não se preocupe — eu cuido de tudo por você. Entre em contato diretamente comigo pelo
          WhatsApp e vou te orientar em cada etapa do processo.
        </p>
        <a
          href={getWhatsAppUrl("Olá Davos! Preciso de ajuda para acionar um sinistro.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-success text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} />
          Falar com o Davos agora
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ClaimsSection;
