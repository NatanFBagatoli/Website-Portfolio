import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import StarryBackground from "../components/StarryBackground";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
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
          <h1 className="text-3xl text-red-700 font-bold mb-2">Get in Touch</h1>
          <p className="text-2xl text-white text-muted-foreground">Let's work together on your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-black border border-red-950 p-8 rounded-xl space-y-6">
              <h2 className="text-xl font-semibold text-red mb-6">Contact Information</h2>
              
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
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/NatanFBagatoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="text-red-700 w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-black border border-red-950 p-8 rounded-xl space-y-6">
              <h2 className="text-xl font-semibold text-red-700 mb-6">Send Message</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-black"/>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-black" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px] bg-black" />
                </div>

                <Button className="w-full bg-red-700 hover:bg-red-600" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
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