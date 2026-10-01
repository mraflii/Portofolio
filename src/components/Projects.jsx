import { motion } from 'framer-motion';
import { ExternalLink, Map, Calendar, ArrowUpRight, Camera } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import spkImage from '../assets/spk_blankspot.png';
import pemetaanImage from '../assets/pemetaan_blankspot.png';
import bookingFutsalImage from '../assets/bookingfutsal.png';
import manajemenRestoranImage from '../assets/manajemen_restoran.png';

const Projects = () => {
  const projects = [
    {
      title: 'SPK Prioritas Penangan Blankspot Akses Internet di Aceh',
      description: 'Sistem Pendukung Keputusan (SPK) berbasis web yang dirancang untuk menentukan prioritas penanganan desa blankspot akses internet di Provinsi Aceh menggunakan metode Fuzzy Mamdani. Sistem mengolah enam kriteria utama dan menampilkan hasil prioritas dalam bentuk peringkatdan warna berdasarkan prioritas serta peta interaktif (GIS) untuk mendukung pengambilan keputusan yang objektif dan terukur.',
      tags: ['PHP', 'MySQL', 'QGIS', 'Python', 'Javascript', 'CSS', 'GeoJSON'],
      image: spkImage,
      icon: Map,
      github: 'https://github.com/mraflii/SPK-Penangan-Desa-Blankspot-Akses-Internet-di-Aceh',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]',
      accentColor: 'text-emerald-400',
    },
    {
      title: 'Pemetaan Blankspot Pendidikan & Kesehatan',
      description: 'Sistem Informasi Geografis (SIG) untuk mengidentifikasi dan memvisualisasikan lokasi fasilitas pendidikan dan kesehatan yang berada pada area blankspot (tanpa sinyal) di wilayah Aceh menggunakan peta interaktif.',
      tags: ['PHP', 'MySQL', 'Leaflet.js', 'GeoJSON', 'Javascript', 'CSS'],
      image: pemetaanImage,
      icon: Map,
      github: 'https://github.com/mraflii/Pemetaan-Lokasi-Blankspot-di-Sektor-Pendidikan-dan-Kesehatan-Wilayah-Aceh',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
      accentColor: 'text-cyan-400',
    },
    {
      title: 'Booking/Pemesanan Futsal',
      description: 'Aplikasi berbasis web untuk memudahkan pengguna dalam melakukan pemesanan lapangan futsal. Dilengkapi dengan antarmuka yang responsif dan memudahkan pengelolaan ketersediaan lapangan.',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      image: bookingFutsalImage,
      icon: Calendar,
      github: 'https://github.com/mraflii/BookingFutsal',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]',
      accentColor: 'text-amber-400',
    },
    {
      title: 'Manajemen Restoran dengan Face Recognition',
      description: 'Sistem manajemen restoran modern yang mengintegrasikan teknologi pengenalan wajah (face recognition) untuk autentikasi dan efisiensi operasional. Memudahkan proses pencatatan dan keamanan akses secara cerdas.',
      tags: ['Python', 'OpenCV', 'Face Recognition', 'MySQL'],
      image: manajemenRestoranImage,
      icon: Camera,
      github: 'https://github.com/Dimas391/manajemen_restoran_menggunakan_face_recornation',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
      accentColor: 'text-purple-400',
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-12 relative max-w-7xl mx-auto w-full min-h-[85vh] overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Karya Utama
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pilihan</span>.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            Berbagai inovasi perangkat lunak yang telah saya rancang dan kembangkan, berfokus pada solusi praktis dan performa optimal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col h-full bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-neutral-900/50 hover:border-neutral-700/50 transition-all duration-500 ${project.glowColor}`}
            >
              {/* Project Image */}
              <div className="w-full relative h-[220px] overflow-hidden bg-neutral-950">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <project.icon className="text-neutral-800 w-20 h-20 group-hover:scale-110 transition-all duration-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 ${project.accentColor} opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative z-10 -mt-6">
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-neutral-200 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-neutral-950/50 border border-neutral-800/60 text-xs font-medium text-neutral-300 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-5 border-t border-neutral-800/50 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#050505] border border-neutral-800 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-all cursor-pointer">
                    <FaGithub size={18} />
                    Lihat Source Code
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
