import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";

function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, image, title, price }) => (
        <ProductCards key={id} image={image} title={title} price={price} />
      ))}
    </section>
  );
}

export default Products;
