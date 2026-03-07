import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Star, Quote, MessageCircle, ChevronDown } from "lucide-react";
import { getProductBySlug } from "@/lib/products";
import { productImages } from "@/lib/productImages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona a cotação de seguro?",
    answer: "Você entra em contato conosco pelo WhatsApp ou formulário, informa seus dados e o tipo de proteção que precisa. Analisamos seu perfil e apresentamos as melhores opções do mercado, sem compromisso.",
  },
  {
    question: "Quanto tempo demora para ativar meu seguro?",
    answer: "Após a aprovação da proposta, a maioria dos seguros é ativada em até 24 horas. Em casos específicos, como seguro empresarial, pode levar até 48 horas.",
  },
  {
    question: "O que fazer em caso de sinistro?",
    answer: "Entre em contato diretamente conosco pelo WhatsApp. Nós cuidamos de toda a burocracia e acompanhamos seu processo do início ao fim, garantindo agilidade na resolução.",
  },
  {
    question: "Posso personalizar as coberturas do meu seguro?",
    answer: "Sim! Trabalhamos com diversas seguradoras e montamos pacotes sob medida para o seu perfil e necessidade, garantindo o melhor custo-benefício.",
  },
  {
    question: "Vocês atendem apenas em Três Lagoas?",
    answer: "Não! Nosso atendimento é local em Três Lagoas - MS, mas também atendemos online para todo o Brasil. Onde você estiver, a Connect Seguros pode te ajudar.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito, débito em conta, boleto bancário e PIX, variando conforme a seguradora escolhida. Parcelamos em até 12x sem juros.",
  },
];

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [modalOpen, setModalOpen] = useState(false);

  if (!product) return <Navigate to="/" replace />;

  const Icon = product.icon;
  const productImage = productImages[product.slug];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero - Porto Seguro style */}
      <section className="pt-20 md:pt-24 bg-muted">
        <div className="container">
          <Link
            to="/#seguros"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors pt-4 mb-6"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left: Text content */}
          <div className="flex-1 flex items-center">
            <div className="container md:pr-0">
              <AnimatedSection>
                <div className="max-w-xl py-8 md:py-16 md:pl-8 lg:pl-16">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    {product.name}
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                    {product.tagline}
                  </h1>
                  <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-success text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={18} />
                    Solicitar Cotação Grátis
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right: Full-height image */}
          <div className="w-full md:w-1/2 lg:w-[55%] h-64 md:h-[480px] relative overflow-hidden">
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Coverages */}
      <section className="py-16 md:py-20">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10 text-center">
              O que está <span className="text-gradient">coberto</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {product.coverages.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.05}>
                <div className="p-5 rounded-2xl bg-card border border-border shadow-card text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                Por que escolher a <span className="text-gradient">Connect Seguros</span>?
              </h2>
              <ul className="space-y-4">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-muted-foreground text-sm">{b}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-success" />
                  </div>
                  <span className="text-muted-foreground text-sm">Atendimento personalizado</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-3">
                    <span className="text-3xl font-extrabold text-primary">CS</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Connect Seguros</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card text-center">
              <Quote size={32} className="text-secondary/30 mx-auto mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{product.testimonial.quote}"
              </p>
              <div className="flex gap-0.5 justify-center mb-2">
                {Array.from({ length: product.testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-bold text-foreground text-sm">{product.testimonial.author}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10 text-center">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-card"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border py-3">
        <div className="container flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-foreground hidden sm:block">
            Pronto para proteger seu {product.shortName}?
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-success text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity ml-auto"
          >
            <MessageCircle size={16} />
            Quero minha cotação agora
          </button>
        </div>
      </div>

      <div className="pb-16" />

      <Footer />
      <WhatsAppFloat />
      <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} productName={product.name} />
    </div>
  );
};

export default ProductPage;
