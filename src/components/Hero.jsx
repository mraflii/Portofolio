import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-10 px-4 md:px-6 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-[10%] left-[10%] w-64 md:w-96 h-64 md:h-96 bg-purple-600/30 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[10%] right-[10%] w-64 md:w-96 h-64 md:h-96 bg-blue-600/30 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs md:text-sm font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Selamat Datang di Portofolio Saya
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-[1.2] md:leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Hi, Saya <br className="md:hidden" />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">Muhammad Rafli</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Mahasiswa Teknik Informatika yang bersemangat dalam membangun solusi perangkat lunak yang inovatif, elegan, dan efisien.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a href="#projects" className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Lihat Project
            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-white backdrop-blur-sm">
            Hubungi Saya
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
