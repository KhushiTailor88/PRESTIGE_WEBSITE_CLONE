import React, { useState, useRef } from "react";

const ColorComparison: React.FC = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updatePosition = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(position);
    };

    const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        updatePosition(clientX);
    };

    React.useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
            updatePosition(clientX);
        };

        const handleEnd = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    return (
        <section className="bg-brand-bg-off pb-20 text-center font-heading text-text">
            <div className="mb-[50px]">
                <p className="text-[10px] uppercase tracking-[2px] text-text/60 mb-[10px]">Le Dalia</p>
                <h2 className="text-[28px] uppercase tracking-[3px] font-light">Choose Your Colour</h2>
            </div>

            <div
                className="max-w-[1200px] mx-auto h-[350px] sm:h-[450px] lg:h-[600px] relative overflow-hidden cursor-ew-resize select-none mx-5 lg:mx-auto"
                ref={containerRef}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
            >
                {/* Under Image (Blue/Grey) */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/After_-_Desktop_a6b79a4e-dcad-4761-9811-c1386231ae01.jpg?v=1680772107&width=1600"
                        alt="Blue Denim Liégé"
                        className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 z-[5] text-right pointer-events-auto">
                        <p className="text-sm tracking-[2px] mb-[10px] font-normal">BLUE DENIM LIÉGÉ</p>
                        <a href="#" className="text-[10px] underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity duration-300">View product</a>
                    </div>
                </div>

                {/* Over Image (Almond Green) */}
                <div
                    className={`absolute inset-0 w-full h-full ${!isDragging ? 'transition-[clip-path] duration-100 ease-out' : ''}`}
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <div className="w-full h-full">
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Before_-_Desktop.jpg?v=1680771668&width=1600"
                            alt="Almond Green Liégé"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    </div>
                    <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 z-[5] text-left pointer-events-auto">
                        <p className="text-sm tracking-[2px] mb-[10px] font-normal">ALMOND GREEN LIÉGÉ</p>
                        <a href="#" className="text-[10px] underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity duration-300">View product</a>
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className={`absolute top-0 bottom-0 w-[1px] bg-brand-white/50 z-10 pointer-events-none ${!isDragging ? 'transition-[left] duration-100 ease-out' : ''}`}
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-brand-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-text">
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
