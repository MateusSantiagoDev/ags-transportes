import "./Header.css";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";

const customStyle = {
  overlay: {
    background: "rgb(92, 91, 91)",
  },
};

Modal.setAppElement("#root");

export function Header() {
  const [statusModal, setStatusModal] = useState(false);
  const navegate = useNavigate()

  function close() {
    setStatusModal(!statusModal);
  }

  return (
    <nav className="nav_header">
      <img src={Logo} alt="logo da empresa" />
      <div className="div_header">
        <Link to={"/"}>
          <h4 className="h4_inicio">Inicio</h4>
        </Link>
        <Link to={"/sobre-nos"}>
          <h4 className="h4_sobre-nos">Sobre nós</h4>
        </Link>
        <button
          className="button_servicos"
          onClick={() => {
            navegate("/servicos")
          }}
        >
          <h4>Serviços</h4>
        </button>
        <button
          className="h4_contato"
          onClick={() => {
            close();
          }}
        >
          Contate-nos
        </button>
      </div>
      <div className="div_modal">
        <Modal
          className="modal"
          isOpen={statusModal}
          onRequestClose={close}
          contentLabol="menu-modal"
          style={customStyle}
        >
          <form className="form3">
            <div className="div_nome_contato">
              <span>Nome : </span>
              <input
                type="text"
                name="name"
                required
                placeholder="Digite o seu nome"
              />
            </div>

            <div className="div_email_contato">
              <span>Email : </span>
              <input
                type="email"
                name="email"
                placeholder="Email para contato"
              />
            </div>

            <div className="div_empresa_contato">
              <span>Empresa : </span>
              <input
                type="text"
                name="empresa"
                required
                placeholder="Digite o nome da empresa"
              />
            </div>

            <div className="div_descricao_contato">
              <span>Mais informações : </span>
              <textarea name="descricao" rows="10" cols="33"></textarea>
            </div>

            <div className="button_form3">
              <button type="submit" onClick={() => {
                close();
              }}>Enviar</button>
            </div>
          </form>
        </Modal>
      </div>
    </nav>
  );
}
