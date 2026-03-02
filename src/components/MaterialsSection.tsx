import React from 'react';

const MaterialsSection: React.FC = () => {
    return (
        <section className="relative w-full h-[65vh] min-h-[500px] bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url('/black_1.webp')] bg-cover bg-center flex items-center justify-center overflow-hidden lg:h-[80vh] md:h-auto md:py-[120px]">
            <div className="w-full max-w-[1440px] mx-auto px-10 flex justify-center items-center">
                <div className="bg-brand-white p-10 md:p-[60px_40px] max-w-[450px] w-full text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] z-[2] mx-5 md:mx-0">
                    <span className="block font-heading text-[13px] font-medium tracking-[0.3em] text-text mb-[25px] uppercase">MATERIALS</span>
                    <p className="font-body text-base leading-[1.6] text-text mb-[30px] font-normal">
                        We only work with the best leather, chosen in <br className="hidden md:block" /> collaboration with our factory. Made in Italy.
                    </p>
                    <div className="flex justify-center">
                        <a href="/materials" className="font-body text-[15px] font-medium text-text no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-text after:transition-transform after:duration-300 hover:after:scale-x-[0.7]">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
