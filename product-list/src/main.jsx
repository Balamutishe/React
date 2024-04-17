import { createRoot } from "react-dom/client";
import { ProductsList } from "./ProductsList";
import { products } from "./products";

const productsList = document.getElementById("products-list");

const reactRoot = createRoot(productsList);

reactRoot.render(<ProductsList products={products} />);
