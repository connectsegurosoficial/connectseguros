import { Shield, Award, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="aspect-[4/5] rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4">
                <span className="text-4xl font-extrabold text-primary">CS</span>
              </div>
              <p className="text-sm text-muted-foreground">Connect Seguros</p>
              <p className="text-xs text-muted-foreground mt-1">Corretora de Seguros</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Conheça a <span className="text-gradient">Connect Seguros.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com 8 anos no mercado de seguros, a Connect Seguros ajuda pessoas físicas, empresas e
              produtores rurais a encontrarem a proteção certa — sem complicação e com o atendimento
              próximo que você merece. Atendemos localmente em Três Lagoas e online para todo o Brasil.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "8+", label: "Anos" },
                { value: "1000+", label: "Clientes" },
                { value: "R$2M+", label: "Sinistros" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-background shadow-card">
                  <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield size={14} /> Parceiro Porto Seguro
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Award size={14} /> Corretor Certificado
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <MapPin size={14} /> Três Lagoas - MS
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
