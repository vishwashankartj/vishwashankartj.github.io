import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const categories = [
    { title: 'Databases', key: 'databases' },
    { title: 'Data Services', key: 'dataServices' },
    { title: 'Cloud', key: 'cloud' },
    { title: 'LLM', key: 'llm' },
    { title: 'Development', key: 'development' },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 space-y-10">
        {categories.map((category) => (
          <div key={category.key}>
            <h3 className="text-white text-xl font-semibold mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-10">
              {technologies[category.key]?.map((technology) => (
                <div
                  className="w-28 flex flex-col items-center justify-center group"
                  key={technology.name}>
                  {technology.icon && !technology.text ? (
                    <>
                      <div className="w-28 h-28 rounded-full flex justify-center items-center shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),inset_10px_10px_20px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.3)] bg-gradient-to-br from-white via-[#e0e0e0] to-[#b0b0b0] transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center text-sm mt-2 font-semibold">
                        {technology.name}
                      </p>
                    </>
                  ) : (
                    <div className="bg-tertiary rounded-lg px-6 py-4 min-w-[120px] text-center shadow-card border border-white/10 transition-transform duration-300 group-hover:scale-105">
                      <p className="text-white text-base font-semibold">
                        {technology.name}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
