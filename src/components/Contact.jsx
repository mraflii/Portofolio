import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-12 relative max-w-7xl mx-auto w-full">
      <div className="w-full border-t border-neutral-900 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Hubungi Saya</h2>
          <p className="mt-4 text-neutral-400 text-base">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.a
            href="mailto:mhdrafli0710@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-6 md:p-8 bg-[#050505] border border-neutral-900 hover:border-red-500/50 transition-colors group"
          >
            <div className="text-red-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-1">Email</p>
              <p className="text-base font-medium text-neutral-300 group-hover:text-white transition-colors break-all">mhdrafli0710@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/mraflii" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 p-6 md:p-8 bg-[#050505] border border-neutral-900 hover:border-gray-400/50 transition-colors group"
          >
            <div className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
              <FaGithub size={28} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-1">GitHub</p>
              <p className="text-base font-medium text-neutral-300 group-hover:text-white transition-colors">github.com/mraflii</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/muhammad-rafli-97698a362/" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 p-6 md:p-8 bg-[#050505] border border-neutral-900 hover:border-blue-500/50 transition-colors group"
          >
            <div className="text-blue-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300">
              <FaLinkedin size={28} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-1">LinkedIn</p>
              <p className="text-base font-medium text-neutral-300 group-hover:text-white transition-colors">linkedin.com/in/muhammad-rafli...</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6 p-6 md:p-8 bg-[#050505] border border-neutral-900 group"
          >
            <div className="text-emerald-400 group-hover:scale-110 transition-all duration-300">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-1">Lokasi</p>
              <p className="text-base font-medium text-neutral-300 group-hover:text-white transition-colors">Aceh, Indonesia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
