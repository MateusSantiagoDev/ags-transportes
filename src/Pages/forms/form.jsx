import "./form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Form() {
    return (
        <div className="div_geral-form">
            <div className="div_form">
                <form className="form" autoComplete="off">
                    <div className="div_nome div_cadastro">
                    <span>Nome : </span>
                    <input type="text" name="name" required placeholder="Digite o seu nome" />
                    </div>

                    <div className="div_empresa div_cadastro">
                    <span>Empresa : </span>
                    <input type="text" name="empresa" required placeholder="Digite o nome da empresa" />
                    </div>

                    <div className="div_contato div_cadastro">
                    <span>Telefone para contato : </span>
                    <input type="tel" name="contato" required placeholder="Número para contato" />
                    </div>

                    <div className="div_email div_cadastro">
                    <span>Email : </span>
                    <input type="email" name="email" placeholder="Email para contato" />
                    </div>

                    <div className="div_nome div_cadastro">
                    <span>Local da partida : </span>
                    <input type="text" name="origem" required placeholder="Digite o local da partida" />
                    </div>

                    <div className="div_nome div_cadastro">
                    <span>Destino : </span>
                    <input type="text" name="destino" required placeholder="Digite o local de destino" />
                    </div>

                    <div className="div_nome div_cadastro">
                    <span>Data : </span>
                    <input type="date" name="data" required/>
                    </div>

                    <div className="div_nome div_cadastro">
                    <span>Hora : </span>
                    <input type="time" name="hora" required/>
                    </div>

                    <div className="div_nome div_cadastro">
                    <span>Só ida : </span>
                    <input type="checkbox" name="ida" required/>
                    </div>

                    <div className="div_nome div_cadastro">
                    <span>Ida e volta : </span>
                    <input type="checkbox" name="volta" required/>
                    </div>

                    <div className="div_qtd div_cadastro">
                    <span>Quantidade de passageiros : </span>
                    <input type="number" name="quantidade" placeholder="Quantidade de pessoas"/>
                    </div>

                    <div className="div_veiculo div_cadastro">                    
                    <span>tipo de veículo : </span>                    
                    <span>passeio</span>
                    <input type="checkbox" name="passeio"/>
                    <span>Vam</span>
                    <input type="checkbox" name="vam"/>
                    <span>Microônibus</span>
                    <input type="checkbox" name="micro"/>
                    <span>onibús</span>
                    <input type="checkbox" name="onibus"/>
                    </div>

                    <div className="div_descricao div_cadastro">
                    <span>Mais informações : </span>
                    <textarea name="descricao" rows="10" cols="33"></textarea>
                    </div>

                    <div className="div_button div_cadastro">
                        <button type="submit">Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}