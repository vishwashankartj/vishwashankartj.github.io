import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className="xs:w-[250px] w-full h-[280px] cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full card-gradient p-[1px] rounded-[20px] shadow-card h-full">
            <div className="bg-jetLight rounded-[20px] py-5 px-12 h-full flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-taupe text-[18px] font-bold text-center">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="w-full card-gradient p-[1px] rounded-[20px] shadow-card h-full">
            <div className="bg-jetLight rounded-[20px] py-5 px-6 h-full flex justify-center items-center flex-col">
              <p className="text-taupe text-[14px] text-center leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I bridge the gap between Big Data and advanced Machine Learning, specializing in high-performance model deployment.
        I am a Data Scientist/Engineer with 5+ years in developing scalable ETL workflows,
        Agentic AI & RAG based LLM applications. Expertise in PySpark, ByteCloud, AWS,
        Databricks, Snowflake and Graph Analytics. Proven ability to deliver
        data-driven solutions, enhance performance, and streamline operations.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
