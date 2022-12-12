const modal = document.querySelector(".modal-container");
const openModal = document.getElementById("openBtn");
const closeModal = document.querySelector(".closeBtn");

// when the user clicks on the button, modal-container display will become block
openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// reverse of last function
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
