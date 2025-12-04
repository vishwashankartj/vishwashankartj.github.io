import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap, github, linkedin } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 top-[150px] 
          max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[35px] md:text-[40px] xmd:text-[60px] lg:text-[75px] xl:text-[90px]
                text-eerieBlack text-[35px] font-mova
                font-extrabold uppercase cursor-pointer transition-colors duration-300 ease-in-out
                hover:text-[#0891b2]">
                Vishwashankar
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              I Build Scalable Data Systems and <br className="sm:block hidden" />
              Intelligent LLM Applications.
              <br className="block" />
              <span className="text-eerieBlack text-[20px] font-bold">Data Scientist | Engineer</span>
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-5">
              <a
                href="https://github.com/vishwashankartj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-night flex justify-center items-center 
            hover:bg-battleGray hover:scale-110 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                <img src={github} alt="GitHub" className="w-7 h-7 object-contain" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwashankar-t-janakiraman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-night flex justify-center items-center 
            hover:bg-battleGray hover:scale-110 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                <img src={linkedin} alt="LinkedIn" className="w-9 h-9 object-contain" />
              </a>
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center z-10">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div className="absolute bottom-0 right-0 
          w-full h-[40vh] md:w-[55vw] md:h-[50vh] lg:h-[80vh]
          overflow-hidden">
          <img
            className="absolute bottom-0 right-0 
              h-full w-auto object-contain object-bottom
              max-w-none"
            src={shaq}
            alt="vishwashankar"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
