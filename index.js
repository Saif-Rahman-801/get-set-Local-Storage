const handleCart = () => {
  const product = document.getElementById("productField").value;
  const quantity = document.getElementById("quantityField").value;
  //   console.log(productField, quantityField);
  document.getElementById("productField").value = "";
  document.getElementById("quantityField").value = "";
  showProducts(product, quantity);
  addToLocalStorage(product, quantity);
};

const showProducts = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

const getLocalStorageData = () => {
  let cart = {};
  const localData = localStorage.getItem("cart");
  if (localData) {
    // console.log(JSON.parse(localData));
    // cart = JSON.parse(localData); -> reassinging the value of cart with existing data.
    return JSON.parse(localData);
  }
  return cart;
};

const addToLocalStorage = (product, quantity) => {
  const cart = getLocalStorageData(); //{key: 'value', key: 'value',} or {}
  cart[product] = quantity;
  const cartStringiFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringiFied);
};

const showLocalStoragedata = () => {
  const savedCart = getLocalStorageData();
  console.log(savedCart);
  for (product in savedCart) {
    // console.log(product, savedCart[product]);
    showProducts(product, savedCart[product]);
  }
};
showLocalStoragedata();
