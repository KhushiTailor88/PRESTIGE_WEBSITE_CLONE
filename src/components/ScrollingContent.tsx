import './ScrollingContent.css';

const ScrollingContent = () => {
    const items1 = [
        { text: 'NEW: LE SAC BAGUETTE', image: '/Scrolling_content_-_home_-_sac._-baguette.jpg' },
    ];

    const items2 = [
        { text: 'SHOP NEW ARRIVALS', image: '/Scrolling_content_2.jpg' },
    ];

    // Duplicate for seamless loop
    const row1 = [...items1, ...items1, ...items1, ...items1, ...items1, ...items1, ...items1, ...items1];
    const row2 = [...items2, ...items2, ...items2, ...items2, ...items2, ...items2, ...items2, ...items2];

    return (
        <section className="scrolling-content-section">
            <div className="scrolling-content">
                <div className="scrolling-content__track scrolling-content__track--primary">
                    {row1.map((item, index) => (
                        <div key={`r1-${index}`} className="scrolling-content__item">
                            <span className="scrolling-content__text">{item.text}</span>
                            {item.image && (
                                <img src={item.image} alt="" className="scrolling-content__image" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="scrolling-content">
                <div className="scrolling-content__track scrolling-content__track--secondary">
                    {row2.map((item, index) => (
                        <div key={`r2-${index}`} className="scrolling-content__item">
                            <span className="scrolling-content__text">{item.text}</span>
                            {item.image && (
                                <img src={item.image} alt="" className="scrolling-content__image" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollingContent;
