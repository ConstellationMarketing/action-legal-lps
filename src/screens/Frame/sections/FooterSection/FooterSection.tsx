import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full py-8" style={{ backgroundColor: '#e3dfd6' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="font-lato text-sm" style={{ color: '#2c3e50' }}>
            © Action Legal Services - 2026, All Rights Reserved.
          </p>
          <p className="font-lato text-xs mt-2" style={{ color: '#2c3e50' }}>
            Nevada Bankruptcy Attorney | (775) 347-9226 | nathan@zlaw.com
          </p>
        </div>
      </div>
    </section>
  );
};
