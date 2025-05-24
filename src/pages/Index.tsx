import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarryBackground from "../components/StarryBackground";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type IndexProps = {
  lang: "pt" | "en";
};

const texts = {
  pt: {
    role: "Desenvolvedor Web",
    country: "🇧🇷 Brasil",
    description:
      "Transformando ideias em realidade digital. Sou especializado em desenvolvimento web com design intuitivo, performance excepcional e soluções sob medida para o seu negócio.\nVamos construir algo extraordinário juntos!",
    viewResume: "Ver Currículo Completo",
    contactMe: "Entrar em Contato",
    mainSkills: "Principais Tecnologias",
    toastTitle: "Sucesso!",
    toastDesc: "Email copiado com sucesso",
  },
  en: {
    role: "Web Developer",
    country: "🇧🇷 Brazil",
    description:
      "Transforming ideas into digital reality. I specialize in web development with intuitive design, exceptional performance and tailored solutions for your business.\nLet's build something extraordinary together!",
    viewResume: "View Full Resume",
    contactMe: "Contact Me",
    mainSkills: "Main Skills",
    toastTitle: "Success!",
    toastDesc: "Email copied successfully",
  },
};

const Index = ({ lang }: IndexProps) => {
  const { toast } = useToast();
  const name = "Natan Bagatoli";
  const t = texts[lang];

  const handleEmailClick = () => {
    navigator.clipboard.writeText("natanfbagatoli@gmail.com");
    toast({
      title: t.toastTitle,
      description: t.toastDesc,
      duration: 2000,
    });
  };

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              {name.split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-waveRed"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl md:text-3xl text-gray-300 mt-2">
                {t.role}
              </h2>
              <span className=" text-xs px-3 py-1 rounded-full border-2 border-white text-white  ml-2">
                {t.country}
              </span>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t.description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4 space-y-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                to="/about"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              >
                {t.viewResume}
              </Link>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 font-semibold shadow-lg"
                aria-label="Copy email address"
              >
                <Mail size={22} />
                {t.contactMe}
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center space-x-8 pt-2"
            >
              <a
                href="https://github.com/NatanFBagatoli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-red-500 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/natan-bagatoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={28} />
              </a>
            </motion.div>
          </motion.div>
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              {t.mainSkills}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="flex flex-col items-center text-gray-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-8 h-8 mb-1"
                />
                React
              </span>
              <span className="flex flex-col items-center text-gray-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-8 h-8 mb-1"
                />
                TypeScript
              </span>
              <span className="flex flex-col items-center text-gray-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                  className="w-8 h-8 mb-1"
                />
                Tailwind
              </span>
              <span className="flex flex-col items-center text-gray-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-8 h-8 mb-1"
                />
                Node.js
              </span>
              <span className="flex flex-col items-center text-gray-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-8 h-8 mb-1"
                />
                JavaScript
              </span>
              <span className="flex flex-col items-center text-gray-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  className="w-8 h-8 mb-1"
                />
                Git
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <style>
        {`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}
      </style>
    </>
  );
};

export default Index;
