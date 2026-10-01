import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTailwindcss, 
  SiPhp, 
  SiMysql, 
  SiPython,
  SiQgis
} from 'react-icons/si';
import { FaMicrosoft, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { Lightbulb, Users, Palette, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const hardSkills = [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#38B2AC]' },
    { name: 'PHP', icon: SiPhp, color: 'text-[#777BB4]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
    { name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]' },
    { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]' },
    { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white' },
    { name: 'QGIS', icon: SiQgis, color: 'text-[#589632]' },
    { name: 'Figma', icon: FaFigma, color: 'text-[#F24E1E]' },
    { name: 'Canva', icon: Palette, color: 'text-[#00C4CC]' },
    { name: 'Microsoft Office', icon: FaMicrosoft, color: 'text-[#00A4EF]' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb, color: 'text-amber-400' },
    { name: 'Teamwork', icon: Users, color: 'text-blue-400' },
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center justify-center p-6 bg-[#050505] border border-neutral-900 hover:border-neutral-700 transition-colors group"
    >
      <div className={`mb-4 transition-transform group-hover:scale-110 duration-300 ${skill.color}`}>
        <skill.icon className="text-4xl" />
      </div>
      <h3 className="font-medium text-neutral-300 text-sm text-center">{skill.name}</h3>
    </motion.div>
  );

  return (
    <section id="skills" className="py-12 px-6 md:px-12 relative max-w-7xl mx-auto w-full">
      <div className="w-full border-t border-neutral-900 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Keahlian</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base">
            Teknologi dan alat yang sering saya gunakan dalam pengembangan perangkat lunak, serta kemampuan interpersonal yang saya miliki.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Hard Skills */}
          <div>
            <h3 className="text-xl font-medium text-neutral-200 mb-6 flex items-center gap-2">
              <span className="h-1 w-6 bg-white/20 rounded-full"></span>
              Hard Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {(showAllSkills ? hardSkills : hardSkills.slice(0, 6)).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            {hardSkills.length > 6 && (
              <button
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="w-full mt-6 py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-neutral-400 hover:text-white bg-neutral-900/40 hover:bg-neutral-900 rounded-lg border border-neutral-800/60 transition-colors cursor-pointer"
              >
                {showAllSkills ? (
                  <>Tutup <ChevronUp size={16} /></>
                ) : (
                  <>Lihat Semua Hard Skills <ChevronDown size={16} /></>
                )}
              </button>
            )}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-medium text-neutral-200 mb-6 flex items-center gap-2">
              <span className="h-1 w-6 bg-white/20 rounded-full"></span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
