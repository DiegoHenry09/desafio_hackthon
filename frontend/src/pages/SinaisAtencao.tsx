import React from "react";
import type { Route, NivelAtencaoId } from "../types";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { SinalAtencaoCard } from "../components/SinalAtencaoCard";
import { mockTiposViolenciaSinais, NIVEL_ATENCAO } from "../data/mockSinaisAtencao";

interface Props {
  navigate: (r: Route | Route["name"]) => void;
}

export function SinaisAtencao({ navigate }: Props){
  return (
    <div className="page-enter sinais-page">
      <p className="eyebrow">APRENDER · MAPA EDUCATIVO</p>
      <h1 className="page-title">
        Sinais de <em>atenção</em>
      </h1>
      <p className="page-lede">
        Os sete tipos de violência mapeados pela Byst.end, em um espectro pedagógico do mais sutil
        ao mais grave. Isto não é um ranking de frequência nem uma estatística — são referências
        para observar contexto com cuidado.
      </p>

      <AvisoEducativo variant="page" />

      <figure className="sinais-infographic" aria-labelledby="sinais-infographic-caption">
        <div className="sinais-infographic-slot">
          <img
            className="sinais-infographic-img"
            src=""
            alt=""
            aria-hidden="true"
          />
          <div className="sinais-infographic-placeholder-inner">
            <span className="sinais-infographic-badge mono">INFOGRÁFICO</span>
            <p className="sinais-infographic-placeholder-title">
              Arte do mapa visual
            </p>
            <p className="sinais-infographic-placeholder-text muted">
              Espaço reservado para inserir o infográfico oficial dos 7 tipos e níveis de atenção.
              Substitua o <code>src</code> da imagem quando a arte estiver pronta.
            </p>
          </div>
        </div>
        <figcaption id="sinais-infographic-caption" className="sinais-infographic-caption">
          Espectro educativo Byst.end · sete tipos de violência · sem dados de frequência inventados
        </figcaption>
      </figure>

      <section className="sinais-legenda" aria-label="Legenda dos níveis de atenção">
        <h2 className="section-h">Níveis de atenção (qualitativos)</h2>
        <div className="sinais-legenda-grid">
          {(Object.entries(NIVEL_ATENCAO) as [NivelAtencaoId, (typeof NIVEL_ATENCAO)[NivelAtencaoId]][]).map(
            ([id, meta]) => (
              <div key={id} className={`sinal-legenda-item sinal-legenda-item--${id}`}>
                <span className={`sinal-nivel sinal-nivel--${id}`}>{meta.label}</span>
                <p>{meta.descricao}</p>
              </div>
            ),
          )}
        </div>
        <p className="muted" style={{ fontSize: 13, marginTop: 12, maxWidth: "72ch" }}>
          A ordem dos cards abaixo segue o espectro pedagógico da base (do contexto mais sutil
          à atenção prioritária). Não indica qual tipo “acontece mais” no trabalho.
        </p>
      </section>

      <section className="sinais-cards" aria-label="Cards de sinais por tipo de violência">
        <h2 className="section-h">Explorar por tipo</h2>
        <div className="sinais-cards-stack">
          {mockTiposViolenciaSinais.map(tipo => (
            <SinalAtencaoCard
              key={tipo.id}
              tipo={tipo}
              onExplorar={() => navigate("biblioteca")}
            />
          ))}
        </div>
      </section>

      <div className="row mt-8">
        <button type="button" className="btn btn-primary" onClick={() => navigate("biblioteca")}>
          Ir à biblioteca
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("canais")}>
          Ver canais oficiais
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => navigate("simulador")}>
          Praticar no Radar de Conduta
        </button>
      </div>
    </div>
  );
}
