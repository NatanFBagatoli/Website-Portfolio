import { motion } from "framer-motion";
import { useState } from "react";
import StarryBackground from "../components/StarryBackground";
import { ChevronLeft, ChevronRight } from "lucide-react";

const texts = {
  pt: {
    title: "Desenvolvedor Web",
    about: [
      "🥇 Olá! Meu nome é Natan Bagatoli. Desde pequeno, sempre fui curioso sobre como as coisas funcionam, especialmente quando se trata de tecnologia.",
      "💡 Essa curiosidade me levou a cursar Análise e Desenvolvimento de Sistemas no SENAI/SC, onde aprendi a transformar ideias em soluções funcionais.",
      "🎉 Hoje, aos 21 anos, atuo como Desenvolvedor Web Freelancer, criando sites e experiências digitais que conectam pessoas e resolvem problemas reais. No caminho, descobri uma paixão por Machine Learning, área que me desafia a pensar diferente e aprender constantemente.",
      "🎨 Quando não estou programando, gosto de ler um bom livro, o que me ajuda a ver o mundo sob novas perspectivas. Para mim, cada projeto é uma oportunidade de crescer, e estou sempre pronto para o próximo desafio."
    ],
    skills: "Habilidades",
    softSkills: "Soft Skills",
    professionalExp: "Experiência Profissional",
    academicExp: "Experiência Acadêmica",
    softSkillsList: [
      { name: "🤝 Trabalho em Equipe", description: "Capacidade de colaborar com equipes multidisciplinares para alcançar objetivos comuns." },
      { name: "🗣️ Comunicação", description: "Facilidade em transmitir ideias de forma clara e objetiva, tanto verbalmente quanto por escrito." },
      { name: "🧠 Curiosidade Intelectual", description: "Interesse constante em aprender e explorar novos conhecimentos, buscando ampliar a compreensão sobre diversos temas." },
      { name: "⚡ Aprendiz Rápido", description: "Habilidade de absorver rapidamente novos conceitos, tecnologias ou processos e aplicá-los de forma eficaz." },
      { name: "⏳ Gestão do Tempo", description: "Organização eficiente para lidar com prazos e priorizar tarefas." },
      { name: "💡 Resolução de Problemas", description: "Capacidade de analisar desafios e propor soluções eficazes." }
    ],
    professionalExpList: [
      {
        company: "💻 Desenvolvedor Web Freelancer",
        period: "Out 2024 - Atual",
        description: "Desenvolvimento de sites institucionais, landing pages e sistemas sob demanda para clientes de diversos setores. Responsável por todo o processo, desde o levantamento de requisitos até a entrega final, utilizando tecnologias como React, Next.js, TailwindCSS e integração com APIs.",
      },
    ],
    academicExpList: [
      {
        institution: "🔵SENAI - Análise e Desenvolvimento de Sistemas",
        period: "Mar 2023 - Dez 2024",
        description: "Formação em Análise e Desenvolvimento de Sistemas, com estudos em Engenharia de Software, Bancos de Dados, Programação Orientada a Objetos (POO), Algoritmos, Estruturas de Dados e Java.",
      },
      {
        institution: "🟡SENAC - Curso Entra21 JavaScript",
        period: "Jan 2025 - Jun 2025",
        description: "Programa de formação focado em JavaScript, abordando bibliotecas, frameworks, lógica de programação, MySQL, HTML, CSS, JavaScript, plugins, empreendedorismo e desenvolvimento profissional.",
      },
      {
        institution: "🟣UDEMY - Cursos de Desenvolvimento Web",
        period: "Jun 2024 - Atual",
        description: "Plataforma de cursos online com foco em aprendizado prático, onde estudo Desenvolvimento Web, incluindo HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, Git e GitHub, APIs RESTful, Bancos de Dados (SQL e NoSQL).",
      },
    ],
    language: "Português",
    switch: "English"
  },
  en: {
    title: "Web Developer",
    about: [
      "🥇 Hi! My name is Natan Bagatoli. Since I was young, I’ve always been curious about how things work, especially when it comes to technology.",
      "💡 That curiosity led me to pursue a degree in Analysis and Systems Development at SENAI/SC, where I learned to turn ideas into functional solutions.",
      "🎉 Today, at 21, I work as a Freelance Web Developer, building websites and creating digital experiences that connect people and solve real problems. Along the way, I discovered a passion for Machine Learning, a field that challenges me to think differently and constantly learn.",
      "🎨 When I’m not coding, I enjoy reading a good book, which helps me see the world from new perspectives. For me, every project is a chance to grow, and I’m always ready for the next challenge."
    ],
    skills: "Skills",
    softSkills: "Soft Skills",
    professionalExp: "Professional Experience",
    academicExp: "Academic Experience",
    softSkillsList: [
      { name: "🤝 Teamwork", description: "Ability to collaborate with multidisciplinary teams to achieve common goals." },
      { name: "🗣️ Communication", description: "Ease in conveying ideas clearly and objectively, both verbally and in writing." },
      { name: "🧠 Intellectual Curiosity", description: "Constant interest in learning and exploring new knowledge, seeking to broaden understanding on various topics." },
      { name: "⚡ Quick Learner", description: "Ability to quickly grasp new concepts, technologies, or processes and apply them effectively." },
      { name: "⏳ Time Management", description: "Efficient organization to handle deadlines and prioritize tasks." },
      { name: "💡 Problem Solving", description: "Skill in analyzing challenges and proposing effective solutions." }
    ],
    professionalExpList: [
      {
        company: "💻 Freelance Web Developer",
        period: "Oct 2024 - Present",
        description: "Development of institutional websites, landing pages, and custom systems for clients from various sectors. Responsible for the entire process, from requirements gathering to final delivery, using technologies such as React, Next.js, TailwindCSS, and API integration.",
      },
    ],
    academicExpList: [
      {
        institution: "🔵SENAI - Systems Analysis and Development",
        period: "Mar 2023 - Dec 2024",
        description: "Graduated in Systems Analysis and Development, where I studied Software Engineering, Databases, Object-Oriented Programming (OOP), Algorithms, Data Structures, and Java.",
      },
      {
        institution: "🟡SENAC - Entra21 JavaScript Course",
        period: "Jan 2025 - Jun 2025",
        description: "Entra21 is a technology training program focused on JavaScript, where I study libraries, frameworks, programming logic, MySQL, HTML, CSS, JavaScript, plugins, entrepreneurship, and professional development.",
      },
      {
        institution: "🟣UDEMY - Web Development Courses",
        period: "Jun 2024 - Present",
        description: "Udemy is an online course platform focused on practical learning, where I study Web Development, including HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, Git and GitHub, RESTful APIs, Databases (SQL and NoSQL).",
      },
    ],
    language: "English",
    switch: "Português"
  }
};

