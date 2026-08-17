import React from 'react';

const trustStats = [
  {
    value: '500+',
    label: 'Dubai Projects Completed',
    isRating: false,
  },
  {
    value: '24/7',
    label: 'Emergency Response Unit',
    isRating: false,
  },
  {
    value: '100%',
    label: 'In-House Certified Technicians',
    isRating: false,
  },
  {
    value: '4.9 ★',
    label: 'Google Client Rating',
    isRating: true,
  },
];

export default function TrustBadges() {
  return (
    <section id="trust" className="border-b border-slate-200/80 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 gap-6 divide-y divide-slate-100 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {trustStats.map((stat) => (
            <div key={stat.label} className="px-4 text-center pt-4 md:pt-0">
              <div
                className={`text-3xl font-black tracking-tight sm:text-4xl ${
                  stat.isRating ? 'text-amber-500' : 'text-slate-900'
                }`}
              >
                {stat.value}
              </div>

              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
