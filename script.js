const cartModal = document.getElementById("cart-modal")
const cartBtn = document.getElementById("cart-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const menu = document.getElementById("menu");

let cart = []

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

cartModal.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});

closeModalBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

menu.addEventListener("click", (event) => {
  let parentButton = event.target.closest(".add-to-cart-btn");

  if (parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parseFloat(parentButton.getAttribute("data-price"));

    addToCart(name, price);
  }
});
