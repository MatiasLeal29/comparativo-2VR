import React from "react";
import { ComparativoItem } from "../types";

export const ComparativaCard = ({
  Tematica,
  Candidato,
  Propuesta,
  LinkPrograma,
  Cita,
  Fuente,
}: ComparativoItem) => {
  return (
    <div className="card">
      <h4>{Tematica}</h4>

      <p>
        <strong>{Candidato}:</strong> {Propuesta}
      </p>

      {Cita && (
        <p className="cita">
          “{Cita}”
          <br />
          <a href={Fuente || LinkPrograma} target="_blank" rel="noreferrer" className="fuente">
            Fuente
          </a>
        </p>
      )}

      <a href={LinkPrograma} target="_blank" rel="noreferrer" className="btn-link">
        Ver programa completo
      </a>
    </div>
  );
};
