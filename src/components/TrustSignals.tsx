import React from 'react';
import './TrustSignals.css';

const TrustSignals: React.FC = () => {
    const signals = [
        {
            title: 'Express delivery',
            text: 'DHL express delivery worldwide',
            icon: (
                <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1" width="24" className="icon icon-picto-box" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M.75 5.25 12 9.75l11.25-4.5L12 .75.75 5.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path clipRule="evenodd" d="M.75 5.25v13.5L12 23.25V9.75L.75 5.25v0Zm22.5 0v13.5L12 23.25V9.75l11.25-4.5v0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="m18.187 7.275-11.25-4.5M20.625 16.5l-1.875.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            ),
        },
        {
            title: 'Free returns',
            text: 'Free return for 30 days for any order delivered in France',
            icon: (
                <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1" width="24" className="icon icon-picto-return" viewBox="0 0 24 24">
                    <path d="m1.25 15.08 2.207-3.384 3.385 2.206" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M13.13 2.5a9.525 9.525 0 1 1 0 19.049 9.68 9.68 0 0 1-9.673-9.853" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            ),
        },
        {
            title: 'Available customer service',
            text: 'Available via Whatsapp on +33123456789',
            icon: (
                <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1" width="24" className="icon icon-picto-chat" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M11.25 18.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-1.5v4.5l-4.5-4.5h-4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="m6.75 12.75-3 3v-4.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            ),
        },
        {
            title: 'Payment in 3x',
            text: 'Take advantage of a payment in 3x without fees from $100 of purchase',
            icon: (
                <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1" width="24" className="icon icon-picto-credit-card" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M.75 5.25a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V5.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M.75 8.25h22.5m-18 4.5h8.25m-8.25 3h5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="trust-signals section-spacing--tight">
            <div className="container">
                <div className="trust-signals__carousel">
                    {signals.map((signal, index) => (
                        <div key={index} className="trust-signals__item">
                            <div className="trust-signals__icon-wrapper">
                                {signal.icon}
                            </div>
                            <div className="trust-signals__content">
                                <p className="trust-signals__title">{signal.title}</p>
                                <div className="trust-signals__prose">
                                    <p>{signal.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trust-signals__pagination">
                    {signals.map((_, index) => (
                        <button key={index} className="trust-signals__dot" aria-current={index === 0}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
