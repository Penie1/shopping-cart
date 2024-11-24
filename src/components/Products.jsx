import ProductCards from "../components/ProductCards";
import LoadingCard from "./LoadingCard";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
function Products({ filteredProducts }) {
  const { loading, error, addItemsToCart } = useOutletContext();

  if (loading)
    return (
      <section className="grid grid-cols-1 grid-rows-[400px] gap-4 md:grid-cols-2 lg:grid-cols-3 p-6 bg-neutral-200 w-full min-h-[calc(100svh-150px)]">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </section>
    );

  if (error)
    return (
      <div className="flex sm:h-[calc(100svh-190px)] h-[calc(100svh-78px)] justify-center items-center mx-auto">
        <p className="font-bold text-3xl ">Something went wrong!</p>
      </div>
    );
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-6 bg-neutral-200 w-full">
      {filteredProducts.map(({ id, image, title, price }) => (
        <ProductCards
          key={id}
          id={id}
          image={image}
          title={title}
          price={price}
          addItemsToCart={addItemsToCart}
        />
      ))}
    </section>
  );
}
Products.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
};
export default Products;
