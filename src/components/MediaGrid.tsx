const MediaGrid = () => {
    const items = [
        {
            id: 1,
            title: 'WOMEN',
            link: '/collections/women-1',
            images: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_women_collection.jpg?v=1676477256&width=1600',
            gridClass: 'col-span-12 md:col-span-8 md:row-span-2 h-[400px] md:h-auto'
        },
        {
            id: 2,
            title: 'MEN',
            link: '/collections/men-1',
            images: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_men_collection.jpg?v=1676472896&width=1600',
            gridClass: 'col-span-12 md:col-span-4 h-[400px] md:h-auto'
        },
        {
            id: 3,
            title: 'ACCESSORIES',
            link: '/collections/small-leather-goods',
            images: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_accessories.jpg?v=1676473163&width=1600',
            gridClass: 'col-span-12 md:col-span-4 h-[400px] md:h-auto'
        }
    ];

    return (
        <section className="py-12 md:py-16">
            <div className="container max-w-[1440px] px-10">
                <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {items.map(item => (
                        <a key={item.id} href={item.link} className={`relative overflow-hidden block group ${item.gridClass}`}>
                            <div className="w-full h-full relative">
                                <img
                                    src={item.images}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-t from-black/30 to-transparent text-brand-white z-[2]">
                                    <h3 className="text-2xl font-medium tracking-[0.1em] mb-2 uppercase text-center">{item.title}</h3>
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
