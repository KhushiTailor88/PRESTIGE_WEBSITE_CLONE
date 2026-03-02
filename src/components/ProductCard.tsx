interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    tag?: string;
}

const ProductCard = ({ name, price, image, tag }: ProductCardProps) => {
    return (
        <div className="w-full md:w-1/4 px-2 group">
            <div className="relative overflow-hidden bg-brand-bg-off aspect-[3/4]">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {tag && <span className="absolute top-4 left-4 bg-brand-white text-text px-3 py-1 text-[10px] font-bold tracking-widest uppercase">{tag}</span>}
                <button className="absolute bottom-0 left-0 w-full bg-brand-white text-text py-3 text-[11px] font-bold tracking-widest translate-y-full transition-transform duration-500 group-hover:translate-y-0 uppercase">QUICK VIEW</button>
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-sm font-medium tracking-wide mb-1"><a href="#" className="hover:text-[#666] transition-colors">{name}</a></h3>
                <span className="text-[13px] text-[#666]">{price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
