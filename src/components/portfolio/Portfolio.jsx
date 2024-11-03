import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import webAppImage from "/webapp.jpg";
import culCloset from "/culcloset.png";
import vanilla from "/vanilla.jpg";
import python from "/python.jpg";

const items = [
  {
    id: 1,
    title: "Web Application",
    img: webAppImage,
    desc: "HymnMunity is a web/app application built with Bootstrap, Supabase, and HTML to create an engaging platform for hymn enthusiasts. The app enables users to connect, share, and discuss hymns within a dedicated community. With a clean, responsive design powered by Bootstrap, and secure data management via Supabase, HymnMunity provides a seamless and accessible experience for all users.",
  },
  {
    id: 2,
    title: "Laravel Application",
    img: culCloset,
    desc: "Culture Closet is a cultural management application developed using Laravel and Vue. It enables users to explore and manage diverse cultural costumes and stories, fostering appreciation for heritage and community engagement. With a robust backend powered by Laravel and an interactive frontend built with Vue, Culture Closet offers a seamless experience for users to connect with and celebrate cultural diversity.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: vanilla,
    desc: "This Vanilla JS app is a lightweight, interactive application designed to provide a seamless user experience without relying on external libraries. It utilizes core JavaScript features to deliver dynamic functionality, ensuring fast performance and easy maintenance. The app focuses on delivering a clean and intuitive interface, allowing users to engage with its features effortlessly.",
  },
  {
    id: 4,
    title: "Django Application",
    img: python,
    desc: "This Django app utilizes the powerful features of the Django framework to deliver a scalable and secure web application. With its robust architecture, the app offers seamless user authentication, database management, and a clean, responsive interface. Designed for rapid development, it provides an intuitive user experience while efficiently handling complex backend processes.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container flex items-center justify-center overflow-hidden ">
        <div className="wrapper m-auto flex items-center justify-center gap-12	">
          <div className="imageContainer" ref={ref}>
            <img
              src={item.img}
              alt=""
              className="object-contain	md:object-cover	"
            />
          </div>
          <motion.div
            className="textContainer flex flex-col gap-7"
            style={{ y }}
          >
            <h2 className="	text-4xl md:text-7xl	">{item.title}</h2>
            <p className="px-6 lg:px-0 text-base	md:text-xl 	">{item.desc}</p>
            <button className="border-none rounded-xl	text-white p-2.5 w-52	cursor-pointer	">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative" ref={ref}>
      <div className="progress sticky top-0 left-0 pt-12	text-center 		">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className=" h-2	md:h-2.5 bg-white		 "
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
