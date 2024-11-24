import PropTypes from "prop-types";
import { ShoppingCartIcon } from "lucide-react";
import shortProductName from "../utilities/shortProductName";
import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProductCards({ id, image, title, price }) {
  const { addItemsToCart } = useOutletContext();
  return (
    <div className="bg-white border relative border-neutral-200 rounded-md flex flex-col gap-6 justify-center items-center py-10  px-6 tracking-wider">
      <LazyLoadImage
        effect="blur"
        src={image}
        alt={title}
        className=" w-auto h-44"
      />
      <h4 className="text-sm text-neutral-700 text-center font-medium">
        {shortProductName(title)}
      </h4>
      <span className="text-neutral-800 font-semibold">{price} $</span>

      <button
        onClick={() => addItemsToCart(id)}
        className="flex gap-2 items-end bg-neutral-600 hover:bg-neutral-800 transition rounded-md text-yellow-500 px-3 py-2"
        aria-label={`Add ${title} to cart`}
      >
        <span>
          <ShoppingCartIcon size={18} />
        </span>
        <span className="text-xs font-semibold">ADD TO CART</span>
      </button>
    </div>
  );
}

ProductCards.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCards;
