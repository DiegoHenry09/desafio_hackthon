import React, { useEffect, useRef, useState } from "react";
import type { Route, ChatMsg } from "../types";
import { ChatMessage } from "../components/ChatMessage";
import { SuggestedPrompts } from "../components/SuggestedPrompts";
import { mockChatThread, mockChatSuggested, mockChatReplies, mockChatFallback } from "../data/mockChat";

interface Props { navigate: (r: Route | Route["name"]) => void; }

export function Chat({ navigate }: Props){
  const [thread, setThread] = useState<ChatMsg[]>(mockChatThread);
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [thread, thinking]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMsg = { id: `u${Date.now()}`, role: "user", text: text.trim() };
    setThread(t => [...t, userMsg]);
    setDraft("");
    setThinking(true);
    setTimeout(() => {
      const known = mockChatReplies[text.trim()];
      const reply = known || mockChatFallback;
      const botMsg: ChatMsg = {
        id: `b${Date.now()}`,
        role: "bot",
        text: reply.text,
        sources: reply.sources,
        reminder: reply.reminder,
      };
      setThread(t => [...t, botMsg]);
      setThinking(false);
    }, 650);
  };

  return (
    <div className="page-enter">
      <p className="eyebrow">CHAT ORIENTATIVO · APOIO EDUCATIVO</p>
      <h1 className="page-title">Tirar uma dúvida</h1>
      <p className="page-lede">
        Conversa educativa com fontes. O assistente não conclui se uma situação concreta é ou não assédio —
        para isso, há canais oficiais. Tudo o que você digita aqui fica apenas neste navegador (protótipo).
      </p>

      <div className="chat-shell">
        <div className="chat-main">
          <div className="chat-head">
            <span className="pill">Assistente · v0.1 · mock</span>
            <span className="lim">
              <b>Aviso fixo:</b> Esta é uma orientação educativa. Não substitui RH, jurídico, compliance ou canal oficial.
            </span>
          </div>
          <div className="chat-body" ref={scroller}>
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
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey){ e.preventDefault(); send(draft); } }}
              aria-label="Mensagem"
            />
            <button className="btn btn-primary" onClick={() => send(draft)} disabled={!draft.trim()}>
              Enviar
            </button>
          </div>
        </div>

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
              <li>Não afirma "isso é assédio".</li>
              <li>Não substitui RH, jurídico ou canal oficial.</li>
              <li>Não recebe denúncia.</li>
              <li>Não garante anonimato ou confidencialidade.</li>
            </ul>
          </div>
          <div className="group">
            <h4>Em situação real</h4>
            <button className="btn btn-coral small" style={{ width: "100%", justifyContent: "center" }} onClick={() => navigate("canais")}>
              Ver canais oficiais
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
