const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("click", () => {
  const body = document.body;
    body.classList.toggle("dark-mode");
    alert("js work")
});
