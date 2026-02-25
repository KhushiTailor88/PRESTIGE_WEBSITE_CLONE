import React from 'react';
import './FromAToZ.css';

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
        <section className="from-a-to-z">
            <div className="container">
                <div className="from-a-to-z__header">
                    <p className="subheading">About us</p>
                    <h2 className="heading">From A to Z</h2>
                </div>

                <div className="from-a-to-z__grid">
                    {items.map((item, index) => (
                        <div key={index} className="from-a-to-z__item">
                            <div className="from-a-to-z__media">
                                <img src={item.image} alt={item.title} loading="lazy" />
                            </div>
                            <div className="from-a-to-z__content">
                                <h3 className="from-a-to-z__item-title">{item.title}</h3>
                                <p className="from-a-to-z__item-text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FromAToZ;
