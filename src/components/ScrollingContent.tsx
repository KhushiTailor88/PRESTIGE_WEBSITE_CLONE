import React from "react";

const ScrollingText: React.FC = () => {
  const topLineContent = (
    <>
      {[...Array(2)].map((_, i: number) => (
        <div key={i} className="flex items-center gap-10 px-4">
          <span className="text-[40px] md:text-[64px] font-normal text-[#b3b3b3] tracking-[1px] font-heading whitespace-nowrap">
            NEW: LE SAC BAGUETTE
          </span>

          <div className="w-[60px] md:w-20 h-[60px] md:h-20 flex-shrink-0">
            <img
              src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=500"
              alt="Le Sac Baguette"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </>
  );

  const bottomLineContent = (
    <>
      {[...Array(2)].map((_, i: number) => (
        <div key={i} className="flex items-center gap-10 px-6">
          <div className="w-[60px] md:w-20 h-[60px] md:h-20 flex-shrink-0">
            <img
              src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_new.jpg?v=1680765940&width=500"
              alt="New Arrivals"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-[40px] md:text-[64px] font-normal text-[#b3b3b3] tracking-[1px] font-heading whitespace-nowrap">
            SHOP NEW ARRIVALS
          </span>
        </div>
      ))}
    </>
  );

  return (
    <section className="bg-brand-bg py-8 overflow-hidden">
      {/* Top Line */}
      <div className="flex whitespace-nowrap py-10 border border-text/10">
        <div className="flex animate-marquee-left">
          {topLineContent}
          {topLineContent}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="flex whitespace-nowrap py-10 border-b border-text/10">
        <div className="flex animate-marquee-right">
          {bottomLineContent}
          {bottomLineContent}
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;