import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
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
    { title: 'Web', key: 'web' },
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
                  className="w-28 flex flex-col items-center"
                  key={technology.name}>
                  {technology.icon ? (
                    <>
                      <div className="w-28 h-28">
                        <BallCanvas icon={technology.icon} />
                      </div>
                      <p className="text-white text-center text-sm mt-2 font-medium">
                        {technology.name}
                      </p>
                    </>
                  ) : (
                    <div className="bg-tertiary rounded-lg px-6 py-4 min-w-[120px] text-center">
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
