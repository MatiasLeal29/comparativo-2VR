import { useEffect, useState } from "react";
import { ResultadosData } from "../types";
import { BarChart } from "../components/BarChart";

export const Resultados = () => {
  const [data, setData] = useState<ResultadosData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/resultados.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) return <p>Cargando resultados...</p>;

  return (
    <section className="tab-section">
      <h2>Resultados Primera Vuelta</h2>

      <div className="resultados-info">
        <p><strong>Total votos:</strong> {data.nacional.total_votos.toLocaleString("es-CL")}</p>
        <p><strong>Participación:</strong> {data.nacional.participacion}</p>
      </div>

      <BarChart data={data.nacional.detalle} />
    </section>
  );
};
