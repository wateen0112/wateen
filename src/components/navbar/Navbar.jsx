import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
    Semicolon Dev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/wateeeeeno?mibextid=LQQJ4d" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/semisemicolon?igshid=MzMyNGUyNmU2YQ==" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/wateen-aswad-3a995a1b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          
          target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
      
       
        </div>
      </div>
    </div>
  );
};

export default Navbar;
