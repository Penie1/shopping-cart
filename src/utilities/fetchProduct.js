function getProducts(category) {
  fetch(category).then((response) => {
    if (response.status >= 400) {
      throw new Error("server error");
    }
    return response.json();
  });
}
export default getProducts;
