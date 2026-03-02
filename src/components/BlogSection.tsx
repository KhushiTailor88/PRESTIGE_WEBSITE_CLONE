import React from 'react';

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
        <section className="bg-[#efefef] py-20 md:py-16">
            <div className="container max-w-[1220px] px-10 mx-auto">
                <header className="text-center mb-16">
                    <span className="block text-xs tracking-[0.25em] uppercase text-[#6e6e6e] mb-[18px] font-normal font-heading">NEWS</span>
                    <h2 className="font-heading text-[28px] font-normal tracking-[0.18em] uppercase text-[#3a3a3a] mt-5">FROM THE BLOG</h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-[60px]">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="flex flex-col group">
                            <div className="w-full aspect-[2/1] overflow-hidden mb-6 ">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover block transition-transform duration-3000 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="block text-[11px] tracking-[0.2em] text-[#6e6e6e] mb-[15px] uppercase font-medium font-heading">{post.category}</span>
                                <h3 className="font-heading text-lg font-normal mb-[25px] uppercase text-[#3a3a3a] tracking-[0.1em] leading-[1.3] md:min-height-[4rem]">
                                    {post.title}
                                </h3>
                                <a href={post.link} className="inline-block text-xs text-text uppercase tracking-[0.2em] border-b border-text/30 pb-[6px] self-start transition-all duration-300 font-medium font-heading hover:border-transparent hover:opacity-60">
                                    Read more
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center">
                    <a href="/blog" className="px-10 py-[15px] text-sm tracking-[2px] bg-text text-brand-white border border-text transition-all duration-400 font-heading uppercase hover:bg-transparent hover:text-text">
                        DISCOVER ALL OUR STORIES
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
