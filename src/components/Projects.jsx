import { motion } from 'framer-motion';
import { ExternalLink, Map } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'SPK Blankspot Aceh',
      description: 'Sistem Pendukung Keputusan (SPK) untuk memetakan dan menganalisis area blankspot (tanpa sinyal komunikasi) di wilayah Aceh. Menggabungkan teknologi pemetaan geospasial dengan algoritma untuk membantu pemerintah dalam menentukan prioritas pembangunan BTS.',
      tags: ['PHP', 'MySQL', 'QGIS', 'Tailwind', 'Python'],
      icon: Map,
      featured: true,
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white tracking-tight">Project Utama</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image/Icon Area */}
                <div className="lg:w-1/2 bg-neutral-900 relative min-h-[250px] md:min-h-[400px] flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Decorative circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-white/5 scale-[1.5] group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  <project.icon className="text-white/20 w-32 h-32 md:w-48 md:h-48 group-hover:scale-110 group-hover:text-purple-400/40 transition-all duration-500 relative z-10" />
                </div>
                
                {/* Project Details */}
                <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                  {project.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                      <span className="text-purple-400 text-xs md:text-sm font-bold tracking-widest uppercase">Featured Project</span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">{project.title}</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={project.github} className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white transition-all group-hover:border-white/30" title="Lihat Source Code">
                      <FaGithub size={20} className="md:w-6 md:h-6" />
                    </a>
                    <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 hover:scale-105 transition-all text-sm md:text-base">
                      Live Demo <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
