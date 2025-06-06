
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Profile Image and Info */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                Subesh
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-center lg:text-left space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Bhaktapur,Katunje</span>
              </div>
              <p className="text-gray-300 text-lg">Available for freelance work</p>
            </div>
          </div>

          {/* Right side - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">
                👋 Hello, I'm
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  Subesh Gumanju
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                Full Stack Developer &
                <span className="block text-red-400 font-medium">App Developer</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              I create beautiful, functional, and user-centered digital experiences 
              that solve real-world problems with clean code and innovative design.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-400">3+</div>
                <div className="text-sm text-gray-400">Month Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-400">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              {/* <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-400">20+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div> */}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://github.com/Subesh11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 text-gray-400 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/subesh-gumanju-93517b353/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 text-gray-400 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="subeshgumanju9@gmail.com"
                className="p-3 bg-gray-800/50 text-gray-400 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about"
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-red-400 transition-colors duration-300 group"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce group-hover:text-red-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
