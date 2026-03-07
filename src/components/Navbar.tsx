import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Seguros", href: "#seguros" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNav = (href: string) => {
    setOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-display font-extrabold text-xl tracking-tight text-primary">
          Connect<span className="text-gradient"> Seguros</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-success text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />
            Solicitar Cotação
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-success text-primary-foreground font-semibold text-sm mt-2"
            >
              <MessageCircle size={16} />
              Solicitar Cotação
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
