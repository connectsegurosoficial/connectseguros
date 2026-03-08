const Footer = () => (
  <footer className="py-12 gradient-hero">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="mb-3">
            <img
              src="/logo-connect-seguros.png"
              alt="Connect Seguros"
              className="h-10 w-auto"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-primary-foreground/60">Sua proteção, nossa conexão.</p>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground text-sm mb-3">Links rápidos</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Início", "Sobre", "Seguros", "Como Funciona", "Depoimentos", "Contato"].map((l) => (
              <li key={l}>
                <button
                  onClick={() =>
                    document.querySelector(`#${l.toLowerCase().replace(/ /g, "-").replace("í", "i")}`)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground text-sm mb-3">Informações legais</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>CNPJ: 48.361.727/0001-20</li>
            <li>Registro SUSEP: Em processo</li>
            <li>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
        2026. © Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
