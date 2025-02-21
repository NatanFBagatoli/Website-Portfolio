import { motion } from "framer-motion";
import { useState } from "react";
import StarryBackground from "../components/StarryBackground";
const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "HTML", icon: "html5", category: "Tech Stack", level: "Avançado" },
    { name: "React", icon: "react", category: "Tech Stack", level: "Avançado" },
    { name: "Java", icon: "java", category: "Tech Stack", level: "Intermediário" },
    { name: "FireBase", icon: "firebase", category: "Tech Stack", level: "Intermediário" },
    { name: "CSS", icon: "css3", category: "Tech Stack", level: "Avançado" },
    { name: "Tailwind", icon: "tailwindcss", category: "Tech Stack", level: "Avançado" },
    { name: "Postman", icon: "postman", category: "Tech Stack", level: "Básico" },
    { name: "MongoDB", icon: "mongodb", category: "Tech Stack", level: "Básico" },
    { name: "Javascript", icon: "javascript", category: "Tech Stack", level: "Avançado" },
    { name: "Typescript", icon: "typescript", category: "Tech Stack", level: "Avançado" },
    { name: "MySql", icon: "mysql", category: "Tech Stack", level: "Intermediário" },
    { name: "Docker", icon: "docker", category: "Tech Stack", level: "Básico" },
  ];

  return (
    <>
      <StarryBackground />
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-8 ">

      <div className="max-w-6xl mx-auto ">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black rounded-lg border border-red-950 p-8 mb-16 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-48 h-48 relative">
  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-red-700 to-red-950 animate-spin">
    
  </div>
  <img
    src="https://imgur.com/2YMnwoh.png"
    alt="Profile"
    className="absolute inset-0 w-[92%] h-[92%] rounded-full object-cover mx-auto my-auto"
  />
</div>


          <div className="flex-1 space-y-4 text-center md:text-left">
         
            <p className="text-lg text-gray-300">🥇 Hi! My name is Natan Bagatoli. Since I was young, I’ve always been curious about how things work, especially when it comes to technology.</p>
            <p className="text-lg text-gray-300">💡 That curiosity led me to pursue a degree in Analysis and Systems Development at SENAI/SC, where I learned to turn ideas into functional solutions.</p>
            <p className="text-lg text-gray-300">🎉Today, at 21, I work as a Freelance Web Developer, building websites and creating digital experiences that connect people and solve real problems. Along the way, I discovered a passion for Machine Learning, a field that challenges me to think differently and constantly learn.</p>
            <p className="text-lg text-gray-300">🎨 When I’m not coding, I enjoy diving into a good book, which helps me see the world from new perspectives. For me, every project is a chance to grow, and I’m always ready for the next challenge.</p>
          </div>
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
            <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative bg-black p-4 rounded-lg border border-red-700/20 hover:border-red-700/40 transition-all duration-300 overflow-hidden "
              >
                <div className="relative z-10 flex items-center gap-3">
                  <i
                    className={`devicon-${skill.icon}-plain colored text-2xl group-hover:text-white transition-colors duration-300`}
                  ></i>
                  <span className="text-lg group-hover:text-white transition-colors duration-300">
                    {hoveredSkill === skill.name ? skill.level : skill.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#1e1e1e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="space-y-8 mt-12"
>
  <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
    <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
    Soft Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { name: "🤝Trabalho em equipe", description: "Capacidade de colaborar com equipes multidisciplinares para alcançar objetivos comuns." },
      { name: "🗣️Comunicação", description: "Facilidade para transmitir ideias de forma clara e objetiva, tanto verbalmente quanto por escrito." },
      { name: "🧠Resolução de problemas", description: "Habilidade em analisar desafios e propor soluções eficazes." },
      { name: "🔄Adaptabilidade", description: "Capacidade de aprender novas tecnologias e se adaptar rapidamente a mudanças." },
      { name: "⏳Gestão do tempo", description: "Organização eficiente para lidar com prazos e priorizar tarefas." },
      { name: "💡Pensamento crítico", description: "Análise profunda para tomada de decisões baseadas em dados e evidências." },
    ].map((skill, index) => (
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

 
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="space-y-8 mt-12"
>
  <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
    <span className="w-12 h-0.5 bg-red-700 bg-gradient-to-r from-red-700 to-red-950"></span>
    Experiências Acadêmicas
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      {
        institution: "SENAI - Análise e Desenvolvimento de Sistemas",
        period: "2022 - 2024",
        description: "Curso técnico voltado para programação e boas práticas de desenvolvimento, abrangendo front-end, back-end e banco de dados.",
        logo: "/public/senailogo.png",
      },
      {
        institution: "Curso de React Avançado - Udemy",
        period: "2023",
        description: "Aprofundamento em React com hooks, otimizações e melhores práticas para desenvolvimento moderno.",
        logo: "/images/udemy-logo.png",
      },
      {
        institution: "Curso de UI/UX Design - Alura",
        period: "2023",
        description: "Fundamentos de design de interface e experiência do usuário para criação de layouts mais intuitivos e acessíveis.",
        logo: "/images/alura-logo.png",
      },
    ].map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 * index }}
        className="bg-black p-6 rounded-lg border border-red-700/20 hover:border-red-700/40 transition-all duration-300 flex flex-col items-center text-center"
      >
        <img src={exp.logo} alt={`${exp.institution} logo`} className="w-16 h-16 mb-4" />
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
