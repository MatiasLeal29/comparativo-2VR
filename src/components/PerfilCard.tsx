import { Perfil } from "../types";

export const PerfilCard = ({ nombre, biografia, hitos }: Perfil) => {
  return (
    <div className="perfil-card">
      <div className="perfil-header">
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
