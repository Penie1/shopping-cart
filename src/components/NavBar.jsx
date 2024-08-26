import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

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
      <div>TrendiQ</div>
      <ul
        className={`sm:flex  gap-9  sm:flex-row sm:static flex-col absolute top-20 left-0 sm:bg-inherit sm:w-max w-full sm:p-0 p-4 sm:h-max h-[calc(100svh-80px)] ${
          !isClicked && "hidden"
        } `}
      >
        <li className="sm:border-none border-b-2  sm:pb-0 pb-1 sm:pt-0 pt-5">
          <a href="">Home</a>
        </li>
        <li className="sm:border-none border-b-2 sm:pb-0 pb-1  ">
          <a href="">Page</a>
        </li>
        <li className="sm:border-none border-b-2 sm:pb-0 pb-1  ">
          <a href="">About Us</a>
        </li>
        <li className="sm:border-none border-b-2 sm:pb-0 pb-1  ">
          <a href="">Contact Us</a>
        </li>
      </ul>
      <div className="flex gap-8">
        <button className=" relative">
          <ShoppingCart size={20} />
          <div className=" text-center font-bold absolute bottom-3 left-5 w-5 h-5 pb-1  rounded-full bg-rose-500 text-neutral-50 text-xs leading-5">
            0
          </div>
        </button>
        <button className="sm:hidden" onClick={handleOnClick}>
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
