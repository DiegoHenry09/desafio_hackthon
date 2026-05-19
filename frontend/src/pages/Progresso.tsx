import React from "react";
import type { Route, Progress } from "../types";
import { ProgressCard } from "../components/ProgressCard";
import { CardMicroconteudo } from "../components/CardMicroconteudo";
import { mockConteudos } from "../data/mockConteudos";
import { mockCenarios } from "../data/mockCenarios";
import { tiposMap, temasMap } from "../data/taxonomia";

interface Props { progress: Progress; navigate: (r: Route | Route["name"]) => void; onReset: () => void; }

export function Progresso({ progress, navigate, onReset }: Props){
  const totalConteudos = mockConteudos.length;
  const totalCenarios = mockCenarios.length;
  const ultimosLidos = progress.lidos.slice(-3).reverse()
    .map(id => mockConteudos.find(c => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="page-enter">
      <p className="eyebrow">PROGRESSO LOCAL · LOCALSTORAGE · SEM RANKING</p>
      <h1 className="page-title">Seu caminho aqui</h1>
      <p className="page-lede">
        Tudo o que você fez ficou neste navegador. Não há comparação com outras pessoas. Você pode limpar
        a qualquer momento.
      </p>

      <div className="progress-grid">
        <ProgressCard
          k="Conteúdos lidos"
          v={progress.lidos.length}
          sub={`de ${totalConteudos} disponíveis`}
          pct={(progress.lidos.length / totalConteudos) * 100}
        />
        <ProgressCard
          k="Quiz realizado"
          v={progress.quizFeitos}
          sub="de 1 disponível"
          pct={progress.quizFeitos > 0 ? 100 : 0}
        />
        <ProgressCard
          k="Cenários simulados"
          v={progress.simulacoesFeitas.length}
          sub={`de ${totalCenarios} disponíveis`}
          pct={(progress.simulacoesFeitas.length / totalCenarios) * 100}
        />
      </div>

      <h3 className="section-h">Últimos materiais lidos</h3>
      {ultimosLidos.length === 0 ? (
        <div className="empty">
          Você ainda não leu nenhum material.{" "}
          <button className="btn btn-ghost small" onClick={() => navigate("biblioteca")}>Abrir a biblioteca</button>
        </div>
      ) : (
        <div className="grid g-3">
          {ultimosLidos.map(c => (
            <CardMicroconteudo
              key={c.id}
              conteudo={c}
              onOpen={(id) => navigate({ name: "detalhe", id })}
              tiposMap={tiposMap}
              temasMap={temasMap}
            />
          ))}
        </div>
      )}

      <hr className="divider" />
      <div className="row between center">
        <div className="muted" style={{ fontSize: 13 }}>
          Salvo em <span className="kbd">localStorage["byst.progress.v1"]</span>
        </div>
        <button className="btn btn-secondary small" onClick={onReset}>Limpar progresso</button>
      </div>
    </div>
  );
}
