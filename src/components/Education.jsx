import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, ChevronDown } from 'lucide-react';

const Education = () => {
  const [previewPdf, setPreviewPdf] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const educations = [
    {
      period: "2022 - 2026",
      school: "Politeknik Negeri Lhokseumawe",
      degree: "D-IV Teknik Informatika",
      description: "Mempelajari dasar-dasar ilmu komputer, pengembangan perangkat lunak, algoritma, serta penerapan teknologi informasi dalam pemecahan masalah. Aktif dalam berbagai proyek akademik dan praktikum."
    },
    {
      period: "2018 - 2021",
      school: "SMK Negeri 1 Lhokseumawe",
      degree: "Teknik Komputer Jaringan",
      description: "Mempelajari dasar-dasar keahlian teknis komputer, jaringan, dan pemrograman. Membangun fondasi awal yang kuat dalam bidang teknologi informasi sebelum melanjutkan ke perguruan tinggi."
    }
  ];

  const certifications = [
    { title: "Sertifikat Magang Industri", issuer: "Diskominsa Aceh • 2026", pdf: "/sertifikat-magang.pdf" },
    { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS Training & Certification • 2025", pdf: "/sertifikat-aws.pdf" },
    { title: "Memulai Pemrograman Dengan C", issuer: "Dicoding Indonesia • 2025", pdf: "/sertifikat-c.pdf" },
    { title: "Memulai Pemrograman Dengan Java", issuer: "Dicoding Indonesia • 2025", pdf: "/sertifikat-java.pdf" },
    { title: "Sertifikat TOEFL", issuer: "Lembaga Bahasa • 2026", pdf: "/sertifikat-toefl.pdf" },
    { title: "Pelatihan Softskill", issuer: "Politeknik Negeri Lhokseumawe • 2026", pdf: "/sertifikat-softskill.pdf" },
  ];

  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 4);

  return (
    <section id="education" className="py-16 px-6 md:px-12 relative max-w-7xl mx-auto w-full min-h-[85vh] overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            Pendidikan & Sertifikasi
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Latar Belakang <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Akademik</span>.
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
            Perjalanan pendidikan formal dan pencapaian sertifikasi profesional saya dalam dunia teknologi.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Education Cards */}
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 md:p-10 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm relative overflow-hidden group hover:border-neutral-700/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-purple-400 text-sm font-semibold tracking-wide mb-2 uppercase">{edu.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                    <p className="text-lg text-neutral-300 mb-4 font-medium">{edu.degree}</p>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="relative pt-8">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-700"></span>
              Sertifikasi
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-700"></span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {displayedCerts.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-neutral-900/20 border border-neutral-800/50 hover:bg-neutral-900/40 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base md:text-lg leading-snug group-hover:text-blue-300 transition-colors">{cert.title}</h4>
                      <p className="text-sm mt-2 text-neutral-500 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-neutral-800/50">
                    <button 
                      onClick={() => setPreviewPdf(cert.pdf)} 
                      className="w-full flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 bg-[#050505] hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer"
                    >
                      Lihat Dokumen <ExternalLink size={16} className="text-blue-400" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {certifications.length > 4 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-10 flex justify-center"
              >
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900/50 border border-neutral-800 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  {showAllCerts ? 'Tutup' : 'Lihat Semua Sertifikasi'}
                  <div className={`transition-transform duration-300 ${showAllCerts ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Preview PDF */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setPreviewPdf(null)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#050505] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-5 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
              <h3 className="text-white font-medium flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Award size={16} />
                </div>
                Pratinjau Sertifikat
              </h3>
              <button 
                onClick={() => setPreviewPdf(null)} 
                className="text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-800 hover:border-red-500/50 transition-all text-sm font-medium cursor-pointer"
              >
                Tutup
              </button>
            </div>
            <div className="flex-grow w-full bg-neutral-900 p-2">
              <iframe 
                src={`${previewPdf}#toolbar=0`} 
                className="w-full h-full border border-neutral-800 rounded-xl bg-white" 
                title="Sertifikat Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
