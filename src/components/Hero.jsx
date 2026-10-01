import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center items-center text-center pt-24 pb-10 px-6 md:px-12 max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="z-10 w-full mt-10 md:mt-0 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/50 backdrop-blur-md border border-neutral-800/80 text-neutral-300 text-sm font-medium tracking-wide shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for work
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 text-white leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Muhammad Rafli
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Software Engineer.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl leading-relaxed mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Mahasiswa Teknik Informatika yang berfokus pada pengembangan perangkat lunak yang bersih, efisien, dan skalabel. Dari merancang antarmuka menawan hingga membangun infrastruktur backend yang kokoh.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link to="/projects" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300 w-full sm:w-auto">
            Lihat Project
            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link to="/contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-neutral-900/50 backdrop-blur-md border border-neutral-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white transition-all duration-300 text-neutral-300 w-full sm:w-auto">
            Hubungi Saya
          </Link>
        </motion.div>

        <motion.div
          className="flex gap-8 mt-20 text-neutral-500 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="https://github.com/mraflii" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-800 hover:text-white hover:border-neutral-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-rafli-97698a362/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-800 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:mhdrafli0710@gmail.com" className="p-3 rounded-full bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-800 hover:text-red-400 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

