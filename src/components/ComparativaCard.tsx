import { ComparativoItem } from "../types";

export const ComparativaCard = ({
  Tematica,
  Candidato,
  Propuesta,
  LinkPrograma,
}: ComparativoItem) => {
  return (
    <div className="card">
      <h4>{Tematica}</h4>
      <p>
        <strong>{Candidato}:</strong> {Propuesta}
      </p>
      <a href={LinkPrograma} target="_blank" className="btn-link">
        Ver programa completo
      </a>
    </div>
  );
};
