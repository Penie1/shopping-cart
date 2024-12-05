import { Menu, ShoppingCart, X } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import NavLink from "./NavLink";

function NavBar({ cartItems, setCartItems }) {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);

  function handleMenuClick() {
    setIsNavOpened((prevBoolen) => !prevBoolen);
  }
  function handleCartBtn() {
    setIsCartOpened((prevBoolen) => !prevBoolen);
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
          !isNavOpened && "sm:flex hidden "
        } `}
      >
        <NavLink
          link="home"
          setIsNavOpened={setIsNavOpened}
          isNavOpened={isNavOpened}
        />
        <NavLink
          link="shop"
          setIsNavOpened={setIsNavOpened}
          isNavOpened={isNavOpened}
        />
        <NavLink
          link="about us"
          setIsNavOpened={setIsNavOpened}
          isNavOpened={isNavOpened}
        />
        <NavLink
          link="contact us"
          setIsNavOpened={setIsNavOpened}
          isNavOpened={isNavOpened}
        />
      </ul>
      <div className="flex gap-10 relative">
        <button onClick={handleCartBtn}>
          <ShoppingCart size={20} />
          <div className=" text-center font-bold absolute bottom-3 left-5 w-5 h-5 pb-1  rounded-full bg-rose-500 text-neutral-50 text-xs leading-5">
            <span>{cartItems.length}</span>
          </div>
        </button>
        <button className="sm:hidden" onClick={handleMenuClick}>
          {!isNavOpened ? <Menu /> : <X />}
        </button>
      </div>
      <Cart
        isCartOpened={isCartOpened}
        cartItems={cartItems}
        handleCartBtn={handleCartBtn}
        setCartItems={setCartItems}
      />
    </nav>
  );
}
NavBar.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func.isRequired,
};
export default NavBar;
