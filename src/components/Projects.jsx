import { motion } from 'framer-motion';
import { ExternalLink, Map, Calendar } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import spkImage from '../assets/spk_blankspot.png';
import pemetaanImage from '../assets/pemetaan_blankspot.png';

const Projects = () => {
  const projects = [
    {
      title: 'SPK Prioritas Penangan Blankspot Akses Internet di Aceh',
      description: 'Sistem Pendukung Keputusan (SPK) berbasis web yang dirancang untuk menentukan prioritas penanganan desa blankspot akses internet di Provinsi Aceh menggunakan metode Fuzzy Mamdani. Sistem mengolah enam kriteria utama dan menampilkan hasil prioritas dalam bentuk peringkatdan warna berdasarkan prioritas serta peta interaktif (GIS) untuk mendukung pengambilan keputusan yang objektif dan terukur.',
      tags: ['PHP', 'MySQL', 'QGIS', 'Python', 'Javascript', 'CSS', 'GeoJSON'],
      image: spkImage,
      icon: Map,
      featured: true,
      github: 'https://github.com/mraflii/SPK-Penangan-Desa-Blankspot-Akses-Internet-di-Aceh',
      demo: '#'
    },
    {
      title: 'Pemetaan Blankspot Pendidikan & Kesehatan',
      description: 'Sistem Informasi Geografis (SIG) untuk mengidentifikasi dan memvisualisasikan lokasi fasilitas pendidikan dan kesehatan yang berada pada area blankspot (tanpa sinyal) di wilayah Aceh menggunakan peta interaktif.',
      tags: ['PHP', 'MySQL', 'Leaflet.js', 'GeoJSON', 'Javascript', 'CSS'],
      image: pemetaanImage,
      icon: Map,
      featured: false,
      github: 'https://github.com/mraflii/Pemetaan-Lokasi-Blankspot-di-Sektor-Pendidikan-dan-Kesehatan-Wilayah-Aceh',
      demo: '#'
    },
    {
      title: 'Aplikasi Booking Futsal',
      description: 'Aplikasi berbasis web untuk memudahkan pengguna dalam melakukan pemesanan lapangan futsal. Dilengkapi dengan antarmuka yang responsif dan memudahkan pengelolaan ketersediaan lapangan.',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      image: null,
      icon: Calendar,
      featured: false,
      github: 'https://github.com/mraflii/BookingFutsal',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 px-6 md:px-12 relative max-w-7xl mx-auto w-full">
      <div className="w-full border-t border-neutral-900 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Project Utama</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#050505] border border-neutral-900 hover:border-neutral-700 transition-colors flex flex-col h-full rounded-md overflow-hidden"
            >
              {/* Project Image/Icon Area */}
              <div className="w-full bg-neutral-950 relative h-[200px] flex items-center justify-center border-b border-neutral-900 overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <project.icon className="text-neutral-700 w-16 h-16 group-hover:scale-110 group-hover:text-neutral-500 transition-all duration-500" />
                )}
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-900 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
                    <FaGithub size={16} />
                    Source Code
                  </a>
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
