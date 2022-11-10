import "./inicio.css";
import onibus3 from "../../assets/onibus3.jpeg";
import { useState } from "react";

export function Inicio() {
    const [ data, setData ] = useState([]);

    return (
        <div className="div_inicio">
           <div className="div_h2-legenda">
           <h1>O melhor do Brasil</h1>
           <h1> em um único lugar</h1>
           </div>
            <div className="div_testo">
                <h4>Faça uma cotação</h4>
                <h2>On-line & Sem Custo</h2>
            <div className="div_form">
                <form className="form_inicio">
                    <div>
                    <input className="input_origem" type="text" name="origem" required placeholder="Digite seu local de partida" onChange={(event) => {
                         setData({ ...data, origem: String(event.target.value) });
                    } }/>
                    </div>
                    <div>
                    <input className="input_destino" type="text" name="destino" placeholder="Digite seu local de destino" onChange={(event) => {
                        setData({ ...data, destino: String(event.target.value) });
                    }}/>
                    </div>
                    <div>
                    <input className="input_datetime" type="datetime-local" name="date" required onChange={(event) => {
                        setData({ ...data, date: Number(event.target.value) })
                    }}/> 
                    </div>
                    <div>                  
                    <input className="input_ida" type="checkbox" name="ida" onChange={(event) => {
                        setData({ ...data, ida: event.target.value });
                    }}/>
                    <span>Só ida</span>                  
                    <input className="input_volta" type="checkbox" name="volta" onChange={(event) => {
                        setData({ ...data, volta: event.target.value });
                    }}/>
                    <span>Ida e volta</span>
                    </div>
                    <div>
                        <button type="submit" className="button_form">Fazer Cotação</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}