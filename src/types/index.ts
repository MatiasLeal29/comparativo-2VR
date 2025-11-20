// =============================
// TIPOS PARA PERFILES
// =============================
export interface Hito {
  titulo: string;
  descripcion: string;
}

export interface Perfil {
  nombre: string;
  biografia: string;
  hitos: Hito[];
}

export interface PerfilesData {
  candidatos: Perfil[];
}

// =============================
// TIPOS PARA COMPARATIVO
// =============================
export interface ComparativoItem {
  Tematica: string;
  Candidato: string;
  Propuesta: string;
  LinkPrograma: string;
}

// =============================
// TIPOS PARA RESULTADOS
// =============================
export interface CandidatoResultado {
  nombre: string;
  porcentaje: number;
  votos: number;
}

export interface NacionalData {
  total_votos: number;
  participacion: string;
  detalle: CandidatoResultado[];
}

export interface ResultadosData {
  nacional: NacionalData;
}
