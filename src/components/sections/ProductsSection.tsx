import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";
import imageAuto from "@/assets/product-auto.jpg";
import imageEmpresarial from "@/assets/product-empresarial.jpg";
import imageResidencial from "@/assets/product-residencial.jpg";

const produtosDestaque = [
  {
    slug: "seguro-residencial",
    titulo: "Para sua casa",
    imagem: imageResidencial,
  },
  {
    slug: "seguro-auto",
    titulo: "Para o seu carro",
    imagem: imageAuto,
  },
  {
    slug: "seguro-empresarial",
    titulo: "Para a sua empresa",
    imagem: imageEmpresarial,
  },
];

const ProductsSection = () => {
  const mapaProdutos = new Map(products.map((p) => [p.slug, p]));
  const destaques = produtosDestaque.map((d) => ({ ...d, produto: mapaProdutos.get(d.slug) })).filter((d) => d.produto);
  const outros = products.filter((p) => !produtosDestaque.some((d) => d.slug === p.slug));

  return (
    <section id="seguros" className="relative -mt-24 md:-mt-32 pb-16 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {destaques.map((d, i) => (
            <AnimatedSection key={d.slug} delay={i * 0.06}>
              <Link
                to={`/seguros/${d.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex-1">
                  <p className="text-sm font-semibold text-secondary mb-3">{d.titulo}</p>
                  <h3 className="text-xl font-extrabold text-foreground leading-tight">{d.produto!.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[44px]">
                    {d.produto!.tagline}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <div className="rounded-xl bg-muted overflow-hidden border border-border">
                    <div className="aspect-[16/10]">
                      <img
                        src={d.imagem}
                        alt={d.produto!.name}
                        className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-secondary group-hover:underline">
                      Saiba mais
                    </span>
                    <span className="text-xs text-muted-foreground">Clique para cotar</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.12}>
          <div className="mt-14 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Conheça as soluções da <span className="text-gradient">Connect Seguros</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Escolha a categoria ideal para você e, se preferir, veja outras opções abaixo.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.18}>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {outros.map((p) => (
              <Link
                key={p.slug}
                to={`/seguros/${p.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow text-sm text-foreground"
              >
                <p.icon size={16} className="text-secondary" />
                <span className="font-semibold">{p.name}</span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsSection;
