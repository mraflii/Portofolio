import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 px-4 md:px-6 relative bg-neutral-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white tracking-tight">Pendidikan & Sertifikasi</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6"
          >
            <div className="hidden md:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <GraduationCap size={32} />
              </div>
              <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/30 to-transparent mt-4"></div>
            </div>
            
            <div className="flex-1 bg-neutral-900 border border-white/5 p-6 md:p-10 rounded-[2rem] hover:border-white/20 hover:bg-neutral-900/80 transition-all shadow-xl group">
              <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs md:text-sm font-bold tracking-wide mb-4 md:mb-6">2020 - Sekarang</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Politeknik Negeri Lhokseumawe</h3>
              <p className="text-lg md:text-xl text-gray-300 font-medium mb-4 md:mb-6">D4 - Teknik Informatika</p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Mempelajari dasar-dasar ilmu komputer, pengembangan perangkat lunak, algoritma, serta penerapan teknologi informasi dalam pemecahan masalah. Aktif dalam berbagai proyek akademik dan praktikum.
              </p>
            </div>
          </motion.div>

          {/* Certificate Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6"
          >
            <div className="hidden md:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Award size={32} />
              </div>
            </div>
            
            <div className="flex-1 bg-neutral-900 border border-white/5 p-6 md:p-10 rounded-[2rem] hover:border-white/20 hover:bg-neutral-900/80 transition-all shadow-xl group">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 group-hover:text-blue-300 transition-colors">Sertifikasi & Penghargaan</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-950/50 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-200 text-base md:text-lg">Judul Sertifikat / Pelatihan</h4>
                    <p className="text-sm md:text-base mt-1 text-gray-500">Penyelenggara • Tahun</p>
                  </div>
                </li>
                {/* Kamu bisa menambahkan list sertifikat lainnya di sini */}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
