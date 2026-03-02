import React from "react";

const Collaboration: React.FC = () => {
  return (
    <section className="bg-brand-bg-off py-20">
      <div className="container max-w-[1200px] px-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[375px_1fr] gap-[50px] lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[2px] text-text/60 mb-[15px] font-heading">
              Collaboration
            </p>

            <h3 className="text-2xl uppercase tracking-[1px] font-light mb-5 text-text font-heading">
              Léo et Violette x Wendy Swan
            </h3>

            <p className="text-sm leading-[1.6] font-light text-text/70 mb-[30px] font-heading">
              Dalia was born from the encounter between Wendy and Léo et
              Violette. Wendy's minimalist and elegant universe corresponds
              perfectly to the spirit of Léo et Violette.
            </p>

            <a href="/pages/collaboration" className="inline-block px-[30px] py-3 text-[10px] uppercase tracking-[2px] border border-text bg-text text-brand-white transition-all duration-400 font-heading hover:bg-transparent hover:text-text">
              Discover
            </a>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center lg:justify-end items-end">
            <div className="w-[200px] sm:w-[280px] aspect-[2/3] relative z-[2] shadow-xl">
              <img
                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multiple_media_with_text_-_Portrait_-_home_2.jpg?v=1680770198&width=1000"
                alt="Collaboration Full Body"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[260px] sm:w-[380px] aspect-[2/3] -ml-[60px] lg:-ml-[100px] mb-10 lg:mb-20 relative z-[1] shadow-lg ">
              <img
                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multiple_media_with_text_-_Portrait_-_home_2.jpg?v=1680770198&width=1000"
                alt="Collaboration Close Up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collaboration;