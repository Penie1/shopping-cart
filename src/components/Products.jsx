import PropTypes from "prop-types";
import ProductCards from "../components/ProductCards";
import LoadingCard from "./LoadingCard";

function Products({ loading, error, products, addItemsToCart }) {
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
      {products.map(({ id, image, title, price }) => (
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  products: PropTypes.array,
  addItemsToCart: PropTypes.func.isRequired,
};
export default Products;
