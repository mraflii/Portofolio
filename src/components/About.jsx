import { motion } from 'framer-motion';
import { Code2, Map, Database, Brain } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-12 px-6 md:px-12 relative max-w-7xl mx-auto w-full">
      <div className="w-full border-t border-neutral-900 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Tentang Saya</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                Saya adalah lulusan Teknik Informatika dari Politeknik Negeri Lhokseumawe yang memiliki minat dan keahlian di bidang Web Development, Database, Geographic Information System (GIS), dan Sistem Pendukung Keputusan (Decision Support System). Saya terbiasa mengembangkan aplikasi berbasis web mulai dari perancangan basis data, pengolahan data, hingga visualisasi informasi yang interaktif.
              </p>
              <br />
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                Saya tertarik untuk terus mengembangkan kemampuan di bidang software development, IT support, dan teknologi informasi serta terbuka terhadap kesempatan belajar dan pengalaman profesional di bidang IT.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 border border-neutral-800 bg-[#050505] flex flex-col gap-2 group hover:border-neutral-600 transition-colors">
                <Map size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                <h4 className="font-semibold text-white text-sm">Web GIS Developer</h4>
              </div>
              <div className="p-4 border border-neutral-800 bg-[#050505] flex flex-col gap-2 group hover:border-neutral-600 transition-colors">
                <Code2 size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                <h4 className="font-semibold text-white text-sm">Software Developer</h4>
              </div>
              <div className="p-4 border border-neutral-800 bg-[#050505] flex flex-col gap-2 group hover:border-neutral-600 transition-colors">
                <Database size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                <h4 className="font-semibold text-white text-sm">Data Analyst</h4>
              </div>
              <div className="p-4 border border-neutral-800 bg-[#050505] flex flex-col gap-2 group hover:border-neutral-600 transition-colors">
                <Brain size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                <h4 className="font-semibold text-white text-sm">Artificial Intelligence</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm mx-auto md:ml-auto"
          >
            <div className="aspect-square bg-neutral-900 border border-neutral-800 p-2 relative">
              <img src={profileImg} alt="Muhammad Rafli" className="w-full h-full object-cover rounded-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
