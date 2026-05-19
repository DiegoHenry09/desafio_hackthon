import React from "react";
import type { Route } from "../types";
import { QuizPlayer } from "../components/QuizPlayer";
import { getQuizById } from "../data/mockQuizzes";

interface Props {
  id: string;
  navigate: (r: Route | Route["name"]) => void;
  onQuizFeito: (quizId: string) => void;
}

export function QuizPlay({ id, navigate, onQuizFeito }: Props){
  const quiz = getQuizById(id);

  if (!quiz){
    return (
      <div className="page-enter">
        <h1 className="page-title">Quiz não encontrado</h1>
        <p className="page-lede">O identificador &ldquo;{id}&rdquo; não está no banco de rascunho.</p>
        <button type="button" className="btn btn-primary" onClick={() => navigate("quizzes")}>
          Ver todos os quizzes
        </button>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <p className="eyebrow">QUIZ · {quiz.id} · RASCUNHO</p>
      <h1 className="page-title">{quiz.titulo}</h1>
      <QuizPlayer
        quiz={quiz}
        onVoltar={() => navigate("quizzes")}
        onConcluir={() => {
          onQuizFeito(quiz.id);
          navigate("quizzes");
        }}
      />
    </div>
  );
}
