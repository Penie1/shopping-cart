import PropTypes from "prop-types";

function CategoriesBtn({ type }) {
  return (
    <button className="bg-neutral-600 text-neutral-50 px-3 py-1 rounded-3xl text-sm">
      {type}
    </button>
  );
}

CategoriesBtn.propTypes = {
  type: PropTypes.string.isRequired,
};
export default CategoriesBtn;
