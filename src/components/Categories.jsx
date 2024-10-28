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
    <nav className="flex sm:gap-0 gap-12 sm:justify-evenly sm:mt-8 bg-neutral-800 sm:p-2 sm:flex-row flex-col   sm:h-auto h-[calc(100svh-78px)] sm:w-full sm:text-sm  text-xs sm:static sticky top-[78px] pt-12 shadow-md shadow-yellow-500  w-min px-1">
      <CategoriesBtn type="ALL" fetchOnClick={fetchOnClick} category={"all"} />
      <CategoriesBtn
        type="MEN"
        category={`men's clothing`}
        fetchOnClick={fetchOnClick}
      />
      <CategoriesBtn
        type="WOMEN"
        category={"women's clothing"}
        fetchOnClick={fetchOnClick}
      />
      <CategoriesBtn
        type="JEWELERY"
        category={"jewelery"}
        fetchOnClick={fetchOnClick}
      />
      <CategoriesBtn
        type="ELECTRONICS"
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
