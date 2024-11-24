import { useOutletContext } from "react-router-dom";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { useEffect, useState } from "react";
function Shop() {
  const { products } = useOutletContext();

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <section className="flex flex-row-reverse sm:flex-col">
      <Categories setFilteredProducts={setFilteredProducts} />
      <Products filteredProducts={filteredProducts} />
    </section>
  );
}

export default Shop;
