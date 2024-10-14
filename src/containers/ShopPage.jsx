import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Products from "../hooks/Products";
function Shop() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numberOfItems, setNumberOfItems] = useState(0);

  function addItemsToCart() {
    setNumberOfItems((prev) => prev + 1);
  }

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

  return (
    <>
      <NavBar numberOfItems={numberOfItems} />
      <Categories
        setProducts={setProducts}
        setError={setError}
        setLoading={setLoading}
      />
      <Products
        addItemsToCart={addItemsToCart}
        numberOfItems={numberOfItems}
        products={products}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default Shop;
