import React from "react";
import "./CollaborationSection.css";

const Collaboration: React.FC = () => {
  return (
    <section className="collaboration-section">
      <div className="collaboration-container">
        <div className="collaboration-grid">

          {/* Left Content */}
          <div className="collaboration-content">
            <p className="collaboration-label">
              Collaboration
            </p>

            <h3 className="collaboration-title">
              Léo et Violette x Wendy Swan
            </h3>

            <p className="collaboration-text">
              Dalia was born from the encounter between Wendy and Léo et
              Violette. Wendy's minimalist and elegant universe corresponds
              perfectly to the spirit of Léo et Violette.
            </p>

            <a href="/pages/collaboration" className="collaboration-button">
              Discover
            </a>
          </div>

          {/* Right Images */}
          <div className="collaboration-images">
            <div className="image-small">
              <img
                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multiple_media_with_text_-_Portrait_-_home_2.jpg?v=1680770198&width=1000"
                alt="Collaboration Full Body"
              />
            </div>

            <div className="image-large">
              <img
                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Multiple_media_with_text_-_Portrait_-_home_2.jpg?v=1680770198&width=1000"
                alt="Collaboration Close Up"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collaboration;