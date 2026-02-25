import React from 'react';
import './BlogSection.css';

const blogPosts = [
    {
        id: 1,
        category: 'PRODUCT',
        title: 'HOW TO CHOOSE YOUR BUSINESS BAG',
        image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/articles/Featured_image-_How_to_choose_your_business_bag.jpg?v=1679497250&width=1000',
        link: '#'
    },
    {
        id: 2,
        category: 'STORY',
        title: 'A SHOOTING DAY IN ETRETAT',
        image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/articles/Featured_image_-_A_day_in_Etretat.jpg?v=1679486958&width=1000',
        link: '#'
    },
    {
        id: 3,
        category: 'PRODUCT',
        title: 'FOCUS ON YOUR NEW FAVORITE: LE GIANNI',
        image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/articles/Featured_image_-_Focus_on_your_new_favorite__Le_Gianni.jpg?v=1679501378&width=1000',
        link: '#'
    }
];

const BlogSection: React.FC = () => {
    return (
        <section className="blog-section section-spacing">
            <div className="container">
                <header className="blog-section__header">
                    <span className="blog-section__subtitle">NEWS</span>
                    <h2 className="blog-section__main-title">FROM THE BLOG</h2>
                </header>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-post">
                            <div className="blog-post__image-container">
                                <img src={post.image} alt={post.title} className="blog-post__image" />
                            </div>
                            <div className="blog-post__content">
                                <span className="blog-post__category">{post.category}</span>
                                <h3 className="blog-post__title">{post.title}</h3>
                                <a href={post.link} className="blog-post__read-more">Read more</a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="blog-section__footer">
                    <a href="/blog" className="btn btn-primary blog-section__cta">
                        DISCOVER ALL OUR STORIES
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
