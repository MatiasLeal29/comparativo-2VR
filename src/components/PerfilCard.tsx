import { Perfil } from "../types";

export const PerfilCard = ({ nombre, biografia, hitos, foto }: Perfil) => {
  const lower = nombre.toLowerCase();
  const candidateClass = lower.includes("jara") ? "jara" : lower.includes("kast") ? "kast" : "";

  return (
    <div className={`perfil-card ${candidateClass}`}>
      <div className="perfil-header">
        {foto && (
          <img src={foto} alt={`${nombre} foto`} className="perfil-foto" />
        )}
        <h3>{nombre}</h3>
      </div>

      <p className="perfil-bio">{biografia}</p>

      <ul className="hitos-list">
        {hitos.map((h, i) => (
          <li key={i}>
            <span className="hito-titulo">{h.titulo}:</span> {h.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};
