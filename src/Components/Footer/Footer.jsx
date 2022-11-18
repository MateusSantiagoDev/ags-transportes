import "./Footer.css";
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";

export function Footer(){
    return(

        <div className="div_footer">
            <div className="linha"></div>
            <div className="legenda">
            <h2>AGS Locadora de veículos Ltda.</h2>
            <h4>Rua Anastácio da Costa, 44 - São Paulo, SP, CEP 04812-420</h4>
            <h5>Tel.: (11) 97052-6503 | Instagram: Transagslocadora</h5>
            </div>
        </div>
       /*  <nav className="nav_footer">
            <ul className="ul_footer">
                <li className="email"><a href="/" target="_blanc"><HiOutlineMailOpen/></a></li>
                <li className="whatssap"><a href="/" target="_blanc"><RiWhatsappFill/></a></li>   
            </ul>
        </nav> */
    )
}