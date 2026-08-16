import {
  Zap,
  Wrench,
  Droplet,
  Building,
  ShieldCheck,
  Award,
} from 'lucide-react';

const services = [
  {
    id: 'hvac-ac-maintenance',
    icon: Zap,
    title: 'HVAC & Central AC Maintenance',
    desc: 'Chiller overhauling, FCU/AHU maintenance, duct cleaning, and smart thermostat integrations for large commercial towers.',
  },
  {
    id: 'electrical-power-systems',
    icon: Wrench,
    title: 'Electrical & Power Systems',
    desc: 'DEWA approved electrical installations, DB panel maintenance, emergency wiring repairs, and LED retrofitting.',
  },
  {
    id: 'plumbing-piping-networks',
    icon: Droplet,
    title: 'Plumbing & Piping Networks',
    desc: 'Commercial water pump maintenance, pipe leak detection, drainage clearing, and booster pump overhauls.',
  },
  {
    id: 'commercial-fit-out-gypsum',
    icon: Building,
    title: 'Commercial Fit-Out & Gypsum',
    desc: 'Office partitioning, ceiling systems, epoxy flooring, glass partition works, and full interior turnkeys.',
  },
  {
    id: 'annual-maintenance-contracts',
    icon: ShieldCheck,
    title: 'Annual Maintenance Contracts (AMC)',
    desc: 'Comprehensive 365-day facility management contracts for office buildings, retail chains, and luxury villas.',
  },
  {
    id: 'civil-work-painting',
    icon: Award,
    title: 'Civil Work & Painting',
    desc: 'Interior/exterior protective painting, tile restoration, waterproofing solutions, and masonry repairs.',
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-8"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-600">
          Capabilities
        </h2>

        <p className="text-3xl font-bold text-slate-900">
          Comprehensive Technical Services
        </p>

        <p className="mt-2 text-sm text-slate-600">
          High-performance engineering solutions for commercial and residential
          developments.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
            >
              <div className="mb-5 inline-block rounded-xl bg-amber-50 p-3">
                <Icon
                  size={28}
                  className="text-amber-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
