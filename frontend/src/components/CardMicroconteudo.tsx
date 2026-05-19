import React from "react";
import type { Conteudo } from "../types";
import { PolicyBadge, DraftBadge, MetaTag } from "./Badges";

interface Props {
  conteudo: Conteudo;
  onOpen: (id: string) => void;
  tiposMap: Record<string, string>;
  temasMap: Record<string, string>;
}

export function CardMicroconteudo({ conteudo, onOpen, tiposMap, temasMap }: Props){
  return (
    <button
      className="card interactive"
      onClick={() => onOpen(conteudo.id)}
      style={{ textAlign: "left", display: "flex", flexDirection: "column" }}
      aria-label={`Abrir conteúdo: ${conteudo.titulo}`}
    >
      <div className="mc">
        <div className="row">
          <PolicyBadge policy={conteudo.usage_policy} />
          {conteudo.status === "draft" && <DraftBadge />}
          <MetaTag>{conteudo.tempo} min</MetaTag>
        </div>
        <h3>{conteudo.titulo}</h3>
        <p>{conteudo.resumo}</p>
        <div className="foot">
          <span>{tiposMap[conteudo.tipo]} · {temasMap[conteudo.tema]}</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </button>
  );
}
