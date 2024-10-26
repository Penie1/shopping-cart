import { useOutletContext } from "react-router-dom";
import Categories from "../components/Categories";
import Products from "../hooks/Products";
import { useEffect, useState } from "react";
function Shop() {
  const [products, loading, error, addItemsToCart] = useOutletContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]); // Make sure filteredProducts is reset whenever products change

  return (
    <section className="flex  sm:flex-col ">
      <Categories
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <Products
        addItemsToCart={addItemsToCart}
        products={filteredProducts}
        error={error}
        loading={loading}
      />
    </section>
  );
}

export default Shop;
