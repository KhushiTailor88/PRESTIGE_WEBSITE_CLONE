
const FeaturedCollection = () => {
    const products = [
        {
            id: 1,
            name: 'LE COMPACT WEEKENDER BUFFALO BLACK',
            price: '$470.00',
            image: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=800',
            srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=1800 1800w'
        },
        {
            id: 2,
            name: 'LE COMPACT WEEKENDER BLACK PEBBLED LEATHER',
            price: '$470.00',
            image: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=800',
            srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=1800 1800w'
        },
        {
            id: 3,
            name: 'LE COMPACT WEEKENDER BLUE PEBBLED LEATHER',
            price: '$470.00',
            image: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=800',
            srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=1800 1800w'
        },
        {
            id: 4,
            name: 'LE COMPACT WEEKENDER BUFFALO BROWN',
            price: '$470.00',
            image: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=800',
            srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=1800 1800w'
        }
    ];

    return (
        <section className="bg-[#efefef] text-center py-20">
            <div className="container max-w-[1440px] px-10">
                <div className="mb-[60px]">
                    <span className="block text-[11px] tracking-[0.2em] font-medium mb-4 uppercase text-text font-heading">LE WEEKEND BAG</span>
                    <h2 className="text-[clamp(24px,3vw,32px)] font-normal tracking-[0.1em] uppercase leading-[1.2] font-heading text-text">IDEAL FOR A WEEKEND OUTING</h2>
                </div>

                <div className="text-[11px] tracking-[0.2em] font-medium mb-8 uppercase text-[#999] font-heading">BEST SELLER</div>

                <div className="relative overflow-hidden px-[15px] md:px-[60px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="bg-brand-white transition-transform duration-300 hover:-translate-y-1 group">
                                <div className="relative w-full aspect-square overflow-hidden bg-[#f5f5f5]">
                                    <img src={product.image} srcSet={product.srcSet} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 scale-[0.8] w-9 h-9 bg-brand-white rounded-full flex items-center justify-center text-text opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:scale-100 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-[2]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-[20px_16px] text-center bg-[#efefef]">
                                    <h3 className="text-[11px] tracking-[0.1em] font-normal mb-2 uppercase leading-[1.4] font-heading text-text">{product.name}</h3>
                                    <span className="text-sm font-normal text-text font-heading">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-brand-border bg-brand-white rounded-full items-center justify-center cursor-pointer transition-all duration-300 hover:bg-text hover:text-brand-white hover:border-text z-[2]" aria-label="Next items">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
