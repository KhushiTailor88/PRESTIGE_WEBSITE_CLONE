import './BrandMission.css';

const BrandMission = () => {
    return (
        <section className="brand-mission1 section-spacing">
            <div className="container1">
                <div className="brand-mission__content1">
                    <div className="brand-mission__icon1">
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=240"
                            srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=120 120w, //prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=240 240w"
                            sizes="120px"
                            alt="Bag Icon"
                            width="120"
                            height="120"
                        />
                    </div>
                    <h2 className="brand-mission__title">
                        OUR AIM: OFFER ELEGANT,<br />
                        TIMELESS & FUNCTIONAL<br />
                        PRODUCTS
                    </h2>
                    <div className="brand-mission__links">
                        <a href="#" className="link">Our story</a>
                        <a href="#" className="link">Commitments</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandMission;
