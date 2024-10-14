import { useState } from "react";
import PropTypes from "prop-types";

function ProductCards({ image, title, price, addItemsToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="border-2 relative border-neutral-300 flex flex-col gap-4 justify-center items-center py-10  px-6 "
      onMouseEnter={() => {
        setIsHovered((prev) => !prev);
      }}
      onMouseLeave={() => {
        setIsHovered((prev) => !prev);
      }}
    >
      <img src={image} alt={title} className="w-32 h-32" />
      <h4 className="text-sm text-neutral-700 text-center">{title}</h4>
      <span className="text-neutral-800">{price} $</span>

      <button
        onClick={addItemsToCart}
        className={` ${
          isHovered ? "opacity-100" : "opacity-0"
        } bg-rose-500 px-3 py-1 rounded-md text-neutral-50 `}
      >
        Add to cart
      </button>
    </div>
  );
}

ProductCards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addItemsToCart: PropTypes.func.isRequired,
};

export default ProductCards;
