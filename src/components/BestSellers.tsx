import { useRef, useState, useEffect } from 'react';

const BestSellers = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        if (!trackRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (track) {
            updateScrollState();
            window.addEventListener('resize', updateScrollState);
            return () => window.removeEventListener('resize', updateScrollState);
        }
    }, []);

    const products = [
        {
            id: 1,
            name: 'LE MINI DALIA BLACK LIÉGÉ',
            price: '$350.00',

            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-04.webp?v=1677224925&width=800',
            imageHover: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-01.webp?v=1677224916&width=800'
        },
        {
            id: 2,
            name: 'LE GINA PETROL LIÉGÉ',
            price: '$380.00',
            label: 'NEW',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.jpg?v=1676886232&width=1000',
            imageHover: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Gina-Liege-Petrole-04_6fc019d3-38a9-4a96-be87-9a51a5e9a83a.jpg?v=1677243433&width=1000'
        },
        {
            id: 3,
            name: 'LE SAC ELEGANT BROWN PATENT LEATHER',
            price: '$380.00',
            label: 'NEW',
            image: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Elegant-Cuir-Miroir-Chocolat-02_cc09ca74-457f-42e0-a1d8-7a1cf8cd90b7.jpg?v=1677139259&width=1000',
            imageHover: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.jpg?v=1676886288&width=1000'
        },
        {
            id: 4,
            name: 'LE GRAND NOVA IVORY LIÉGÉ',
            price: '$450.00',
            label: 'BEST SELLER',
            image: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.jpg?v=1676886728&width=1000',
            imageHover: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-02_348ac141-50cb-4494-983f-723ee1be4298.jpg?v=1677153834&width=1000'
        },
        {
            id: 5,
            name: 'LE DALIA IVORY LIÉGÉ',
            price: '$380.00',
            label: 'BEST SELLER',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/le-tuilli-ivoire1_de480f07-0e23-4872-839f-0503d7cccb76.jpg?v=1676886890&width=1000',
            imageHover: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/le-tuilli-ivoire2_0f5ef676-1ffa-4bb6-842f-4d7eaad74dee.jpg?v=1677063525&width=1000'
        }
    ];

    const scroll = (direction: 'next' | 'prev') => {
        if (!trackRef.current) return;
        const firstCard = trackRef.current.querySelector('[data-card]') as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 32; // Default gap from CSS (spacer-lg equivalent)
        const scrollAmount = cardWidth + gap;

        trackRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className="bg-red py-[105px] font-heading">

            <div className="container max-w-[1440px] px-10">
                <header className="text-center mb-8 flex flex-col items-center">
                    <span className="text-[10px] tracking-[0.25em] font-semibold text-text uppercase block mb-8 opacity-60">OUR BEST SELLERS</span>
                    <div className="flex justify-center gap-10 px-12 -mx-12">
                        <button className="font-normal text-[28px] text-text uppercase tracking-[0.05em] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:height-[1px] after:bg-text">WOMEN</button>
                        <button className="font-normal text-[28px] text-text uppercase tracking-[0.05em] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-text">MEN</button>
                    </div>
                </header>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <button
                        className={`absolute top-1/2 -translate-y-1/2 -left-5 w-11 h-11 bg-brand-grey rounded-full shadow-sm flex items-center justify-center z-[5] transition-all duration-300 hover:scale-110 cursor-pointer ${isHovering && canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        aria-label="Previous items"
                        onClick={() => scroll('prev')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                        ref={trackRef}
                        onScroll={updateScrollState}
                    >
                        {products.map(product => (
                            <div key={product.id} className="flex-[0_0_calc(85%-32px)] sm:flex-[0_0_calc(50%-32px)] lg:flex-[0_0_calc(25%-32px)] snap-start text-left group" data-card>
                                <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-[#efefef]">
                                    <span className="absolute top-5 left-0 text-[9px] font-bold tracking-[0.15em] text-[#666] uppercase z-[2]">{product.label}</span>
                                    <img src={product.image} alt={product.name} className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${product.imageHover ? 'opacity-100 group-hover:opacity-0' : ''}`} />
                                    {product.imageHover && <img src={product.imageHover} alt={`${product.name} hover view`} className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-700" />}
                                    <button className="absolute right-0 bottom-6 w-11 h-11 bg-brand-white flex items-center justify-center text-xl text-text z-[2] opacity-0 translate-y-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer" aria-label="Add to cart">+</button>
                                </div>
                                <div className="text-center px-2">
                                    <h3 className="text-xs font-semibold tracking-[0.12em] mb-2 uppercase leading-[1.4] text-text">{product.name}</h3>
                                    <span className="text-[11px] text-[#666] tracking-[0.05em]">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`absolute top-1/2 -translate-y-1/2 -right-5 w-11 h-11 bg-brand-white rounded-full shadow-sm flex items-center justify-center z-[5] transition-all duration-300 hover:scale-110 cursor-pointer ${isHovering && canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        aria-label="Next items"
                        onClick={() => scroll('next')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center mt-12">
                    <button className=" border-tighter relative overflow-hidden bg-text text-brand-white border border-text px-[39px] py-[15px] text-[11px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-all duration-400 hover:bg-transparent hover:text-text group/cta hover:border-tighter">
                        ALL WOMEN'S BAGS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
