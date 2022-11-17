import "./Footer.css";
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";

export function Footer(){
    return(
        <nav className="nav_footer">
            <ul className="ul_footer">
                <li className="email"><a href="/" target="_blanc"><HiOutlineMailOpen/></a></li>
                <li className="whatssap"><a href="/" target="_blanc"><RiWhatsappFill/></a></li>   
            </ul>
        </nav>
    )
}