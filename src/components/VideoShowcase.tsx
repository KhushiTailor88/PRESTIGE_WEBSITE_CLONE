import './VideoShowcase.css';

const VideoShowcase = () => {
    return (
        <section className="video-showcase">
            <video
                className="video-showcase__player"
                poster="https://prestige-theme-allure.myshopify.com/cdn/shop/files/preview_images/686fc38c1584488793cb47f95193f422.thumbnail.0000000000_400x.jpg?v=1677578139"
                controls
                playsInline
                muted
                loop
            >
                <source
                    src="https://prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/686fc38c1584488793cb47f95193f422/686fc38c1584488793cb47f95193f422.HD-1080p-4.8Mbps-12729205.mp4?v=0"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default VideoShowcase;
