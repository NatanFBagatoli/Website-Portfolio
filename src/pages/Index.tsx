import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarryBackground from "../components/StarryBackground";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index: React.FC = () => {
  const { toast } = useToast();
  const name = "Natan Bagatoli";

  const handleEmailClick = () => {
    navigator.clipboard.writeText("natanfbagatoli@gmail.com");
    toast({
      title: "Success!",
      description: "Email copied successfully",
      duration: 2000,
    });
  };

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-red-700 to-red-950 animate-spin"></div>
              <img
                src="https://imgur.com/aKq5SuA.png"
                alt="Profile"
                className="absolute inset-0 w-[92%] h-[92%] rounded-full object-cover mx-auto my-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-6xl font-bold tracking-tighter">
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
            <h2 className="text-3xl text-gray-300 mt-4">Web Developer</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
           Transformando ideias em realidade digital. Eu me especializo em desenvolvimento web com design intuitivo, desempenho excepcional e soluções sob medida para o seu negócio. Vamos construir algo extraordinário juntos!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4 space-y-6"
          >
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              View Full Resume
            </Link>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center space-x-6 pt-4"
            >
              <button
                onClick={handleEmailClick}
                className="p-2 hover:text-red-600 transition-colors"
                aria-label="Copy email address"
              >
                <Mail size={24} />
              </button>
              <a
                href="https://github.com/NatanFBagatoli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-red-700 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/natan-bagatoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-red-700 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Index;
