import "./inicio.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { GrFacebook } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import video1 from "../../assets/movies/video1.mp4";

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
  return (
    <div className="div_div">
      
      
        <div className="div_inicio">
        <div className="div_h2">
          <h2>O melhor do brasil em um único lugar</h2>
        </div>
        <div className="div_button-cotacao">
        <button className="button_cotacao" onClick={() => {
          navegate("/form")
        }}>      
          <h4>Faça uma cotação</h4>
          <h2>On-line & Sem Custo</h2>
        
      </button>
      </div>
      </div>

      <div className="div_video">
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
  );
}
