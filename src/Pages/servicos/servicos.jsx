import "./servicos.css";
import { useState } from "react";
import Modal from "react-modal";
import receptivoimg from "../../assets/receptivoimg.jpg";
import transladoimg from "../../assets/transladoimg.jpg";
import turismoimg from "../../assets/turismoimg.png";
import corporativoimg from "../../assets/corporativoimg.jpg";

const customStyle = {
  overlay: {
    background: "rgb(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

export function Servicos() {
  const [status, setStatus] = useState(false);
  const [receptivo, setReceptivo] = useState(false);
  const [translados, setTranslados] = useState(false);
  const [turismo, setTurismo] = useState(false);
  const [corporativo, setCorporativo] = useState(false);

  function close() {
    setStatus(!status);
    setReceptivo(false);
    setTranslados(false);
    setTurismo(false);
    setCorporativo(false);
  }

  function state1() {
    setReceptivo(!receptivo);
  }
  function state2() {
    setTranslados(!translados);
  }
  function state3() {
    setTurismo(!turismo);
  }
  function state4() {
    setCorporativo(!corporativo);
  }

  return (
    <div className="div_servicos">
      <button
        onClick={() => {
          close();
          state1();
        }}
      >Receptivo<img src={receptivoimg} alt="Receptivo" />
      </button>
      <button
        onClick={() => {
          close();
          state2();
        }}
      >Translados<img src={transladoimg} alt="Translados" />
      </button>
      <button
        onClick={() => {
          close();
          state3();
        }}
      >Fretamento e turismo<img src={turismoimg} alt="Fretamento e turismo" />
      </button>
      <button
        onClick={() => {
          close();
          state4();
        }}
      >Fretamento corporativo<img src={corporativoimg} alt="Fretamento corporativo" />        
      </button>
      <div className="div_modal">
        <Modal
          className="modal"
          isOpen={status}
          onRequestClose={close}
          contentLabol="menu-modal"
          style={customStyle}
        >
          {receptivo ? (
            <div>
              <span>
                111 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium velit saepe reprehenderit ut aspernatur vero fuga
                magnam architecto aliquid? Corrupti, autem. Cum dignissimos,
                voluptates repudiandae temporibus cumque laborum architecto
                illum.
              </span>
            </div>
          ) : translados ? (
            <div>
              <span>
                2222 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aut repudiandae sint porro magnam esse ad enim similique fugit
                quasi aliquam, perspiciatis reiciendis id consequuntur?
                Laudantium similique sint quibusdam fugit recusandae.
              </span>
            </div>
          ) : turismo ? (
            <div>
              <span>
                3333 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Unde cum architecto autem, voluptatum odio, rerum esse velit
                illo rem ratione nostrum ab adipisci harum maxime voluptate
                aperiam! Consectetur, velit dolor.
              </span>
            </div>
          ) : corporativo ? (
            <div>
              <span>
                4444 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur eligendi dolores pariatur maiores dignissimos odio
                totam odit veniam laboriosam libero architecto deleniti vitae
                accusamus, dolor expedita voluptates quod dolorem officiis!
              </span>
            </div>
          ) : (
            close
          )}
          <button></button>
        </Modal>
      </div>
    </div>
  );
}
