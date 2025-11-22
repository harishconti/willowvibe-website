import React from 'react';

// Placeholder Logo Components
const Logo1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <path d="M10,15 L20,5 L30,15 L20,25 Z" />
    <rect x="35" y="10" width="55" height="10" rx="2" />
  </svg>
);

const Logo2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <circle cx="15" cy="15" r="10" />
    <rect x="35" y="10" width="55" height="10" rx="2" />
  </svg>
);

const Logo3 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <rect x="5" y="5" width="20" height="20" rx="2" />
    <rect x="35" y="10" width="55" height="10" rx="2" />
  </svg>
);

const Logo4 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <path d="M15,5 L25,25 L5,25 Z" />
    <rect x="35" y="10" width="55" height="10" rx="2" />
  </svg>
);

const Logo5 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <path d="M5,15 Q15,5 25,15 T45,15" fill="none" stroke="currentColor" strokeWidth="3" />
    <rect x="35" y="10" width="55" height="10" rx="2" />
  </svg>
);

const Logo6 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <rect x="5" y="10" width="10" height="10" />
    <rect x="17" y="5" width="10" height="20" />
    <rect x="35" y="10" width="55" height="10" rx="2" />
  </svg>
);

const TrustedBy = () => {
  const logos = [
    { id: 1, Component: Logo1, name: "Partner 1" },
    { id: 2, Component: Logo2, name: "Partner 2" },
    { id: 3, Component: Logo3, name: "Partner 3" },
    { id: 4, Component: Logo4, name: "Partner 4" },
    { id: 5, Component: Logo5, name: "Partner 5" },
    { id: 6, Component: Logo6, name: "Partner 6" },
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Healthcare Solutions" },
    { value: "15+", label: "Years Combined Experience" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted by Leading Organizations
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-12">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center group"
              aria-label={logo.name}
            >
              <logo.Component
                className="h-8 md:h-10 w-auto text-gray-400 group-hover:text-teal-600 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-bg-1)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-teal-100/50">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-1">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
