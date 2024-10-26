import PropTypes from "prop-types";

function CategoriesBtn({ type, fetchOnClick, category }) {
  return (
    <button
      className=" text-neutral-50 hover:text-yellow-500   transition"
      onClick={() => fetchOnClick(category)}
    >
      {type}
    </button>
  );
}

CategoriesBtn.propTypes = {
  type: PropTypes.string.isRequired,
  fetchOnClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
export default CategoriesBtn;
