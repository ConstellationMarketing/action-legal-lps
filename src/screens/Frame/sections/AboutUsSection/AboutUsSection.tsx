import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Clear Bankruptcy Guidance",
    "Northern Nevada & Eastern California Coverage",
    "Practical Solutions for Consumers & Businesses",
    "Free Consultation for Consumers"
  ];

  return (
    <section id="about-us" className="w-full pt-6 md:pt-8 pb-12 md:pb-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-lato text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>
          About Action Legal
        </h2>

        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-6 text-center max-w-3xl mb-12">
            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              Action Legal is a Reno-based law firm focused on providing guidance and representation in bankruptcy cases. We assist clients in Northern Nevada and Eastern California, helping individuals and small businesses navigate Chapter 7 and Chapter 13 bankruptcy filings.
            </p>

            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              Our firm helps clients understand the bankruptcy process, gather necessary documents, and take steps to achieve debt relief or financial reorganization. We aim to provide clear, practical solutions for each client's financial situation.
            </p>

            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              The team at Action Legal works closely with clients throughout the entire bankruptcy process, from initial consultation to case resolution. We provide virtual and phone consultations when needed and ensure clients understand their options every step of the way.
            </p>

            <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
              Whether you are facing personal financial challenges or managing small business debts, Action Legal is here to guide you through bankruptcy proceedings and help you take control of your financial future.
            </p>
          </div>

          <div className="w-full">
            <h3 className="font-lato text-2xl font-bold text-center mb-8" style={{ color: '#2c3e50' }}>
              Why Choose Action Legal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 flex flex-col items-center text-center border-l-4"
                  style={{ backgroundColor: '#e3dfd6', borderColor: '#c6a475' }}
                >
                  <CheckCircle className="w-10 h-10 mb-3" style={{ color: '#c6a475' }} />
                  <p className="font-lato text-sm font-medium leading-relaxed" style={{ color: '#2c3e50' }}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
