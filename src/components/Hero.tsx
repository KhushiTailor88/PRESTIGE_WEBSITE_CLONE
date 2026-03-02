import { useState, useEffect } from 'react';

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
        <section className="hero relative h-screen w-full overflow-visible font-heading">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${index === currentSlide ? 'opacity-100 visible z-[2]' : 'opacity-0 invisible z-[1]'}`}
                >
                    <div className="absolute inset-0">
                        {slide.type === 'video' ? (
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={slide.poster}
                            >
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent"></div>
                    </div>

                    <div className="relative z-[3] w-full h-full flex items-center justify-center text-center px-4">
                        <div className="container flex justify-center">
                            <div className={`text-brand-white flex flex-col items-center transition-transform duration-1000 max-w-[90vw] ${index === currentSlide ? 'translate-y-0' : 'translate-y-5'} ${slide.bordered ? 'max-w-[460px] p-[36px_24px] md:p-[52px_44px] border border-brand-white/70' : ''}`}>
                                <span className="text-[12px] tracking-[0.28em] uppercase mb-[18px] opacity-90">{slide.subtitle}</span>
                                <h2 className="text-[28px] md:text-[42px] tracking-[0.12em] md:tracking-[0.18em] uppercase font-normal leading-[1.15]">{slide.title}</h2>
                                <div className="flex flex-col md:flex-row gap-[18px] mt-8 w-full md:w-auto">
                                    {slide.actions.map((action, i) => (
                                        <a
                                            key={i}
                                            href={action.link}
                                            className={`inline-flex items-center justify-center px-6 py-3.5 text-[12px] tracking-[0.18em] uppercase border transition-all duration-400 min-w-full md:min-w-[180px] ${action.text === 'MEN'
                                                    ? 'bg-black text-brand-white border-black hover:bg-transparent hover:text-black'
                                                    : 'bg-brand-white text-black border-brand-white hover:bg-transparent hover:text-brand-white'
                                                }`}
                                        >
                                            {action.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex gap-3 z-[5]">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-brand-white scale-125' : 'bg-brand-white/35'}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                data-action="navigate-next"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-[20] w-12 h-12 flex items-center justify-center bg-brand-white rounded-full transition-transform duration-300 hover:scale-110 shadow-[0_4px_15px_rgba(0,0,0,0.1)] group/next"
                onClick={() => {
                    const hero = document.querySelector('.hero');
                    const nextSection = hero?.nextElementSibling;
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <span className="sr-only">Navigate to next section</span>
                <svg aria-hidden="true" focusable="false" fill="none" width="18" className="w-[14px] h-[14px] text-text group-hover/next:animate-bounce-slow" viewBox="0 0 18 16">
                    <path d="m1 4 8 8 8-8" stroke="currentColor" strokeLinecap="square" strokeWidth="1.2"></path>
                </svg>
            </button>
        </section>
    );
};

export default Hero;
