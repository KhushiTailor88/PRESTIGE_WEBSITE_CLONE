import React from 'react';
import './CoupleSection.css';

const CoupleSection: React.FC = () => {
    return (
        <section className="couple-section">
            <div className="couple-section__background">
                <img
                    src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2000"
                    srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=900 900w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=1800 1800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2000 2000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2200 2200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_block_-_Desktop_-_the_dino.jpg?v=1676561203&width=2400 2400w"
                    alt="Léo et Violette Couple"
                    className="couple-section__image"
                />
                <div className="couple-section__overlay"></div>
            </div>

            <div className="couple-section__content">
                <span className="couple-section__subtitle">THE COUPLE</span>
                <h2 className="couple-section__title">LÉO ET VIOLETTE</h2>
                <p className="couple-section__description">
                    We aspire to be a brand of the 21st century: 100% online and without any intermediary. <br />
                    From you to us directly.
                </p>
            </div>
        </section>
    );
};

export default CoupleSection;
