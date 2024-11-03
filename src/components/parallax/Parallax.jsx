import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax relative flex items-center justify-center overflow-hidden	"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className=" text-7xl	lg:text-8xl text-center	"
      >
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains 	bg-bottom absolute	bg-contain lg:bg-cover bg-no-repeat	"></motion.div>
      <motion.div
        className="planets bg-contain lg:bg-cover bg-bottom absolute bg-no-repeat"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars bg-cover bg-bottom absolute"></motion.div>
    </div>
  );
};

export default Parallax;
