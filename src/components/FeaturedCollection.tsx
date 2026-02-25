import './FeaturedCollection.css';

const FeaturedCollection = () => {
    const products = [
        {
            id: 1,
            name: 'LE COMPACT WEEKENDER BUFFALO BLACK',
            price: '$470.00',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-02_a0706e23-388d-4072-ab04-c15e247e3323.jpg?v=1677259432&width=800'
        },
        {
            id: 2,
            name: 'LE COMPACT WEEKENDER BLACK PEBBLED LEATHER',
            price: '$470.00',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-03_c4c1cb18-c139-4fab-b283-1c00b22babfc.jpg?v=1677259382&width=800'
        },
        {
            id: 3,
            name: 'LE COMPACT WEEKENDER BLUE PEBBLED LEATHER',
            price: '$470.00',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-03_eb9dd61f-40f8-4d5c-a216-f6f52aef816e.jpg?v=1677259405&width=800'
        },
        {
            id: 4,
            name: 'LE COMPACT WEEKENDER BUFFALO BROWN',
            price: '$470.00',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-02_cb83be45-fb02-4399-8460-4f583902e185.jpg?v=1677259450&width=800'
        }
    ];

    return (
        <section className="featured-collection section-spacing">
            <div className="container">
                <div className="featured-collection__header">
                    <span className="featured-collection__subtitle">LE WEEKEND BAG</span>
                    <h2 className="featured-collection__title">IDEAL FOR A WEEKEND OUTING</h2>
                </div>

                <div className="featured-collection__label">BEST SELLER</div>

                <div className="featured-collection__slider-container">
                    <div className="featured-collection__track">
                        {products.map(product => (
                            <div key={product.id} className="featured-product-card">
                                <div className="featured-product-card__image-container">
                                    <img src={product.image} alt={product.name} className="featured-product-card__image" />
                                </div>
                                <div className="featured-product-card__info">
                                    <h3 className="featured-product-card__name">{product.name}</h3>
                                    <span className="featured-product-card__price">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="featured-collection__next" aria-label="Next items">
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
