import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Junior Magrelo",
    quote: "Atendimento excepcional! O Davos sempre me ajudou a encontrar o melhor seguro para minha situação. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Denner",
    quote: "Tive um sinistro e tudo foi resolvido em tempo recorde. A dedicação e profissionalismo do Davos fazem toda a diferença.",
    rating: 5,
  },
  {
    name: "Hudson",
    quote: "O que mais me impressiona é o atendimento personalizado. Ele realmente conhece cada cliente pelo nome e cuida de tudo.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full flex flex-col">
              <Quote size={28} className="text-secondary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
