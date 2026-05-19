import React, { useEffect, useRef, useState } from "react";
import { AvisoEducativo } from "./AvisoEducativo";
import { ChatMessage } from "./ChatMessage";
import { SuggestedPrompts } from "./SuggestedPrompts";
import { mockChatSuggested } from "../data/mockChat";
import type { ChatMsg } from "../types";

interface Props {
  thread: ChatMsg[];
  thinking: boolean;
  onSend: (text: string) => void;
  onOpenCanais?: () => void;
  compact?: boolean;
  showSideHelp?: boolean;
}

export function ChatPanel({
  thread,
  thinking,
  onSend,
  onOpenCanais,
  compact = false,
  showSideHelp = false,
}: Props){
  const [draft, setDraft] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [thread, thinking]);

  const send = (text: string) => {
    onSend(text);
    setDraft("");
  };

  const main = (
    <div className={`chat-main${compact ? " chat-main--compact" : ""}`}>
      <div className="chat-panel-aviso">
        <AvisoEducativo variant="chat" />
      </div>
      <div className="chat-body" ref={scroller} role="log" aria-live="polite" aria-relevant="additions">
        {thread.map(m => <ChatMessage key={m.id} msg={m} />)}
        {thinking && (
          <div className="msg bot" aria-live="polite">
            <span className="muted">Consultando materiais&hellip;</span>
          </div>
        )}
      </div>
      <SuggestedPrompts prompts={mockChatSuggested} onPick={send} />
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escreva sua dúvida educativa…"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey){
              e.preventDefault();
              send(draft);
            }
          }}
          aria-label="Mensagem"
        />
        <button className="btn btn-primary" onClick={() => send(draft)} disabled={!draft.trim()}>
          Enviar
        </button>
      </div>
      {compact && onOpenCanais && (
        <div className="chat-panel-foot">
          <button type="button" className="btn btn-coral small" onClick={onOpenCanais}>
            Ver canais oficiais
          </button>
        </div>
      )}
    </div>
  );

  if (!showSideHelp) return main;

  return (
    <div className="chat-shell">
      {main}
      <aside className="chat-side" aria-label="Apoio">
        <div className="group">
          <h4>O que este chat faz</h4>
          <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, margin: 0 }}>
            Explicar conceitos, sugerir materiais e listar fontes. Mantém o tom educativo, sem concluir sobre casos concretos.
          </p>
        </div>
        <div className="group">
          <h4>O que ele não faz</h4>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55 }}>
            <li>Não afirma &ldquo;isso é assédio&rdquo;.</li>
            <li>Não substitui RH, jurídico ou canal oficial.</li>
            <li>Não recebe denúncia.</li>
            <li>Não garante anonimato ou confidencialidade.</li>
          </ul>
        </div>
        {onOpenCanais && (
          <div className="group">
            <h4>Em situação real</h4>
            <button
              type="button"
              className="btn btn-coral small"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={onOpenCanais}
            >
              Ver canais oficiais
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
