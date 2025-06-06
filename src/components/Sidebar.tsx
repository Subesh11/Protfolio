
import { useState, useEffect } from 'react';
import { Home, User, BriefcaseBusiness, FolderOpen, Mail } from 'lucide-react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'experience', name: 'Experience', icon: BriefcaseBusiness },
    { id: 'projects', name: 'Projects', icon: FolderOpen },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 p-4">
        <nav className="space-y-4">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-red-500'
                    : 'text-gray-400 hover:text-red-400'
                }`}
              >
                <div className="flex items-center space-x-3 relative">
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-red-500/20'
                        : 'group-hover:bg-red-500/10'
                    }`}
                  >
                    <IconComponent size={16} />
                  </div>
                  
                  {/* Section name tooltip */}
                  <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-gray-700">
                      {section.name}
                      <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                        <div className="border-4 border-transparent border-r-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Active indicator */}
                <div
                  className={`w-full h-0.5 mt-2 transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-red-500 scale-x-100'
                      : 'bg-transparent scale-x-0'
                  }`}
                ></div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
