import "./inicio.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { GrFacebook } from "react-icons/gr"
import { TfiEmail } from "react-icons/tfi"

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
        <div className="div_body">
          <div className="div_h2">
            <h2>O melhor e mais confortável transporte</h2>
            <h2>para sua viagem em um único lugar</h2>
          </div>
          <div className="div_testo">
            <h4>Faça uma cotação</h4>
            <h2>On-line & Sem Custo</h2>
            <div className="div_form1">
              <form
                onSubmit={heandonsubmit}
                className="form_inicio"
                autoComplete="off"
              >
                <div className="div_input1 div_geral">
                  <input
                    className="input_origem"
                    type="text"
                    name="origem"
                    required
                    placeholder="Digite seu local de partida"
                    onChange={(event) => {
                      setData({ ...data, origem: String(event.target.value) });
                    }}
                  />

                  <input
                    className="input_destino"
                    type="text"
                    name="destino"
                    placeholder="Digite seu local de destino"
                    onChange={(event) => {
                      setData({ ...data, destino: String(event.target.value) });
                    }}
                  />
                </div>
                <div className="div_input2 div_geral">
                  <input
                    className="input_datetime"
                    type="datetime-local"
                    name="date"
                    required
                    onChange={(event) => {
                      setData({ ...data, date: Number(event.target.value) });
                    }}
                  />

                  <input
                    className="input_ida"
                    type="checkbox"
                    name="ida"
                    onChange={(event) => {
                      setData({ ...data, ida: event.target.value });
                    }}
                  />
                  <span>Só ida</span>
                  <input
                    className="input_volta"
                    type="checkbox"
                    name="volta"
                    onChange={(event) => {
                      setData({ ...data, volta: event.target.value });
                    }}
                  />
                  <span>Ida e volta</span>
                </div>
                <div>
                  <button
                    type="submit"
                    className="button_form"
                    onClick={() => {
                      navegate("/form");
                    }}
                  >
                    Fazer Cotação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
