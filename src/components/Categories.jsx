import PropTypes from "prop-types";
import CategoriesBtn from "./CategoriesBtn";

function Categories({ products, setFilteredProducts }) {
  function fetchOnClick(category) {
    if (category === "all") {
      setFilteredProducts([...products]); // Reset to all products
    } else {
      const filteredCategoryProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts([...filteredCategoryProducts]);
    }
  }

  return (
    <nav className="flex justify-evenly my-8">
      <CategoriesBtn type="All" fetchOnClick={fetchOnClick} category={"all"} />
      <CategoriesBtn
        type="Men's clothing"
        category={`men's clothing`}
        fetchOnClick={fetchOnClick}
      />
      <CategoriesBtn
        type="Women's clothing"
        category={"women's clothing"}
        fetchOnClick={fetchOnClick}
      />
      <CategoriesBtn
        type="Jewelery"
        category={"jewelery"}
        fetchOnClick={fetchOnClick}
      />
      <CategoriesBtn
        type="Electronics"
        category={"electronics"}
        fetchOnClick={fetchOnClick}
      />
    </nav>
  );
}

Categories.propTypes = {
  products: PropTypes.array.isRequired,
  setFilteredProducts: PropTypes.func.isRequired,
};

export default Categories;
