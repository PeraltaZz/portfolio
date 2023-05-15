const sliderItems = document.querySelector(".slider-items");
const sliderImgs = document.querySelector(".slider-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideCard = document.querySelector(".slide-card");
let currentIndex = 0;

const slides = [
  {
    title: "To do List",
    description:
      "É uma aplicação simples que permite que o usuário faça uma lista de tarefas a serem realizadas, com a possibilidade de marcar as tarefas já concluídas, edita-las e remove-las.",
    technologies: [
      { name: "HTML", icon: "img/icons/html-icon.svg" },
      { name: "CSS", icon: "img/icons/css-icon.svg" },
      { name: "JavaScript", icon: "img/icons/javascript_icon.svg" },
    ],
    link: "https://peraltazz.github.io/todolist/",
    github: "https://github.com/PeraltaZz/todolist",
    imagem: "img/img-projects/todo.jpg",
  },
  {
    title: "Clima App",
    description:
      "Aplicativo de previsão do tempo que permite aos usuários obter informações meteorológicas precisas para uma localidade específica em uma interface amigável",
    technologies: [
      { name: "HTML", icon: "img/icons/html-icon.svg" },
      { name: "CSS", icon: "img/icons/css-icon.svg" },
      { name: "JavaScript", icon: "img/icons/javascript_icon.svg" },
    ],
    link: "https://peraltazz.github.io/clima-app/",
    github: "https://github.com/PeraltaZz/clima-app",
    imagem: "img/img-projects/clima.jpg",
  },
  {
    title: "Cep App",
    description:
      "O aplicativo permite que o usuário insira um CEP e encontre o endereço correspondente. Também permite que o usuário insira um endereço e encontre o CEP correspondente ",
    technologies: [
      { name: "HTML", icon: "img/icons/html-icon.svg" },
      { name: "CSS", icon: "img/icons/css-icon.svg" },
      { name: "JavaScript", icon: "img/icons/javascript_icon.svg" },
    ],
    link: "https://github.com/PeraltaZz/Descobrir-Cep",
    github: "https://peraltazz.github.io/Descobrir-Cep/",
    imagem: "img/img-projects/cep.jpg",
  },
];

function updateInfo(index) {
  const info = document.querySelector(".infos-projects");
  const title = slides[index].title;
  const description = slides[index].description;
  const technologies = slides[index].technologies;
  const link = slides[index].link;
  const githubHref = slides[index].github;

  const techList = technologies
    .map((tech) => `<li><img src="${tech.icon}" alt=""></li>`)
    .join("");

  const html = `
    <h2>${title}</h2>
    <p>${description}</p>
    <ul>${techList}</ul>
    <div class="more-details">
    <a class="acess-details" href="${githubHref}" target="_blank"><img src="img/icons/github-icon.svg" alt="" ></a>
    <a class="acess-details" href="${link}" target="_blank"><img src="img/icons/acess-icon.svg" alt="" ></a>
    </div>
  `;

  info.classList.remove("show");
  setTimeout(() => {
    info.innerHTML = html;
    info.classList.add("show");
  }, 600);
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

  updateSlider();
});

function updateSlider() {
  updateInfo(currentIndex);
  sliderImgs.classList.remove("show");
  setTimeout(() => {
    sliderImgs.classList.add("show");
    sliderImgs.src = slides[currentIndex].imagem;
  }, 600);
}
