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
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping you build robust software solutions
          <br /> and make data-driven decisions
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Developing</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Needs.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Develop Software</h2>
          <p>
            We develop custom software that aligns with your business needs and
            scales with growth, ensuring high performance. Our focus on
            intuitive user interfaces guarantees a seamless experience for your
            team and customers.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Data-Driven Decision Making</h2>
          <p>
            We leverage data analysis to provide actionable insights that inform
            strategic business decisions. By transforming raw data into
            meaningful information, we help you identify trends and
            opportunities that drive growth and efficiency.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>System Integration</h2>
          <p>
            We specialize in seamlessly integrating various software systems and
            applications to ensure smooth data flow and communication across
            your business. Our solutions enhance operational efficiency by
            connecting disparate tools, allowing for streamlined processes and
            improved collaboration.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Automation Solutions</h2>
          <p>
            We design and implement automation solutions that streamline
            repetitive tasks and optimize workflows, freeing up valuable time
            for your team. By integrating cutting-edge technology, we enhance
            operational efficiency and reduce the risk of human error, allowing
            your business to focus on strategic initiatives.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
