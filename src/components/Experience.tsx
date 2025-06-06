
import { BriefcaseBusiness, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Quality Assurance',
      company: 'TDialo-Tech',
      location: 'Koteshwor',
      period: '2024 to 3 month after',
      description: 'Learn .Net and check quality of software for costumer satisfaction',
      achievements: [
        'Reduced deployment error by 30%',
        ' conducted code reviews'
      ],
      technologies: ['React', '.Net']
    }
    // {
    //   title: 'Full Stack Developer',
    //   company: 'StartupXYZ',
    //   location: 'Remote',
    //   period: '2020 - 2022',
    //   description: 'Developed and maintained multiple client-facing applications. Collaborated with design team to implement pixel-perfect UI components.',
    //   achievements: [
    //     'Built responsive web applications from scratch',
    //     'Integrated third-party APIs and payment systems',
    //     'Improved website loading speed by 35%'
    //   ],
    //   technologies: ['React', 'Python', 'PostgreSQL', 'Stripe', 'Heroku']
    // },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Digital Agency Pro',
    //   location: 'New York, NY',
    //   period: '2018 - 2020',
    //   description: 'Created engaging user interfaces for various client projects. Worked closely with designers to bring creative visions to life.',
    //   achievements: [
    //     'Delivered 20+ client projects on time and within budget',
    //     'Implemented modern CSS frameworks and animations',
    //     'Collaborated with cross-functional teams effectively'
    //   ],
    //   technologies: ['JavaScript', 'Vue.js', 'SASS', 'Figma', 'Git']
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey through my professional career, highlighting key roles and achievements 
            in software development and team leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 last:hidden"></div>
              
              <div className="flex items-start space-x-6">
                {/* Timeline icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <BriefcaseBusiness className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-500">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              Ready to discuss how my experience can benefit your team?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
