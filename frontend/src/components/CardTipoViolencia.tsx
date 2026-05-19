import React from "react";
import type { Tipo } from "../types";

const DESC: Record<string, string> = {
  moral:     "Padrões de conduta repetidos que afetam o trabalho ou bem-estar de uma pessoa específica.",
  sexual:    "Condutas de natureza sexual não desejadas, especialmente em contextos com assimetria.",
  discrim:   "Tratamento desigual baseado em características protegidas, repetido no tempo.",
  organizac: "Práticas de cultura organizacional que criam pressão sistemática sobre grupos.",
};

interface Props { tipo: Tipo; onPick: (id: string) => void; }

export function CardTipoViolencia({ tipo, onPick }: Props){
  return (
    <button className="tv" onClick={() => onPick(tipo.id)} aria-label={`Filtrar por ${tipo.label}`}>
      <div className="kind">TIPO</div>
      <h3>{tipo.label}</h3>
      <p>{DESC[tipo.id] || "Categoria educativa para organizar materiais."}</p>
      <div className="n">{tipo.count} CONTEÚDOS</div>
    </button>
  );
}
