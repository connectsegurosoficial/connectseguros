import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import heroAuto from "@/assets/product-auto.jpg";
import heroEmpresarial from "@/assets/product-empresarial.jpg";
import heroResidencial from "@/assets/product-residencial.jpg";

const slides = [
  {
    key: "seguro-auto",
    categoria: "Seguro Auto",
    titulo: "Seu carro protegido para você viver tranquilo",
    descricao: "Coberturas completas, assistência 24h e atendimento humano do início ao fim.",
    imagem: heroAuto,
  },
  {
    key: "seguro-empresarial",
    categoria: "Seguro Empresarial",
    titulo: "Proteja seu negócio com cobertura sob medida",
    descricao: "Seguro para empresa, patrimônio e equipe — do jeito certo para o seu segmento.",
    imagem: heroEmpresarial,
  },
  {
    key: "seguro-residencial",
    categoria: "Seguro Residencial",
    titulo: "Seu lar protegido contra imprevistos",
    descricao: "Assistência 24h e coberturas essenciais para o que mais importa: sua casa.",
    imagem: heroResidencial,
  },
];

const HeroSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [indiceAtual, setIndiceAtual] = React.useState(0);
  const [quantidade, setQuantidade] = React.useState(0);
  const [pausado, setPausado] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const atualizar = () => {
      setIndiceAtual(api.selectedScrollSnap());
      setQuantidade(api.scrollSnapList().length);
    };

    atualizar();
    api.on("select", atualizar);
    api.on("reInit", atualizar);

    return () => {
      api.off("select", atualizar);
      api.off("reInit", atualizar);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || pausado) return;

    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 7000);

    return () => window.clearInterval(id);
  }, [api, pausado]);

  return (
    <section id="inicio" className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="relative"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.key} className="pl-0">
              <div
                className="relative min-h-[520px] md:min-h-[640px] flex items-center"
                style={{
                  backgroundImage: `url(${slide.imagem})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(216,70%,10%,0.86)] via-[hsl(216,70%,10%,0.55)] to-[hsl(216,70%,10%,0.15)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

                <div className="container relative z-10">
                  <div className="max-w-2xl pt-24 pb-28 md:pt-28 md:pb-36">
                    <AnimatedSection>
                      <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-3">
                        {slide.categoria}
                      </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.05}>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
                        {slide.titulo}
                      </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                      <p className="mt-5 text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                        {slide.descricao}
                      </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.15}>
                      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-success text-primary-foreground hover:bg-success/90 h-11 px-6 font-bold">
                            Cote agora
                          </Button>
                        </a>
                        <Button
                          variant="outline"
                          className="h-11 px-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                          onClick={() =>
                            document.querySelector("#seguros")?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          Ver seguros
                        </Button>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-12 md:bottom-14 z-10">
                  <div className="container flex items-center justify-center gap-2">
                    {Array.from({ length: quantidade }).map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Ir para o slide ${idx + 1}`}
                        onClick={() => api?.scrollTo(idx)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          idx === indiceAtual ? "bg-primary-foreground" : "bg-primary-foreground/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20">
          <div className="container relative h-full">
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => api?.scrollPrev()}
              className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary-foreground/10 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20"
              aria-label="Slide anterior"
            >
              <ArrowLeft />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => api?.scrollNext()}
              className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary-foreground/10 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20"
              aria-label="Próximo slide"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
