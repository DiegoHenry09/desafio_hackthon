import React, { useState } from "react";
import type { QuizAtividade } from "../types";
import { QuizQuestionCard } from "./QuizQuestionCard";
import { FeedbackEducativo } from "./FeedbackEducativo";
import { AvisoEducativo } from "./AvisoEducativo";
import { FonteCitada } from "./FonteCitada";

interface Props {
  quiz: QuizAtividade;
  onVoltar: () => void;
  onConcluir: () => void;
}

export function QuizPlayer({ quiz, onVoltar, onConcluir }: Props){
  const [escolha, setEscolha] = useState<string | undefined>();
  const [revealed, setRevealed] = useState(false);
  const pergunta = quiz.pergunta;
  const opcaoEscolhida = escolha ? pergunta.opcoes.find(o => o.id === escolha) : undefined;

  return (
    <div className="quiz-player">
      <button type="button" className="btn btn-ghost small quiz-player-back" onClick={onVoltar}>
        ← Voltar aos quizzes
      </button>

      <div className="quiz-player-meta">
        <span className="mono quiz-player-id">{quiz.id}</span>
        <span className="tag">{quiz.tema}</span>
      </div>

      <p className="page-lede" style={{ marginBottom: 16 }}>{quiz.intro}</p>
      <AvisoEducativo variant="quiz" />

      <div style={{ marginTop: 20 }}>
        <QuizQuestionCard
          pergunta={pergunta}
          total={1}
          index={0}
          selected={escolha}
          onSelect={id => !revealed && setEscolha(id)}
          showFeedback={revealed}
        />

        {revealed && (
          <>
            <FeedbackEducativo feedback={pergunta.feedback} textoExtra={quiz.feedbackEducativo} />
            {opcaoEscolhida && (
              <div className="alert educativo quiz-reflexao-escolha" style={{ marginTop: 14 }}>
                <span className="stripe" aria-hidden="true"></span>
                <div className="body">
                  <b>Sobre a alternativa que você marcou</b>
                  {opcaoEscolhida.explica}
                  {opcaoEscolhida.kind !== "safer" && (
                    <p className="muted" style={{ margin: "8px 0 0", fontSize: 13 }}>
                      Não há certo ou errado aqui — estamos construindo leitura juntos.
                    </p>
                  )}
                </div>
              </div>
            )}
            <div style={{ marginTop: 14 }}>
              <FonteCitada fonte={pergunta.feedback.fonte} />
            </div>
          </>
        )}

        <div className="row mt-6">
          {!revealed ? (
            <>
              <button
                className="btn btn-primary"
                disabled={!escolha}
                onClick={() => setRevealed(true)}
              >
                Ver leitura mais segura
              </button>
              <button type="button" className="btn btn-ghost" onClick={onVoltar}>
                Voltar à lista
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-primary" onClick={onConcluir}>
                Concluir e voltar à lista
              </button>
              <button type="button" className="btn btn-secondary" onClick={onVoltar}>
                Explorar outro quiz
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
