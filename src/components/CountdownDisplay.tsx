import { useState, useEffect } from 'react';
import './CountdownDisplay.css';

const CountdownDisplay = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 99,
        hours: 22,
        minutes: 21,
        seconds: 6
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 99);
        targetDate.setHours(targetDate.getHours() + 22);
        targetDate.setMinutes(targetDate.getMinutes() + 21);
        targetDate.setSeconds(targetDate.getSeconds() + 6);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const padZero = (num: number) => num.toString().padStart(2, '0');

    return (
        <section className="countdown-section reveal">
            <div className="countdown-section__inner">
                <div className="countdown-section__image-container">
                    <img
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=3000"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1800 1800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2000 2000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2200 2200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2400 2400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2600 2600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2800 2800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=3000 3000w"
                        alt="Super Sale"
                        className="countdown-section__image"
                    />
                </div>
                <div className="countdown-section__content">
                    <div className="countdown-section__container">
                        <div className="countdown-section__text-box">
                            <p className="countdown-section__subtitle">LIMITED TIME ONLY</p>
                            <h2 className="countdown-section__title">SUPER SALE UP TO 40% OFF</h2>
                            <p className="countdown-section__description">
                                Shop our selection of exclusive handbags and backpacks at reduced price during the Super Sale. Hurry up!
                            </p>
                            <a href="#" className="countdown-section__btn">SHOP NOW</a>
                        </div>
                        <div className="countdown-section__timer">
                            <div className="timer-item">
                                <span className="timer-value">{padZero(timeLeft.days)}</span>
                                <span className="timer-label">DAY</span>
                            </div>
                            <span className="timer-separator">:</span>
                            <div className="timer-item">
                                <span className="timer-value">{padZero(timeLeft.hours)}</span>
                                <span className="timer-label">HOURS</span>
                            </div>
                            <span className="timer-separator">:</span>
                            <div className="timer-item">
                                <span className="timer-value">{padZero(timeLeft.minutes)}</span>
                                <span className="timer-label">MIN</span>
                            </div>
                            <span className="timer-separator">:</span>
                            <div className="timer-item">
                                <span className="timer-value">{padZero(timeLeft.seconds)}</span>
                                <span className="timer-label">SEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownDisplay;
