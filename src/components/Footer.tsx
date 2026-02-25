import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer color-scheme color-scheme--scheme-2">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__block-list">
                        <div className="footer__block footer__block--newsletter">
                            <div className="v-stack gap-4 sm:gap-5">
                                <p className="h6">NEWSLETTER</p>
                                <div className="prose text-subdued">
                                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                                </div>
                                <form className="form">
                                    <div className="form-control">
                                        <input className="input" type="email" placeholder="E-mail" required />
                                        <label className="floating-label text-xs">E-mail</label>
                                    </div>
                                    <div className="align-self-start">
                                        <button type="submit" className="button">SUBSCRIBE</button>
                                    </div>
                                </form>
                                <ul className="social-media social-media--list unstyled-list" role="list">
                                    <li className="social-media__item branding-colors--facebook">
                                        <a href="https://www.facebook.com/leoetviolette" className="tap-area" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook">
                                            <svg aria-hidden="true" focusable="false" width="24" className="icon icon-facebook" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="social-media__item branding-colors--twitter">
                                        <a href="https://twitter.com/leoetviolette" className="tap-area" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter">
                                            <svg aria-hidden="true" focusable="false" width="24" className="icon icon-twitter" viewBox="0 0 24 24">
                                                <path d="M16.94 4h2.715l-5.93 6.777L20.7 20h-5.462l-4.278-5.593L6.065 20H3.35l6.342-7.25L3 4h5.6l3.868 5.113L16.94 4Zm-.952 14.375h1.504L7.784 5.54H6.17l9.818 12.836Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="social-media__item branding-colors--instagram">
                                        <a href="https://www.instagram.com/leoetviolette/" className="tap-area" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
                                            <svg aria-hidden="true" focusable="false" width="24" className="icon icon-instagram" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="social-media__item branding-colors--vimeo">
                                        <a href="https://vimeo.com/leoetviolette" className="tap-area" target="_blank" rel="noopener noreferrer" aria-label="Follow on Vimeo">
                                            <svg aria-hidden="true" focusable="false" width="24" className="icon icon-vimeo" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.518 6.726c.143-.815.14-1.654-.356-2.288-.693-.89-2.167-.922-3.178-.765-.821.127-3.6 1.371-4.547 4.35 1.676-.13 2.554.122 2.393 1.994-.068.783-.457 1.642-.893 2.464-.502.948-1.445 2.81-2.68 1.468-1.114-1.208-1.03-3.518-1.285-5.056-.142-.864-.292-1.94-.57-2.827-.24-.763-.791-1.684-1.465-1.883-.724-.216-1.618.12-2.143.435C5.12 5.615 3.847 7.034 2.4 8.204v.11c.287.278.364.734.786.796.996.149 1.945-.942 2.607.193.403.693.529 1.453.787 2.2.344.996.61 2.08.892 3.224.477 1.939 1.064 4.836 2.715 5.545.843.363 2.11-.122 2.75-.508 1.738-1.043 3.091-2.555 4.25-4.094 2.649-3.64 4.11-7.765 4.331-8.944Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__block footer__block--links">
                            <div className="v-stack gap-4 sm:gap-5">
                                <p className="h6">SHOP</p>
                                <ul className="v-stack gap-2.5 unstyled-list" role="list">
                                    <li><a href="/collections/women-1" className="link-faded">Women</a></li>
                                    <li><a href="/collections/men-1" className="link-faded">Men</a></li>
                                    <li><a href="/collections/small-leather-goods" className="link-faded">Small Leather Goods</a></li>
                                    <li><a href="/collections/le-mini-dalia" className="link-faded">Collaboration</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__block footer__block--links">
                            <div className="v-stack gap-4 sm:gap-5">
                                <p className="h6">INFORMATION</p>
                                <ul className="v-stack gap-2.5 unstyled-list" role="list">
                                    <li><a href="/pages/theme-features" className="link-faded">Theme Features</a></li>
                                    <li><a href="/pages/about-us" className="link-faded">About us</a></li>
                                    <li><a href="/pages/contact" className="link-faded">Contact us</a></li>
                                    <li><a href="/pages/faq-new" className="link-faded">FAQ</a></li>
                                    <li><a href="/pages/maintenance-tips" className="link-faded">Maintenance Tips</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__block footer__block--text">
                            <div className="v-stack gap-4 sm:gap-5">
                                <p className="h6">ABOUT THE SHOP</p>
                                <div className="prose text-subdued">
                                    <p>
                                        The story of Leo and Violette, it's ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our lives for more than 8 years. Since the early days of our meeting, we always had the dream to develop a project together. Here it is!
                                        <br />
                                        Thanks to <a href="https://www.leoetviolette.com/" target="_blank" rel="noopener noreferrer" title="https://www.leoetviolette.com/">Léo et Violette</a> for allowing us to use their products in this demo store.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="footer__aside">
                        <div className="localization-selectors">
                            <div className="relative">
                                <button type="button" className="localization-toggle heading text-xxs link-faded" aria-label="Change country or currency">
                                    <img src="https://cdn.shopify.com/static/images/flags/us.svg?format=jpg&width=60" alt="United States" width="20" height="15" className="country-flag" />
                                    <span>United States (USD $)</span>
                                    <svg aria-hidden="true" focusable="false" fill="none" width="10" className="icon icon-chevron-down" viewBox="0 0 10 10">
                                        <path d="m1 3 4 4 4-4" stroke="currentColor" strokeLinecap="square"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="footer__copyright heading text-subdued text-xxs">
                            © 2026 - Prestige - Allure <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Powered by Shopify</a>
                        </p>
                        <ul className="payment-methods unstyled-list">
                            <li>
                                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24">
                                    <title>Visa</title>
                                    <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                    <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                    <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
                                </svg>
                            </li>
                            <li>
                                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24">
                                    <title>Mastercard</title>
                                    <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                    <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                    <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                                    <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                                    <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24">
                                    <title>American Express</title>
                                    <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path>
                                    <path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path>
                                    <path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path>
                                    <path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path>
                                    <path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path>
                                    <path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path>
                                    <path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path>
                                    <path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img">
                                    <title>PayPal</title>
                                    <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                    <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                    <path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path>
                                    <path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path>
                                    <path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
