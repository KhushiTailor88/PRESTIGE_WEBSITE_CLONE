import React from 'react';
import './OurLooks.css';

const OurLooks = () => {
    // Extracted from Shopify reference HTML
    const looks = [
        {
            id: 1,
            mainImage: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Shop_the_look_-_mini_primo.jpg?v=1676554113&width=1200',
            products: [
                {
                    id: 101,
                    handle: '/products/le-grand-nova-ivory-liege',
                    label: 'Best seller',
                    name: 'Le Grand Nova Ivory Liégé',
                    price: '$450.00',
                    imagePrimary: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.jpg?v=1676886728&width=1200',
                    imageHover: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-02_348ac141-50cb-4494-983f-723ee1be4298.jpg?v=1677153834&width=1200',
                    hotspot: { top: '35%', left: '24%' }
                },
                {
                    id: 102,
                    handle: '/products/le-primo-greige-pebbled-leather',
                    label: '',
                    name: 'Le Primo Greige Pebbled Leather',
                    price: '$420.00',
                    imagePrimary: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Primo-Graine-Grege-01_dd85fd19-44f2-4e1d-a4ac-9b62d571a7a0.jpg?v=1676886974&width=1200',
                    imageHover: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Primo-Graine-Grege-02_e11e2930-e862-43d7-ac51-eaf3b7fc7526.jpg?v=1677144014&width=1200',
                    hotspot: { top: '51%', left: '67%' }
                }
            ]
        },
        {
            id: 2,
            mainImage: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Shop_the_look_-_home_2.jpg?v=1680769235&width=1200',
            products: [
                {
                    id: 201,
                    handle: '/products/le-slim-briefcase-khaki-pebbled-leather',
                    label: 'New',
                    name: 'Le Slim Briefcase Khaki Pebbled Leather',
                    price: '$420.00',
                    imagePrimary: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Petit-Graine-Kaki-01_7bfb103e-67af-4e25-8052-530433507a1e.jpg?v=1676887484&width=1200',
                    imageHover: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Petit-Graine-Kaki-02_1fb09edf-841a-4ab8-b142-a09247ea38e6.jpg?v=1677260844&width=1200',
                    hotspot: { top: '58%', left: '35%' }
                },
                {
                    id: 202,
                    handle: '/products/le-nova-petrol-liege',
                    label: '',
                    name: 'Le Nova Petrol Liégé',
                    price: '$420.00',
                    imagePrimary: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Nova-Vert-01_1_55241fb8-6ed6-41c7-9964-8d8f3ed9b886.jpg?v=1676886478&width=1200',
                    imageHover: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Nova-Vert-02_1_bb71a3ae-dba4-4a37-a5ce-1d510e1acb86.jpg?v=1677078486&width=1200',
                    hotspot: { top: '75%', left: '69%' }
                }
            ]
        }
    ];

    const [activeLookIndex, setActiveLookIndex] = React.useState(0);
    const [activeProductIndex, setActiveProductIndex] = React.useState(0);

    const nextSlide = () => {
        setActiveLookIndex((prev) => {
            const nextIndex = (prev + 1) % looks.length;
            setActiveProductIndex(0); // Reset product index when look changes
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setActiveLookIndex((prev) => {
            const prevIndex = (prev - 1 + looks.length) % looks.length;
            setActiveProductIndex(0);
            return prevIndex;
        });
    };

    const currentLook = looks[activeLookIndex];
    const currentProduct = currentLook.products[activeProductIndex];

    return (
        <section className="our-looks">
            <div className="our-looks__container">
                {/* Header */}
                <div className="our-looks__header">
                    <span className="our-looks__label">SHOP</span>
                    <h2 className="our-looks__title">OUR LOOKS</h2>
                </div>

                {/* Content Grid */}
                <div className="our-looks__grid">
                    {/* Left: Lifestyle Image with Navigation and Hotspots */}
                    <div className="our-looks__image-wrapper">
                        <div className="our-looks__image-container">
                            <img
                                src={currentLook.mainImage}
                                alt="Lifestyle"
                                className="our-looks__image"
                            />

                            {/* Render Hotspots for the active look */}
                            {currentLook.products.map((product, index) => (
                                <button
                                    key={product.id}
                                    className={`our-looks__hotspot ${index === activeProductIndex ? 'our-looks__hotspot--active' : ''}`}
                                    style={{
                                        top: product.hotspot.top,
                                        left: product.hotspot.left
                                    }}
                                    onClick={() => setActiveProductIndex(index)}
                                    aria-label={`View ${product.name}`}
                                >
                                    <span className="our-looks__hotspot-inner"></span>
                                </button>
                            ))}
                        </div>

                        {/* Navigation Arrows for Main Look */}
                        <button
                            onClick={prevSlide}
                            className="our-looks__nav-button our-looks__nav-button--prev"
                            aria-label="Previous look"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M15 5l-7 7 7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="our-looks__nav-button our-looks__nav-button--next"
                            aria-label="Next look"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right: Product Showcase Based on Active Hotspot */}
                    <div className="our-looks__product">
                        <span className="our-looks__product-label">
                            {currentProduct.label || '\u00A0'} {/* Non-breaking space to preserve layout if no label */}
                        </span>

                        <div className="our-looks__product-image-wrapper">
                            <img
                                src={currentProduct.imagePrimary}
                                alt={currentProduct.name}
                                className={`our-looks__product-image ${currentProduct.imageHover ? 'our-looks__product-image--primary' : ''}`}
                            />
                            {currentProduct.imageHover && (
                                <img
                                    src={currentProduct.imageHover}
                                    alt={`${currentProduct.name} Hover`}
                                    className="our-looks__product-image our-looks__product-image--hover"
                                />
                            )}
                        </div>

                        <h3 className="our-looks__product-name">
                            <a href={currentProduct.handle}>{currentProduct.name}</a>
                        </h3>

                        <p className="our-looks__product-price">
                            {currentProduct.price}
                        </p>

                        <a href={currentProduct.handle} className="our-looks__cta">
                            VIEW PRODUCT
                        </a>

                        {/* Pagination Dots for Products in Current Look */}
                        <div className="our-looks__pagination">
                            {currentLook.products.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveProductIndex(index)}
                                    className={`our-looks__dot ${index === activeProductIndex ? 'our-looks__dot--active' : ''}`}
                                    aria-label={`Select product ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurLooks;
