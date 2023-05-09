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
    link: { label: "Acessar Projeto", href: "#" },
    github: "#",
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
    link: { label: "Acessar Projeto", href: "#" },
    github: "#",
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
    link: { label: "Acessar Projeto", href: "#" },
    github: "#",
    imagem: "img/img-projects/cep.jpg",
  },
];

function updateInfo(index) {
  const info = document.querySelector(".infos-projects");
  const title = slides[index].title;
  const description = slides[index].description;
  const technologies = slides[index].technologies;
  const linkLabel = slides[index].link.label;
  const linkHref = slides[index].link.href;
  const githubHref = slides[index].github;

  const techList = technologies
    .map((tech) => `<li><img src="${tech.icon}" alt=""></li>`)
    .join("");

  const html = `
    <h2>${title}</h2>
    <p>${description}</p>
    <ul>${techList}</ul>
    <div class="more-details">
    <a class="acess-details" href="${githubHref}"><img src="img/icons/github-icon.svg" alt=""></a>
    <a class="acess-details" href="${githubHref}"><img src="img/icons/acess-icon.svg" alt=""></a>
    </div>
  `;

  // adiciona a classe "show" para acionar a transição de opacidade
  info.classList.remove("show");
  setTimeout(() => {
    info.innerHTML = html;
    info.classList.add("show");
  }, 600); // espera 300 milissegundos antes de atualizar o HTML e adicionar a classe "show"
}
// adiciona evento de clique para botão "Anterior"
prevBtn.addEventListener("click", () => {
  // atualiza o índice atual
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  // atualiza o slider com base no novo índice
  updateSlider();
});

// adiciona evento de clique para botão "Próximo"
nextBtn.addEventListener("click", () => {
  // atualiza o índice atual
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  // atualiza o slider com base no novo índice
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
