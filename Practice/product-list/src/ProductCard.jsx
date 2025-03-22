/* eslint-disable react/prop-types */
import './ProductCard.css';

export const ProductCard = ({ title, price, discount, imageUrl }) => {
  return (
    <div className='product-card'>
      <img src={imageUrl} alt='imageUrl' className='product-card__img' />
      <div className='product-card__price'>
        {discount ? (
          <span className='product-card__price-discount'>
            {price - price * discount}
          </span>
        ) : (
          <span className='product-card__price-discount'>{price}</span>
        )}
        {discount && price && (
          <span className='product-card__price-current'>{price}</span>
        )}
      </div>
      <p className='product-card__description'>{title}</p>
    </div>
  );
};
