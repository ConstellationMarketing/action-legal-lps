import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px]" style={{
      backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F4aa50f8858c147eba914d10a90d60e05?format=webp&width=800&height=1200)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Navigation Bar */}
      <div className="relative w-full border-b" style={{ backgroundColor: '#c6a475', borderColor: 'rgba(45, 67, 84, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F785a74076a2748f2b559333bed486ea9?format=webp&width=800&height=1200"
              alt="Action Legal Services"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-lato text-xs uppercase tracking-wider" style={{ color: '#ffffff' }}>Nevada Trusted Bankruptcy Law Firm</p>
            <a
              href="tel:7753479226"
              className="font-lato hover:opacity-80 transition-opacity text-lg font-semibold"
              style={{ color: '#ffffff' }}
            >
              (775) 347-9226
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="rounded-lg p-8 md:p-12 inline-block" style={{ backgroundColor: '#e3dfd6' }}>
          <h1 className="font-lato text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ color: '#2c3e50' }}>
            Get a Fresh Financial Start with Trusted Bankruptcy Help
          </h1>

          <h2 className="font-lato text-xl md:text-2xl font-bold mb-6" style={{ color: '#2c3e50' }}>
            Northern Nevada & Eastern California Bankruptcy Attorneys
          </h2>

          <p className="font-lato text-base max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: '#2c3e50' }}>
            Facing financial difficulties or considering bankruptcy? Action Legal provides trusted guidance for Chapter 7 and Chapter 13 cases, helping both individuals and small businesses navigate the process. We offer free consultations for consumers and flexible virtual or phone appointments, ensuring your financial future is protected.
          </p>

          <button
            className="font-lato font-medium text-sm px-8 py-3 border transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
            style={{ backgroundColor: '#2d4354', color: 'white', borderColor: '#2d4354' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
