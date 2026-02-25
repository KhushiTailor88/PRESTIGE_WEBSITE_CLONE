import React, { useState } from 'react';
import './FeaturedProduct.css';

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
        <section className="featured-product section-spacing">
            <div className="container">
                <header className="featured-product__header">
                    <span className="featured-product__subtitle">OUR SELECTION</span>
                    <h2 className="featured-product__main-title">PRODUCT OF THE WEEK</h2>
                </header>

                <div className="featured-product__content">
                    <div className="featured-product__gallery">
                        <div className="featured-product__image-list">
                            {images.map((img, index) => (
                                <div key={index} className="featured-product__image-item">
                                    <img src={img} alt={`Featured Product ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="featured-product__pagination">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`featured-product__dot ${currentImage === index ? 'active' : ''}`}
                                    aria-label={`Go to image ${index + 1}`}
                                    onClick={() => {
                                        setCurrentImage(index);
                                        const gallery = document.querySelector('.featured-product__image-list');
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

                    <div className="featured-product__info">
                        <div className="featured-product__info-sticky">
                            <span className="featured-product__badge">NEW</span>
                            <h3 className="featured-product__title">LE CONTINENTAL CAMEL LIÉGÉ</h3>
                            <div className="featured-product__price">$200.00</div>

                            <hr className="featured-product__divider" />

                            <p className="featured-product__description">
                                Continental wallet in calfskin. Inside zip pocket for coins. 2 flat pockets for checks or bills. Leather lining. Heat embossed logo.
                            </p>

                            <div className="featured-product__option">
                                <span className="featured-product__option-label">Color: Camel Liégé</span>
                                <div className="featured-product__swatches">
                                    <button className="featured-product__swatch active" style={{ backgroundColor: '#A66E4E' }} aria-label="Camel Liégé" />
                                </div>
                            </div>

                            <div className="featured-product__actions">
                                <div className="featured-product__quantity">
                                    <button className="qty-btn" aria-label="Decrease quantity">−</button>
                                    <input type="text" value="1" readOnly />
                                    <button className="qty-btn" aria-label="Increase quantity">+</button>
                                </div>
                                <button className="btn btn-primary featured-product__add-to-cart">
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
