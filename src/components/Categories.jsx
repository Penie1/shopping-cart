import CategoriesBtn from "./CategoriesBtn";

function Categories() {
  return (
    <nav className="flex justify-evenly my-8">
      <CategoriesBtn type="All" />
      <CategoriesBtn type="Men's clothing" />
      <CategoriesBtn type="Women's clothing" />
      <CategoriesBtn type="Jewelery" />
      <CategoriesBtn type="Electronics" />
    </nav>
  );
}

export default Categories;
