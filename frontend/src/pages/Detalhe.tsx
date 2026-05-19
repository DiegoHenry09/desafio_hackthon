import React, { useEffect, useMemo } from "react";
import type { Route } from "../types";
import { PolicyBadge, DraftBadge, MetaTag } from "../components/Badges";
import { NanoCard } from "../components/NanoCard";
import { FonteCitada } from "../components/FonteCitada";
import { CardMicroconteudo } from "../components/CardMicroconteudo";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { useChatFab } from "../context/ChatFabContext";
import { mockConteudos } from "../data/mockConteudos";
import { tiposMap, temasMap } from "../data/taxonomia";

interface Props {
  id: string;
  navigate: (r: Route | Route["name"]) => void;
  onMarkLido: (id: string) => void;
}

export function Detalhe({ id, navigate, onMarkLido }: Props){
  const { openChat } = useChatFab();
  const c = mockConteudos.find(x => x.id === id) || mockConteudos[0];
  useEffect(() => { onMarkLido(c.id); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [c.id]);

  const relacionados = useMemo(
    () => mockConteudos.filter(x => x.id !== c.id && (x.tipo === c.tipo || x.tema === c.tema)).slice(0, 3),
    [c.id]
  );

  return (
    <div className="page-enter">
      <button className="btn btn-ghost small" onClick={() => navigate("biblioteca")} style={{ marginBottom: 16 }}>← Voltar à biblioteca</button>

      <article className="article">
        <div className="meta-row">
          <PolicyBadge policy={c.usage_policy} />
          {c.status === "draft" && <DraftBadge />}
          <MetaTag>{tiposMap[c.tipo]}</MetaTag>
          <MetaTag>{temasMap[c.tema]}</MetaTag>
          <MetaTag>{c.tempo} min de leitura</MetaTag>
        </div>

        <h1>{c.titulo}</h1>
        <p className="lede">{c.resumo}</p>

        <AvisoEducativo variant="page" />

        <h2>O que vale observar</h2>
        <div className="nano-stack">
          {c.nanoconteudos.map((n, i) => <NanoCard key={i} lbl={n.lbl} txt={n.txt} />)}
        </div>

        <h2>Em mais detalhe</h2>
        {c.paragrafos.map((p, i) => <p key={i}>{p}</p>)}

        <h2>Fonte</h2>
        <div className="stack">
          {c.fontes.map((f, i) => <FonteCitada key={i} fonte={f} />)}
        </div>

        <div className="source-footer">
          SOURCE_ID · {c.source_id} &nbsp;·&nbsp; SOURCE_ROW · {c.source_row} &nbsp;·&nbsp; STATUS · {c.status.toUpperCase()}
        </div>
      </article>

      {relacionados.length > 0 && (
        <div className="related">
          <h3>Conteúdos relacionados</h3>
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

      <hr className="divider" />
      <div className="row">
        <button className="btn btn-primary" onClick={() => navigate("quizzes")}>Explorar quizzes educativos</button>
        <button className="btn btn-secondary" onClick={() => navigate("simulador")}>Ir para o simulador</button>
        <button className="btn btn-ghost" onClick={openChat}>Tirar dúvida no chat</button>
      </div>
    </div>
  );
}
