import React from "react";
import type { Route, Progress } from "../types";
import { CardMicroconteudo } from "../components/CardMicroconteudo";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { mockConteudos } from "../data/mockConteudos";
import { mockCenarios } from "../data/mockCenarios";
import { tiposMap, temasMap } from "../data/taxonomia";

interface Props { navigate: (r: Route | Route["name"]) => void; progress: Progress; }

export function Home({ navigate, progress }: Props){
  return (
    <div className="page-enter">
      <p className="eyebrow">PLATAFORMA EDUCATIVA · v0.1 · DESKTOP-FIRST</p>
      <h1 className="page-title">
        Aprender em <em>silêncio competente</em>,<br/>
        sem espetáculo.
      </h1>
      <p className="page-lede">
        Byst.end é uma biblioteca viva de prevenção de assédio profissional. Você lê, treina o olhar
        com cenários, e tira dúvidas com apoio educativo — sempre com fontes e canais oficiais à mão.
        Nada aqui substitui RH, ouvidoria, sindicato ou canais públicos.
      </p>

      <div className="doors">
        <button className="door aprender" onClick={() => navigate("biblioteca")}>
          <div className="ord">PORTA 01</div>
          <h3>Aprender</h3>
          <p>Biblioteca curada de micro-conteúdos com fontes, divididos por tipo, tema e profundidade.</p>
          <span className="arrow">Ir à biblioteca</span>
        </button>
        <button className="door simular" onClick={() => navigate("simulador")}>
          <div className="ord">PORTA 02</div>
          <h3>Simular</h3>
          <p>Cenários narrativos com escolhas de conduta. Feedback educativo sobre risco e conduta mais segura.</p>
          <span className="arrow">Abrir simulador</span>
        </button>
        <button className="door conversar" onClick={() => navigate("chat")}>
          <div className="ord">PORTA 03</div>
          <h3>Conversar</h3>
          <p>Chat orientativo educativo com fontes e aviso de limite. Não é canal de denúncia.</p>
          <span className="arrow">Abrir chat</span>
        </button>
      </div>

      <h3 className="section-h">Comece pelo mais leve</h3>
      <div className="grid g-3">
        {mockConteudos.slice(0, 3).map(c => (
          <CardMicroconteudo
            key={c.id}
            conteudo={c}
            onOpen={(id) => navigate({ name: "detalhe", id })}
            tiposMap={tiposMap}
            temasMap={temasMap}
          />
        ))}
      </div>

      <h3 className="section-h">Seu caminho aqui</h3>
      <div className="stats">
        <div className="stat">
          <div className="k">Conteúdos vistos</div>
          <div className="v">{progress.lidos.length}</div>
          <div className="sub">salvos neste navegador</div>
        </div>
        <div className="stat">
          <div className="k">Quiz</div>
          <div className="v">{progress.quizFeitos}</div>
          <div className="sub">de 1 disponível</div>
        </div>
        <div className="stat">
          <div className="k">Simulações</div>
          <div className="v">{progress.simulacoesFeitas.length}</div>
          <div className="sub">de {mockCenarios.length} cenários</div>
        </div>
        <div className="stat">
          <div className="k">Sem ranking</div>
          <div className="v">·</div>
          <div className="sub">progresso é íntimo</div>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <AvisoEducativo variant="page" />
      </div>
    </div>
  );
}
