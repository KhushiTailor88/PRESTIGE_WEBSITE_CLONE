import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            type: 'video',
            src: 'https://prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/a9ea64c362124ba0b6ffc37ea30bc5c8/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080.mp4?v=0',
            poster: 'https://prestige-theme-allure.myshopify.com/cdn/shop/files/preview_images/a9ea64c362124ba0b6ffc37ea30bc5c8.thumbnail.0000000000_400x.jpg?v=1680852367',
            subtitle: 'NEW COLLECTION',
            title: 'BEAUTIES',
            actions: [
                { text: 'WOMEN', link: '#' },
                { text: 'MEN', link: '#' }
            ]
        },
        {
            type: 'image',
            src: '/Slideshow_-_Desktop_-_home.jpg',
            subtitle: 'LE SAC BAGUETTE',
            title: 'INSPIRED BY THE 90S',
            actions: [
                { text: 'SHOP NOW', link: '#' }
            ]
        },
        {
            type: 'image',
            src: '/hero 2.webp',
            subtitle: 'LE NOVA',
            title: 'ELEGANT & TIMELESS',
            bordered: true,
            actions: [
                { text: 'VIEW COLLECTION', link: '#' }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
                >
                    <div className="hero__background">
                        {slide.type === 'video' ? (
                            <video
                                className="hero__video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={slide.poster}
                            >
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.src} alt={slide.title} className="hero__image" />
                        )}
                        <div className="hero__overlay"></div>
                    </div>

                    <div className="hero__content">
                        <div className="container">
                            <div className={`hero__text-box ${slide.bordered ? 'hero__text-box--bordered' : ''}`}>
                                <span className="hero__subtitle">{slide.subtitle}</span>
                                <h2 className="hero__title">{slide.title}</h2>
                                <div className="hero__actions">
                                    {slide.actions.map((action, i) => (
                                        action.text === 'MEN' ? (
                                            <a key={i} href={action.link} className="btn btn1">
                                                {action.text}
                                            </a>
                                        ) : (
                                            <a key={i} href={action.link} className="btn btn-primary ">
                                                {action.text}
                                            </a>
                                        )
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="hero__dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                data-action="navigate-next"
                className="slideshow__next-section-button circle-button circle-button--lg hover:animate-icon-block"
                onClick={() => {
                    const hero = document.querySelector('.hero');
                    const nextSection = hero?.nextElementSibling;
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <span className="sr-only">Navigate to next section</span>
                <svg aria-hidden="true" focusable="false" fill="none" width="18" className="icon icon-icon-arrow-down" viewBox="0 0 18 16">
                    <path d="m1 4 8 8 8-8" stroke="currentColor" strokeLinecap="square" strokeWidth="1.2"></path>
                </svg>
            </button>
        </section>
    );
};

export default Hero;
