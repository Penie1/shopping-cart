import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleOnClick() {
    setIsClicked((prevBoolen) => !prevBoolen);
  }
  return (
    <nav
      id="nav-bar"
      className="flex justify-between p-5 sm:pr-10  border-b-2  "
    >
      <Link to="/">TrendiQ</Link>
      <ul
        className={`z-10 flex sm:gap-9 gap-3  sm:flex-row sm:static flex-col absolute top-[4.1rem] right-0 sm:bg-inherit bg-slate-700 sm:text-inherit text-neutral-100 sm:w-max w-60 sm:p-0 pt-4 px-3  sm:h-max h-[calc(100svh-66px)] ${
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
      <div className="flex gap-10">
        <button className=" relative">
          <ShoppingCart size={20} />
          <div className=" text-center font-bold absolute bottom-3 left-5 w-5 h-5 pb-1  rounded-full bg-rose-500 text-neutral-50 text-xs leading-5">
            0
          </div>
        </button>
        <button className="sm:hidden" onClick={handleOnClick}>
          {!isClicked ? <Menu /> : <X />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
