import { MessageCircle, FileSearch, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    icon: MessageCircle,
    title: "Fale comigo",
    description: "Entre em contato pelo WhatsApp ou formulário",
  },
  {
    icon: FileSearch,
    title: "Receba sua cotação",
    description: "Analiso seu perfil e busco as melhores opções",
  },
  {
    icon: ShieldCheck,
    title: "Ative sua proteção",
    description: "Você escolhe, eu cuido de tudo",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Contratar um seguro é <span className="text-gradient">mais simples</span> do que você pensa
          </h2>
        </div>
      </AnimatedSection>

      <div className="relative max-w-3xl mx-auto">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-border" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="text-center relative">
                <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-muted">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
                <div className="text-xs font-bold text-secondary mb-2">PASSO {i + 1}</div>
                <h3 className="font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
