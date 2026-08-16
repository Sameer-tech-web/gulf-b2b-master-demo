import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import ServicesGrid from './components/ServicesGrid';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <ServicesGrid />
      </main>

      <WhatsAppButton />

      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-12 text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs md:flex-row">
          <div>
            <span className="font-bold text-white">
              APEX Technical Services LLC
            </span>{' '}
            © {new Date().getFullYear()} — Licensed in Dubai, UAE.
          </div>

          <div className="flex space-x-6">
            <a
              href="#services"
              className="transition hover:text-amber-400"
            >
              Services
            </a>

            <a
              href="#trust"
              className="transition hover:text-amber-400"
            >
              Credentials
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
