import { Award, Clock, Shield, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Award, label: "8 Anos de Experiência" },
  { icon: Users, label: "+1.000 Clientes" },
  { icon: Shield, label: "+R$2M em Sinistros" },
  { icon: Clock, label: "Atendimento 24h" },
];

const StatsSection = () => (
  <section id="estatisticas" className="py-16 md:py-20 bg-muted">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Números que <span className="text-gradient">comprovam</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Experiência, volume de atendimento e agilidade para resolver o que importa.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto items-stretch">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.05} className="h-full">
            <div className="h-full flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-2xl bg-card border border-border shadow-card text-center">
              <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
                <s.icon size={20} className="text-secondary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
