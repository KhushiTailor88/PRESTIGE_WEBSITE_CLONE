import React, { useState, useRef } from "react";
import "./ColorComparison.css";

const ColorComparison: React.FC = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        let x = 0;

        if ('touches' in e) {
            x = e.touches[0].clientX - rect.left;
        } else {
            x = (e as React.MouseEvent).clientX - rect.left;
        }

        const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(position);
    };

    return (
        <section className="color-comparison">
            <div className="color-comparison__header">
                <p className="color-comparison__label">Le Dalia</p>
                <h2 className="color-comparison__title">Choose Your Colour</h2>
            </div>

            <div
                className="color-comparison__container"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
            >
                {/* Under Image (Blue/Grey) - Visible on the right when slider is left */}
                <div className="color-comparison__image-under">
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/After_-_Desktop_a6b79a4e-dcad-4761-9811-c1386231ae01.jpg?v=1680772107&width=1600"
                        alt="Blue Denim Liégé"
                    />
                    <div className="color-comparison__info info--right">
                        <p className="color-comparison__product-name">BLUE DENIM LIÉGÉ</p>
                        <a href="#" className="color-comparison__link">View product</a>
                    </div>
                </div>

                {/* Over Image (Almond Green) - Visible on the left, grows to full width when slider moves right */}
                <div
                    className="color-comparison__image-over"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <div className="image-overlay-green">
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Before_-_Desktop.jpg?v=1680771668&width=1600"
                            alt="Almond Green Liégé"
                        />
                    </div>
                    <div className="color-comparison__info info--left">
                        <p className="color-comparison__product-name">ALMOND GREEN LIÉGÉ</p>
                        <a href="#" className="color-comparison__link">View product</a>
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="color-comparison__slider-line"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="color-comparison__slider-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorComparison;
