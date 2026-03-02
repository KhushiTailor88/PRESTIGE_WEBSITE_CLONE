import React from 'react';

const ImageWithTextOverlay: React.FC = () => {
    return (
        <section className="w-full relative font-heading bg-brand-bg-off pt-0">
            <div className="relative h-[clamp(22rem,34vw,42rem)] md:h-[500px] w-full overflow-hidden bg-[#f5f5f5] group">
                <div className="w-full h-full">
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=2500"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=2500 2500w"
                        alt="Le Backpack"
                        className="w-full h-full object-cover object-center "
                    />
                </div>
                <div className="absolute inset-0 z-[2]">
                    <div className="absolute left-6 md:left-20 bottom-10 md:bottom-16 max-w-[90%] md:max-w-[520px] text-brand-white">
                        <p className="text-xs tracking-[0.28em] uppercase mb-[18px] opacity-90">NEW PRODUCT</p>
                        <p className="text-[32px] md:text-[28px] font-normal tracking-[0.12em] md:tracking-[0.18em] uppercase mt-5 leading-[1.15]">LE BACKPACK</p>
                        <a href="#" className="inline-block px-[27px] py-[9.4px] text-sm tracking-[0.18em] uppercase border border-brand-white bg-brand-white text-text transition-all duration-400 mt-8 hover:bg-transparent hover:text-brand-white">
                            SHOP
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageWithTextOverlay;
