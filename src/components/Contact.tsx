
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300">contact@subeshgumanju9.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-300">9749415387</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">Katunje-5,Bhaktapur</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600">
              <h4 className="font-semibold mb-2 text-white">Available for Internship/work</h4>
              <p className="text-gray-300">
                I'm currently accepting new projects and would love to hear about yours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-[1.02] font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
