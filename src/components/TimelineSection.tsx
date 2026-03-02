import React, { useState } from 'react';

interface TimelineEvent {
    year: string;
    subtitle: string;
    title: string;
    description: string;
    image: string;
    srcSet: string;
}

const timelineData: TimelineEvent[] = [
    {
        year: '2013',
        subtitle: 'FIRST PRODUCT',
        title: 'LE PETIT CARTABLE',
        description: "Léo et Violette's story is ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our life for more than 8 years. Ever since we met, we always had the dream to develop a project together. By creating Le petit cartable in January 2013, we started to realize this dream. Our first Kickstarter campaign is launched!",
        image: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=1200',
        srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2013_e1daf994-0b5b-4e84-99e3-9131adfcf250.jpg?v=1677505104&width=1200 1200w'
    },
    {
        year: '2014',
        subtitle: 'OUR VISION',
        title: 'TRANSPARENCY',
        description: 'No intermediaries and no wholesalers. So no excessive margins. It\'s just between you and us. And this is what allows us to offer you a quality product at an affordable price. Welcome to the fashion of the 21st century.',
        image: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=1200',
        srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2014_cacce574-d648-4c1e-885e-4ba935505d1e.jpg?v=1677505627&width=1200 1200w'
    },
    {
        year: '2015',
        subtitle: 'NEW FACTORY',
        title: 'RELATIONSHIP',
        description: 'Our workshop is located next to Naples, Italy. It was founded in the early 1980s by Dino Levorino, a craftsman well known for his know-how. The workshop was taken over by his son Gennaro, with whom we talk every day, about the production and the design of new models. More than just a factory, they are real partners who have shared Léo et Violette\'s vision.',
        image: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=1200',
        srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2015.jpg?v=1677505855&width=1200 1200w'
    },
    {
        year: '2017',
        subtitle: 'OPENING',
        title: 'OUR FLAGSHIP',
        description: 'Our first Léo et Violette location, right in the heart of Paris. The perfect place to discover and buy the collection. Open Monday to Saturday + Sunday in December.',
        image: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=1200',
        srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2017.jpg?v=1677506209&width=1200 1200w'
    },
    {
        year: '2020',
        subtitle: 'NEW IDEA',
        title: 'SMALL LEATHER GOODS',
        description: 'With the success of our bags we wanted to go further by offering small leather goods: wallets, card holders and pouches.',
        image: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=1200',
        srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2020.jpg?v=1677506700&width=1200 1200w'
    },
    {
        year: '2021',
        subtitle: 'FIRST COLLABORATION',
        title: 'LÉO ET VIOLETTE X WENDY SWAN',
        description: 'The meeting between Wendy and Léo et Violette gave birth to our new bag: The Dalia. Every detail, from the choice of leather quality to the metal parts, has been carefully thought out.',
        image: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=1200',
        srcSet: '//prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=700 700w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Timeline_-_Desktop_-_2021.jpg?v=1677507605&width=1200 1200w'
    }
];

const TimelineSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-brand-bg py-20 font-heading">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-brand-white min-h-[500px]">
                    {/* Image Block */}
                    <div className="relative overflow-hidden min-h-[400px]">
                        {timelineData.map((item, index) => (
                            <img
                                key={index}
                                src={item.image}
                                srcSet={item.srcSet}
                                alt={item.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-in-out ${activeIndex === index ? 'opacity-100 scale-100 z-[1]' : 'opacity-0 scale-[1.05] z-0'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Content Block */}
                    <div className="relative flex flex-col justify-center p-10 lg:p-[80px_10%]">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-500 ease-in-out ${activeIndex === index
                                    ? 'relative opacity-100 visible translate-y-0 w-full'
                                    : 'absolute opacity-0 invisible translate-y-5 w-4/5 left-[10%]'
                                    }`}
                            >
                                <span className="block text-[13px] tracking-[0.25em] uppercase text-[#171717] mb-[30px] font-heading">
                                    {item.subtitle}
                                </span>
                                <h2 className="text-2xl md:text-[32px] tracking-[0.15em] uppercase font-normal mb-[30px] text-[#171717] font-heading">
                                    {item.title}
                                </h2>
                                <p className="text-[15px] leading-relaxed text-[#4a4a4a] font-light font-body">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="flex justify-center gap-5 md:gap-10 mt-[60px] flex-wrap">
                    {timelineData.map((item, index) => (
                        <button
                            key={index}
                            className={`font-body text-sm cursor-pointer relative pb-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-[#171717] after:transition-all after:duration-300 ${activeIndex === index
                                ? 'text-[#171717] after:w-full'
                                : 'text-[#777] after:w-0 hover:text-[#171717]'
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.year}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
