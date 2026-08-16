const trustStats = [
  {
    value: '500+',
    label: 'Dubai Projects Completed',
  },
  {
    value: '24/7',
    label: 'Emergency Response Unit',
  },
  {
    value: '100%',
    label: 'In-House Certified Technicians',
  },
  {
    value: '4.9 ★',
    label: 'Google Client Rating',
  },
];

export default function TrustBadges() {
  return (
    <section
      id="trust"
      className="border-b border-slate-200 bg-white py-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:px-8 md:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <div className="text-2xl font-black text-slate-900 sm:text-3xl">
              {stat.value}
            </div>

            <div className="text-xs font-medium text-slate-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
