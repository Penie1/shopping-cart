import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  function addItemsToCart(id) {
    const product = products.find((item) => item.id === id);
    const isItemInCart = cartItems.includes(product);

    if (isItemInCart || !product) return; // Prevent adding undefined or duplicate items

    setCartItems((prevItems) => [product, ...prevItems]);
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
    <main className="font-poopins text-neutral-800">
      <NavBar cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet context={[products, loading, error, addItemsToCart]} />
    </main>
  );
}

export default Layout;
