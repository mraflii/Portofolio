import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'mhdrafli0710@gmail.com',
      icon: Mail,
      href: 'mailto:mhdrafli0710@gmail.com',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]'
    },
    {
      name: 'GitHub',
      value: 'github.com/mraflii',
      icon: FaGithub,
      href: 'https://github.com/mraflii',
      color: 'text-neutral-300',
      bg: 'bg-neutral-500/10',
      border: 'hover:border-neutral-500/50 hover:shadow-[0_0_30px_rgba(115,115,115,0.15)]'
    },
    {
      name: 'LinkedIn',
      value: 'Muhammad Rafli',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/muhammad-rafli-97698a362/',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-12 relative max-w-7xl mx-auto w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            Kontak
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Berkolaborasi</span>.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            Tertarik untuk membangun sesuatu yang luar biasa bersama? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all duration-500 flex flex-col items-center text-center ${contact.border}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${contact.bg} flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-2 duration-300`}>
                  <Icon size={32} className={contact.color} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{contact.name}</h3>
                <p className="text-sm text-neutral-400 mb-6 font-medium">{contact.value}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
                  Hubungi <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#050505] border border-neutral-800 text-neutral-400 text-sm shadow-xl">
            <MapPin size={16} className="text-emerald-400" />
            Berbasis di <span className="text-white font-medium">Aceh, Indonesia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
