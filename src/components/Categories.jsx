import PropTypes from "prop-types";
import CategoriesBtn from "./CategoriesBtn";

function Categories({ setProducts, setError, setLoading }) {
  function fetchOnClick(catagory) {
    fetch(
      `https://fakestoreapi.com/products/${
        catagory !== "all" ? `category/${catagory}` : ""
      }`
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
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
  setProducts: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Categories;
