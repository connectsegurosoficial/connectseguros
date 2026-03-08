import { useState, type CSSProperties } from "react";
import { X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PhoneInput } from "react-international-phone";

interface Props {
  open: boolean;
  onClose: () => void;
  productName: string;
}

const QuoteModal = ({ open, onClose, productName }: Props) => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", mensagem: "" });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Davos! Me chamo ${form.nome} e gostaria de cotar ${productName}.${form.mensagem ? ` ${form.mensagem}` : ""}`;
    window.open(getWhatsAppUrl(msg), "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md bg-background rounded-2xl shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>

        <h3 className="font-bold text-xl text-foreground mb-1">Solicitar Cotação</h3>
        <p className="text-sm text-muted-foreground mb-6">{productName}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nome completo"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
          />
          <PhoneInput
            defaultCountry="br"
            value={form.whatsapp}
            onChange={(whatsapp) => setForm({ ...form, whatsapp })}
            placeholder="Telefone / WhatsApp"
            className="w-full focus-within:outline-none focus-within:ring-2 focus-within:ring-secondary/50 rounded-lg"
            style={
              {
                "--react-international-phone-height": "44px",
                "--react-international-phone-background-color": "hsl(var(--muted))",
                "--react-international-phone-text-color": "hsl(var(--foreground))",
                "--react-international-phone-border-radius": "0.5rem",
                "--react-international-phone-border-color": "hsl(var(--border))",
                "--react-international-phone-font-size": "0.875rem",
              } as CSSProperties
            }
            inputClassName="w-full bg-transparent px-4 focus:outline-none"
            countrySelectorStyleProps={{
              buttonClassName: "bg-transparent",
            }}
          />
          <input
            type="text"
            value={productName}
            readOnly
            className="w-full px-4 py-3 rounded-lg bg-muted/60 border border-border text-muted-foreground text-sm cursor-not-allowed"
          />
          <textarea
            placeholder="Conte um pouco sobre o que você precisa..."
            rows={3}
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-success text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
