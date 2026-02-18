import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-20" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-lato text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>
          Meet Attorney Nathan R. Zeltzer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fbd14c83f1509460bbff011b7a6055a2e?format=webp&width=800&height=1200"
              alt="Nathan R. Zeltzer, Attorney"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              Nathan R. Zeltzer is a qualified bankruptcy attorney helping clients in Northern Nevada and Eastern California navigate Chapter 7 and Chapter 13 bankruptcy. He assists both individuals and business clients in understanding and managing their financial options.
            </p>

            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              With a strong background in bankruptcy law, Nathan provides insight into the filing process and guides clients through complex financial situations. This enables him to develop clear, actionable plans tailored to each client's circumstances.
            </p>

            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              Nathan earned his Juris Doctor from Cooley Law School, where he focused on financial and consumer law. His career includes advising clients on debt relief strategies and representing them in bankruptcy proceedings, ensuring compliance and clarity throughout the process.
            </p>

            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              From consumer debt to business bankruptcy cases, Nathan provides thoughtful guidance and step-by-step support, helping clients regain control of their finances and take the first steps toward a fresh start.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('bankruptcy-lp-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-lato font-medium text-sm px-8 py-3 transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block text-white"
                style={{ backgroundColor: '#2d4354' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
