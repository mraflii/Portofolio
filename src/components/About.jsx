import { motion } from 'framer-motion';
import { User, Code2, Laptop } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white tracking-tight">Tentang Saya</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-md"
          >
            <div className="aspect-square rounded-[2rem] bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-600/30 border border-white/10 p-2 md:p-3 overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="w-full h-full rounded-[1.5rem] bg-neutral-900/90 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent z-10 pointer-events-none"></div>
                <img src={profileImg} alt="Muhammad Rafli" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-neutral-900/90 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative flex h-3 w-3 md:h-4 md:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-green-500"></span>
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-200">Tersedia untuk Project</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Mahasiswa Teknik Informatika</h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Saya adalah Fresh Graduate Teknik Informatika yang memiliki minat dan keahlian dalam Web Development, Database Management, dan Geographic Information System (GIS). Saya menikmati proses merancang serta membangun aplikasi berbasis web yang fungsional, efisien, dan mampu memberikan solusi terhadap permasalahan nyata.
                Saya tertarik untuk terus mengembangkan kemampuan di bidang software development, IT support, dan teknologi informasi serta terbuka terhadap kesempatan belajar dan pengalaman profesional di bidang IT.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 hover:bg-white/10 hover:border-purple-500/30 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Development</h4>
                  <p className="text-sm text-gray-400 mt-1">Web Apps & API</p>
                </div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 hover:bg-white/10 hover:border-blue-500/30 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <Laptop size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Problem Solving</h4>
                  <p className="text-sm text-gray-400 mt-1">Logical Thinking</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
