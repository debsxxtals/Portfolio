import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero relative overflow-hidden">
      <div className="wrapper m-auto object-contain">
        <motion.div
          className="textContainer flex flex-col justify-center gap-5 sm:gap-10 items-center text-center lg:items-start lg:text-start"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="font-extrabold mt-28 text-nowrap text-lg sm:text-3xl max-w-prose"
            variants={textVariants}
          >
            RIA MIE DEBORAH TALABA
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl max-w-prose font-semibold"
          >
            Data Analyst & Web Developer
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons cursor-pointer"
          >
            <a href="#Portfolio">
              <motion.button
                className="p-5 border-2 border-solid border-white rounded-xl bg-transparent text-white mr-5 cursor-pointer font-light"
                variants={textVariants}
              >
                See the Latest Works
              </motion.button>
            </a>

            <a href="#Contact">
              <motion.button
                variants={textVariants}
                className="p-5 border-2 border-solid border-white rounded-xl bg-transparent text-white mr-5 font-light mt-3 md:mt-0"
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="max-w-14 m-auto"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer absolute whitespace-nowrap font-bold	"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Developer Analyst
      </motion.div>
      <div className="imageContainer absolute top-0 right-0 object-contain  md:right-0">
        <img src="/photo.webp" alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default Hero;
