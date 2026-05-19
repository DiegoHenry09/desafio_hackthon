import React from "react";
import type { Fonte } from "../types";

export function FonteCitada({ fonte }: { fonte: Fonte }){
  return (
    <div className="fonte" role="note">
      <span className="stripe" aria-hidden="true"></span>
      <div>
        <b>{fonte.titulo}</b>
        <div className="meta">{fonte.autor.toUpperCase()} · {fonte.ano} · {fonte.tipo.toUpperCase()}</div>
      </div>
    </div>
  );
}
