import { useEffect, useState } from "react";
import { ComparativoItem } from "../types";
import { TematicaCarousel } from "../components/TematicaCarousel";
import { ComparativaCard } from "../components/ComparativaCard";

export const Comparativa = () => {
  const [data, setData] = useState<ComparativoItem[]>([]);
  const [tematicaActiva, setTematicaActiva] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/comparativo.json");
      const items: ComparativoItem[] = await res.json();
      setData(items);

      if (items.length > 0) {
        setTematicaActiva(items[0].Tematica);
      }
    };
    fetchData();
  }, []);

  const tematicasUnicas = [...new Set(data.map((i) => i.Tematica))];

  const filtrados = data.filter((i) => i.Tematica === tematicaActiva);

  return (
    <section className="tab-section">
      <h2>Comparativa por Temática</h2>

      <TematicaCarousel
        tematicas={tematicasUnicas}
        active={tematicaActiva}
        onSelect={setTematicaActiva}
      />

      <div className="cards-container">
        {filtrados.map((item, idx) => (
          <ComparativaCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};
