import jescobarImg from '../assets/img/Jescobardesign.jpg';
import fmmwImg from '../assets/img/FMMW.jpg';
import cPorfolio1 from '../assets/img/c-acosta1.jpg';
import cPorfolio2 from '../assets/img/c-acosta2.jpg';
import talentcoll from '../assets/img/talentcol.jpg';

export const ProjectList = [
  {
    name: "talentcol",
    description: "Website for the human resources company talentcol.",
    techStack: ["React Js |", " React Bootstrap |", " JavaScript |", " CSS |", " HTML"],
    img: talentcoll,
    label: "freelance work",
    link: "https://talentcol.com/",
  },
  {
    name: "jeronimo escobar design",
    description: "Website for the colombian designer and architect Jeronimo Escobar.",
    techStack: ["React Js |", " JavaScript |", " CSS |", " HTML"],
    img: jescobarImg,
    label: "freelance work",
    link: "https://jeronimoescobar.com/",
  },
  {
    name: "personal porfolio v.2.",
    description: "The newest version of my personal porfolio.",
    techStack: ["React Js |", " JavaScript |", " CSS |", " HTML"],
    img: cPorfolio2,
    git: "https://github.com/catalina-acosta/c-portfolio-3"
  },

  {
    name: "personal porfolio v.1.",
    description: "The first version of my personal porfolio.",
    techStack: ["CSS |", " HTML"],
    img: cPorfolio1,
    git: "https://github.com/catalina-acosta/c_acosta_portfolio"
  },
    {
    name: "find my midwife",
    description: "Web app where mom's and midwifes find each other.",
    techStack: ["Ruby on Rails |", " Ruby |", " PostgreSQL |", " CSS |", " HTML"],
    img: fmmwImg,
    git: "https://github.com/catalina-acosta/find_my_midwife"
  },
];
