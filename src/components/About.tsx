
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'intermidate in React, TypeScript, Node.js, and modern web technologies',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces and experiences',
      technologies: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Framer Motion']
    },
    // {
    //   icon: Zap,
    //   title: 'Performance',
    //   description: 'Optimizing applications for speed, accessibility, and scalability',
    //   technologies: ['Vite', 'Webpack', 'Lighthouse', 'Web Vitals']
    // },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
      technologies: ['Git', 'Agile', 'Scrum', 'Code Reviews']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="p-6 bg-gray-800 rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600">
            <p className="text-lg text-gray-300 mb-4">
              "The best way to predict the future is to create it."
            </p>
            <p className="text-sm text-gray-400">— Peter Drucker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
