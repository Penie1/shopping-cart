import { X } from "lucide-react";
import PropTypes from "prop-types";
import shortProductName from "../utilities/shortProductName";
import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

function Cart({ isCartOpened, cartItems, setCartItems, handleCartBtn }) {
  const cartItemCount = cartItems.length;

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  function removeItemFromCart(id) {
    const remainingCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingCartItems);
  }
  function handleIncrement(currentItemId) {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === currentItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  }
  function handleDecrement(currentItemId) {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === currentItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  }

  return (
    <>
      <AnimatePresence>
        {isCartOpened && (
          <motion.section
            animate={{ left: 0, opacity: 1 }}
            initial={{ left: "50%", opacity: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-between z-30 fixed  right-0 top-0 w-100vw h-dvh border-2 bg-slate-50  "
          >
            <div className="flex justify-between border-b border-neutral-300 py-3 px-4">
              <h3 className="text-lg font-bold">Your Cart ({cartItemCount})</h3>
              <button aria-label="Close cart popup" onClick={handleCartBtn}>
                <X />
              </button>
            </div>
            <div
              className={`${
                cartItemCount === 0 ? "my-auto self-center" : "m-0"
              }`}
            >
              {cartItemCount === 0 ? (
                <h1 className="text-2xl font-medium text-neutral-900">
                  Your cart is empty 🛒
                </h1>
              ) : (
                <ul className="flex flex-col gap-3 py-2 max-h-72 overflow-scroll scrollbar w-full">
                  {cartItems.map(({ id, title, image, quantity }) => (
                    <li className="border py-4 px-3 w-full" key={id}>
                      <div className=" flex gap-10 items-center justify-between text-sm">
                        <img
                          width={"60px"}
                          height={"60px"}
                          src={image}
                          alt={title}
                        />{" "}
                        <div className="flex flex-col items-center gap-2">
                          <h4 className="font-medium">
                            {shortProductName(title)}
                          </h4>
                          <div className="flex gap-2">
                            <button
                              className="border border-neutral-500 px-2 rounded-sm"
                              onClick={() => handleIncrement(id)}
                            >
                              +
                            </button>
                            <span>{quantity}</span>
                            <button
                              className="border border-neutral-500 px-2 rounded-sm"
                              onClick={() => handleDecrement(id)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItemFromCart(id)}
                          className="flex gap-1 items-center text-xs transition-colors text-neutral-500 hover:text-neutral-800"
                        >
                          <X className="h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cartItemCount !== 0 && (
              <div className="flex flex-col gap-2 text-center font-medium">
                <p className="flex justify-between py-3 px-5 bg-neutral-100 ">
                  <span>SubTotal:</span>
                  <span>{totalPrice}$</span>
                </p>

                <div className="flex flex-col basis-full gap-2 mb-2">
                  <a className="py-4 border  cursor-pointer bg-neutral-800 text-yellow-400 ">
                    View Cart
                  </a>
                  <a className="py-4 border cursor-pointer border-neutral-600">
                    Checkout
                  </a>
                </div>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
Cart.propTypes = {
  isCartOpened: PropTypes.bool.isRequired,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func.isRequired,
  handleCartBtn: PropTypes.func.isRequired,
};

export default Cart;
