import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Header() {
  const phone = '+9232388999556';
  const whatsappNumber = '923238999556';
  const whatsappMsg = encodeURIComponent(
    'Hi, I visited your website and would like to get a quote for technical services in Dubai.'
  );

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-300 sm:px-8">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-amber-400" />
            Business Bay, Dubai, UAE
          </span>

          <span className="hidden items-center gap-1.5 md:flex">
            <Clock size={14} className="text-amber-400" />
            24/7 Emergency Support
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1 transition hover:text-amber-400"
          >
            <Phone size={13} className="text-amber-400" />
            +971 4 123 4567
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-amber-400 p-2 text-xl font-black tracking-wider text-slate-950">
              APEX
            </div>

            <div>
              <span className="block text-lg font-bold leading-tight text-slate-900">
                TECHNICAL SERVICES
              </span>

              <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                DUBAI • UAE
              </span>
            </div>
          </div>

          <div className="hidden items-center space-x-8 text-sm font-medium text-slate-700 lg:flex">
            <a
              href="#services"
              className="transition hover:text-amber-500"
            >
              Services
            </a>

            <a
              href="#trust"
              className="transition hover:text-amber-500"
            >
              Credentials
            </a>

            <a
              href="#contact"
              className="transition hover:text-amber-500"
            >
              Contact
            </a>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <MessageCircle size={16} />
            Instant Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
