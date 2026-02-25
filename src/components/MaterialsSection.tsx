import React from 'react';
import './MaterialsSection.css';

const MaterialsSection: React.FC = () => {
    return (
        <section className="materials-section">
            <div className="materials-section__container">
                <div className="materials-section__content-box">
                    <span className="materials-section__subtitle">MATERIALS</span>
                    <p className="materials-section__description">
                        We only work with the best leather, chosen in <br /> collaboration with our factory. Made in Italy.
                    </p>
                    <div className="materials-section__link-wrapper">
                        <a href="/materials" className="materials-section__link">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
