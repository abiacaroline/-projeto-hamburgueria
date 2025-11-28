const cartModal = document.getElementById("cart-modal")
const cartBtn = document.getElementById("cart-btn")

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

cartModal.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});