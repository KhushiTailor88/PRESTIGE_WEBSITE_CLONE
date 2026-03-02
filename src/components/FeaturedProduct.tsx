import React, { useState } from 'react';

const FeaturedProduct: React.FC = () => {
    const images = [
        'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Continental-Sienne-01_623cec76-7c79-4a8f-a90b-bdda4bb26bd2.jpg?v=1676887549&width=1500',
        'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Continental-Sienne-02_22af43f0-bf6f-4310-8542-5b1036527fe4.jpg?v=1676887549&width=1500',
        'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Continental-Sienne-03_e5720073-449c-413b-8d91-d3efe015b622.jpg?v=1676887549&width=1500',
        'https://prestige-theme-allure.myshopify.com/cdn/shop/products/CROPFICHEPRODUIT_e0904a12-0fa0-4a9b-997a-22b8f5728191.jpg?v=1676887549&width=1500',
        'https://prestige-theme-allure.myshopify.com/cdn/shop/products/CROPFICHEPRODUIT2_0b1fed55-cf21-4831-ae13-5c49cc621391.jpg?v=1676887549&width=1500'
    ];

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <section className="bg-[#efefef] py-20 font-heading border-t border-[#e0e0e0]">
            <div className="container">
                <header className="text-center mb-[60px]">
                    <span className="block text-xs tracking-[0.25em] uppercase text-[#6e6e6e] mb-[18px] font-normal">OUR SELECTION</span>
                    <h2 className="text-[32px] md:text-[28px] font-normal tracking-[0.18em] uppercase text-[#3a3a3a]">PRODUCT OF THE WEEK</h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-start">
                    {/* Gallery */}
                    <div className="relative w-full">
                        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar featured-product-image-list">
                            {images.map((img, index) => (
                                <div key={index} className="flex-[0_0_100%] snap-center">
                                    <img src={img} alt={`Featured Product ${index + 1}`} className="w-full h-auto block" />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-3 mt-[25px]">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full p-0 transition-colors duration-300 ${currentImage === index ? 'bg-text' : 'bg-[#d1d1d1]'}`}
                                    aria-label={`Go to image ${index + 1}`}
                                    onClick={() => {
                                        setCurrentImage(index);
                                        const gallery = document.querySelector('.featured-product-image-list');
                                        if (gallery) {
                                            gallery.scrollTo({
                                                left: index * gallery.clientWidth,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-[100px]">
                            <span className="inline-block text-[11px] tracking-[0.2em] color-[#6e6e6e] mb-[15px] uppercase font-medium">NEW</span>
                            <h3 className="text-[28px] font-normal leading-[1.3] tracking-[0.1em] mb-[10px] uppercase text-[#3a3a3a]">LE CONTINENTAL CAMEL LIÉGÉ</h3>
                            <div className="text-xl text-[#3a3a3a] mb-[30px] tracking-[0.05em]">$200.00</div>

                            <hr className="border-none border-t border-[#e0e0e0] mb-[30px]" />

                            <p className="text-sm leading-[1.8] text-[#4a4a4a] mb-10 font-body">
                                Continental wallet in calfskin. Inside zip pocket for coins. 2 flat pockets for checks or bills. Leather lining. Heat embossed logo.
                            </p>

                            <div className="mb-10">
                                <span className="block text-sm mb-[15px] text-text">Color: Camel Liégé</span>
                                <div className="flex gap-3">
                                    <button className="w-8 h-8 border border-text p-0.5 bg-clip-content cursor-pointer" style={{ backgroundColor: '#A66E4E' }} aria-label="Camel Liégé" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex items-center border border-[#e0e0e0] w-fit h-[50px]">
                                    <button className="w-[50px] h-full flex items-center justify-center text-lg text-text" aria-label="Decrease quantity">−</button>
                                    <input type="text" value="1" readOnly className="w-10 border-none text-center text-[15px] bg-transparent pointer-events-none" />
                                    <button className="w-[50px] h-full flex items-center justify-center text-lg text-text" aria-label="Increase quantity">+</button>
                                </div>
                                <button className="w-full h-[55px] bg-text text-brand-white uppercase tracking-[0.2em] text-sm font-medium border border-text transition-all duration-400 hover:bg-transparent hover:text-text">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
