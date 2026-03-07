import { Shield, Users, Award, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Award, label: "8 Anos de Experiência" },
  { icon: Users, label: "+1.000 Clientes" },
  { icon: Shield, label: "+R$2M em Sinistros" },
  { icon: Clock, label: "Atendimento 24h" },
];

const HeroSection = () => (
  <section id="inicio" className="gradient-hero hero-pattern pt-28 pb-20 md:pt-36 md:pb-28">
    <div className="container text-center">
      <AnimatedSection>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight max-w-4xl mx-auto">
          Proteção que cabe na sua vida.{" "}
          <span className="text-gradient">Atendimento que você merece.</span>
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Somos um corretor independente com 8 anos de experiência, mais de 1.000 clientes ativos
          e R$2 milhões em sinistros resolvidos. Atendemos você onde estiver.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg bg-success text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity"
          >
            Solicitar Cotação Grátis
          </a>
          <button
            onClick={() => document.querySelector("#seguros")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:border-primary-foreground/60 transition-colors"
          >
            Conheça nossos seguros
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.35}>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <s.icon size={24} className="text-secondary" />
              <span className="text-xs md:text-sm font-semibold text-primary-foreground/90">{s.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
