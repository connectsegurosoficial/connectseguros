const WHATSAPP_NUMBER = "5567998281558";

export const getWhatsAppUrl = (message?: string) => {
  const encoded = encodeURIComponent(
    message || "Olá Davos! Gostaria de solicitar uma cotação de seguro."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};
