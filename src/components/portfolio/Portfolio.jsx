import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Yjoz ",
    img: "yjoz.png",
    desc: "Website for Renting Items in the United Arab Emirates.",
    src:'https://yjoz.com'
  },
  {
    id: 2,
    title:"Food Website Template",
    img: "food-website.png",
    desc: "Food Website Template",
    src:'https://wateen0112.github.io/food-website-/'
  },
  {
    id: 3,
    title: "Self-care provider app",
    img: "self-care.png",
    desc: "Dashboard of Selfcare Mobile Apps to manage beauty salons in KSA",
 
    src:'' },
  {
    id: 4,
    title: "QR Code Germany",
    img: "qr-code.png",
    desc: "Qr-code is a website to convert your information and data to Qr-code  \n made with ELKOOD team,  funded by ELKOOD Software company",
    src:'https://qrcodegermany.de/en'},
  {
    id: 5,
    title: "Ararat outdoors",
    img: "ararat.png",
    desc: "Ararat outdoors is an e-commerce website made for Ararat Brand in Qamishlo - Syira",
    src:'https://araratoutdoors.site/main/'},{
      id: 5,
      title: "FlyOrder - Dashboard",
      img: "fly-order.png",
      desc: "Dashboard of FlyOrder Mobile Apps for delivering food  in Damascus-Syria   \n made with ELKOOD team,  funded by ELKOOD Software company",
      src:''},
    
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="_blank" href={item.src}> 
            <button className="preview-btn">  
              
                              
     Preview
              </button>
              </a>
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
