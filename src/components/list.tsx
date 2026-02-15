import type { Product } from "../types/json";
import ItemCard from "./item-card";

export default function List({ products }: { products: Product[] }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ItemCard key={product.name} product={product} />
      ))}
    </div>
  );
}