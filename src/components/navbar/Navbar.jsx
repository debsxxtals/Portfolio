import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper max-w-7xl m-auto flex	items-center lg:justify-between	mx-7 justify-end 	p-5 md:p-0	">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" hidden 	lg:flex lg:ms-16 font-bold	"
        >
          Debs Dev Desk
        </motion.span>
        <div className="social flex gap-5	">
          <a href="https://www.facebook.com/profile.php?id=100009622511042">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://x.com/ms_munchkinXD">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="https://github.com/debsxxtals">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rmdeborah-talaba/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
