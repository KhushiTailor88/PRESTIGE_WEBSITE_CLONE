import React from "react";
import "./ScrollingContent.css";

const ScrollingText: React.FC = () => {
  const topLineContent = (
    <>
      {[...Array(2)].map((_, i: number) => (
        <div key={i} className="scroll-item">
          <span className="scroll-text">
            NEW: LE SAC BAGUETTE
          </span>

          <div className="scroll-image">
            <img
              src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=500"
              alt="Le Sac Baguette"
              className="image-contain"
            />
          </div>
        </div>
      ))}
    </>
  );

  const bottomLineContent = (
    <>
      {[...Array(2)].map((_, i: number) => (
        <div key={i} className="scroll-item bottom-item">
          <div className="scroll-image">
            <img
              src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_new.jpg?v=1680765940&width=500"
              alt="New Arrivals"
              className="image-contain"
            />
          </div>

          <span className="scroll-text">
            SHOP NEW ARRIVALS
          </span>
        </div>
      ))}
    </>
  );

  return (
    <section className="scroll-section">
      {/* Top Line */}
      <div className="scroll-line top-line">
        <div className="scroll-track marquee-left">
          {topLineContent}
          {topLineContent}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="scroll-line bottom-line">
        <div className="scroll-track marquee-right">
          {bottomLineContent}
          {bottomLineContent}
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;