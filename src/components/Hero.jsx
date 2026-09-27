import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center items-center text-center pt-24 pb-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="z-10 w-full mt-10 md:mt-0 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-sm bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for work
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Muhammad Rafli
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Software Engineer.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-neutral-400 mb-12 max-w-2xl leading-relaxed mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Mahasiswa Teknik Informatika yang berfokus pada pengembangan perangkat lunak yang bersih, efisien, dan skalabel. Dari merancang antarmuka hingga membangun infrastruktur backend.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <a href="#projects" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3.5 rounded-md font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all w-full sm:w-auto">
            Lihat Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-medium border border-neutral-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors text-white w-full sm:w-auto">
            Hubungi Saya
          </a>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-16 text-neutral-500 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="https://github.com/mraflii" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:rafli@example.com" className="hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

