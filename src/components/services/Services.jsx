import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services flex flex-col justify-between  max-h-screen"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div
        className=" mt-5 textContainer flex items-center g-5 "
        variants={variants}
      >
        <p className="font-light text-xl text-center lg:text-right p-4 lg:p-0 ">
          I focus on helping you build robust software solutions
          <br /> and make data-driven decisions
        </p>
        <hr className="border-none mb-2.5		" />
      </motion.div>
      <motion.div
        className="titleContainer flex flex-col items-center"
        variants={variants}
      >
        <div className="title	">
          <img
            src="/people.webp"
            alt=""
            className="object-cover	w-52 md:w-64	xl:w-80 h-14  md:h-16 xl:h-24			"
          />
          <h1 className="text-4xl md:text-6xl		xl:text-8xl font-thin		">
            <motion.b whileHover={{ color: "orange" }}>Developing</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title  ">
          <h1 className="text-4xl md:text-6xl	xl:text-8xl font-thin	">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Needs.
          </h1>
          <button className=" w-40 md:w-60 xl:w-80 h-14 md:h-16 xl:h-24		text-white border-none cursor-pointer		">
            WHAT I DO?
          </button>
        </div>
      </motion.div>

      <motion.div
        className="listContainer  max-h-screen max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-4 p-10 mx-auto"
        variants={variants}
      >
        <motion.div
          className="box flex flex-col justify-between  p-8 	"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="text-lg font-medium	mb-2 text-center md:text-start">
            Custom Develop Software
          </h2>
          <p>
            We develop custom software that aligns with your business needs and
            scales with growth, ensuring high performance. Our focus on
            intuitive user interfaces guarantees a seamless experience for your
            team and customers.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-1 ">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box flex flex-col justify-between  p-8	"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="text-lg font-medium	mb-2 text-center md:text-start">
            Data-Driven Decision Making
          </h2>
          <p>
            We leverage data analysis to provide actionable insights that inform
            strategic business decisions. By transforming raw data into
            meaningful information, we help you identify trends and
            opportunities that drive growth and efficiency.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-1 ">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box flex flex-col justify-between  p-8 	"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="text-lg font-medium	mb-2 text-center md:text-start">
            System Integration
          </h2>
          <p>
            We specialize in seamlessly integrating various software systems and
            applications to ensure smooth data flow and communication across
            your business. Our solutions enhance operational efficiency by
            connecting disparate tools, allowing for streamlined processes and
            improved collaboration.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-1">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box flex flex-col justify-between  p-8  		"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="text-lg font-medium	mb-2 text-center md:text-start">
            Automation Solutions
          </h2>
          <p>
            We design and implement automation solutions that streamline
            repetitive tasks and optimize workflows, freeing up valuable time
            for your team. By integrating cutting-edge technology, we enhance
            operational efficiency and reduce the risk of human error, allowing
            your business to focus on strategic initiatives.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-1">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
