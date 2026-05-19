import React from "react";
import type { Cenario } from "../types";
import { RiskSignalList } from "./RiskSignalList";

interface Props {
  cenario: Cenario;
  escolha: string | undefined;
  onEscolher: (id: string) => void;
  showFeedback: boolean;
}

export function CenarioCard({ cenario, escolha, onEscolher, showFeedback }: Props){
  const safer = cenario.condutas.find(c => c.kind === "safer")!;
  return (
    <div className="cenario">
      <div className="pre">CENÁRIO · {cenario.id.toUpperCase()} · DRAFT</div>
      <h2>{cenario.titulo}</h2>
      <span className="role">{cenario.role}</span>
      <p className="narr">{cenario.narrativa}</p>

      <h3 className="section-h" style={{ marginTop: 8 }}>Sinais de atenção observáveis</h3>
      <RiskSignalList items={cenario.sinais} />

      <h3 className="section-h">Qual conduta tende a ser mais segura?</h3>
      <div className="quiz-options">
        {cenario.condutas.map((c, i) => {
          let cls = "option";
          if (showFeedback){
            if (c.kind === "safer") cls += " safer";
            else if (escolha === c.id) cls += " flag";
          } else if (escolha === c.id) cls += " selected";
          return (
            <button
              key={c.id}
              className={cls}
              disabled={showFeedback}
              onClick={() => onEscolher(c.id)}
            >
              <span className="marker">{String.fromCharCode(65+i)}</span>
              <span>{c.texto}</span>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="feedback" style={{ marginTop: 18 }}>
          <div className="lbl">Conduta mais segura</div>
          <h4>{safer.texto}</h4>
          <p>{cenario.leituraSegura}</p>
          <div className="why">
            <div className="kk">Risco ético/legal</div>
            <div className="vv">{cenario.riscoEtico}</div>
          </div>
          {escolha && (
            <div className="why">
              <div className="kk">Sobre sua escolha</div>
              <div className="vv">{cenario.condutas.find(c => c.id === escolha)?.feedback}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
