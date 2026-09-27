import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 md:px-12 relative max-w-7xl mx-auto w-full">
      <div className="w-full border-t border-neutral-900 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Pendidikan & Sertifikasi</h2>
        </motion.div>

        <div className="space-y-6">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row border border-neutral-900 bg-[#050505]"
          >
            <div className="md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-neutral-900 flex flex-col justify-center bg-neutral-950">
              <div className="flex items-center gap-3">
                <GraduationCap size={24} className="text-neutral-500" />
                <span className="text-sm font-medium text-neutral-400">Pendidikan</span>
              </div>
            </div>
            
            <div className="md:w-3/4 p-6 md:p-8">
              <span className="inline-block text-neutral-500 text-sm font-medium tracking-wide mb-2">2020 - Sekarang</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Politeknik Negeri Lhokseumawe</h3>
              <p className="text-base text-neutral-400 mb-4">D4 - Teknik Informatika</p>
              <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
                Mempelajari dasar-dasar ilmu komputer, pengembangan perangkat lunak, algoritma, serta penerapan teknologi informasi dalam pemecahan masalah. Aktif dalam berbagai proyek akademik dan praktikum.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row border border-neutral-900 bg-[#050505]"
          >
            <div className="md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-neutral-900 flex flex-col justify-center bg-neutral-950">
              <div className="flex items-center gap-3">
                <Award size={24} className="text-neutral-500" />
                <span className="text-sm font-medium text-neutral-400">Sertifikasi</span>
              </div>
            </div>
            
            <div className="md:w-3/4 p-6 md:p-8">
              <ul className="space-y-6">
                <li className="flex flex-col border-b border-neutral-900 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-white text-base">Sertifikasi Web Development</h4>
                  <p className="text-sm mt-1 text-neutral-500">Dicoding Indonesia • 2023</p>
                </li>
                <li className="flex flex-col border-b border-neutral-900 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-white text-base">Sertifikasi Database SQL</h4>
                  <p className="text-sm mt-1 text-neutral-500">Binar Academy • 2022</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
