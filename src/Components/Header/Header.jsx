import "./Header.css";
import Logo from "../../assets/Logo.png";

export function Header() {
    return (
        <nav className="nav_header">
            <img src={Logo} alt="logo da empresa" />
            <div className="div_header">
                <h4 className="h4_inicio">Inicio</h4>
                <h4 className="h4_sobre-nos">Sobre nos</h4>
                <h4 className="h4_servicos">Serviços</h4>
                <h4 className="h4_contato">Contato</h4>
            </div>
        </nav>
    )
}