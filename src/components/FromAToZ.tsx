import React from 'react';

const FromAToZ: React.FC = () => {
    const items = [
        {
            title: 'The design',
            text: 'At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne.',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_commitments_1.jpg?v=1677510747&width=1400',
        },
        {
            title: 'Materials',
            text: 'Our leathers come exclusively from hides recovered from the food industry. We work exclusively with tanneries in Italy, France and Spain.',
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_home_2.jpg?v=1680778082&width=879',
        },
        {
            title: 'The know-how',
            text: "Each step of the manufacturing process is carried out according to the strict specifications of the leatherworker's craft.",
            image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multi-column_-_home_3.jpg?v=1680778272&width=879',
        },
    ];

    return (
        <section className="py-20 bg-brand-bg-off">
            <div className="container max-w-[1440px] mx-auto px-10">
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.1em] mb-3 text-[#666] font-body">About us</p>
                    <h2 className="text-[28px] uppercase tracking-[0.2em] font-normal font-heading">From A to Z</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[3.125rem] lg:gap-[4.375rem]">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-6 cursor-pointer group">
                            <div className="relative overflow-hidden aspect-[2/3]">
                                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-105" />
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-lg uppercase tracking-[0.1em] mb-3 font-medium font-heading">{item.title}</h3>
                                <p className="text-sm leading-[1.6] text-[#333] max-w-[320px] mx-auto font-body">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FromAToZ;
