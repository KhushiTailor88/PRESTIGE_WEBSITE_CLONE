import { useState, useEffect } from 'react';
import './Header.css';

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

        calculateTimeLeft(); // Initial call
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="countdown-condensed color-scheme color-scheme--scheme-3" style={({ '--countdown-condensed-justify-content': 'center' } as React.CSSProperties)}>
                <div className="countdown-condensed__text">
                    <div className="proses">
                        <p className="h6">SUPER SALE UP TO 40% OFF</p>
                    </div>
                    <a href="/collections/sale" className="h6 link countdown-link sm-max:hidden">SHOP NOW</a>
                </div>
                <div className="countdown-condensed__timer" role="timer" aria-label="This offer expires on November 25, 2026 at 12:00 am">
                    <div className="countdown-condensed__timer-item" aria-hidden="true">
                        <div className="countdown-condensed__timer-flip">{String(timeLeft.days).padStart(2, '0')}</div>
                        <span className="countdown-condensed__timer-unit">Day</span>
                    </div>

                    <span className="countdown-condensed__timer-item-separator" aria-hidden="true">:</span>

                    <div className="countdown-condensed__timer-item" aria-hidden="true">
                        <div className="countdown-condensed__timer-flip">{String(timeLeft.hours).padStart(2, '0')}</div>
                        <span className="countdown-condensed__timer-unit">Hrs</span>
                    </div>

                    <span className="countdown-condensed__timer-item-separator" aria-hidden="true">:</span>

                    <div className="countdown-condensed__timer-item" aria-hidden="true">
                        <div className="countdown-condensed__timer-flip">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <span className="countdown-condensed__timer-unit">Min</span>
                    </div>

                    <span className="countdown-condensed__timer-item-separator" aria-hidden="true">:</span>

                    <div className="countdown-condensed__timer-item" aria-hidden="true">
                        <div className="countdown-condensed__timer-flip">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <span className="countdown-condensed__timer-unit">Sec</span>
                    </div>
                </div>
            </div>

            <div className="container header__content">
                <nav className="header__nav header__nav--left">
                    <ul>
                        <li><a href="#">WOMEN</a></li>
                        <li><a href="#">MEN</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                </nav>

                <div className="header__logo ">
                    <a href="/">PRESTIGE</a>
                </div>

                <div className="header__nav header__nav--right">
                    <div className="header__currency-selector">
                        <button
                            className="currency-toggle"
                            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                            aria-expanded={isCurrencyDropdownOpen}
                            aria-haspopup="listbox"
                        >
                            <span className="currency-toggle__flag" aria-hidden="true">🇺🇸</span>
                            <span className="currency-toggle__text">USD $</span>
                            <svg className={`currency-toggle__icon ${isCurrencyDropdownOpen ? 'currency-toggle__icon--open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isCurrencyDropdownOpen && (
                            <ul className="currency-dropdown" role="listbox">
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇨🇦</span>
                                    <span>Canada (CAD $)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇫🇷</span>
                                    <span>France (EUR €)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇩🇪</span>
                                    <span>Germany (EUR €)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇭🇰</span>
                                    <span>Hong Kong SAR (HKD $)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇮🇹</span>
                                    <span>Italy (EUR €)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇯🇵</span>
                                    <span>Japan (JPY ¥)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇰🇷</span>
                                    <span>South Korea (KRW ₩)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇪🇸</span>
                                    <span>Spain (EUR €)</span>
                                </li>
                                <li role="option" aria-selected="false">
                                    <span className="currency-dropdown__flag" aria-hidden="true">🇬🇧</span>
                                    <span>United Kingdom (GBP £)</span>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="header__icons">
                        <button className="header__icon" aria-label="Search">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 14.5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </button>
                        <button className="header__icon" aria-label="Account">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10.5C12.4853 10.5 14.5 8.48528 14.5 6C14.5 3.51472 12.4853 1.5 10 1.5C7.51472 1.5 5.5 3.51472 5.5 6C5.5 8.48528 7.51472 10.5 10 10.5Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M2.5 18.5V17C2.5 14.5147 4.51472 12.5 7 12.5H13C15.4853 12.5 17.5 14.5147 17.5 17V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button className="header__icon" aria-label="Cart">
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
