import "./Header.css";
import Logo from "../../assets/Logo.png";
import fundoEdt from "../../assets/fundoEdt.png";
import { Link, useNavigate } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";
import Modal from "react-modal";
import { useState } from "react";

/* const customStyle = {
  overlay: {
    background: "rgb(92, 91, 91)",
  },
};

Modal.setAppElement("#root"); */

export function Header() {
/*   const [statusModal, setStatusModal] = useState(false); */
  const navegate = useNavigate()

 /*  function close() {
    setStatusModal(!statusModal);
  } */

  return (
      <div className="div_geral-header">
        
        <div className="div_vazia0">
        <div className="div_vazia1"></div>
        <div className="div_vazia2"></div>

        </div>
        <div className="div_logo">
          <img src={Logo} alt="logo" />
          <div className="div_link">
          <Link className="link link_inicio" to={"/"}>
          <h4 className="h4_link">Inicio</h4>
        </Link>
        <Link className="link" to={"/sobre-nos"}>
          <h4 className="h4_link">Sobre nós</h4>
        </Link>
        <Link className="link" to={"/servicos"}><h4 className="h4_link">Serviços</h4></Link>
          
        
          <a className="button_contato link" href="/" target="_blanc"><h4 className="h4_link">Contate-nos</h4></a>
          </div>
          <div className="div_vazia3"></div>
        </div>
      </div>

   /*  <div>
      <div className="div_vazia"></div>
      <div className="div_header">
      <div>     
      <img src={Logo} alt="logo da empresa" />
      <div className="div_header">
        <Link className="link link_inicio" to={"/"}>
          <h4 className="h4_inicio">Inicio</h4>
        </Link>
        <Link className="link" to={"/sobre-nos"}>
          <h4 className="h4_sobre-nos">Sobre nós</h4>
        </Link>
        <Link className="link" to={"/servicos"}><h4 className="button_servicos">Serviços</h4></Link>
          
        
          <a className="button_contato link" href="/" target="_blanc"><h4>Contate-nos</h4></a>
      </div>
      </div>
      </div>
     
      {/* <div className="div_modal">
        <Modal
          className="modal"
          isOpen={statusModal}
          onRequestClose={close}
          contentLabol="menu-modal"
          style={customStyle}
        >
          <div className="btm_div">
          <button onClick={close}><CgCloseO size={15} color="red" className="btm_modal"/></button>
          </div>
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
    </div> */
  );
}
