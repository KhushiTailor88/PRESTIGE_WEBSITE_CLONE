import './SocialFeed.css';

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
        <section className="social-feed section-spacing">
            <div className="container">
                <header className="social-feed__header">
                    <span className="social-feed__subtitle">JOIN US</span>
                    <h2 className="social-feed__title">@LEOETVIOLETTE</h2>
                </header>

                <div className="social-feed__grid">
                    {images.map((img, index) => (
                        <div key={index} className="social-feed__item">
                            <img
                                src={img.src}
                                srcSet={img.srcset}
                                sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 20vw"
                                alt={`Social post ${index + 1}`}
                                className="social-feed__image"
                            />
                            <div className="social-feed__overlay">
                                <span className="social-feed__icon">IG</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
