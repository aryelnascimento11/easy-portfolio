const texts = {
  pt: {
    inicio: "Inicio",
    sobre: "Sobre",
    projetos: "Projetos",
    meusProjetos: "Meus Projetos",
    ola: "Olá, eu sou o",
    cargo: "Desenvolvedor Web",
    descricao:
      "Focado em criar experiências digitais limpas, responsivas e performáticas, utilizando Next.js, HTML, CSS e JavaScript.",
    contrate: "Contrate-me",
  },
  en: {
    inicio: "Home",
    sobre: "About",
    projetos: "Projects",
    meusProjetos: "My Projects",
    ola: "Hello, I am",
    cargo: "Web Developer",
    descricao:
      "Focused on creating clean, responsive and high-performance digital experiences using Next.js, HTML, CSS and JavaScript.",
    contrate: "Hire me",
  },
};

const select = document.getElementById("lang-switch");

select.addEventListener("change", () => {
  const lang = select.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = texts[lang][el.dataset.i18n];
  });
});
