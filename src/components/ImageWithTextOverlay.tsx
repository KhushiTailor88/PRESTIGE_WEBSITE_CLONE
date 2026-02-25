import './ImageWithTextOverlay.css';

const ImageWithTextOverlay = () => {
    return (
        <section className="image-overlay section-spacing4">
            <div className="image-overlay__inner">
                <div className="image-overlay__image-container">
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=2500"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=200 200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=300 300w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_home.jpg?v=1680765088&width=2500 2500w"
                        alt="Le Backpack"
                        className="image-overlay__image"
                    />
                </div>
                <div className="image-overlay__content">
                    <div className="image-overlay__text-box">
                        <p className="image-overlay__subtitle">NEW PRODUCT</p>
                        <p className="image-overlay__title">LE BACKPACK</p>
                        <a href="#" className="btn btn-white">SHOP</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageWithTextOverlay;
