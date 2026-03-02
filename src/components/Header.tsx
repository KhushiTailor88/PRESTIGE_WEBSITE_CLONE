import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const targetDate = new Date("2026-11-25T00:00:00-05:00").getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'bg-brand-white text-text shadow-sm' : 'text-brand-white'}`}>
            {/* Announcement Bar */}
            <div className="bg-[#1c1c1c] text-brand-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-2.5 min-h-[48px] gap-1.5 sm:gap-0">
                <div className="flex items-center gap-4">
                    <div className="text-[13px] leading-relaxed text-[#666]">
                        <p className="m-0 text-[11px] tracking-[0.15em] font-medium uppercase text-[#eeeeee]">SUPER SALE UP TO 40% OFF</p>
                    </div>
                    <a href="/collections/sale" className="text-[11px] tracking-[0.15em] font-medium uppercase text-[#eeeeee] underline underline-offset-4 hidden sm:block">SHOP NOW</a>
                </div>
                <div className="flex items-center gap-4 sm:gap-4" role="timer" aria-label="This offer expires on November 25, 2026 at 12:00 am">
                    {[
                        { val: timeLeft.days, unit: 'Day' },
                        { val: timeLeft.hours, unit: 'Hrs' },
                        { val: timeLeft.minutes, unit: 'Min' },
                        { val: timeLeft.seconds, unit: 'Sec' }
                    ].map((item, i, arr) => (
                        <div key={item.unit} className="flex items-center">
                            <div className="flex flex-col items-center leading-tight">
                                <div className="text-sm font-semibold tabular-nums tracking-wider">{String(item.val).padStart(2, '0')}</div>
                                <span className="text-[9px] uppercase mt-0.5 opacity-60 tracking-[0.1em]">{item.unit}</span>
                            </div>
                            {i < arr.length - 1 && <span className="font-normal opacity-50 px-2 pb-2 self-center text-center items-center flex" aria-hidden="true">:</span>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container flex items-center justify-between h-20 py-5 group-hover:bg-brand-white group-hover:text-text transition-colors duration-400">
                <nav className="flex-1 hidden md:block">
                    <ul className="flex gap-8 list-none">
                        {['WOMEN', 'MEN'].map((gender) => (
                            <li key={gender} className="static group/nav-item flex items-center h-full">
                                <a href={`/collections/${gender.toLowerCase()}`} className="text-[13px] font-semibold tracking-[0.1em]">{gender}</a>
                                {/* Mega Menu */}
                                <div className="absolute top-full left-0 w-full bg-brand-white text-text shadow-[0_10px_30px_rgba(0,0,0,0.1)] opacity-0 invisible -translate-y-2 group-hover/nav-item:opacity-100 group-hover/nav-item:visible group-hover/nav-item:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-t border-black/5 z-[1000]">
                                    <div className="container grid grid-cols-[repeat(3,1fr)_2fr] gap-10 py-[60px] px-10">
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase m-0">BAGS</h3>
                                            <ul className="flex flex-col list-none p-0 m-0">
                                                {gender === 'WOMEN' ? (
                                                    <>
                                                        <li><a href="/collections/shoulder-bags" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Shoulder bags</a></li>
                                                        <li><a href="/collections/mini-bags" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Mini bags</a></li>
                                                        <li><a href="/collections/business-bags" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Business bags</a></li>
                                                        <li><a href="/collections/small-leather-goods" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Small leather goods</a></li>
                                                        <li><a href="/collections/women" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">All products</a></li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li><a href="/collections/men-business-bags" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Business bags</a></li>
                                                        <li><a href="/collections/weekend-bags" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Weekend bag</a></li>
                                                        <li><a href="/collections/men" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">All Products</a></li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase m-0">{gender === 'WOMEN' ? 'POPULAR MODELS' : 'SMALL LEATHER GOODS'}</h3>
                                            <ul className="flex flex-col list-none p-0 m-0">
                                                {gender === 'WOMEN' ? (
                                                    <>
                                                        <li><a href="/collections/le-mini-dalia" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Le Mini Dalia</a></li>
                                                        <li><a href="/collections/le-nova" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Le Nova</a></li>
                                                        <li><a href="/collections/le-dino" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Le Dino</a></li>
                                                        <li><a href="/collections/le-gina" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Le Gina</a></li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li><a href="/collections/wallet" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Wallet</a></li>
                                                        <li><a href="/collections/card-holder" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Card holder</a></li>
                                                        <li><a href="/collections/small-leather-goods" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">All Products</a></li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase m-0">POPULAR COLORS</h3>
                                            <ul className="flex flex-col list-none p-0 m-0">
                                                {gender === 'WOMEN' ? (
                                                    <>
                                                        <li><a href="/collections/black" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Black</a></li>
                                                        <li><a href="/collections/camel" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Camel</a></li>
                                                        <li><a href="/collections/almond-green" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Almond Green</a></li>
                                                        <li><a href="/collections/ivory" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Ivory</a></li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li><a href="/collections/black" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Black</a></li>
                                                        <li><a href="/collections/navy" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Navy</a></li>
                                                        <li><a href="/collections/khaki" className="text-sm font-normal text-[#666] hover:text-text transition-colors duration-200 py-1 inline-block">Khaki</a></li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="grid grid-cols-2 gap-[30px]">
                                            <a href={gender === 'WOMEN' ? "/pages/collaboration" : "/products/le-nouveau-cartable-navy"} className="flex flex-col gap-4 group/promo">
                                                <div className="relative aspect-[4/5] overflow-hidden">
                                                    <img
                                                        src={gender === 'WOMEN' ? "//prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-le-dalia.jpg?v=1681202495&width=630" : "//prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-nouveau-cartable.jpg?v=1681204218&width=630"}
                                                        alt="Promo"
                                                        className="w-full h-full object-cover transition-transform duration-[5600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/promo:scale-110"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-center gap-2 text-center">
                                                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase">{gender === 'WOMEN' ? 'LÉO & VIOLETTE X WENDY SWAN' : 'LE NOUVEAU CARTABLE'}</span>
                                                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#888]">{gender === 'WOMEN' ? 'THE DALIA' : '5 COLORS, FROM $420'}</span>
                                                </div>
                                            </a>
                                            <a href={gender === 'WOMEN' ? "/pages/color" : "/products/le-porte-cartes-black-liege"} className="flex flex-col gap-4 group/promo">
                                                <div className="relative aspect-[4/5] overflow-hidden">
                                                    <img
                                                        src={gender === 'WOMEN' ? "//prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-color.jpg?v=1681202556&width=630" : "//prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-porte-cartes.jpg?v=1681204230&width=630"}
                                                        alt="Promo"
                                                        className="w-full h-full object-cover transition-transform duration-[5600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/promo:scale-110"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-center gap-2 text-center">
                                                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase">{gender === 'WOMEN' ? 'THE SYMBOL OF OUR VALUES' : 'LE PORTE-CARTES'}</span>
                                                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#888]">{gender === 'WOMEN' ? 'ALMOND GREEN' : 'ACCESSORIES'}</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className="flex items-center h-full"><a href="/blogs/news" className="text-[13px] font-semibold tracking-[0.1em]">BLOG</a></li>
                        <li className="flex items-center h-full"><a href="/pages/about-us" className="text-[13px] font-semibold tracking-[0.1em]">ABOUT</a></li>
                    </ul>
                </nav>

                <div className="absolute left-1/2 top-[71%] -translate-x-1/2 -translate-y-1/2 font-heading text-[28px] font-bold tracking-[0.2em]">
                    <a href="/">PRESTIGE</a>
                </div>

                <div className="flex-1 flex items-center justify-end gap-8">
                    <div className="relative flex items-center">
                        <button
                            className="flex items-center gap-2 bg-none border-none text-current text-[13px] font-medium cursor-pointer px-2 py-1 tracking-tight"
                            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                            aria-expanded={isCurrencyDropdownOpen}
                            aria-haspopup="listbox"
                        >
                            <span className="text-base leading-none" aria-hidden="true">🇺🇸</span>
                            <span className="tracking-tighter">USD $</span>
                            <svg className={`transition-transform duration-200 ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isCurrencyDropdownOpen && (
                            <ul className="absolute top-[calc(100%+15px)] -right-5 w-[280px] bg-brand-white text-text list-none p-4 m-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded z-[100] flex flex-col" role="listbox">
                                {[
                                    { flag: '🇨🇦', name: 'Canada (CAD $)' },
                                    { flag: '🇫🇷', name: 'France (EUR €)' },
                                    { flag: '🇩🇪', name: 'Germany (EUR €)' },
                                    { flag: '🇭🇰', name: 'Hong Kong SAR (HKD $)' },
                                    { flag: '🇮🇹', name: 'Italy (EUR €)' },
                                    { flag: '🇯🇵', name: 'Japan (JPY ¥)' },
                                    { flag: '🇰🇷', name: 'South Korea (KRW ₩)' },
                                    { flag: '🇪🇸', name: 'Spain (EUR €)' },
                                    { flag: '🇬🇧', name: 'United Kingdom (GBP £)' }
                                ].map((currency) => (
                                    <li key={currency.name} className="flex items-center px-6 py-3 gap-4 text-[13px] cursor-pointer hover:bg-brand-bg-off hover:text-black transition-colors duration-200 text-[#444]" role="option" aria-selected="false">
                                        <span className="text-lg leading-none" aria-hidden="true">{currency.flag}</span>
                                        <span>{currency.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex gap-4 items-center">
                        <button className="flex items-center justify-center transition-transform duration-200 hover:scale-110" aria-label="Search">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 14.5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center transition-transform duration-200 hover:scale-110" aria-label="Account">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10.5C12.4853 10.5 14.5 8.48528 14.5 6C14.5 3.51472 12.4853 1.5 10 1.5C7.51472 1.5 5.5 3.51472 5.5 6C5.5 8.48528 7.51472 10.5 10 10.5Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M2.5 18.5V17C2.5 14.5147 4.51472 12.5 7 12.5H13C15.4853 12.5 17.5 14.5147 17.5 17V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center transition-transform duration-200 hover:scale-110" aria-label="Cart">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 5.5H17.5L16.5 17.5H3.5L2.5 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M6.5 8.5V4.5C6.5 2.567 8.067 1 10 1C11.933 1 13.5 2.567 13.5 4.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
