import { motion } from 'framer-motion';
import { Code2, Map, Database, Brain, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  const focusAreas = [
    { title: "Web GIS Developer", icon: Map, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "group-hover:border-emerald-500/30" },
    { title: "Software Developer", icon: Code2, color: "text-blue-400", bg: "bg-blue-400/10", border: "group-hover:border-blue-500/30" },
    { title: "Data Analyst", icon: Database, color: "text-amber-400", bg: "bg-amber-400/10", border: "group-hover:border-amber-500/30" },
    { title: "AI Enthusiast", icon: Brain, color: "text-purple-400", bg: "bg-purple-400/10", border: "group-hover:border-purple-500/30" },
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-12 relative max-w-7xl mx-auto w-full overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="w-full">
        {/* Page Hero */}
        <div className="mb-16 md:mb-24 pt-10 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-2 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Tentang Saya
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Membangun Solusi Digital dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Kode & Data</span>.
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
              Saya adalah lulusan Teknik Informatika dari Politeknik Negeri Lhokseumawe. Memiliki passion yang mendalam terhadap pengembangan web modern, sistem basis data, dan Geographic Information System (GIS).
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="shrink-0 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-neutral-800 bg-[#050505] p-2 shadow-2xl">
              <img src={profileImg} alt="Muhammad Rafli" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mt-12">
          
          {/* Left Column (Bio & Education) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            {/* Bio Section */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 backdrop-blur-sm relative overflow-hidden group hover:border-neutral-700/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold text-white mb-6">Perjalanan & Visi</h3>
              <div className="space-y-4 text-neutral-400 leading-relaxed text-sm md:text-base">
                <p>
                  Saya terbiasa mengembangkan aplikasi berbasis web mulai dari tahap awal perancangan basis data, pengolahan data, hingga visualisasi informasi yang interaktif dan mudah dipahami oleh pengguna.
                </p>
                <p>
                  Selain pemrograman, saya sangat tertarik untuk terus mengeksplorasi teknologi baru di bidang software development, IT support, dan pengelolaan server. Saya selalu terbuka terhadap kesempatan belajar dan tantangan pengalaman profesional baru di industri IT.
                </p>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/50 hover:border-neutral-700/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5">
                  <GraduationCap size={24} />
                </div>
                <h4 className="font-semibold text-white mb-4">Pendidikan</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm text-neutral-300 font-medium">Politeknik Negeri Lhokseumawe</h5>
                    <p className="text-xs text-neutral-500 mt-1">D-IV Teknik Informatika<br/>(2022 - 2026)</p>
                  </div>
                  <div className="w-full h-px bg-neutral-800/60"></div>
                  <div>
                    <h5 className="text-sm text-neutral-300 font-medium">SMK Negeri 1 Lhokseumawe</h5>
                    <p className="text-xs text-neutral-500 mt-1">Teknik Komputer Jaringan<br/>(2018 - 2021)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/50 hover:border-neutral-700/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-semibold text-white mb-4">Pengalaman</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm text-neutral-200 font-medium">Web Developer</h5>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-xs text-cyan-400 font-medium">Diskominsa Aceh</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-medium">Magang Industri</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-2 font-mono">04 Agustus 2025 - 04 Januari 2026</p>
                  </div>
                  <div className="w-full h-px bg-neutral-800/60"></div>
                  <div>
                    <h5 className="text-sm text-neutral-200 font-medium">Staf Administrasi</h5>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-xs text-cyan-400 font-medium">DKPPP Lhokseumawe</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-medium">PKL</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-2 font-mono">04 November 2019 - 04 Februari 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Focus Areas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Area Fokus Utama</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {focusAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div key={idx} className={`group p-5 rounded-2xl bg-neutral-950/50 border border-neutral-900 ${area.border} transition-all duration-300 hover:shadow-lg hover:shadow-${area.color.replace('text-', '')}/5 flex items-center gap-5 cursor-default`}>
                    <div className={`shrink-0 w-14 h-14 rounded-2xl ${area.bg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                      <Icon className={area.color} size={26} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-200 group-hover:text-white transition-colors text-base">{area.title}</h4>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
