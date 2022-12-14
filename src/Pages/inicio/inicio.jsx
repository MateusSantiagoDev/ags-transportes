import "./inicio.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Logo.png";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { GrFacebook } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import video1 from "../../assets/movies/video1.mp4";
import inicio1 from "../../assets/inicio1.jpg";
import inicio2 from "../../assets/inicio2.jpg";
import inicio3 from "../../assets/inicio3.jpg";
import inicio4 from "../../assets/inicio4.jpg";

export function Inicio() {
  const [data, setData] = useState([]);
  const navegate = useNavigate();

  async function heandonsubmit(event) {
    event.preventDefault();

    const { origem, destino, date, ida, volta } = data;
    const value = {
      origem,
      destino,
      date,
      ida,
      volta,
    };
    ////// metodo da api //////
  }

  const images = [inicio1, inicio2, inicio3, inicio4, inicio1, inicio2]

  const slider = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth);
  }, []);

  return (
    <div className="div_inicio">
      <div className="div_slider">
       <motion.div
          ref={slider}
          className="slider"
          whileTap={{ cursor: "grabbing" }}
        > 
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((el) => (
              <motion.div className="el" key={el}>
                <img src={el} alt="image-slider" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div> 
        </div> 

        <div>
          <div className="cotacao">
            <h2>faça uma cotação online e sem custo</h2>
          </div>
          <div className="texto">
            <h1>transporte sob medida para a sua nescessidade!</h1>
          </div>
        </div>
    </div>
  )

  /* const images = [inicio1, inicio2, inicio3, inicio4];

  const slider = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth);
  }, []);

  return (
    <div className="div_div">
      <div className="div_inicio">
        <motion.div
          ref={slider}
          className="slider"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((el) => (
              <motion.div className="el" key={el}>
                <img src={el} alt="image-slider" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div> */
      {/*   <div className="div_button-cotacao">
          <button
            className="button_cotacao"
            onClick={() => {
              navegate("/form");
            }}
          >
            <h4>Faça uma cotação</h4>
            <h2>On-line & Sem Custo</h2>
          </button>
        </div> */}

      {/* <div className="div_video">
        <video autoPlay muted loop className="video">
          <source className="video_mp4" src={video1} type="video/mp4" />
        </video>
      </div>

      <div className="div_logo">
        <img className="logo_img" src={Logo} alt="logo" />
      </div>

      <ul className="contatos_ul">
        <li className="whatssap_logo">
          <a href="/" target="_blanc">
            <RiWhatsappFill />
          </a>
        </li>

        <li className="instagram_logo">
          <a href="/" target="_blanc">
            <RiInstagramFill />
          </a>
        </li>

        <li className="facebook_logo">
          <a href="/" target="_blanc">
            <GrFacebook />
          </a>
        </li>

        <li className="email_logo">
          <a href="/" target="_blanc">
            <TfiEmail />
          </a>
        </li>
      </ul>
    </div> 
  );*/
}
}
