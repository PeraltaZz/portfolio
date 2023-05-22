const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("change", () => {
  const body = document.body;
    body.classList.toggle("dark-mode");
});
