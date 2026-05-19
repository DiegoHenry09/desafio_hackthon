import React from "react";

interface Props { prompts: string[]; onPick: (p: string) => void; }

export function SuggestedPrompts({ prompts, onPick }: Props){
  return (
    <div className="chat-suggested" role="group" aria-label="Sugestões de perguntas">
      {prompts.map(p => (
        <button key={p} className="chip" onClick={() => onPick(p)}>{p}</button>
      ))}
    </div>
  );
}
