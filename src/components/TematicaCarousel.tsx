interface Props {
  tematicas: string[];
  active: string;
  onSelect: (t: string) => void;
}

export const TematicaCarousel = ({ tematicas, active, onSelect }: Props) => {
  const ICONS: Record<string, string> = {
    Economía: "💰",
    Seguridad: "🛡️",
    Salud: "🏥",
    Pensiones: "💵",
    Educación: "🎓",
    Vivienda: "🏠",
    Transporte: "🚌",
    Energía: "⚡",
    "Medio Ambiente": "🌿",
    Justicia: "⚖️",
    "Relaciones Exteriores": "🌐",
    Cultura: "🎭",
    "Digitalización / IA": "🤖",
    Empleo: "📈",
  };

  return (
    <div className="tematicas-carousel">
      {tematicas.map((t) => (
        <div
          key={t}
          className={`tematica-card ${active === t ? "active" : ""}`}
          onClick={() => onSelect(t)}
        >
          <span className="tematica-icon">{ICONS[t] ?? "•"}</span>
          <span className="tematica-label">{t}</span>
        </div>
      ))}
    </div>
  );
};
