import { Menu, ShoppingCart, X } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function NavBar({ cartItems }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);

  function handleMenuClick() {
    setIsClicked((prevBoolen) => !prevBoolen);
  }
  function handleCartClick() {
    setIsCartClicked((prevBoolen) => !prevBoolen);
  }
  return (
    <nav
      id="nav-bar"
      className="flex justify-between p-5 sm:pr-10  border-b-2 sm:static sticky top-0 z-20 bg-neutral-100"
    >
      <Link to="/" className="text-3xl font-bold">
        TrendiQ
      </Link>
      <ul
        className={`z-10 flex sm:gap-9 gap-3  sm:flex-row sm:static flex-col absolute top-[4.9rem] right-0 sm:bg-inherit bg-slate-700 sm:text-inherit text-neutral-100 sm:w-max w-60 sm:p-0 pt-4 px-3  sm:h-max h-[calc(100svh-66px)] ${
          !isClicked && "sm:flex hidden "
        } `}
      >
        <li className="border-b-2 py-1 border-rose-500 sm:border-none">
          <Link to="/home">Home</Link>
        </li>
        <li className="border-b-2 py-1 border-rose-500 sm:border-none ">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="border-b-2 py-1 border-rose-500 sm:border-none ">
          <Link to="/about">About Us</Link>
        </li>
        <li className="border-b-2 py-1 border-rose-500 sm:border-none ">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="flex gap-10 relative">
        <button onClick={handleCartClick}>
          <ShoppingCart size={20} />
          <div className=" text-center font-bold absolute bottom-3 left-5 w-5 h-5 pb-1  rounded-full bg-rose-500 text-neutral-50 text-xs leading-5">
            <span>{cartItems.length}</span>
          </div>
        </button>
        <button className="sm:hidden" onClick={handleMenuClick}>
          {!isClicked ? <Menu /> : <X />}
        </button>
      </div>
      <Cart
        isCartClicked={isCartClicked}
        cartItems={cartItems}
        handleCartClick={handleCartClick}
      />
    </nav>
  );
}
NavBar.propTypes = {
  cartItems: PropTypes.array,
};
export default NavBar;
