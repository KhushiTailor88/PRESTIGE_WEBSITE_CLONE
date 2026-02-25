import React, { useState } from 'react';
import './PressQuotes.css';

interface QuoteItem {
    id: number;
    text: string;
    logoSrc: string;
    logoSrcSet: string;
    logoAlt: string;
    logoHeight: string;
}

const quotes: QuoteItem[] = [
    {
        id: 0,
        text: 'The GQ choice: "black or green, with its leather both flexible and rigid, small Binder protects your equipment in dedicated compartments"',
        logoSrc: "//prestige-theme-allure.myshopify.com/cdn/shop/files/GQ_f8752956-3d3d-4641-b56b-11aa8f575ad0.png?v=1678198022&width=280",
        logoSrcSet: "//prestige-theme-allure.myshopify.com/cdn/shop/files/GQ_f8752956-3d3d-4641-b56b-11aa8f575ad0.png?v=1678198022&width=140 140w, //prestige-theme-allure.myshopify.com/cdn/shop/files/GQ_f8752956-3d3d-4641-b56b-11aa8f575ad0.png?v=1678198022&width=280 280w",
        logoAlt: "GQ",
        logoHeight: "50px"
    },
    {
        id: 1,
        text: 'Le Petit Violette redefined women elegancy. Its high quality leather and convenient interior make it perfect for an everyday usage!',
        logoSrc: "//prestige-theme-allure.myshopify.com/cdn/shop/files/farfetch_918705ce-3e92-4233-b030-82a21ada45c6.png?v=1678198022&width=280",
        logoSrcSet: "//prestige-theme-allure.myshopify.com/cdn/shop/files/farfetch_918705ce-3e92-4233-b030-82a21ada45c6.png?v=1678198022&width=140 140w, //prestige-theme-allure.myshopify.com/cdn/shop/files/farfetch_918705ce-3e92-4233-b030-82a21ada45c6.png?v=1678198022&width=280 280w",
        logoAlt: "FARFETCH",
        logoHeight: "35px"
    },
    {
        id: 2,
        text: 'Le Nouveau Cartable is perfectly sized, even holds my water bottle. And the leather just looks super rich and luxurious. Most awesome product I\'ve tested!',
        logoSrc: "//prestige-theme-allure.myshopify.com/cdn/shop/files/forbes_d342321b-285c-4e83-bd44-37953300a262.png?v=1678198021&width=280",
        logoSrcSet: "//prestige-theme-allure.myshopify.com/cdn/shop/files/forbes_d342321b-285c-4e83-bd44-37953300a262.png?v=1678198021&width=140 140w, //prestige-theme-allure.myshopify.com/cdn/shop/files/forbes_d342321b-285c-4e83-bd44-37953300a262.png?v=1678198021&width=280 280w",
        logoAlt: "Forbes",
        logoHeight: "40px"
    }
];

const PressQuotes: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="press-quotes">
            <div className="press-quotes__container">
                <div className="press-quotes__quote-wrapper">
                    <p key={activeIndex} className="press-quotes__quote fade-in">
                        {quotes[activeIndex].text}
                    </p>
                </div>

                <div className="press-quotes__logos">
                    {quotes.map((quote, index) => (
                        <div
                            key={quote.id}
                            className={`press-quotes__logo ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={quote.logoSrc}
                                srcSet={quote.logoSrcSet}
                                alt={quote.logoAlt}
                                className="logo-white"
                                style={{ height: quote.logoHeight }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PressQuotes;
