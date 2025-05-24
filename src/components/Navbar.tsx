import { CircleUser, Search, BriefcaseBusiness, House, Github, Linkedin, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ lang, setLang }: { lang: "pt" | "en"; setLang: (lang: "pt" | "en") => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Optional: highlight active link
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black ">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-gold font-mono text-lg ">
          Natan Bagatoli();
        </Link>

        <button 
          onClick={toggleMenu}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link flex items-center gap-2">
            <House className="w-4 h-4" />
            {lang === "pt" ? "Início" : "Home"}
          </Link>
          <Link to="/about" className="nav-link flex items-center gap-2">
            <Search className="w-4 h-4" />
            {lang === "pt" ? "Sobre" : "About"}
          </Link>
          <Link to="/projects" className="nav-link flex items-center gap-2">
            <BriefcaseBusiness className="w-4 h-4" />
            {lang === "pt" ? "Projetos" : "Projects"}
          </Link>
          <Link to="/contact" className="nav-link flex items-center gap-2">
            <CircleUser className="w-4 h-4" />
            {lang === "pt" ? "Contato" : "Contact"}
          </Link>
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="px-4 py-2 rounded bg-red-700 text-white hover:bg-red-900 transition ml-2"
          >
            {lang === "pt" ? "English" : "Português"}
          </button>
          <a
            href="https://github.com/NatanFBagatoli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/natan-bagatoli/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#000000] md:hidden py-4 px-4 flex flex-col items-center space-y-4 animate-fade-in">
            <Link to="/" className="nav-link flex items-center gap-2" onClick={toggleMenu}>
              <House className="w-4 h-4" />
              {lang === "pt" ? "Início" : "Home"}
            </Link>
            <Link to="/about" className="nav-link flex items-center gap-2" onClick={toggleMenu}>
              <Search className="w-4 h-4" />
              {lang === "pt" ? "Sobre" : "About"}
            </Link>
            <Link to="/projects" className="nav-link flex items-center gap-2" onClick={toggleMenu}>
              <BriefcaseBusiness className="w-4 h-4" />
              {lang === "pt" ? "Projetos" : "Projects"}
            </Link>
            <Link to="/contact" className="nav-link flex items-center gap-2" onClick={toggleMenu}>
              <CircleUser className="w-4 h-4" />
              {lang === "pt" ? "Contato" : "Contact"}
            </Link>
            <button
              onClick={() => { setLang(lang === "pt" ? "en" : "pt"); toggleMenu(); }}
              className="px-4 py-2 rounded bg-red-700 text-white hover:bg-red-900 transition"
            >
              {lang === "pt" ? "English" : "Português"}
            </button>
            <a
              href="https://github.com/NatanFBagatoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/natan-bagatoli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;