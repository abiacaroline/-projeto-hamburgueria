const cartModal = document.getElementById("cart-modal")
const cartBtn = document.getElementById("cart-btn")
const closeModalBtn = document.getElementById("close-modal-btn")

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