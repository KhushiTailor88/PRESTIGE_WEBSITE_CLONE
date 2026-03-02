import React from 'react';

const NewMarquee: React.FC = () => {
    const content = (
        <div className="flex items-center gap-[var(--scrolling-content-content-gap,40px)] px-4">
            <div className="flex items-center gap-[var(--scrolling-content-content-gap,40px)]">
                <p className="text-[179,179,179] font-medium tracking-tight whitespace-nowrap uppercase">
                    <a href="/products/le-sac-baguette-printed-lizard-camel" title="Le Sac Baguette Printed Lizard Camel" className="hover:opacity-80 transition-opacity">
                        New: Le Sac Baguette
                    </a>
                </p>
                <div className="w-[180px] h-auto flex-shrink-0">
                    <img
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Scrolling_content_-_home_-_sac._-baguette.jpg?v=1680765474&width=500"
                        alt="Le Sac Baguette"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-[#efefef] border-y border-black/15 py-[var(--section-vertical-spacing,40px)] overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                {/* Render multiple times for continuous scrolling */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center gap-[var(--scrolling-content-content-gap,40px)]">
                        {content}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewMarquee;
