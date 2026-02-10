import React from "react";
import { Scale, Users, Briefcase, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      text: "Facing financial challenges or considering bankruptcy can be stressful, but you don't have to navigate it alone. Action Legal begins by carefully reviewing your situation, goals, and available options."
    },
    {
      icon: Users,
      text: "We focus on providing clear guidance, practical strategies, and open communication throughout the bankruptcy process to ensure you understand each step and feel supported."
    },
    {
      icon: Briefcase,
      text: "Our firm handles both Chapter 7 and Chapter 13 bankruptcy cases for consumers and small businesses across Northern Nevada and Eastern California, helping clients regain control of their finances."
    },
    {
      icon: Award,
      text: "We make sure each client understands the bankruptcy process, potential outcomes, and available options, empowering you to make informed decisions about your financial future."
    }
  ];

  return (
    <section className="w-full pt-12 md:pt-20 pb-6 md:pb-8" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-lato text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: '#2c3e50' }}>
          Why Choose Action Legal
        </h2>
        <p className="font-lato text-center text-lg mb-12" style={{ color: '#2c3e50' }}>
          Practical bankruptcy guidance built on clear, step-by-step support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg flex flex-col items-center text-center border-t-4"
                style={{ backgroundColor: '#e3dfd6', borderColor: '#c6a475' }}
              >
                <IconComponent className="w-12 h-12 mb-4" style={{ color: '#c6a475' }} />
                <p className="font-lato text-sm leading-relaxed" style={{ color: '#2c3e50' }}>
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
