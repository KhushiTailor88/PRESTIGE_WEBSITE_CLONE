import './ProductCard.css';

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    tag?: string;
}

const ProductCard = ({ name, price, image, tag }: ProductCardProps) => {
    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <img src={image} alt={name} className="product-card__image" />
                {tag && <span className="product-card__tag">{tag}</span>}
                <button className="product-card__quick-view">QUICK VIEW</button>
            </div>
            <div className="product-card__info">
                <h3 className="product-card__name"><a href="#">{name}</a></h3>
                <span className="product-card__price">{price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
