import React, { useEffect, useRef, useState } from "react";
import "./HomeScrollSections.css";

interface ScrollItem {
  number: string;
  title: string;
  text: string;
  image: string;
  linkText: string;
  linkUrl: string;
}

const items: ScrollItem[] = [
  {
    number: "#1",
    title: "The Design",
    text: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne.",
    image:
      "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Images_with_text_scroll_-_Image_-_home_1.jpg?v=1680774254&width=1000",
    linkText: "Learn more",
    linkUrl: "/pages/about-us",
  },
  {
    number: "#2",
    title: "Our commitments",
    text: "From design to distribution, we take the greatest care with our products, which reflect our values: timeless, quality, at the right price.",
    image:
      "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Images_with_text_scroll_-_Image_-_home_2.jpg?v=1680774758&width=1000",
    linkText: "Learn more",
    linkUrl: "/pages/commitments",
  },
];

const ScrollingImages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.5,
          rootMargin: "-25% 0px -25% 0px",
        }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="scroll-section">
      <div className="scroll-background" />
      <div className="scroll-overlay" />

      <div className="scroll-container">
        <div className="scroll-desktop">
          <div className="scroll-left">
            <div className="scroll-image-wrapper">
              {items.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className={`scroll-image ${activeIndex === index ? "active" : ""
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="scroll-right">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="scroll-text-block"
              >
                <div className="scroll-text-inner">
                  <p className="scroll-number">{item.number}</p>
                  <h3 className="scroll-title">{item.title}</h3>
                  <p className="scroll-description">{item.text}</p>
                  <a href={item.linkUrl} className="scroll-link">
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingImages;