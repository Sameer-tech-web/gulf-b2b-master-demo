import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '923238999556';
  const whatsappMsg = encodeURIComponent(
    'Hi, I visited your website and would like to get a quote for technical services in Dubai.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-emerald-500 p-4 text-white shadow-2xl transition-all hover:scale-110 hover:bg-emerald-600"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
