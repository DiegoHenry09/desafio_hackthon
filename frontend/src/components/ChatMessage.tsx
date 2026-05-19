import React from "react";
import type { ChatMsg } from "../types";
import { FonteCitada } from "./FonteCitada";

export function ChatMessage({ msg }: { msg: ChatMsg }){
  if (msg.role === "user"){
    return <div className="msg user">{msg.text}</div>;
  }
  return (
    <div className="msg bot">
      <div style={{ whiteSpace: "pre-wrap" }}>{msg.text}</div>
      {msg.sources && msg.sources.length > 0 && (
        <div className="sources">
          {msg.sources.map((f, i) => <FonteCitada key={i} fonte={f} />)}
        </div>
      )}
      {msg.reminder && (
        <div className="reminder">
          <b>Lembrete:</b> para situações concretas, os canais oficiais (RH, ouvidoria, 180, 100) são o caminho.
        </div>
      )}
    </div>
  );
}