type AboutProps = {
  lang: "pt" | "en";
};

const About = ({ lang }: AboutProps) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const skills = [
    { name: "HTML5", icon: "html5", category: "Tech Stack", level: "Advanced" },
    { name: "React", icon: "react", category: "Tech Stack", level: "Advanced" },
    { name: "Java", icon: "java", category: "Tech Stack", level: "Intermediate" },
    { 
      name: "ShadcnUI", 
      icon: "custom",
      svgIcon: (
      <svg 
      width="24" 
      height="24" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:text-white transition-colors duration-300">
      <g clipPath="url(#clip0_790_3387)">
      <path d="M81.25 49.9996L50 81.2496" stroke="currentColor" strokeWidth="6.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M75 15.6246L15.625 74.9996" stroke="currentColor" strokeWidth="6.25" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_790_3387">
      <rect width="100" height="100" fill="white" transform="translate(0 -0.000366211)"/>
      </clipPath>
      </defs>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Advanced" 
    },
    { name: "CSS3", icon: "css3", category: "Tech Stack", level: "Advanced" },
    { name: "TailwindCSS", icon: "tailwindcss", category: "Tech Stack", level: "Advanced" },
    { 
      name: "Python", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="python">
      <g id="python_2">
      <path id="Vector" d="M49.6397 0.000488281C24.2535 0.000488281 25.8385 11.0095 25.8385 11.0095L25.8667 22.4151H50.0924V25.8394H16.2447C16.2447 25.8394 0 23.9971 0 49.6116C0 75.2269 14.1788 74.3185 14.1788 74.3185H22.6406V62.432C22.6406 62.432 22.1844 48.2532 36.593 48.2532H60.6205C60.6205 48.2532 74.1199 48.4713 74.1199 35.2065V13.2739C74.1199 13.2739 76.1702 0.000488281 49.6397 0.000488281ZM36.2817 7.67056C36.8542 7.67004 37.4211 7.78242 37.9501 8.00125C38.4791 8.22009 38.9598 8.54109 39.3646 8.94589C39.7693 9.35068 40.0903 9.83133 40.3092 10.3603C40.528 10.8893 40.6404 11.4563 40.6399 12.0287C40.6404 12.6012 40.528 13.1681 40.3092 13.6971C40.0903 14.2261 39.7693 14.7068 39.3646 15.1116C38.9598 15.5164 38.4791 15.8374 37.9501 16.0562C37.4211 16.275 36.8542 16.3874 36.2817 16.3869C35.7092 16.3874 35.1423 16.275 34.6133 16.0562C34.0843 15.8374 33.6037 15.5164 33.1989 15.1116C32.7941 14.7068 32.4731 14.2261 32.2542 13.6971C32.0354 13.1681 31.923 12.6012 31.9235 12.0287C31.923 11.4563 32.0354 10.8893 32.2542 10.3603C32.4731 9.83133 32.7941 9.35068 33.1989 8.94589C33.6037 8.54109 34.0843 8.22009 34.6133 8.00125C35.1423 7.78242 35.7092 7.67004 36.2817 7.67056Z" fill="url(#paint0_linear_790_6849)"/>
      <path id="Vector_2" d="M50.3607 99.4806C75.747 99.4806 74.1619 88.4715 74.1619 88.4715L74.1337 77.0663H49.9076V73.642H83.7553C83.7553 73.642 100 75.4843 100 49.869C100 24.254 85.8213 25.1624 85.8213 25.1624H77.3594V37.0486C77.3594 37.0486 77.8156 51.2273 63.407 51.2273H39.3795C39.3795 51.2273 25.8801 51.0092 25.8801 64.2745V86.2075C25.8801 86.2075 23.8302 99.4806 50.3603 99.4806H50.3607ZM63.7187 91.8112C63.1462 91.8118 62.5793 91.6994 62.0503 91.4806C61.5213 91.2617 61.0407 90.9407 60.6359 90.5359C60.2311 90.1311 59.9101 89.6505 59.6912 89.1215C59.4724 88.5925 59.36 88.0255 59.3605 87.4531C59.36 86.8806 59.4723 86.3136 59.6911 85.7845C59.9099 85.2555 60.2309 84.7748 60.6357 84.37C61.0405 83.9651 61.5212 83.6441 62.0502 83.4252C62.5792 83.2064 63.1462 83.094 63.7187 83.0945C64.2912 83.094 64.8581 83.2064 65.3871 83.4252C65.9161 83.644 66.3968 83.965 66.8015 84.3698C67.2063 84.7746 67.5273 85.2553 67.7462 85.7843C67.965 86.3133 68.0774 86.8802 68.0769 87.4527C68.0774 88.0251 67.965 88.5921 67.7462 89.1211C67.5273 89.6501 67.2063 90.1307 66.8015 90.5355C66.3968 90.9403 65.9161 91.2613 65.3871 91.4802C64.8581 91.699 64.2912 91.8114 63.7187 91.8109V91.8112Z" fill="url(#paint1_linear_790_6849)"/>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear_790_6849" x1="9.60996" y1="8.94811" x2="59.1669" y2="58.0107" gradientUnits="userSpaceOnUse">
      <stop stopColor="#387EB8"/>
      <stop offset="1" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="paint1_linear_790_6849" x1="40.0281" y1="40.4532" x2="93.2466" y2="90.7623" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFE052"/>
      <stop offset="1" stopColor="#FFC331"/>
      </linearGradient>
      </defs>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Basic" 
    },
    { 
      name: "Next.js", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="nextjs2">
      <g id="nextjs2_2">
      <path id="Vector" d="M50 99.9996C77.6142 99.9996 100 77.6139 100 49.9996C100 22.3854 77.6142 -0.000366211 50 -0.000366211C22.3858 -0.000366211 0 22.3854 0 49.9996C0 77.6139 22.3858 99.9996 50 99.9996Z" fill="white"/>
      <path id="Vector_2" d="M83.06 87.511L38.4122 29.9996H30V69.983H36.7298V38.546L77.7773 91.5803C79.6294 90.3405 81.394 88.9804 83.06 87.511Z" fill="url(#paint0_linear_790_6564)"/>
      <path id="Vector_3" d="M70.5558 29.9996H63.8892V69.9996H70.5558V29.9996Z" fill="url(#paint1_linear_790_6564)"/>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear_790_6564" x1="60.5555" y1="64.7219" x2="80.2778" y2="89.1663" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_790_6564" x1="67.2225" y1="29.9996" x2="67.1109" y2="59.3748" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      </defs>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Advanced" 
    },
    { name: "JavaScript", icon: "javascript", category: "Tech Stack", level: "Advanced" },
    { name: "TypeScript", icon: "typescript", category: "Tech Stack", level: "Advanced" },
    { 
      name: "Lua", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="lua">
      <g id="lua_2">
      <path id="Vector" d="M93.1626 27.611C98.5305 38.1464 99.8854 50.2739 96.9748 61.7341C94.0642 73.1943 87.0867 83.2056 77.3422 89.9028C67.5976 96.5999 55.7507 99.5262 44.0087 98.1364C32.2666 96.7466 21.4302 91.1355 13.5184 82.3485C5.60657 73.5616 1.15895 62.198 1.00418 50.375C0.849406 38.5519 4.99803 27.0758 12.6771 18.0847C20.3562 9.09367 31.042 3.20084 42.7437 1.50414C54.4453 -0.192557 66.3648 2.42261 76.2813 8.86239" stroke="#808080" strokeWidth="1.1309" strokeDasharray="4.25 4.25"/>
      <path id="Vector_2" d="M49.7372 87.4333C70.5562 87.4333 87.4333 70.5562 87.4333 49.7372C87.4333 28.9182 70.5562 12.041 49.7372 12.041C28.9182 12.041 12.041 28.9182 12.041 49.7372C12.041 70.5562 28.9182 87.4333 49.7372 87.4333Z" fill="#000080"/>
      <path id="Vector_3" d="M65.3515 45.1638C71.4493 45.1638 76.3925 40.2205 76.3925 34.1228C76.3925 28.025 71.4493 23.0818 65.3515 23.0818C59.2538 23.0818 54.3105 28.025 54.3105 34.1228C54.3105 40.2205 59.2538 45.1638 65.3515 45.1638Z" fill="white"/>
      <path id="Vector_4" d="M87.4333 23.0821C93.5311 23.0821 98.4744 18.1389 98.4744 12.041C98.4744 5.9432 93.5311 0.999939 87.4333 0.999939C81.3355 0.999939 76.3922 5.9432 76.3922 12.041C76.3922 18.1389 81.3355 23.0821 87.4333 23.0821Z" fill="#000080"/>
      <path id="Vector_5" d="M39.5255 68.5848V65.8028H27.3118V43.8521H24.1566V68.5848H39.5255Z" fill="white"/>
      <path id="Vector_6" d="M56.4816 68.5847V50.807H53.6657V60.6119C53.6657 64.2421 51.7658 66.617 48.8142 66.617C46.575 66.617 45.15 65.2599 45.15 63.1225V50.807H42.3341V64.2421C42.3341 67.1937 44.5394 69.0936 47.9999 69.0936C50.6123 69.0936 52.2747 68.1776 53.9371 65.8366V68.5847H56.4816Z" fill="white"/>
      <path id="Vector_7" d="M77.1648 68.5169V66.3795C76.8595 66.4474 76.7238 66.4474 76.5541 66.4474C75.5703 66.4474 75.0274 65.9385 75.0274 65.0564V55.1497C75.0274 51.9945 72.7204 50.2982 68.3438 50.2982C64.0351 50.2982 61.3888 51.9606 61.2192 56.0657H64.069C64.3065 53.8944 65.5957 52.9105 68.242 52.9105C70.7866 52.9105 72.2115 53.8605 72.2115 55.5568V56.3032C72.2115 57.4907 71.499 57.9996 69.2598 58.271C65.2565 58.7799 64.6458 58.9156 63.5601 59.3566C61.4906 60.2048 60.4388 61.7994 60.4388 63.9707C60.4388 67.1938 62.678 69.0937 66.2743 69.0937C68.5474 69.0937 70.7526 68.1437 72.3133 66.4813C72.6186 67.8384 73.84 68.8223 75.231 68.8223C75.8077 68.8223 76.2488 68.7544 77.1648 68.5169ZM72.2115 62.444C72.2115 64.9885 69.633 66.617 66.885 66.617C64.6797 66.617 63.3905 65.8367 63.3905 63.9029C63.3905 62.0369 64.6458 61.2226 67.6653 60.7816C70.6508 60.3745 71.2615 60.2387 72.2115 59.7977V62.444Z" fill="white"/>
      </g>
      </g>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Basic" 
    },
    { 
      name: "Vite", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vitejs">
      <g id="vitejs_2">
      <path id="Vector" d="M98.848 14.8014L52.7313 98.6951C51.779 100.427 49.3328 100.437 48.3664 98.7139L1.33543 14.8092C0.28237 12.9311 1.86119 10.6559 3.9535 11.0366L50.1197 19.4312C50.4142 19.4847 50.7158 19.4842 51.0102 19.4296L96.2107 11.0484C98.2961 10.6617 99.8822 12.9194 98.848 14.8014Z" fill="url(#paint0_linear_790_3556)"/>
      <path id="Vector_2" d="M72.1109 0.025109L37.9835 6.82829C37.7108 6.88263 37.4636 7.02763 37.2808 7.24048C37.0979 7.45333 36.9898 7.72197 36.9734 8.00415L34.8742 44.0745C34.8626 44.2723 34.8966 44.4702 34.9733 44.6523C35.05 44.8345 35.1675 44.9959 35.3162 45.1238C35.465 45.2518 35.6411 45.3426 35.8304 45.3892C36.0197 45.4359 36.2171 45.4369 36.407 45.3924L45.9086 43.1616C46.7976 42.9529 47.601 43.7495 47.4181 44.6589L44.5952 58.7221C44.4054 59.6686 45.2786 60.4777 46.1871 60.1968L52.056 58.3831C52.9656 58.1022 53.84 58.9137 53.6474 59.8609L49.1614 81.9508C48.8807 83.3326 50.6873 84.086 51.4405 82.9015L51.944 82.1103L79.753 25.65C80.219 24.7047 79.4156 23.6267 78.3955 23.8273L68.6146 25.7475C67.6958 25.9277 66.9138 25.057 67.1731 24.1425L73.5566 1.62974C73.8162 0.712918 73.0312 -0.158255 72.1113 0.025109H72.1109Z" fill="url(#paint1_linear_790_3556)"/>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear_790_3556" x1="0.187129" y1="17.8052" x2="51.0375" y2="85.688" gradientUnits="userSpaceOnUse">
      <stop stopColor="#41D1FF"/>
      <stop offset="1" stopColor="#BD34FE"/>
      </linearGradient>
      <linearGradient id="paint1_linear_790_3556" x1="54.3984" y1="1.87231" x2="64.9803" y2="73.2245" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFEA83"/>
      <stop offset="0.083" stopColor="#FFDD35"/>
      <stop offset="1" stopColor="#FFA800"/>
      </linearGradient>
      </defs>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Advanced" 
    },
    { name: "FireBase", icon: "firebase", category: "Tech Stack", level: "Basic" },
    { name: "Postman", icon: "postman", category: "Tech Stack", level: "Advanced" },
    { name: "MongoDB", icon: "mongodb", category: "Tech Stack", level: "Advanced" },
    { 
      name: "Git", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="git">
      <g id="git_2">
      <path id="Vector" d="M98.1141 45.5449L54.4531 1.88633C51.9402 -0.628125 47.8621 -0.628125 45.3461 1.88633L36.2797 10.9527L47.7809 22.4539C50.4535 21.5508 53.5184 22.1566 55.6488 24.2871C57.7894 26.4312 58.391 29.5223 57.466 32.2035L68.55 43.2879C71.2316 42.3641 74.3258 42.9617 76.4676 45.107C79.4609 48.0992 79.4609 52.9488 76.4676 55.943C73.4734 58.9375 68.6238 58.9375 65.6281 55.943C63.3766 53.6891 62.8203 50.3824 63.9602 47.6086L53.6234 37.2719L53.6223 64.4738C54.3716 64.8443 55.056 65.3337 55.6488 65.923C58.6422 68.9152 58.6422 73.7652 55.6488 76.7617C52.6547 79.7547 47.8027 79.7547 44.8129 76.7617C41.8195 73.7652 41.8195 68.9156 44.8129 65.9234C45.5302 65.2057 46.3827 64.6374 47.3211 64.2512V36.7957C46.3814 36.4121 45.5284 35.8434 44.8129 35.1234C42.5449 32.8586 41.9996 29.5309 43.1617 26.7461L31.8242 15.4074L1.88672 45.343C-0.628906 47.8598 -0.628906 51.9383 1.88672 54.4531L45.5484 98.1125C48.0621 100.627 52.1395 100.627 54.6562 98.1125L98.1137 54.6559C100.629 52.1402 100.629 48.0594 98.1141 45.5449Z" fill="#DE4C36"/>
      </g>
      </g>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Advanced" 
    },
    { 
      name: "GitHub", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="github">
      <g id="github_2">
      <path id="Vector" d="M50 1.00049C22.3892 1.00049 -0.000244141 23.386 -0.000244141 51.0007C-0.000244141 73.0924 14.3263 91.8345 34.1931 98.4461C36.6918 98.9088 37.6094 97.3614 37.6094 96.0406C37.6094 94.8485 37.5627 90.9095 37.5416 86.7316C23.6311 89.7562 20.6959 80.8322 20.6959 80.8322C18.4215 75.0528 15.1443 73.5163 15.1443 73.5163C10.608 70.4129 15.4863 70.4765 15.4863 70.4765C20.5073 70.8294 23.1511 75.6292 23.1511 75.6292C27.6105 83.2733 34.8479 81.0631 37.7012 79.7859C38.1498 76.5539 39.4458 74.3485 40.8756 73.0999C29.7701 71.8352 18.0952 67.5479 18.0952 48.3894C18.0952 42.9308 20.0485 38.4701 23.2472 34.9687C22.728 33.7091 21.0167 28.6238 23.7315 21.7366C23.7315 21.7366 27.9301 20.3927 37.4851 26.8619C41.4732 25.7537 45.7507 25.1985 50 25.1796C54.2492 25.1985 58.5298 25.7537 62.5258 26.8619C72.0694 20.3927 76.2622 21.7366 76.2622 21.7366C78.9836 28.6238 77.2715 33.7091 76.7523 34.9687C79.9581 38.4701 81.898 42.9304 81.898 48.3894C81.898 67.5934 70.2012 71.8223 59.0675 73.0599C60.8607 74.6116 62.4587 77.6546 62.4587 82.3192C62.4587 89.0091 62.4007 94.3936 62.4007 96.0406C62.4007 97.3712 63.3007 98.9304 65.8355 98.4394C85.6912 91.8204 99.9998 73.085 99.9998 51.0007C99.9998 23.386 77.6135 1.00049 50 1.00049Z" fill="white"/>
      <path id="Vector_2" d="M18.7264 72.227C18.6166 72.4752 18.2252 72.5498 17.8696 72.3796C17.5068 72.2164 17.3029 71.8776 17.4206 71.6282C17.5284 71.3725 17.9198 71.3012 18.2817 71.4729C18.6452 71.6357 18.8523 71.9776 18.7264 72.227ZM21.1859 74.4215C20.9475 74.6426 20.4812 74.5399 20.1648 74.1905C19.8377 73.8419 19.7766 73.376 20.0185 73.1513C20.2644 72.9305 20.7165 73.0337 21.0444 73.3827C21.3714 73.7352 21.4349 74.1983 21.1855 74.4218L21.1859 74.4215ZM22.8733 77.2292C22.5667 77.4421 22.0655 77.2425 21.7561 76.7978C21.4498 76.3535 21.4498 75.8202 21.7628 75.6065C22.0733 75.3928 22.5667 75.5849 22.8804 76.0261C23.1862 76.4782 23.1862 77.0116 22.8729 77.2296L22.8733 77.2292ZM25.7266 80.4812C25.4524 80.7832 24.8689 80.7024 24.4415 80.2899C24.0047 79.8868 23.8827 79.3146 24.1576 79.0123C24.4348 78.7095 25.0219 78.7946 25.4524 79.2036C25.8865 79.606 26.0191 80.1824 25.7269 80.4812H25.7266ZM29.4143 81.5792C29.2939 81.9706 28.7316 82.1486 28.1653 81.9824C27.5998 81.811 27.2296 81.3522 27.3438 80.9565C27.4614 80.5624 28.0261 80.3769 28.5967 80.555C29.1613 80.7255 29.5323 81.1808 29.4147 81.5792H29.4143ZM33.6118 82.0447C33.6259 82.4573 33.1455 82.7992 32.551 82.8067C31.953 82.8196 31.4695 82.4859 31.4632 82.0804C31.4632 81.6639 31.9326 81.3251 32.5302 81.3153C33.1247 81.3036 33.6118 81.6349 33.6118 82.0447ZM37.7348 81.8867C37.8061 82.289 37.3928 82.7023 36.8027 82.8121C36.2223 82.918 35.685 82.6698 35.6109 82.271C35.5388 81.8584 35.9599 81.4455 36.5391 81.3385C37.1305 81.2357 37.6595 81.4777 37.7348 81.8867Z" fill="white"/>
      </g>
      </g>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Advanced" 
    },
    { name: "MySql", icon: "mysql", category: "Tech Stack", level: "Intermediário" },
    { 
      name: "Angular", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="angular">
      <g id="angular_2">
      <path id="Vector" d="M3.00024 16.5746L49.5193 0L97.2912 16.2799L89.5561 77.8268L49.5193 100L10.1089 78.1215L3.00024 16.5746Z" fill="#E23237"/>
      <path id="Vector_2" d="M97.2911 16.2799L49.5193 0V100L89.556 77.8638L97.2911 16.2799Z" fill="#B52E31"/>
      <path id="Vector_3" d="M49.5928 11.676L20.6061 76.1695L31.4346 75.9854L37.2542 61.4364H63.2577L69.6299 76.1695L79.9795 76.3536L49.5928 11.676ZM49.6668 32.3391L59.464 52.8176H41.0476L49.6668 32.3391Z" fill="white"/>
      </g>
      </g>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Basic" 
    },
    { 
      name: "Three.js", 
      icon: "custom",
      svgIcon: (
      <svg width="24" height="24" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="threejs">
      <g id="threejs_2">
      <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M26.7016 102L2 2.00049L101.023 30.5097L26.7016 102Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M51.4929 16.2579L63.8349 66.2728L14.3511 52.0136L51.4929 16.2579Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path id="Vector_3" fillRule="evenodd" clipRule="evenodd" d="M39.2146 58.7971L33.0845 33.9514L57.6689 41.0087L39.2146 58.7971Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path id="Vector_4" fillRule="evenodd" clipRule="evenodd" d="M26.9519 9.13611L33.082 33.9818L8.49756 26.9245L26.9519 9.13611Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path id="Vector_5" fillRule="evenodd" clipRule="evenodd" d="M76.1186 23.2992L82.2487 48.1449L57.6643 41.0876L76.1186 23.2992Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path id="Vector_6" fillRule="evenodd" clipRule="evenodd" d="M39.2173 58.8142L45.3474 83.6599L20.7629 76.6026L39.2173 58.8142Z" stroke="white" strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
      </g>
      </g>
      </svg>
      ),
      category: "Tech Stack", 
      level: "Basic" 
    },
    { name: "Docker", icon: "docker", category: "Tech Stack", level: "Basic" },
    
  ];

  const skillsPerPage = 12; 
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * skillsPerPage;
  const currentSkills = skills.slice(startIndex, startIndex + skillsPerPage);

  const t = texts[lang];

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen pt-24 pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Espaço reservado para alinhamento, se necessário */}
          <div className="flex justify-end mb-4"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black rounded-lg border border-red-950 p-8 mb-16 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-48 h-48 relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-red-700 to-red-950 animate-spin"></div>
              <img
                src="https://imgur.com/bIebWJC.png"
                alt="Profile"
                className="absolute inset-0 w-[92%] h-[92%] rounded-full object-cover mx-auto my-auto"
              />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-5xl ">{t.title}</h1>
              {t.about.map((p, i) => (
                <p key={i} className="text-lg text-gray-300">{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
                <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
                {t.skills}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevPage}
                  className="text-red-700 hover:text-red-500 transition-colors duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextPage}
                  className="text-red-700 hover:text-red-500 transition-colors duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative bg-black p-4 rounded-lg border border-red-700/20 hover:border-red-700/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    {skill.svgIcon ? (
                      skill.svgIcon
                    ) : (
                      <i
                        className={`devicon-${skill.icon}-plain colored text-2xl group-hover:text-white transition-colors duration-300`}
                      ></i>
                    )}
                    <span className="text-lg group-hover:text-white transition-colors duration-300">
                      {hoveredSkill === skill.name ? skill.level : skill.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#1e1e1e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
              {t.softSkills}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.softSkillsList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-black p-6 rounded-lg border border-red-700/20 hover:border-red-700/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-gray-300 mt-2">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
              {t.professionalExp}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.professionalExpList.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-black p-6 rounded-lg border border-red-700/20 hover:border-red-700/40 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
              {t.academicExp}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.academicExpList.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-black p-6 rounded-lg border border-red-700/20 hover:border-red-700/40 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-semibold text-white">{exp.institution}</h3>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;