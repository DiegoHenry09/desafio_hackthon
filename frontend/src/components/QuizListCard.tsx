import React from "react";
import type { QuizAtividade } from "../types";
import { DraftBadge } from "./Badges";

interface Props {
  quiz: QuizAtividade;
  done?: boolean;
  onOpen: (id: string) => void;
}

export function QuizListCard({ quiz, done, onOpen }: Props){
  return (
    <button
      type="button"
      className={`quiz-card${done ? " quiz-card--done" : ""}`}
      onClick={() => onOpen(quiz.id)}
    >
      <div className="quiz-card-top">
        <span className="quiz-card-id mono">{quiz.id}</span>
        {quiz.status === "draft" && <DraftBadge />}
        {done && <span className="quiz-card-done">Você já explorou</span>}
      </div>
      <h3 className="quiz-card-title">{quiz.titulo}</h3>
      <p className="quiz-card-tema">{quiz.tema}</p>
      <p className="quiz-card-intro">{quiz.objetivoPedagogico}</p>
      <span className="quiz-card-cta">
        {done ? "Revisar reflexão" : "Começar"} <span aria-hidden="true">→</span>
      </span>
    </button>
  );
}
