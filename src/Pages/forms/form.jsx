import "./form.css";

export function Form() {
    return (
        <div className="div_geral-form">
            <div className="div_form">
                <form className="form">
                    <div className="div_nome">
                    <span>Nome</span>
                    <input type="text" name="name" required placeholder="Digite o seu nome" />
                    </div>

                    <div className="div_contato">
                    <span>Telefone para contato</span>
                    <input type="tel" name="contato" required placeholder="Número para contato" />
                    </div>

                    <div className="div_email">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email para contato" />
                    </div>

                    <div className="div_qtd">
                    <span>Quantidade de passageiros</span>
                    <input type="number" name="quantidade" placeholder="Quantidade de pessoas"/>
                    </div>

                    <div className="div_veiculo">
                    <span>tipo de veículo</span>
                    <span>passeio</span>
                    <input type="checkbox" name="passeio"/>
                    <span>Vam</span>
                    <input type="checkbox" name="vam"/>
                    <span>Micro</span>
                    <input type="checkbox" name="micro"/>
                    <span>onibús</span>
                    <input type="checkbox" name="onibus"/>
                    </div>

                    <div className="div_descricao">
                    <span>Descrição</span>
                    <input type="hidden" name="descricao"/>
                    </div>

                </form>
            </div>
        </div>
    )
}