import "./sobreNos.css";
import frota1remove from "../../assets/frota1remove.png";
import frota2 from "../../assets/frota2.png";
import frota3remove from "../../assets/frota3remove.png";
import frota4remove from "../../assets/frota4remove.png";
import frota5remove from "../../assets/frota5remove.png";
import frota7remove from "../../assets/frota7remove.png";
import frota16remove from "../../assets/frota16remove.png";
import frota17remove from "../../assets/frota17remove.png";
import frota9remove from "../../assets/frota9remove.png";
import frota18remove from "../../assets/frota18remove.png";
import frota15remove from "../../assets/frota15remove.png";
import frota21remove from "../../assets/frota21remove.png";
import frota22remove from "../../assets/frota22remove.png";
import frota20remove from "../../assets/frota20remove.png";
import frota19remove from "../../assets/frota19remove.png";
import frota14remove from "../../assets/frota14remove.png";

export function SobreNos() {
  return (
    <div>
      <div className="div_sobrenos">
        <div className="missao">
          <h2>Missão</h2>
          <span>
            Com mais de 10 anos de experiência no setor de transporte e turismo,
            nossa missão é trazer uma forma inovadora de prestação de serviços,
            além de oferecer o melhor atendimento e relacionamento com nossos
            clientes e parceiros.
          </span>
        </div>

        <div className="visao">
          <h2>Visão</h2>
          <span>
            A visão que nos impulsiona todos os dias é ser referência no mercado
            nacional e internacional, buscando sempre alcançar reconhecimento
            através de um atendimento único e soluções inovadoras, sendo
            caracterizados pela qualidade dos serviços prestados.
          </span>
        </div>

        <div className="valores">
          <h2>Valores</h2>
          <span>
            Nossos valores estão pautados na ética e no bom relacionamento
            procedente da transparência, para assim prestarmos sempre um
            atendimento eficaz, evidenciando o valor de cada um de nossos
            clientes, colaboradores e parceiros.
          </span>
        </div>
      </div>

      <h1 className="nossa-frota">Nossa Frota</h1>

      <div className="frota">
        <div>
          <img src={frota1remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota2} alt="nossa frota" />
        </div>
        <div>
          <img src={frota3remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota4remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota5remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota7remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota16remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota9remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota21remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota22remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota19remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota15remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota17remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota20remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota18remove} alt="nossa frota" />
        </div>
        <div>
          <img src={frota14remove} alt="nossa frota" />
        </div>
      </div>
    </div>
  );
}
