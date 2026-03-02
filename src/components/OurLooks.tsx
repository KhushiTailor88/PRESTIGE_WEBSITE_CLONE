import React from 'react';

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
        <section className="bg-brand-bg py-20 font-heading">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative group/nav">
                {/* Header */}
                <div className="text-center mb-[60px]">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#777] block mb-5">SHOP</span>
                    <h2 className="text-[32px] md:text-[40px] font-normal tracking-[0.12em] uppercase text-text">OUR LOOKS</h2>
                </div>

                {/* Navigation Arrows for Section ( Repositioned outside image ) */}
                <button
                    onClick={prevSlide}
                    className="absolute top-[60%] -translate-y-1/2 left-2 md:left-4 xl:-left-16 w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-brand-white border border-[#e5e5e5] flex items-center justify-center cursor-pointer transition-all duration-300 z-[10] text-text hover:bg-text hover:text-brand-white hover:border-text opacity-0 group-hover/nav:opacity-100 shadow-sm"
                    aria-label="Previous look"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 5l-7 7 7 7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-[60%] -translate-y-1/2 right-2 md:right-4 xl:-right-16 w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-brand-white border border-[#e5e5e5] flex items-center justify-center cursor-pointer transition-all duration-300 z-[10] text-text hover:bg-text hover:text-brand-white hover:border-text opacity-0 group-hover/nav:opacity-100 shadow-sm"
                    aria-label="Next look"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[60px] lg:gap-[100px] items-center  ">
                    {/* Left: Lifestyle Image with Hotspots */}
                    <div className="relative">
                        <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
                            <img
                                src={currentLook.mainImage}
                                alt="Lifestyle"
                                className="w-full h-full object-cover block"
                            />

                            {/* Render Hotspots for the active look */}
                            {currentLook.products.map((product, index) => (
                                <button
                                    key={product.id}
                                    className={`absolute w-6 h-6 -ml-3 -mt-3 bg-transparent border-none cursor-pointer flex items-center justify-center z-10 group/hotspot transition-all duration-300`}
                                    style={{
                                        top: product.hotspot.top,
                                        left: product.hotspot.left
                                    }}
                                    onClick={() => setActiveProductIndex(index)}
                                    aria-label={`View ${product.name}`}
                                >
                                    <span className={`block w-2 h-2 bg-brand-white rounded-full transition-all duration-300 ${index === activeProductIndex ? 'scale-[1.5] bg-text shadow-[0_0_0_2px_#fff]' : 'shadow-[0_0_0_2px_rgba(28,28,28,0.15)] group-hover/hotspot:scale-[1.5] group-hover/hotspot:bg-text group-hover/hotspot:shadow-[0_0_0_2px_#fff]'}`}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Showcase Based on Active Hotspot */}
                    <div className="text-center px-5 py-10 lg:py-0">
                        <span className="text-[11px] tracking-[0.25em] uppercase text-[#999] block mb-5">
                            {currentProduct.label || '\u00A0'}
                        </span>

                        <div className="relative mb-10 aspect-square overflow-hidden group/product">
                            <img
                                src={currentProduct.imagePrimary}
                                alt={currentProduct.name}
                                className={`absolute top-0 left-0 w-full h-full object-cover block transition-all duration-500 ease-in-out group-hover/product:scale-105 ${currentProduct.imageHover ? 'opacity-100 group-hover/product:opacity-0' : 'opacity-100'}`}
                            />
                            {currentProduct.imageHover && (
                                <img
                                    src={currentProduct.imageHover}
                                    alt={`${currentProduct.name} Hover`}
                                    className="absolute top-0 left-0 w-full h-full object-cover block transition-all duration-500 ease-in-out opacity-0 group-hover/product:opacity-100 group-hover/product:scale-105"
                                />
                            )}
                        </div>

                        <h3 className="text-sm tracking-[0.12em] font-normal uppercase mb-4 text-text">
                            <a href={currentProduct.handle} className="hover:opacity-70 transition-opacity">{currentProduct.name}</a>
                        </h3>

                        <p className="text-[15px] mb-5 text-[#666]">
                            {currentProduct.price}
                        </p>

                        <a href={currentProduct.handle} className="inline-block px-[52px] py-4 text-xs tracking-[0.18em] uppercase border border-text bg-text text-brand-white transition-all duration-400 no-underline hover:bg-transparent hover:text-text">
                            VIEW PRODUCT
                        </a>

                        {/* Pagination Dots for Products in Current Look */}
                        <div className="flex justify-center gap-[14px] mt-10">
                            {currentLook.products.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveProductIndex(index)}
                                    className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${index === activeProductIndex ? 'bg-text' : 'bg-[#d0d0d0]'}`}
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
