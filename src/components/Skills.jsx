import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiPhp, SiMysql, SiPython, SiQgis, SiNextdotjs
} from 'react-icons/si';
import { FaMicrosoft, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { Lightbulb, Users, Palette, ChevronDown, MessageSquare, Brain, Clock } from 'lucide-react';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const hardSkills = [
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', hover: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]' },
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]', hover: 'hover:shadow-[0_0_25px_rgba(97,218,251,0.15)]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#38B2AC]', hover: 'hover:shadow-[0_0_25px_rgba(56,178,172,0.15)]' },
    { name: 'PHP', icon: SiPhp, color: 'text-[#777BB4]', hover: 'hover:shadow-[0_0_25px_rgba(119,123,180,0.15)]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]', hover: 'hover:shadow-[0_0_25px_rgba(68,121,161,0.15)]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]', hover: 'hover:shadow-[0_0_25px_rgba(55,118,171,0.15)]' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', hover: 'hover:shadow-[0_0_25px_rgba(51,153,51,0.15)]' },
    { name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]', hover: 'hover:shadow-[0_0_25px_rgba(227,79,38,0.15)]' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]', hover: 'hover:shadow-[0_0_25px_rgba(21,114,182,0.15)]' },
    { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]', hover: 'hover:shadow-[0_0_25px_rgba(247,223,30,0.15)]' },
    { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]', hover: 'hover:shadow-[0_0_25px_rgba(240,80,50,0.15)]' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white', hover: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]' },
    { name: 'QGIS', icon: SiQgis, color: 'text-[#589632]', hover: 'hover:shadow-[0_0_25px_rgba(88,150,50,0.15)]' },
    { name: 'Figma', icon: FaFigma, color: 'text-[#F24E1E]', hover: 'hover:shadow-[0_0_25px_rgba(242,78,30,0.15)]' },
    { name: 'Canva', icon: Palette, color: 'text-[#00C4CC]', hover: 'hover:shadow-[0_0_25px_rgba(0,196,204,0.15)]' },
    { name: 'Office', icon: FaMicrosoft, color: 'text-[#00A4EF]', hover: 'hover:shadow-[0_0_25px_rgba(0,164,239,0.15)]' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb, color: 'text-amber-400', hover: 'hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]' },
    { name: 'Teamwork', icon: Users, color: 'text-blue-400', hover: 'hover:shadow-[0_0_25px_rgba(96,165,250,0.15)]' },
    { name: 'Communication', icon: MessageSquare, color: 'text-purple-400', hover: 'hover:shadow-[0_0_25px_rgba(192,132,252,0.15)]' },
    { name: 'Critical Thinking', icon: Brain, color: 'text-emerald-400', hover: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]' },
    { name: 'Time Management', icon: Clock, color: 'text-rose-400', hover: 'hover:shadow-[0_0_25px_rgba(251,113,133,0.15)]' },
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`flex flex-col items-center justify-center p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all duration-300 group hover:bg-neutral-900/60 hover:border-neutral-700/50 ${skill.hover}`}
    >
      <div className={`mb-4 transition-transform group-hover:scale-110 duration-300 ${skill.color}`}>
        <skill.icon className="text-4xl drop-shadow-md" />
      </div>
      <h3 className="font-semibold text-neutral-300 group-hover:text-white transition-colors text-sm text-center tracking-wide">{skill.name}</h3>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 px-6 md:px-12 relative max-w-7xl mx-auto w-full min-h-[85vh] overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

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
            Keahlian
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Teknologi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">&</span> Tools.
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
            Kumpulan bahasa pemrograman, framework, dan alat yang saya kuasai untuk membangun solusi perangkat lunak yang fungsional dan estetis.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Hard Skills */}
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-700"></span>
              Hard Skills
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-700"></span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {(showAllSkills ? hardSkills : hardSkills.slice(0, 10)).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            {hardSkills.length > 10 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 flex justify-center"
              >
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900/50 border border-neutral-800 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  {showAllSkills ? 'Tutup' : 'Lihat Semua'}
                  <div className={`transition-transform duration-300 ${showAllSkills ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
              </motion.div>
            )}
          </div>

          {/* Soft Skills */}
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-700"></span>
              Soft Skills
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-700"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className="w-[45%] sm:w-[30%] md:w-[20%]">
                  <SkillCard skill={skill} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
