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
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#911fad"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#911fad"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development Services</h2>
          <p>
          Transform your online presence with our bespoke websites. From sleek designs to robust functionality, we craft sites that leave a lasting impression.     </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile App Development Solutions</h2>
          <p>
          Dive into the mobile world with our top-tier app development. We turn your ideas into user-friendly, high-performance apps, ensuring you stay ahead in the digital game.  </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Quality Assurance</h2>
          <p>
          Empower your business with our tailored software solutions. From CMS to CRM, we create scalable, efficient software that aligns seamlessly with your organization's goals. </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Software Solutions</h2>
          <p>
          Unleash the full potential of your business with our custom software development services. Whether you need a tailored CMS, CRM, or any specialized software, we create solutions that align perfectly with your objectives. Our experienced team works closely with you to understand your business processes and challenges, delivering scalable and efficient software that empowers your organization. Drive efficiency, streamline operations, and achieve your business goals with our bespoke software development services.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
