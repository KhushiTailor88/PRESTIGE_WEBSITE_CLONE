import { useState, useEffect } from 'react';

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
        <section className="w-full relative font-heading bg-brand-bg-off pt-0">
            <div className="relative h-[clamp(32rem,45vw,600px)] w-full overflow-hidden bg-[#f5f5f5] group">
                <div className="w-full h-full">
                    <img
                        src="//prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=3000"
                        srcSet="//prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=400 400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=500 500w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=600 600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=800 800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1000 1000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1200 1200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1400 1400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1600 1600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=1800 1800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2000 2000w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2200 2200w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2400 2400w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2600 2600w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=2800 2800w, //prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=3000 3000w"
                        alt="Super Sale"
                        className="w-full h-full object-cover object-center transition-transform duration-900 ease-in-out group-hover:scale-[1.04]"
                    />
                </div>
                <div className="absolute inset-0 z-[2] flex items-center justify-center p-5">
                    <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-between items-center text-brand-white gap-10 lg:gap-5 text-center lg:text-left">
                        <div className="max-w-[500px]">
                            <p className="text-[11px] tracking-[0.25em] uppercase mb-5 opacity-90">LIMITED TIME ONLY</p>
                            <h2 className="text-[28px] md:text-[38px] font-normal tracking-[0.15em] uppercase mb-6 leading-[1.2]">SUPER SALE UP TO 40% OFF</h2>
                            <p className="text-sm leading-[1.6] mb-[35px] text-[#e0e0e0]">
                                Shop our selection of exclusive handbags and backpacks at reduced price during the Super Sale. Hurry up!
                            </p>
                            <a href="#" className="inline-block px-[33px] py-[13px] text-xs font-medium tracking-[0.2em] uppercase border border-brand-white bg-brand-white text-text transition-all duration-400 hover:bg-transparent hover:text-brand-white">SHOP NOW</a>
                        </div>
                        <div className="flex items-center gap-[15px] justify-center">
                            <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
                                <span className="text-[32px] font-light tracking-[0.05em] leading-none mb-2">{padZero(timeLeft.days)}</span>
                                <span className="text-[11px] tracking-[0.25em] uppercase opacity-80">DAY</span>
                            </div>
                            <span className="text-2xl md:text-[30px] font-light opacity-60 -mt-5 md:-mt-[20px]">:</span>
                            <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
                                <span className="text-[32px] font-light tracking-[0.05em] leading-none mb-2">{padZero(timeLeft.hours)}</span>
                                <span className="text-[11px] tracking-[0.25em] uppercase opacity-80">HOURS</span>
                            </div>
                            <span className="text-2xl md:text-[30px] font-light opacity-60 -mt-5 md:-mt-[20px]">:</span>
                            <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
                                <span className="text-[32px] font-light tracking-[0.05em] leading-none mb-2">{padZero(timeLeft.minutes)}</span>
                                <span className="text-[11px] tracking-[0.25em] uppercase opacity-80">MIN</span>
                            </div>
                            <span className="text-2xl md:text-[30px] font-light opacity-60 -mt-5 md:-mt-[20px]">:</span>
                            <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
                                <span className="text-[32px] font-light tracking-[0.05em] leading-none mb-2">{padZero(timeLeft.seconds)}</span>
                                <span className="text-[11px] tracking-[0.25em] uppercase opacity-80">SEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownDisplay;
