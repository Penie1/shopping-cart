import { Menu, ShoppingCart, X } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import NavLink from "./NavLink";

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
      className="flex justify-between items-center p-5 sm:pr-10  border-b-2 sm:static sticky top-0 z-20 bg-neutral-100"
    >
      <Link to="/" className="text-3xl font-bold">
        TrendiQ
      </Link>
      <ul
        className={`z-10 flex  sm:gap-9  sm:flex-row sm:static flex-col absolute top-[4.9rem] right-0 sm:bg-inherit bg-neutral-700 sm:text-inherit text-neutral-100 sm:w-max w-full sm:p-0 px-3  sm:h-fit h-[calc(100svh-78px)] text-center font-medium  uppercase tracking-wider ${
          !isClicked && "sm:flex hidden "
        } `}
      >
        <NavLink
          link="home"
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
        <NavLink
          link="shop"
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
        <NavLink
          link="about us"
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
        <NavLink
          link="contact us"
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
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
