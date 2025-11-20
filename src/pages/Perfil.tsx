import { useEffect, useState } from "react";
import { Perfil } from "../types";
import { PerfilCard } from "../components/PerfilCard";

export const PerfilPage = () => {
  const [data, setData] = useState<{ candidatos: Perfil[] }>({ candidatos: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/perfiles.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <section className="tab-section">
      <h2>Perfil Profesional</h2>

      <div className="perfil-grid">
        {data.candidatos.map((p, i) => (
          <PerfilCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};
