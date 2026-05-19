import React from "react";
import type { QuizFeedback } from "../types";
import { FonteCitada } from "./FonteCitada";

interface Props { feedback: QuizFeedback; textoExtra?: string; }

export function FeedbackEducativo({ feedback, textoExtra }: Props){
  return (
    <div className="feedback" role="region" aria-label="Feedback educativo">
      <div className="lbl">Leitura mais segura</div>
      <h4>{feedback.situacao}</h4>
      <p>{feedback.leituraSegura}</p>
      {textoExtra && <p style={{ marginTop: 8 }}>{textoExtra}</p>}
      <div className="why">
        <div className="kk">Por quê</div>
        <div className="vv">{feedback.porQue}</div>
      </div>
      <div style={{ marginTop: 14 }}>
        <FonteCitada fonte={feedback.fonte} />
      </div>
    </div>
  );
}
