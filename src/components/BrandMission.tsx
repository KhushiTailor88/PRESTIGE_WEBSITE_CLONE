const BrandMission = () => {
    return (
        <section className="bg-[#efefef] text-center px-5 py-20 md:py-16">
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col items-center">
                    <div className="mb-[30px] flex justify-center">
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=240"
                            srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=120 120w, //prestige-theme-allure.myshopify.com/cdn/shop/files/bag-240px.jpg?v=1683010834&width=240 240w"
                            sizes="120px"
                            alt="Bag Icon"
                            width="120"
                            height="120"
                            className="w-[120px] h-auto opacity-90"
                        />
                    </div>
                    <h2 className="text-[28px] md:text-[32px] font-light tracking-[0.15em] leading-[1.6] uppercase text-text max-w-[700px] mx-auto mb-10 font-heading">
                        OUR AIM: OFFER ELEGANT,<br className="hidden md:block" />
                        TIMELESS & FUNCTIONAL<br className="hidden md:block" />
                        PRODUCTS
                    </h2>
                    <div className="flex justify-center gap-10">
                        <a href="#" className="text-xs tracking-[0.18em] uppercase font-light text-text border-b border-text/30 pb-0.5 transition-all duration-300 hover:border-transparent no-underline font-heading">Our story</a>
                        <a href="#" className="text-xs tracking-[0.18em] uppercase font-light text-text border-b border-text/30 pb-0.5 transition-all duration-300 hover:border-transparent no-underline font-heading">Commitments</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandMission;
