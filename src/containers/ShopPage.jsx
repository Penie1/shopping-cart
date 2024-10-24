import { useOutletContext } from "react-router-dom";
import Categories from "../components/Categories";
import Products from "../hooks/Products";
function Shop() {
  const [
    products,
    setProducts,
    loading,
    setLoading,
    error,
    setError,
    addItemsToCart,
  ] = useOutletContext();

  return (
    <>
      <Categories
        setProducts={setProducts}
        setError={setError}
        setLoading={setLoading}
      />
      <Products
        addItemsToCart={addItemsToCart}
        products={products}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default Shop;
