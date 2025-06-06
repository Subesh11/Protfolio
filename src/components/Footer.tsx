
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
              Subesh Gumanju
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating beautiful, 
              functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Subesh11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@Subeshgumanju.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>contact@Subehsgumanju.com</p>
              <p>9749415387</p>
              <p>Katunje,Bhaktapur</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-2" /> by Subeshgumanju
            <span className="mx-2">•</span>
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
