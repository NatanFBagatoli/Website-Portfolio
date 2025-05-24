import { motion } from "framer-motion";
import { Github, Link2 } from "lucide-react";
import StarryBackground from "../components/StarryBackground";

type ProjectsProps = {
  lang: "pt" | "en";
};

const texts = {
  pt: {
    title: "Experiência com projetos",
    subtitle: "Explore os projetos em que já trabalhei",
    projects: [
      {
        title: "Website Portfólio",
        description: "Meu site pessoal. Criei este site para apresentar meu perfil, habilidades e projetos, além de ser meu espaço para experimentar novas tecnologias.",
        image: "https://imgur.com/8Y73zqh.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Website-Portfolio",
        liveUrl: "https://website-portfolio-jade.vercel.app/"
      },
      {
        title: "Kashy - Fintech e ERP",
        description: "Sistema completo de pagamentos com BCH, controle de estoque para lojistas e monitoramento de transações.",
        image: "https://imgur.com/2rEFFrm.png",
        tech: "Node.js, React, PostgreSQL, Docker, JWT, bch-js, Jest, Tailwind, WebSockets",
        githubUrl: "https://github.com/NatanFBagatoli/Kashy-Project",
        liveUrl: "https://github.com/NatanFBagatoli/Kashy-Project"
      },
      {
        title: "Website E-Commerce",
        description: "Site temático e funcional para pizzaria italiana, com cardápio, localizações, pedidos e franquias.",
        image: "https://imgur.com/DKKr1Q5.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Website-Ecommerce-Pizzaria",
        liveUrl: "#"
      },
      {
        title: "Website Escolar",
        description: "Site moderno e funcional para escola, com destaque para cursos, eventos e contato com design profissional.",
        image: "https://imgur.com/mJUESxt.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Projeto-Website-Escolar",
        liveUrl: "https://projeto-website-escolar-i1jo.vercel.app/"
      },
      {
        title: "KidGo - App Transporte Infantil",
        description: "App focado em segurança no transporte infantil, com agendamento de corridas, rastreamento em tempo real e cadastro de responsáveis.",
        image: "https://imgur.com/OWHHAoc.png",
        tech: "React Native, Expo, Firebase, TypeScript, Mapbox, Node.js",
        githubUrl: "https://github.com/NatanFBagatoli/KidGo",
        liveUrl: "https://github.com/NatanFBagatoli/KidGo"
      },
      {
        title: "Website Construtora",
        description: "Site moderno e funcional para construtora, com destaque para serviços, projetos e contato com profissionais.",
        image: "https://imgur.com/ReYsmAL.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Website-Construction-company",
        liveUrl: "https://website-construction-company.vercel.app/"
      },
    ]
  },
  en: {
    title: "Experience with projects",
    subtitle: "Explore the projects I've worked on so far",
    projects: [
      {
        title: "Portfolio Website",
        description: "My personal website. I created this site to showcase my profile, skills and projects. As well as my place to experiment with new technologies.",
        image: "https://imgur.com/8Y73zqh.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Website-Portfolio",
        liveUrl: "https://website-portfolio-jade.vercel.app/"
      },
      {
        title: "Kashy - Fintech & ERP",
        description: "Complete payment system with BCH, inventory control for merchants, and transaction monitoring.",
        image: "https://imgur.com/2rEFFrm.png",
        tech: "Node.js, React, PostgreSQL, Docker, JWT, bch-js, Jest, Tailwind, WebSockets",
        githubUrl: "https://github.com/NatanFBagatoli/Kashy-Project",
        liveUrl: "https://github.com/NatanFBagatoli/Kashy-Project"
      },
      {
        title: "E-Commerce Website",
        description: "Thematic and functional website for an Italian pizzeria, highlighting the menu, locations, application with support for orders and franchises.",
        image: "https://imgur.com/DKKr1Q5.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Website-Ecommerce-Pizzaria",
        liveUrl: "#"
      },
      {
        title: "High School Website",
        description: "Modern and functional website for a school, highlighting courses, events and contacts with professional design.",
        image: "https://imgur.com/mJUESxt.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Projeto-Website-Escolar",
        liveUrl: "https://projeto-website-escolar-i1jo.vercel.app/"
      },
      {
        title: "KidGo - Child Transport App",
        description: "App focused on safety in child transportation, with ride scheduling, real-time tracking, and guardian registration.",
        image: "https://imgur.com/OWHHAoc.png",
        tech: "React Native, Expo, Firebase, TypeScript, Mapbox, Node.js",
        githubUrl: "https://github.com/NatanFBagatoli/KidGo",
        liveUrl: "https://github.com/NatanFBagatoli/KidGo"
      },
      {
        title: "Construction Company Website",
        description: "Modern and functional website for a construction company, highlighting services, projects and contact with professionals.",
        image: "https://imgur.com/ReYsmAL.png",
        tech: "React, TypeScript & TailwindCSS",
        githubUrl: "https://github.com/NatanFBagatoli/Website-Construction-company",
        liveUrl: "https://website-construction-company.vercel.app/"
      },
    ]
  }
};

const Projects = ({ lang }: ProjectsProps) => {
  const t = texts[lang];

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen pt-24 pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl text-red-700 font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden group border border-red-950 bg-black"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-red">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
                  <div className="text-sm text-muted-foreground">{project.tech}</div>
                  <div className="flex justify-end gap-3 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-red transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-red transition-colors"
                    >
                      <Link2 size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;