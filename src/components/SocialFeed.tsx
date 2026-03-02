const SocialFeed = () => {
    const images = [
        {
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=1400',
            srcset: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image1.jpg?v=1676464474&width=1400 1400w'
        },
        {
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=1400',
            srcset: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image2.jpg?v=1676464493&width=1400 1400w'
        },
        {
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=1400',
            srcset: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image3.jpg?v=1676464510&width=1400 1400w'
        },
        {
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=1400',
            srcset: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image4.jpg?v=1676464532&width=1400 1400w'
        },
        {
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=1400',
            srcset: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_image5.jpg?v=1676464543&width=1400 1400w'
        },
    ];

    return (
        <section className="py-20 font-heading">
            <div className="container">
                <header className="text-center mt-[75px] mb-[75px]">
                    <span className="block text-xs tracking-[0.25em] uppercase font-normal mb-[17px] font-heading text-[#6e6e6e]">JOIN US</span>
                    <h2 className="text-[26px] tracking-[0.18em] uppercase font-normal leading-[1.4] font-heading text-[#3a3a3a]">@LEOETVIOLETTE</h2>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.875rem]">
                    {images.map((img, index) => (
                        <div key={index} className="group relative aspect-square overflow-hidden cursor-pointer bg-brand-bg">
                            <img
                                src={img.src}
                                srcSet={img.srcset}
                                sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 20vw"
                                alt={`Social post ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="text-brand-white font-bold text-xs tracking-[0.1em]">IG</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
