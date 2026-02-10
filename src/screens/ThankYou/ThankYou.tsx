import React from "react";
import { CheckCircle } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="rounded-full p-4" style={{ backgroundColor: 'rgba(198, 164, 117, 0.1)' }}>
              <CheckCircle className="w-16 h-16" style={{ color: '#c6a475' }} />
            </div>
          </div>

          <h1 className="font-lato text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2c3e50' }}>
            Your Request Has Been Received
          </h1>

          <p className="font-lato text-lg mb-4" style={{ color: '#2c3e50' }}>
            A member of our team will contact you shortly.
          </p>

          <div className="bg-white border-l-4 rounded-lg p-6 mb-8 text-left" style={{ borderColor: '#c6a475', backgroundColor: 'rgba(227, 223, 214, 0.5)' }}>
            <p className="font-lato font-semibold mb-4" style={{ color: '#2c3e50' }}>
              Next Steps:
            </p>
            <ul className="space-y-2 font-lato" style={{ color: '#2c3e50' }}>
              <li className="flex items-center">
                <span className="mr-3" style={{ color: '#c6a475' }}>✓</span>
                Watch for a call or email reply
              </li>
              <li className="flex items-center">
                <span className="mr-3" style={{ color: '#c6a475' }}>✓</span>
                We'll outline next steps and a clear legal plan
              </li>
            </ul>
          </div>

          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#c6a475' }}>
            <p className="font-lato font-semibold mb-2" style={{ color: '#2c3e50' }}>
              Need Immediate Assistance?
            </p>
            <a
              href="tel:7753479226"
              className="font-lato text-2xl font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#2c3e50' }}
            >
              (775) 347-9226
            </a>
            <p className="font-lato text-sm mt-2" style={{ color: '#2c3e50' }}>
              Available to help you with your bankruptcy matter
            </p>
          </div>

          <a
            href="/"
            className="inline-block font-lato font-medium text-sm px-8 py-3 transition-all duration-150 uppercase tracking-[2px] text-white"
            style={{ backgroundColor: '#2d4354' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};
