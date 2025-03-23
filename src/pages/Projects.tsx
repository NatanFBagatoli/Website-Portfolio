import { motion } from "framer-motion";
import { Github, Link2 } from "lucide-react";
import StarryBackground from "../components/StarryBackground";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal website. I created this site to showcase my profile, skills and projects. As well as my place to experiment with new technologies.",
      image: "https://imgur.com/8Y73zqh.png",
      tech: "React, TypeScript & TailwindCSS",
      githubUrl: "https://github.com/NatanFBagatoli/Website-Portfolio",
      liveUrl: "https://website-portfolio-jade.vercel.app/"
    },
    {
      title: "E-Commerce Website",
      description: "Thematic and functional website for an Italian pizzeria, highlighting the menu, locations, application with support for orders and franchises",
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
      title: "Project Messaging App",
      description: "Real-time messaging app that combines a modern design with a retro aesthetic.",
      image: "https://imgur.com/NUWkgIP.png",
      tech: "Html, Css, JavaScript, MongoDB, SocketIO & Node",
      githubUrl: "https://github.com/NatanFBagatoli/Projeto-ArcMessenger",
      liveUrl: "Coming Soon"
    },
    {
      title: "Construction Company Website",
      description: "Modern and functional website for a construction company, highlighting services, projects and contact with professionals.",
      image: "https://imgur.com/ReYsmAL.png",
      tech: "React, TypeScript & TailwindCSS",
      githubUrl: "https://github.com/NatanFBagatoli/Website-Construction-company",
      liveUrl: "https://website-construction-company.vercel.app/"
    },
   
    {
      title: "Coming Soon",
      description: "Coming Soon",
      image: "https://imgur.com/OWHHAoc.png",
      tech: "Coming Soon",
      githubUrl: "Coming Soon",
      liveUrl: "Coming Soon"
    },
    
  ];

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
          <h1 className="text-3xl text-red-700 font-bold mb-2">Experience with projects</h1>
          <p className="text-muted-foreground">Explore the projects I've worked on so far</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className=" rounded-xl overflow-hidden group border border-red-950 bg-black"
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