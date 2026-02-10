import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const WhyUsSection = (): JSX.Element => {
  const serviceHighlights = [
    "Guidance through Chapter 7 and Chapter 13 bankruptcy filings, helping clients regain financial stability.",
    "Free case evaluation available to review your options and next steps.",
    "Personalized planning and assistance with bankruptcy paperwork and procedures.",
    "Serving individuals and small business clients across Northern Nevada and Eastern California.",
    "Practical, step-by-step guidance through the bankruptcy process to help you understand your rights and choices."
  ];

  return (
    <section className="w-full py-12 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-lato text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>
          Our Service Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {serviceHighlights.map((highlight, index) => (
            <Card key={index} className="border-none shadow-md" style={{ backgroundColor: '#e3dfd6' }}>
              <CardContent className="p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#c6a475' }} />
                <p className="font-lato text-base leading-relaxed" style={{ color: '#2c3e50' }}>
                  {highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
