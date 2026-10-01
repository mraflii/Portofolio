import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [previewPdf, setPreviewPdf] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const certifications = [
    { title: "Sertifikat Magang Industri", issuer: "Diskominsa Aceh • 2026", pdf: "/sertifikat-magang.pdf" },
    { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS Training & Certification • 2025", pdf: "/sertifikat-aws.pdf" },
    { title: "Memulai Pemrograman Dengan C", issuer: "Dicoding Indonesia • 2025", pdf: "/sertifikat-c.pdf" },
    { title: "Memulai Pemrograman Dengan Java", issuer: "Dicoding Indonesia • 2025", pdf: "/sertifikat-java.pdf" },
    { title: "Sertifikat TOEFL", issuer: "Lembaga Bahasa • 2026", pdf: "/sertifikat-toefl.pdf" },
    { title: "Pelatihan Softskill", issuer: "Politeknik Negeri Lhokseumawe • 2026", pdf: "/sertifikat-softskill.pdf" },
  ];

  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 3);

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
              <span className="inline-block text-neutral-500 text-sm font-medium tracking-wide mb-2">2022 - 2026</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Politeknik Negeri Lhokseumawe</h3>
              <p className="text-base text-neutral-400 mb-3">Jurusan Teknologi Informasi dan Komputer, Program Studi Teknik Informatika</p>
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
                {displayedCerts.map((cert, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-900 pb-4 last:border-0 last:pb-0 gap-4"
                  >
                    <div>
                      <h4 className="font-semibold text-white text-base">{cert.title}</h4>
                      <p className="text-sm mt-1 text-neutral-500">{cert.issuer}</p>
                    </div>
                    <button onClick={() => setPreviewPdf(cert.pdf)} className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-800 transition-colors shrink-0 w-fit cursor-pointer">
                      Preview Sertifikat <ExternalLink size={14} />
                    </button>
                  </motion.li>
                ))}
              </ul>
              
              {certifications.length > 3 && (
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="w-full mt-6 py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-neutral-400 hover:text-white bg-neutral-900/40 hover:bg-neutral-900 rounded-lg border border-neutral-800/60 transition-colors cursor-pointer"
                >
                  {showAllCerts ? (
                    <>Tutup <ChevronUp size={16} /></>
                  ) : (
                    <>Lihat Selengkapnya <ChevronDown size={16} /></>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Preview PDF */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setPreviewPdf(null)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#050505] border border-neutral-800 rounded-lg overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-neutral-900 bg-neutral-950">
              <h3 className="text-white font-medium flex items-center gap-2">
                <Award size={18} className="text-neutral-500" />
                Preview Sertifikat
              </h3>
              <button 
                onClick={() => setPreviewPdf(null)} 
                className="text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 px-3 py-1 rounded border border-neutral-800 transition-colors text-sm cursor-pointer"
              >
                Tutup
              </button>
            </div>
            <div className="flex-grow w-full bg-neutral-900">
              <iframe 
                src={`${previewPdf}#toolbar=0`} 
                className="w-full h-full border-none" 
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
