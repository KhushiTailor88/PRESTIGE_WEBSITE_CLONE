const NewsletterCinematic = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden text-brand-white text-center md:h-[500px]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Image_with_text_overlay_-_Desktop_-_faq_419bf819-c69b-4147-923f-20d9554b4072.jpg?v=1679563449&width=2400"
                    alt="Newsletter background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container relative z-[2]">
                <div className="max-w-[600px] mx-auto px-4">
                    <span className="block text-[11px] tracking-[0.2em] font-medium uppercase mb-8 font-heading">KEEP ME UPDATED</span>
                    <h2 className="text-3xl md:text-[28px] lg:text-[32px] tracking-[0.1em] mb-8 uppercase font-medium font-heading">NEWSLETTER</h2>
                    <p className="text-sm opacity-90 mb-5 leading-[1.6] font-body">
                        Subscribe to get notified about product launches, special offers and company news.
                    </p>

                    <form className="max-w-[500px] mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col md:flex-row gap-8 items-center max-w-[500px] mx-auto">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="flex-1 w-full bg-transparent border border-brand-white/50 text-brand-white font-body text-sm outline-none px-5 h-[50px] placeholder:text-brand-white/60 text-center md:text-left"
                                required
                            />
                            <button type="submit" className="w-full md:w-auto bg-brand-white text-text font-heading font-bold text-[11px] px-10 h-[50px] uppercase tracking-[0.1em] transition-opacity duration-300 hover:opacity-80">
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCinematic;
