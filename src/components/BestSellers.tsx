import './BestSellers.css';

const BestSellers = () => {
    const products = [
        {
            id: 1,
            name: 'LE MINI DALIA BLACK LIÉGÉ',
            price: '$350.00',
            label: 'NEW',
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
        }
    ];

    return (
        <section className="best-sellers section-spacings">
            <div className="container">
                <header className="best-sellers__header">
                    <span className="best-sellers__subtitle">OUR BEST SELLERS</span>
                    <div className="best-sellers__tabs">
                        <button className="best-sellers__tab best-sellers__tab--active">WOMEN</button>
                        <button className="best-sellers__tab">MEN</button>
                    </div>
                </header>

                <div className="best-sellers__slider-container">
                    <div className="best-sellers__track">
                        {products.map(product => (
                            <div key={product.id} className="best-seller-card">
                                <div className="best-seller-card__image-container">
                                    <span className="best-seller-card__label">{product.label}</span>
                                    <img src={product.image} alt={product.name} className={`best-seller-card__image ${product.imageHover ? 'best-seller-card__image--primary' : ''}`} />
                                    {product.imageHover && <img src={product.imageHover} alt={`${product.name} hover view`} className="best-seller-card__image best-seller-card__image--hover" />}
                                    <button className="best-seller-card__add" aria-label="Add to cart">+</button>
                                </div>
                                <div className="best-seller-card__info">
                                    <h3 className="best-seller-card__name">{product.name}</h3>
                                    <span className="best-seller-card__price">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="best-sellers__next" aria-label="Next items">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="best-sellers__footer">
                    <button className="best-sellers__cta">ALL WOMEN'S BAGS</button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
