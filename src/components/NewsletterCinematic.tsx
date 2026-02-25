import './NewsletterCinematic.css';

const NewsletterCinematic = () => {
    return (
        <section className="newsletter-cinematic">
            <div className="newsletter-cinematic__background">
                <img
                    src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_faq_419bf819-c69b-4147-923f-20d9554b4072.jpg?v=1679563449&width=2400"
                    alt="Newsletter background"
                    className="newsletter-cinematic__image"
                />
                <div className="newsletter-cinematic__overlay"></div>
            </div>

            <div className="container">
                <div className="newsletter-cinematic__content">
                    <span className="newsletter-cinematic__subtitle">KEEP ME UPDATED</span>
                    <h2 className="newsletter-cinematic__title">NEWSLETTER</h2>
                    <p className="newsletter-cinematic__text">
                        Subscribe to get notified about product launches, special offers and company news.
                    </p>

                    <form className="newsletter-cinematic__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="newsletter-cinematic__input-wrapper">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="newsletter-cinematic__input"
                                required
                            />
                            <button type="submit" className="newsletter-cinematic__button">SUBSCRIBE</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCinematic;
