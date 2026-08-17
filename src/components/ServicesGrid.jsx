import React, { useState } from 'react';
import {
  Zap,
  Wrench,
  Droplet,
  Building,
  ShieldCheck,
  Award,
  ArrowUpRight,
  X,
  CheckCircle2,
  Clock,
  MessageCircle,
} from 'lucide-react';

const services = [
  {
    id: 'hvac-ac-maintenance',
    icon: Zap,
    title: 'HVAC & Central AC Maintenance',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    desc: 'Chiller overhauling, FCU/AHU maintenance, duct cleaning, and smart thermostat integrations for large commercial towers.',
    specs: [
      '2-Hour Emergency Response SLA in Business Bay & Downtown',
      'Chiller Plant Overhauling & Preventive Chemical Washing',
      'Indoor Air Quality (IAQ) & Duct Sanitization Certification',
      'DEWA Energy Efficiency Compliance Audit Included',
    ],
    pricing: 'Custom AMC Packages Available',
  },
  {
    id: 'electrical-power-systems',
    icon: Wrench,
    title: 'Electrical & Power Systems',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    desc: 'DEWA approved electrical installations, DB panel maintenance, emergency wiring repairs, and LED retrofitting.',
    specs: [
      'DEWA Certified Senior Engineers & Technicians',
      'Thermal Imaging Leakage & DB Panel Load Testing',
      'UPS & Generator Backup System Maintenance',
      'Commercial LED Retrofitting for Energy Savings',
    ],
    pricing: 'On-Demand & Annual Contracts',
  },
  {
    id: 'plumbing-piping-networks',
    icon: Droplet,
    title: 'Plumbing & Piping Networks',
    image:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    desc: 'Commercial water pump maintenance, pipe leak detection, drainage clearing, and booster pump overhauls.',
    specs: [
      'Ultrasonic Pipe Leak Detection (Non-Destructive)',
      'Water Tank Cleaning & Dubai Municipality Certification',
      'High-Pressure Hydro Jetting for Drainage Blockages',
      'Booster & Transfer Pump Rewinding Services',
    ],
    pricing: 'Inspection Based Assessment',
  },
  {
    id: 'commercial-fit-out-gypsum',
    icon: Building,
    title: 'Commercial Fit-Out & Gypsum',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    desc: 'Office partitioning, ceiling systems, epoxy flooring, glass partition works, and full interior turnkeys.',
    specs: [
      '3D CAD Layout & Space Planning Approval Support',
      'Acoustic Glass Partitioning & Gypsum Ceiling Works',
      'Industrial Grade Epoxy & Raised Access Flooring',
      'Dubai Civil Defense (DCD) Approval Assistance',
    ],
    pricing: 'Per Sq. Ft Commercial Quotes',
  },
  {
    id: 'annual-maintenance-contracts',
    icon: ShieldCheck,
    title: 'Annual Maintenance Contracts (AMC)',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    desc: 'Comprehensive 365-day facility management contracts for office buildings, retail chains, and luxury villas.',
    specs: [
      '24/7 Dedicated Helpdesk & Dispatch Command Center',
      'Unlimited Emergency Call-outs for HVAC & Electrical',
      'Quarterly Comprehensive Preventive Maintenance Visits',
      'Dedicated Facility Manager Assigned for Corporate AMC',
    ],
    pricing: 'Tailored Corporate Contracts',
  },
  {
    id: 'civil-work-painting',
    icon: Award,
    title: 'Civil Work & Painting',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    desc: 'Interior/exterior protective painting, tile restoration, waterproofing solutions, and masonry repairs.',
    specs: [
      'Weather-Resistant Exterior Facade Elastomeric Coating',
      'Roof & Wet Area Waterproofing Injection Grouting',
      'Marble Polish, Tile Replacement & Concrete Repairs',
      'Zero-VOC Indoor Eco Painting for Corporate Offices',
    ],
    pricing: 'Project Based Estimation',
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);
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

      {/* Grid Display */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-2xl"
            >
              {/* Category Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-slate-950 shadow-md">
                  <Icon size={22} />
                </div>
              </div>

              {/* Body Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center pt-4 text-xs font-bold text-slate-900 border-t border-slate-100 transition-colors group-hover:text-amber-600">
                  <span>VIEW TECHNICAL SPECS</span>
                  <ArrowUpRight
                    size={16}
                    className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technical Specs Modal Window */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            {/* Modal Image Header */}
            <div className="relative h-52 w-full bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-900/60 p-2 text-white hover:bg-slate-900 transition"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Contract Specification
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedService.desc}
              </p>

              {/* Service Specifications List */}
              <div className="rounded-xl bg-slate-50 p-5 mb-6 border border-slate-200/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <Clock size={14} className="text-amber-500" />
                  Scope of Work & Compliance Standards
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500">
                  Structure: <span className="text-slate-900">{selectedService.pricing}</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-none text-center rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
                  >
                    Request Proposal
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I need details regarding ${selectedService.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-700"
                  >
                    <MessageCircle size={15} />
                    Ask via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
