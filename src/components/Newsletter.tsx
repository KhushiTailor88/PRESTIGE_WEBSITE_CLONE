import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter section-spacing">
            <div className="container container--sm">
                <div className="newsletter__content">
                    <h2 className="newsletter__title">NEWSLETTER</h2>
                    <p className="newsletter__text">
                        Subscribe to receive updates, access to exclusive deals, and more.
                    </p>
                    <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter__input"
                            required
                        />
                        <button type="submit" className="newsletter__button">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
