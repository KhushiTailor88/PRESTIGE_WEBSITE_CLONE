const Newsletter = () => {
    return (
        <section className="py-20 bg-brand-bg-off text-center">
            <div className="container max-w-[1440px] mx-auto px-10">
                <div className="max-w-[1220px] mx-auto">
                    <h2 className="text-2xl tracking-[0.1em] mb-4 uppercase font-heading font-medium">NEWSLETTER</h2>
                    <p className="text-[13px] text-[#666] mb-10 font-body">
                        Subscribe to receive updates, access to exclusive deals, and more.
                    </p>
                    <form className="flex flex-col md:flex-row max-w-[500px] mx-auto md:border-b md:border-text pb-2.5 gap-6 md:gap-0" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 border-b border-text md:border-none bg-transparent py-3 text-[13px] outline-none text-center md:text-left font-body"
                            required
                        />
                        <button type="submit" className="font-heading font-bold tracking-[0.1em] text-[11px] px-6 py-4 md:py-0 uppercase hover:opacity-70 transition-opacity border border-text md:border-none bg-transparent">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
