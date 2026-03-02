import React, { useEffect, useRef, useState } from "react";

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
    <section className="relative w-full text-brand-white">
      {/* Background and Overlay */}
      <div className="fixed inset-0 bg-[url('/Background_image1.webp')] bg-cover bg-center bg-fixed z-0" />
      <div className="fixed inset-0 bg-black/35 z-[1]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row">
          {/* Left: Sticky Image (Desktop) */}
          <div className="w-full md:w-1/2 h-auto md:h-screen sticky top-0 md:flex md:items-center md:justify-center hidden md:block">
            <div className="relative w-[400px] aspect-[4/5] overflow-hidden">
              {items.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Scrolling Text (Desktop/Mobile) */}
          <div className="w-full md:w-1/2">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="min-h-screen flex items-center justify-center p-10 md:p-20"
              >
                <div className="max-w-[400px] text-center">
                  {/* Mobile Image (Show only on small screens) */}
                  <div className="md:hidden relative w-full aspect-[4/5] overflow-hidden mb-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-xs tracking-[0.25em] uppercase opacity-70 mb-5 font-heading">{item.number}</p>
                  <h3 className="text-2xl md:text-[26px] tracking-[0.15em] uppercase font-normal mb-[25px] font-heading">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed opacity-85 mb-[30px] font-body">{item.text}</p>
                  <a href={item.linkUrl} className="text-xs tracking-[0.18em] uppercase no-underline border-b border-brand-white/40 pb-1 transition-all duration-300 hover:border-brand-white font-heading">
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