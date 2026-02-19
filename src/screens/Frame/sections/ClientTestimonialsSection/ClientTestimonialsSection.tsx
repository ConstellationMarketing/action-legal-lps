import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Users } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  const clientCategories = [
    {
      title: "Individuals Facing Debt Challenges",
      description: "Personalized support for people struggling with overwhelming financial obligations who may qualify for Chapter 7 or Chapter 13 bankruptcy relief."
    },
    {
      title: "Business Owners with Financial Strain",
      description: "Guidance for small business owners considering bankruptcy options to manage business debts, reorganize payments, and protect business interests."
    },
    {
      title: "Stop Foreclosure & Creditor Actions",
      description: "Help to understand options for stopping foreclosure, wage garnishments, creditor lawsuits, and other collection actions through bankruptcy filings."
    },
    {
      title: "Consumer Credit Rights Support",
      description: "Assistance reviewing your credit standing, identifying potential improvements, and navigating debt collection and credit reporting issues."
    }
  ];

  return (
    <section className="w-full py-12 md:py-20" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-lato text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>
          We Help All Types of Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md" style={{ backgroundColor: 'white' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#c6a475' }} />
                  <div>
                    <h3 className="font-lato font-bold text-lg mb-2" style={{ color: '#2c3e50' }}>
                      {category.title}
                    </h3>
                    <p className="font-lato text-sm leading-relaxed" style={{ color: '#2c3e50' }}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
