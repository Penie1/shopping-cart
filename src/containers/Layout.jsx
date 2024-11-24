import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const productAPI = "https://fakestoreapi.com/products";
function Layout() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  function addItemsToCart(id) {
    const product = products.find((item) => item.id === id);

    if (!product) return;

    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === id);

      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  useEffect(() => {
    const fetchProduct = async (productAPI) => {
      try {
        const response = await fetch(productAPI);
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const productResult = await response.json();
        setProducts(productResult);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(productAPI);
  }, []);
  return (
    <main className="font-poopins text-neutral-800">
      <NavBar cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet context={{ products, loading, error, addItemsToCart }} />
    </main>
  );
}

export default Layout;
