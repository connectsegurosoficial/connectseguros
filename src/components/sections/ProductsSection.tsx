import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";

const ProductsSection = () => (
  <section id="seguros" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            O que posso fazer <span className="text-gradient">por você</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Seguros personalizados para cada fase da sua vida e do seu negócio.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p, i) => (
          <AnimatedSection key={p.slug} delay={i * 0.05}>
            <Link
              to={`/seguros/${p.slug}`}
              className="group block p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                <p.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <span className="text-sm font-semibold text-secondary group-hover:underline">
                Quero cotar →
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
