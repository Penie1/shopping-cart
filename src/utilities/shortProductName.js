function shortProductName(name) {
  return name.split(" ").splice(0, 4).join(" ");
}

export default shortProductName;
