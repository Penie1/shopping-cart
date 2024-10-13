import PropTypes from "prop-types";
import ProductCards from "../components/ProductCards";

function Products({ loading, error, products }) {
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, image, title, price }) => (
        <ProductCards key={id} image={image} title={title} price={price} />
      ))}
    </section>
  );
}
Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  products: PropTypes.array,
};
export default Products;
