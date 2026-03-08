import { useState } from "react";
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { products } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", produto: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Davos! Me chamo ${form.nome}${form.telefone ? ` (${form.telefone})` : ""}${form.produto ? ` e gostaria de cotar ${form.produto}` : ""}. ${form.mensagem}`.trim();
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Solicite sua <span className="text-gradient">cotação gratuita</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <input
                type="tel"
                placeholder="Telefone / WhatsApp"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <select
                value={form.produto}
                onChange={(e) => setForm({ ...form, produto: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              >
                <option value="">Tipo de seguro</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.name}>{p.name}</option>
                ))}
              </select>
              <textarea
                placeholder="Mensagem (opcional)"
                rows={3}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-success text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Fale diretamente</h3>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-success font-semibold text-sm hover:underline"
                >
                  <MessageCircle size={16} />
                  +55 67 99828-1558
                </a>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Redes sociais</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/connectseguros/", label: "Instagram" },
                    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61574098310350", label: "Facebook" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">Localização</h3>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Três Lagoas - MS | Atendimento online para todo o Brasil</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-border h-48">
                <iframe
                  title="Localização Connect Seguros"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117824.39890044068!2d-51.78!3d-20.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e5e5a5a5a5a5%3A0x0!2sTr%C3%AAs%20Lagoas%20-%20MS!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
