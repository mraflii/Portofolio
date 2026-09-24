import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white tracking-tight">Hubungi Saya</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-base md:text-lg">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <motion.a 
            href="mailto:email@example.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-red-500/30 hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <Mail size={24} className="md:w-7 md:h-7" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">Email</p>
              <p className="text-base md:text-lg font-bold text-white break-all">email@example.com</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://github.com/username" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-gray-400/30 hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-500/10 border border-gray-500/20 flex items-center justify-center text-gray-300 group-hover:scale-110 group-hover:bg-gray-300 group-hover:text-neutral-900 transition-all shadow-[0_0_15px_rgba(156,163,175,0.1)] group-hover:shadow-[0_0_20px_rgba(156,163,175,0.4)]">
              <FaGithub size={24} className="md:w-7 md:h-7" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">GitHub</p>
              <p className="text-base md:text-lg font-bold text-white">github.com/username</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <FaLinkedin size={24} className="md:w-7 md:h-7" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">LinkedIn</p>
              <p className="text-base md:text-lg font-bold text-white">linkedin.com/in/username</p>
            </div>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-neutral-900 border border-white/5"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MapPin size={24} className="md:w-7 md:h-7" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">Lokasi</p>
              <p className="text-base md:text-lg font-bold text-white">Aceh, Indonesia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
