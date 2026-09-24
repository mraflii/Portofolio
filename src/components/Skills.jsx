import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTailwindcss, 
  SiPhp, 
  SiMysql, 
  SiPython, 
  SiQgis 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]', shadow: 'group-hover:shadow-[0_0_25px_rgba(97,218,251,0.4)]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#38B2AC]', shadow: 'group-hover:shadow-[0_0_25px_rgba(56,178,172,0.4)]' },
    { name: 'PHP', icon: SiPhp, color: 'text-[#777BB4]', shadow: 'group-hover:shadow-[0_0_25px_rgba(119,123,180,0.4)]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]', shadow: 'group-hover:shadow-[0_0_25px_rgba(68,121,161,0.4)]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]', shadow: 'group-hover:shadow-[0_0_25px_rgba(55,118,171,0.4)]' },
    { name: 'QGIS', icon: SiQgis, color: 'text-[#589632]', shadow: 'group-hover:shadow-[0_0_25px_rgba(88,150,50,0.4)]' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 relative bg-neutral-950/50">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white tracking-tight">Keahlian</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            Teknologi dan alat yang sering saya gunakan dalam pengembangan perangkat lunak.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group ${skill.shadow}`}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-all duration-300">
                <skill.icon className={`text-5xl md:text-6xl ${skill.color} drop-shadow-md`} />
              </div>
              <h3 className="font-semibold text-white/90 text-sm md:text-base text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
