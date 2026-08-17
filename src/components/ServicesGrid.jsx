import React from 'react';
import {
  Zap,
  Wrench,
  Droplet,
  Building,
  ShieldCheck,
  Award,
  ArrowUpRight,
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
  const whatsappNumber = '923238999556';

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-600">
          Core Capabilities
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Comprehensive Engineering Solutions
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          High-performance facility maintenance tailored to meet strict Dubai
          Municipality & Civil Defense standards.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          const serviceQuery = encodeURIComponent(
            `Hi, I am interested in getting a proposal for ${service.title} in Dubai.`
          );

          return (
            <a
              key={service.id}
              href={`https://wa.me/${whatsappNumber}?text=${serviceQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-2xl cursor-pointer"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 shadow-md transition-transform group-hover:scale-105">
                  <Icon size={28} className="text-amber-500" aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center pt-4 text-xs font-bold text-slate-900 transition-colors group-hover:text-amber-600 border-t border-slate-100">
                <span>EXPLORE CONTRACT SPECS</span>
                <ArrowUpRight
                  size={16}
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
