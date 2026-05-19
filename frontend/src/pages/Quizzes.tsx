import React from "react";
import type { Route } from "../types";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { QuizListCard } from "../components/QuizListCard";
import { groupQuizzesByTipo, mockQuizzes } from "../data/mockQuizzes";
import type { Progress } from "../types";

interface Props {
  navigate: (r: Route | Route["name"]) => void;
  progress: Progress;
}

export function Quizzes({ navigate, progress }: Props){
  const grupos = groupQuizzesByTipo();

  return (
    <div className="page-enter">
      <p className="eyebrow">QUIZZES · APRENDER · RASCUNHO</p>
      <h1 className="page-title">
        Treinar o olhar, <em>sem julgamento</em>
      </h1>
      <p className="page-lede">
        Cada card é uma reflexão curta sobre um tema. Nenhuma resposta afirma que algo
        &ldquo;é assédio&rdquo; — o objetivo é apontar a conduta mais segura e ampliar sua leitura educativa.
      </p>

      <AvisoEducativo variant="quiz" />

      <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>
        {mockQuizzes.length} quizzes em rascunho · fonte: banco curado (docs/13)
      </p>

      {grupos.map(grupo => (
        <section key={grupo.tipoViolencia} className="quiz-grupo">
          <h2 className="quiz-grupo-title">{grupo.label}</h2>
          <p className="quiz-grupo-sub muted">
            {grupo.quizzes.length} {grupo.quizzes.length === 1 ? "reflexão" : "reflexões"} neste tópico
          </p>
          <div className="grid g-2 quiz-grupo-grid">
            {grupo.quizzes.map(q => (
              <QuizListCard
                key={q.id}
                quiz={q}
                done={progress.quizzesFeitos.includes(q.id)}
                onOpen={id => navigate({ name: "quiz", id })}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
