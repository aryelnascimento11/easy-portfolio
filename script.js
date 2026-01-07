
const texts = {
  EN: {
    heroTitle: "Olá, eu sou o",
    heroName: "Aryel Nascimento",
    heroSubtitle: "Web Developer",
    heroParagraph: "Focused on creating clean, responsive, and performant digital experiences using Next.js, HTML, CSS, and JavaScript.",
    hireButton: "Hire me",
    projectsBloco: "Notes App",
    projectsBlocoDesc: "Project created during my first studies with Next.js, focusing on reusable components and Tailwind CSS styling."
  },
  PT: {
    heroTitle: "Olá, eu sou o",
    heroName: "Aryel Nascimento",
    heroSubtitle: "Desenvolvedor Web",
    heroParagraph: "Focado em criar experiências digitais limpas, responsivas e performáticas, utilizando Next.js, HTML, CSS e JavaScript.",
    hireButton: "Contrate-me",
    projectsBloco: "Bloco de Notas",
    projectsBlocoDesc: "Projeto criado durante meus primeiros estudos com Next.js, focado em construção de componentes reutilizáveis e estilização com Tailwind CSS."
  }
};

function changeLang(value) {
  // HERO
  document.querySelector(".text h3").innerText = texts[value].heroTitle;
  document.querySelector(".nome").innerText = texts[value].heroName;
  document.querySelector(".subtitulo").innerText = texts[value].heroSubtitle;
  document.querySelector(".paragrafo").innerText = texts[value].heroParagraph;
  document.querySelector(".contrata-me").innerText = texts[value].hireButton;

  // PROJECTS
  document.querySelector(".bloco").innerText = texts[value].projectsBloco;
  document.querySelector(".paragrafo1").innerText = texts[value].projectsBlocoDesc;
}
