import React from "react";
import type { QuizPergunta } from "../types";

interface Props {
  pergunta: QuizPergunta;
  total: number;
  index: number;
  selected: string | undefined;
  onSelect: (id: string) => void;
  showFeedback: boolean;
}

export function QuizQuestionCard({ pergunta, total, index, selected, onSelect, showFeedback }: Props){
  return (
    <div className="quiz">
      <div className="quiz-progress">
        <div className="bar"><span className="fill" style={{ width: `${(index/total)*100}%` }}></span></div>
        <div className="num">QUESTÃO {String(index+1).padStart(2,"0")} / {String(total).padStart(2,"0")}</div>
      </div>
      <h2>{pergunta.texto}</h2>
      <div className="quiz-options" role="radiogroup" aria-label="Alternativas">
        {pergunta.opcoes.map((opt, i) => {
          let cls = "option";
          if (showFeedback){
            if (opt.kind === "safer") cls += " safer";
            else if (selected === opt.id) cls += " reflect";
          } else if (selected === opt.id) cls += " selected";
          return (
            <button
              key={opt.id}
              className={cls}
              role="radio"
              aria-checked={selected === opt.id}
              disabled={showFeedback}
              onClick={() => onSelect(opt.id)}
            >
              <span className="marker">{String.fromCharCode(65+i)}</span>
              <span>{opt.texto}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
