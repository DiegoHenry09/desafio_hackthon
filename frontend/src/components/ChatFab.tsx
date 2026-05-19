import React, { useEffect, useId, useRef, useState } from "react";
import { ChatPanel } from "./ChatPanel";
import { useChatFab } from "../context/ChatFabContext";

interface Props {
  onOpenCanais: () => void;
}

function RobotIcon(){
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="9" cy="13" r="1.25" fill="currentColor"/>
      <circle cx="15" cy="13" r="1.25" fill="currentColor"/>
      <path d="M12 4v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="3" r="1" fill="currentColor"/>
      <path d="M7 19v2M17 19v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function ChatFab({ onOpenCanais }: Props){
  const { open, openChat, closeChat, thread, thinking, send } = useChatFab();
  const [nudgeVisible, setNudgeVisible] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChat();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeChat]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if ((e.target as HTMLElement).closest?.(".chat-fab-trigger")) return;
      closeChat();
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open, closeChat]);

  const handleOpen = () => {
    setNudgeVisible(false);
    openChat();
  };

  const handleOpenCanais = () => {
    closeChat();
    onOpenCanais();
  };

  return (
    <div className="chat-fab-root" data-open={open || undefined}>
      {open && (
        <button
          type="button"
          className="chat-fab-backdrop"
          aria-label="Fechar chat"
          onClick={closeChat}
        />
      )}

      <div className="chat-fab-stack">
        {nudgeVisible && !open && (
          <div className="chat-fab-nudge" role="status">
            <p>Tem dúvidas? Tire aqui com orientação educativa.</p>
            <button
              type="button"
              className="chat-fab-nudge-dismiss"
              aria-label="Dispensar aviso"
              onClick={() => setNudgeVisible(false)}
            >
              ×
            </button>
            <span className="chat-fab-nudge-tail" aria-hidden="true" />
          </div>
        )}

        {open && (
          <div
            ref={panelRef}
            className="chat-fab-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <header className="chat-fab-panel-head">
              <div>
                <h2 id={titleId}>Chat orientativo</h2>
                <p>Apoio educativo com fontes · não substitui canais oficiais</p>
              </div>
              <button
                type="button"
                className="chat-fab-panel-close"
                onClick={closeChat}
                aria-label="Fechar painel de chat"
              >
                ×
              </button>
            </header>
            <ChatPanel
              thread={thread}
              thinking={thinking}
              onSend={send}
              onOpenCanais={handleOpenCanais}
              compact
            />
          </div>
        )}

        <button
          type="button"
          className="chat-fab-trigger"
          onClick={open ? closeChat : handleOpen}
          aria-expanded={open}
          aria-controls={open ? titleId : undefined}
          aria-label={open ? "Fechar chat orientativo" : "Abrir chat orientativo"}
        >
          <RobotIcon />
        </button>
      </div>
    </div>
  );
}
