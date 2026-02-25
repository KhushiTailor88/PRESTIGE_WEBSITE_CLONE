import './MediaGrid.css';

const MediaGrid = () => {
    const items = [
        {
            id: 1,
            title: 'WOMEN',
            link: '/collections/women-1',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_women_collection.jpg?v=1676477256&width=1600',
            gridClass: 'media-grid__item--large'
        },
        {
            id: 2,
            title: 'MEN',
            link: '/collections/men-1',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_men_collection.jpg?v=1676472896&width=1600',
            gridClass: 'media-grid__item--small'
        },
        {
            id: 3,
            title: 'ACCESSORIES',
            link: '/collections/small-leather-goods',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_accessories.jpg?v=1676473163&width=1600',
            gridClass: 'media-grid__item--small'
        }
    ];

    return (
        <section className="media-grid-section section-spacing">
            <div className="container container--lg">
                <div className="media-grid">
                    {items.map(item => (
                        <a key={item.id} href={item.link} className={`media-grid__item ${item.gridClass}`}>
                            <div className="media-grid__image-wrapper">
                                <img src={item.image} alt={item.title} className="media-grid__image" />
                                <div className="media-grid__content">
                                    <h3 className="media-grid__title">{item.title}</h3>
                                   
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaGrid;
