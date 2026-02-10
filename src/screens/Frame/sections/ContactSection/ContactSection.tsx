import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="w-full py-12 md:py-20" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lato text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2c3e50' }}>
            Contact Action Legal
          </h2>
          <p className="font-lato text-lg" style={{ color: '#2c3e50' }}>
            Let's discuss your financial situation - get trusted bankruptcy guidance today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-lato text-2xl font-bold mb-6" style={{ color: '#2c3e50' }}>
              Request a Consultation
            </h3>
            <form
              id="contact-form"
              name="bankruptcy-form"
              method="POST"
              netlify
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-lato text-sm focus:outline-none"
                  style={{ borderColor: '#c6a475' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#2d4354')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#c6a475')}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-lato text-sm focus:outline-none"
                  style={{ borderColor: '#c6a475' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#2d4354')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#c6a475')}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-lato text-sm focus:outline-none"
                  style={{ borderColor: '#c6a475' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#2d4354')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#c6a475')}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-lato text-sm focus:outline-none resize-none"
                  style={{ borderColor: '#c6a475' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#2d4354')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#c6a475')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full font-lato font-medium text-sm px-8 py-3 transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap text-white"
                style={{ backgroundColor: '#2d4354' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-lato text-2xl font-bold mb-6" style={{ color: '#2c3e50' }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#c6a475' }} />
                  <div>
                    <p className="font-lato font-medium" style={{ color: '#2c3e50' }}>(775) 347-9226</p>
                    <p className="font-lato text-sm" style={{ color: '#2c3e50' }}>Call for your free consultation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-lato text-2xl font-bold mb-6" style={{ color: '#2c3e50' }}>
                Office Location
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#c6a475' }} />
                  <div>
                    <p className="font-lato font-medium mb-1" style={{ color: '#2c3e50' }}>Reno, Nevada:</p>
                    <p className="font-lato" style={{ color: '#2c3e50' }}>232 Court St</p>
                    <p className="font-lato mb-2" style={{ color: '#2c3e50' }}>Reno, NV 89501</p>
                    <p className="font-lato text-sm" style={{ color: '#2c3e50' }}>Virtual and phone consultations available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-lato text-2xl font-bold mb-6" style={{ color: '#2c3e50' }}>
                What To Expect
              </h3>
              <ul className="space-y-2 font-lato text-sm" style={{ color: '#2c3e50' }}>
                <li>• Free consultation for consumers</li>
                <li>• Confidential case evaluation</li>
                <li>• Clear explanation of your options</li>
                <li>• Step-by-step bankruptcy guidance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.5894329099733!2d-119.81637!3d39.5366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809add380d68f06d%3A0x6837c96b3f4c!2s232%20Court%20St%2C%20Reno%2C%20NV%2089501!5e0!3m2!1sen!2sus!4v1634567890000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Action Legal Services Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
