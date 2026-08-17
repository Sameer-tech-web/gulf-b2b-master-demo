import React from 'react';
import { ShieldCheck, ArrowRight, Phone, Lock } from 'lucide-react';

export default function HeroSection() {
  const myWhatsAppNumber = '923238999556';
  const displayPhone = '+971 4 392 8844';

  const heroWhatsAppMsg = encodeURIComponent(
    'Hi! I am interested in getting a website built like this Apex Technical Services demo.'
  );

  return (
    <section className="relative overflow-hidden bg-slate-900 px-4 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        {/* Hero Left Content */}
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <ShieldCheck size={15} />
            Dubai Municipality Approved & ISO Certified
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Premium Facility & Technical Services Across{' '}
            <span className="text-amber-400">UAE</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Complete B2B and commercial technical maintenance, HVAC solutions,
            electrical, and fit-out services tailored for Dubai&apos;s top
            commercial properties.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-7 py-3.5 text-center font-bold text-slate-950 shadow-lg transition hover:bg-amber-500"
            >
              Request Proposal
              <ArrowRight size={18} />
            </a>

            <a
              href={`https://wa.me/${myWhatsAppNumber}?text=${heroWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-slate-700"
            >
              <Phone size={18} className="text-amber-400" />
              Call Dispatch ({displayPhone})
            </a>
          </div>
        </div>

        {/* Lead Form Right */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-2xl sm:p-8 lg:col-span-5">
          <h3 className="mb-1 text-xl font-bold text-slate-900">
            Book an On-Site Inspection
          </h3>

          <p className="mb-6 text-xs text-slate-500">
            Get an official commercial quote within 2 hours in Dubai.
          </p>

          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div>
              <label
                htmlFor="company-name"
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                Company / Full Name
              </label>

              <input
                id="company-name"
                name="companyName"
                type="text"
                placeholder="e.g. Al Zahra Properties"
                autoComplete="organization"
                required
                className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="mobile-number"
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                UAE Mobile Number
              </label>

              <input
                id="mobile-number"
                name="mobileNumber"
                type="tel"
                placeholder="+971 50 000 0000"
                autoComplete="tel"
                required
                className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="required-service"
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                Required Service
              </label>

              <select
                id="required-service"
                name="requiredService"
                required
                defaultValue=""
                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="hvac-ac-maintenance">
                  HVAC & AC Maintenance
                </option>
                <option value="electrical-plumbing">
                  Electrical & Plumbing
                </option>
                <option value="fit-out-interior-renovation">
                  Fit-out & Interior Renovation
                </option>
                <option value="facility-management-contract">
                  Full Facility Management Contract
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-slate-900 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Submit Quote Request
            </button>

            <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-medium text-slate-500">
              <Lock size={12} className="text-emerald-600" />
              <span>Instant Dispatch Confirmation | 24/7 Support Desk</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
