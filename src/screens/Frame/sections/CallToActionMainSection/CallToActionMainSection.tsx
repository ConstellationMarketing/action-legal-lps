import React from "react";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-lato text-3xl md:text-4xl font-normal mb-6" style={{ color: '#2c3e50' }}>
          Call Now for Bankruptcy Help
        </h2>
        <p className="font-lato text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#2c3e50' }}>
          Free consultations available for consumers; small business consultations are available for a nominal fee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:7753479226"
            className="font-lato font-semibold px-8 py-4 transition-all text-white"
            style={{ backgroundColor: '#61645b' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Call Now: (775) 347-9226
          </a>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-lato font-semibold px-8 py-4 transition-all text-white"
            style={{ backgroundColor: '#2d4354' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Request Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
