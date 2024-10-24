import { X } from "lucide-react";
import PropTypes from "prop-types";

function Cart({ isCartClicked, cartItems, handleCartClick }) {
  const cartItemCount = cartItems.length;
  return (
    <>
      {isCartClicked && (
        <section className="flex flex-col justify-between z-30 fixed top-0 right-0 w-[50vw] h-dvh border-2 bg-slate-50  ">
          <div className="flex justify-between border-b border-neutral-300 py-3 px-4">
            <h3 className="text-lg font-bold">Your Cart ({cartItemCount})</h3>
            <button aria-label="Close cart popup" onClick={handleCartClick}>
              <X />
            </button>
          </div>
          <div
            className={`${cartItemCount === 0 ? "my-auto self-center" : "m-0"}`}
          >
            {cartItemCount === 0 ? (
              <h1 className="text-2xl font-medium text-neutral-900">
                Your cart is empty 🛒
              </h1>
            ) : (
              <ul className="flex flex-col gap-3 py-2 max-h-72 overflow-scroll scrollbar w-full">
                {cartItems.map(({ id, title, image }) => (
                  <li className="border py-4 px-3 w-full" key={id}>
                    <div className="flex gap-10 items-center justify-between text-sm">
                      <img
                        width={"60px"}
                        height={"60px"}
                        src={image}
                        alt={title}
                      />
                      <h4 className="font-medium">{title}</h4>
                      <button className="flex gap-1 items-center text-xs">
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
                <span>1000$</span>
              </p>

              <div className="flex flex-col basis-full gap-2 mb-2">
                <a className="py-4 border  cursor-pointer bg-red-400 text-neutral-50 ">
                  View Cart
                </a>
                <a className="py-4 border cursor-pointer border-neutral-600">
                  Checkout
                </a>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
Cart.propTypes = {
  isCartClicked: PropTypes.bool,
  cartItems: PropTypes.array,
  handleCartClick: PropTypes.func,
};

export default Cart;