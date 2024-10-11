import {
    unity,
    mobile,
    backend,
    system,
    excelvba,
    asesprite,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    roderotas,
    saga,
    corteva,
    principenegro,
    calculator,
    memorygame,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unity2D",
      icon: unity,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Systems Automation",
      icon: system,
    },
    {
      title: "Excel VBA",
      icon: excelvba,
    },
    {
      title: "Asesprite",
      icon: asesprite,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Apprentice IT Assistant",
      company_name: "Rode Rotas",
      icon: roderotas,
      iconBg: "#383E56",
      date: "June 2018 - June 2019",
      points: [
        "Customer service",
        "Troubleshooting company software or related programs.",
        "Providing support to company employees and their technical issues.",
        "Troubleshooting problems related to the hardware of the company's machines.",
        "Checking and ordering missing or needed parts for each sectors.",
        "Sales support for employees.",
      ],
    },
    {
      title: "System Analyst",
      company_name: "Saga",
      icon: saga,
      iconBg: "#E6DEDD",
      date: "July 2020 - Feb 2024",
      points: [
        "Reclassification and handling of calls.",
        "BMW, Peugeot, Citroen, Nissan and Renault assembly systems.",
        "Experience with LG FPW, Syonet systems.- BMW, Peugeot, Citroen, Nissan and Renault assembly systems. - Experience with LG FPW, Syonet systems.",
        "Call management via OTRS.",
        "Management of e-mail servers/Lotus (IBM).",
        "Maintenance of Microsoft e-mail licenses.",
        "Management of printer servers.",
        "Extension configurations via softphone.",
        "DealerNet System Management.",
      ],
    },
    {
      title: "-",
      company_name: "-",
      icon: corteva,
      iconBg: "#383E56",
      date: "-",
      points: [
        "-",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Principe Negro",
      description:
        "Um projeto feito na faculdade na matéria Jogos Digitais, adentre o mundo envolvente de Príncipe Negro, um emocionante jogo de ação 2D que coloca você no papel de uma destemida heroina com um destino grandioso. Neste reino de desafios e aventuras, você enfrentará plataformas desafiadoras, inimigos formidáveis e, por fim, um épico confronto com o próprio rei para reivindicar o trono.",
      tags: [
        {
          name: "Unity2D",
          color: "blue-text-gradient",
        },
        {
          name: "Pothoshop CS6",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: principenegro,
      source_code_link: "https://github.com/Reysco/PrincipeNegro",
      source_code_link2: "https://itch.io/queue/c/3160593/wmdg?game_id=2232795",
    },
    {
      name: "Calculator",
      description:
        "A simple Beautiful Calculator .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/Reysco/React-Calculator",
      source_code_link2: "https://reysco-react-calculator.netlify.app/",
    },
    {
      name: "Memory Game",
      description:
        "A simple Memory Game themed around planets in the Solar System.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: memorygame,
      source_code_link: "https://github.com/Reysco/memoryGame",
      source_code_link2: "https://google.com/", //falta colocar no ar
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
