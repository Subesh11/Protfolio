
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather app with location-based forecasts and data visualization',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
    // {
    //   title: 'Portfolio Website',
    //   description: 'A responsive portfolio site built with modern web technologies',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    //   technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2 border border-gray-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/90 text-gray-300 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/90 text-gray-300 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Subesh11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
