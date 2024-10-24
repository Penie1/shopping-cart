import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  function addItemsToCart(id) {
    const zeroBasedId = id - 1; // It convert original ID to zero-based for array indexing
    const isItemInCart = cartItems.includes(products[zeroBasedId]);
    if (!isItemInCart) {
      setCartItems((prevItem) => [products[zeroBasedId], ...prevItem]);
    }
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
    <main>
      <NavBar cartItems={cartItems} />
      <Outlet
        context={[
          products,
          setProducts,
          loading,
          setLoading,
          error,
          setError,
          addItemsToCart,
        ]}
      />
    </main>
  );
}

export default Layout;
