import React from "react";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { mockCanais } from "../data/mockCanais";

export function Canais(){
  return (
    <div className="page-enter">
      <p className="eyebrow">CANAIS DE APOIO · ORIENTAÇÃO GERAL</p>
      <h1 className="page-title">Onde buscar apoio</h1>
      <p className="page-lede">
        Canais públicos e referências para situações que demandem orientação especializada. Esta página
        não recebe denúncia, não garante anonimato e não substitui o canal interno da sua organização.
      </p>

      <div className="alert canais">
        <span className="stripe" aria-hidden="true"></span>
        <div className="body">
          <b>Em risco imediato, procure ajuda agora.</b>
          Os canais 180 e 100 atendem 24h e podem orientar próximos passos. Em emergência, ligue 190.
        </div>
      </div>

      <div className="grid g-3" style={{ marginTop: 20 }}>
        {mockCanais.map((cn, i) => (
          <div className={`canal ${cn.featured ? "featured" : ""}`} key={i}>
            <div className="who">{cn.who}</div>
            <div className="num">{cn.num}</div>
            <h3>{cn.titulo}</h3>
            <p>{cn.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="section-h">O que esta página é, e o que não é</h3>
      <div className="grid g-2">
        <div className="card">
          <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>É</h4>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>
            <li>Lista geral de canais públicos.</li>
            <li>Orientação introdutória sobre por onde começar.</li>
            <li>Reforço de que canais internos da empresa também existem.</li>
          </ul>
        </div>
        <div className="card flat">
          <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Não é</h4>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>
            <li>Canal de denúncia.</li>
            <li>Garantia de anonimato ou confidencialidade.</li>
            <li>Parecer jurídico ou psicológico.</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <AvisoEducativo variant="page" />
      </div>
    </div>
  );
}
