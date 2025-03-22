/* eslint-disable react/prop-types */
import { ProductCard } from "./ProductCard";
import "./ProductsList.css";

export const ProductsList = ({ products }) => {
  return (
    <div>
      <ul className="products-list">
        {products.map((product) => (
          <li className="products-list__item" key={product.id}>
            <ProductCard
              title={product.title}
              price={product.price}
              discount={product.discount}
              imageUrl={product.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
