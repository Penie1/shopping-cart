import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Products from "../hooks/Products";
function Shop() {
  return (
    <>
      <NavBar />
      <Categories />
      <Products></Products>
    </>
  );
}

export default Shop;
