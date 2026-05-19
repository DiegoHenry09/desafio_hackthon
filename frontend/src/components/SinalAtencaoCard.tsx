import React from "react";
import type { TipoViolenciaSinais } from "../types";
import { RiskSignalList } from "./RiskSignalList";

interface Props {
  tipo: TipoViolenciaSinais;
  onExplorar?: (slug: string) => void;
}

export function SinalAtencaoCard({ tipo, onExplorar }: Props){
  return (
    <article className={`sinal-card sinal-card--${tipo.nivelAtencao}`} id={tipo.slug}>
      <header className="sinal-card-head">
        <span className="sinal-card-ordem mono" aria-hidden="true">
          {String(tipo.ordemEspectro).padStart(2, "0")}
        </span>
        <div className="sinal-card-titles">
          <h3>{tipo.nome}</h3>
          <span className={`sinal-nivel sinal-nivel--${tipo.nivelAtencao}`}>
            {tipo.nivelLabel}
          </span>
        </div>
      </header>

      <p className="sinal-card-resumo">{tipo.resumo}</p>
      <p className="sinal-card-nivel-desc muted">{tipo.nivelDescricao}</p>

      <h4 className="sinal-card-sub">Sinais de atenção observáveis</h4>
      <RiskSignalList items={tipo.sinais} />

      <p className="sinal-card-lembrete" role="note">
        <b>Lembrete:</b> {tipo.lembrete}
      </p>

      <footer className="sinal-card-foot">
        <span className="mono sinal-card-source">{tipo.sourceRefs}</span>
        {onExplorar && (
          <button
            type="button"
            className="btn btn-ghost small"
            onClick={() => onExplorar(tipo.slug)}
          >
            Ver na biblioteca
          </button>
        )}
      </footer>
    </article>
  );
}
