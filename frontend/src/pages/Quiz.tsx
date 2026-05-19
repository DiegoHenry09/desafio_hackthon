import React, { useState } from "react";
import type { Route } from "../types";
import { QuizQuestionCard } from "../components/QuizQuestionCard";
import { FeedbackEducativo } from "../components/FeedbackEducativo";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { mockQuiz } from "../data/mockQuiz";

interface Props { navigate: (r: Route | Route["name"]) => void; onQuizDone: () => void; }

export function Quiz({ navigate, onQuizDone }: Props){
  const [i, setI] = useState(0);
  const [selecionadas, setSelecionadas] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const total = mockQuiz.perguntas.length;
  const pergunta = mockQuiz.perguntas[i];
  const done = !!revealed[i];
  const escolha = selecionadas[i];
  const isLast = i === total - 1;

  const handleNext = () => {
    if (isLast){ onQuizDone(); navigate("progresso"); }
    else setI(i + 1);
  };

  return (
    <div className="page-enter">
      <p className="eyebrow">QUIZ · {mockQuiz.titulo.toUpperCase()} · DRAFT</p>
      <h1 className="page-title">Treinar o olhar</h1>
      <p className="page-lede">{mockQuiz.intro}</p>

      <AvisoEducativo variant="quiz" />

      <div style={{ marginTop: 24 }}>
        <QuizQuestionCard
          pergunta={pergunta}
          total={total}
          index={i}
          selected={escolha}
          onSelect={(id) => !done && setSelecionadas(s => ({ ...s, [i]: id }))}
          showFeedback={done}
        />

        {done && (
          <>
            <FeedbackEducativo feedback={pergunta.feedback} />
            {escolha && (
              <div className="alert limite" style={{ marginTop: 14 }}>
                <span className="stripe" aria-hidden="true"></span>
                <div className="body">
                  <b>Sobre a alternativa que você escolheu</b>
                  {pergunta.opcoes.find(o => o.id === escolha)!.explica}
                </div>
              </div>
            )}
          </>
        )}

        <div className="row mt-6">
          {!done ? (
            <>
              <button className="btn btn-primary" disabled={!escolha} onClick={() => setRevealed(r => ({ ...r, [i]: true }))}>
                Ver leitura mais segura
              </button>
              <button className="btn btn-ghost" onClick={() => navigate("biblioteca")}>Sair do quiz</button>
            </>
          ) : isLast ? (
            <>
              <button className="btn btn-primary" onClick={handleNext}>Concluir</button>
              <button className="btn btn-secondary" onClick={() => navigate("simulador")}>Ir para o simulador</button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>Próxima pergunta</button>
          )}
        </div>
      </div>
    </div>
  );
}
