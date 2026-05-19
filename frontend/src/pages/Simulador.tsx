import React, { useState } from "react";
import type { Route } from "../types";
import { CenarioCard } from "../components/CenarioCard";
import { CardMicroconteudo } from "../components/CardMicroconteudo";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { mockCenarios } from "../data/mockCenarios";
import { mockConteudos } from "../data/mockConteudos";
import { tiposMap, temasMap } from "../data/taxonomia";

interface Props { navigate: (r: Route | Route["name"]) => void; onSimulacaoDone: (id: string) => void; }

export function Simulador({ navigate, onSimulacaoDone }: Props){
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<Record<number, string>>({});
  const [revelado, setRevelado] = useState<Record<number, boolean>>({});
  const c = mockCenarios[idx];
  const done = !!revelado[idx];
  const pick = escolha[idx];

  const revealOnce = () => {
    setRevelado(r => ({ ...r, [idx]: true }));
    onSimulacaoDone(c.id);
  };

  const relacionados = (c.relacionados || [])
    .map(rid => mockConteudos.find(x => x.id === rid))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div className="page-enter">
      <p className="eyebrow">SIMULADOR DE CONDUTAS · DRAFT</p>
      <h1 className="page-title">Simular uma situação</h1>
      <p className="page-lede">
        Três cenários narrativos. A leitura é educativa: falamos em <i>sinais de atenção</i>,
        <i> conduta mais segura</i> e <i>risco ético/legal</i> — nunca em "isso é assédio" ou "isso é crime".
      </p>

      <AvisoEducativo variant="sim" />

      <div className="chips" style={{ marginTop: 16 }}>
        {mockCenarios.map((cc, i) => (
          <button
            key={cc.id}
            className={`chip ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >Cenário {i+1}</button>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <CenarioCard
          cenario={c}
          escolha={pick}
          onEscolher={(id) => !done && setEscolha(e => ({ ...e, [idx]: id }))}
          showFeedback={done}
        />

        <div className="row mt-6">
          {!done ? (
            <>
              <button className="btn btn-primary" disabled={!pick} onClick={revealOnce}>
                Ver leitura mais segura
              </button>
              <button className="btn btn-ghost" onClick={() => navigate("chat")}>Tirar dúvida no chat</button>
            </>
          ) : (
            <>
              {idx < mockCenarios.length - 1 ? (
                <button className="btn btn-primary" onClick={() => setIdx(idx+1)}>Próximo cenário</button>
              ) : (
                <button className="btn btn-primary" onClick={() => navigate("progresso")}>Concluir simulação</button>
              )}
              <button className="btn btn-secondary" onClick={() => navigate("chat")}>Conversar sobre isso</button>
            </>
          )}
        </div>

        {done && relacionados.length > 0 && (
          <div className="related">
            <h3>Para aprofundar</h3>
            <div className="grid g-3">
              {relacionados.map(r => (
                <CardMicroconteudo
                  key={r.id}
                  conteudo={r}
                  onOpen={(id) => navigate({ name: "detalhe", id })}
                  tiposMap={tiposMap}
                  temasMap={temasMap}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
