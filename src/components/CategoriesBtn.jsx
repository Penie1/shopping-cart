import PropTypes from "prop-types";

function CategoriesBtn({ type, fetchOnClick, category }) {
  return (
    <button
      className="bg-neutral-600 text-neutral-50 px-3 py-1 rounded-3xl text-sm"
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
