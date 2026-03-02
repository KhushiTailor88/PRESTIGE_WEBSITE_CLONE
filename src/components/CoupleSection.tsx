import React from 'react';

const CoupleSection: React.FC = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden text-brand-white text-center md:h-[80vh]">
            <div className="absolute inset-0 z-0">
                <img
                    src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2000"
                    srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=900 900w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1800 1800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2000 2000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2200 2200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2400 2400w"
                    alt="Léo et Violette Couple"
                    className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-black/25"></div>
            </div>

            <div className="relative max-w-[800px] px-10 z-[2]">
                <span className="block text-[13px] tracking-[0.3em] uppercase font-normal mb-[25px] opacity-90 font-heading">THE COUPLE</span>
                <h2 className="text-[28px] md:text-[42px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-normal mb-[30px] font-heading">LÉO ET VIOLETTE</h2>
                <p className="text-sm md:text-base leading-[1.8] font-light opacity-95 font-body">
                    We aspire to be a brand of the 21st century: 100% online and without any intermediary. <br className="hidden md:block" />
                    From you to us directly.
                </p>
            </div>
        </section>
    );
};

export default CoupleSection;
