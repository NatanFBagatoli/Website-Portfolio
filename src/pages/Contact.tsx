import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import StarryBackground from "../components/StarryBackground";
import emailjs from 'emailjs-com';

type ContactProps = {
  lang: "pt" | "en";
};

const texts = {
  pt: {
    title: "Entre em contato",
    subtitle: "Vamos trabalhar juntos no seu próximo projeto!",
    contactInfo: "Informações de contato",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    sendMessage: "Enviar mensagem",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "seu.email@exemplo.com",
    messagePlaceholder: "Sua mensagem",
    linkedin: "Perfil no LinkedIn",
    github: "Perfil no GitHub",
    toastSuccessTitle: "Mensagem enviada!",
    toastSuccessDesc: "Obrigado pela mensagem. Entrarei em contato em breve.",
    toastErrorTitle: "Erro ao enviar mensagem",
    toastErrorDesc: "Ocorreu um erro ao tentar enviar sua mensagem. Por favor, tente novamente.",
  },
  en: {
    title: "Get in touch",
    subtitle: "Let's work together on your next project!",
    contactInfo: "Contact information",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    messagePlaceholder: "Your message",
    linkedin: "LinkedIn Profile",
    github: "GitHub Profile",
    toastSuccessTitle: "Message sent!",
    toastSuccessDesc: "Thank you for your message. I will get in touch soon.",
    toastErrorTitle: "Error sending message",
    toastErrorDesc: "An error occurred while trying to send your message. Please try again.",
  }
};

const Contact = ({ lang }: ContactProps) => {
  const { toast } = useToast();
  const t = texts[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form,
      import.meta.env.VITE_EMAILJS_USER_ID 
    )
    .then((result) => {
      toast({
        title: t.toastSuccessTitle,
        description: t.toastSuccessDesc,
      });
      form.reset(); 
    }, (error) => {
      toast({
        title: t.toastErrorTitle,
        description: t.toastErrorDesc,
        variant: "destructive",
      });
    });
  };

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
            <p className="text-2xl text-white text-muted-foreground">{t.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-black border border-red-950 p-8 rounded-xl space-y-6">
                <h2 className="text-xl font-semibold text-red mb-6">
                  {t.contactInfo}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-red-700 w-5 h-5" />
                    <p className="text-muted-foreground">natanfbagatoli@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-red-700 w-5 h-5" />
                    <p className="text-muted-foreground">+55 47 991578819</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/natan-bagatoli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="text-red-700 w-5 h-5" />
                    <span>{t.linkedin}</span>
                  </a>
                  <a
                    href="https://github.com/NatanFBagatoli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="text-red-700 w-5 h-5" />
                    <span>{t.github}</span>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="bg-black border border-red-950 p-8 rounded-xl space-y-6">
                <h2 className="text-xl font-semibold text-red-700 mb-6">{t.sendMessage}</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground">{t.name}</label>
                    <Input id="name" name="name" placeholder={t.namePlaceholder} className="bg-black" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">{t.email}</label>
                    <Input id="email" name="email" type="email" placeholder={t.emailPlaceholder} className="bg-black" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-muted-foreground">{t.message}</label>
                    <Textarea id="message" name="message" placeholder={t.messagePlaceholder} className="min-h-[120px] bg-black" />
                  </div>
                  <Button className="w-full bg-red-700 hover:bg-red-600" type="submit">
                    <Send className="w-4 h-4 mr-2" />
                    {t.sendMessage}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;