import { CandidatoResultado } from "../types";

interface Props {
  data: CandidatoResultado[];
}

export const BarChart = ({ data }: Props) => {
  return (
    <div className="bar-chart-container">
      {data.map((item) => (
        <div className="bar-row" key={item.nombre}>
          <span className="bar-label">{item.nombre}</span>

          <div className="bar-track">
            <div
              className={`bar-fill ${
                item.nombre === "Jeannette Jara"
                  ? "jara"
                  : item.nombre === "José Antonio Kast"
                  ? "kast"
                  : "otros"
              }`}
              style={{ ["--w" as any]: `${item.porcentaje}%` }}
            />
          </div>

          <span className="bar-value">
            {item.porcentaje}% | {item.votos.toLocaleString("es-CL")} votos
          </span>
        </div>
      ))}
    </div>
  );
};
