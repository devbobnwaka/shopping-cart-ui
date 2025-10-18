import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading && <p>Loading products...</p>}
      {error && <p className="error">❌ {error}</p>}

      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
