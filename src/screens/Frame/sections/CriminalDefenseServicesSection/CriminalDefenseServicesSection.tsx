import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const practiceAreas = [
    {
      title: "Chapter 7 Bankruptcy",
      description: "Guidance through Chapter 7 bankruptcy for individuals seeking debt relief and a fresh financial start."
    },
    {
      title: "Chapter 13 Bankruptcy",
      description: "Assistance with Chapter 13 bankruptcy, helping clients reorganize debts and develop manageable repayment plans."
    },
    {
      title: "Consumer Bankruptcy Consultation",
      description: "Personalized consultation to review your financial situation, explain options, and outline next steps."
    },
    {
      title: "Small Business Bankruptcy Support",
      description: "Helping small business owners assess options and navigate Chapter 7 or Chapter 13 bankruptcy filings."
    },
  ];

  return (
    <section id="practice-areas" className="w-full py-12 md:py-20" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lato text-3xl md:text-4xl font-normal mb-4" style={{ color: '#2c3e50' }}>
            Bankruptcy Solutions You Can Rely On
          </h2>
          <p className="font-lato text-base max-w-3xl mx-auto mb-8" style={{ color: '#2c3e50' }}>
            Our team guides you through every step of the bankruptcy process, from consultation to resolution.
          </p>
          <h3 className="font-lato text-2xl font-normal" style={{ color: '#2c3e50' }}>
            Bankruptcy Cases We Handle
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="rounded-lg py-6 px-6 border-l-4"
              style={{ backgroundColor: 'white', borderColor: '#c6a475' }}
            >
              <h4 className="font-lato font-bold text-lg mb-2" style={{ color: '#2c3e50' }}>
                {area.title}
              </h4>
              <p className="font-lato text-sm" style={{ color: '#2c3e50' }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg p-12 text-center" style={{ backgroundColor: '#c6a475' }}>
          <h3 className="font-lato text-2xl md:text-3xl font-normal mb-6" style={{ color: '#2c3e50' }}>
            Ready to Get Help?
          </h3>

          <a
            href="tel:7753479226"
            className="inline-block font-lato text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
            style={{ color: '#2c3e50' }}
          >
            (775) 347-9226
          </a>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-lato font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block text-white"
              style={{ backgroundColor: '#2d4354' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Schedule a Consultation
            </button>

            <p className="font-lato text-base" style={{ color: '#2c3e50' }}>
              Free consultations available for consumers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
