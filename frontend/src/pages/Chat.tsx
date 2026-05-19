import React from "react";
import type { Route } from "../types";
import { ChatPanel } from "../components/ChatPanel";
import { useChatFab } from "../context/ChatFabContext";

interface Props { navigate: (r: Route | Route["name"]) => void; }

export function Chat({ navigate }: Props){
  const { thread, thinking, send } = useChatFab();

  return (
    <div className="page-enter">
      <p className="eyebrow">CHAT ORIENTATIVO · APOIO EDUCATIVO</p>
      <h1 className="page-title">Tirar uma dúvida</h1>
      <p className="page-lede">
        Conversa educativa com fontes. O assistente não conclui se uma situação concreta é ou não assédio —
        para isso, há canais oficiais. O histórico fica apenas na memória desta sessão do navegador (protótipo).
      </p>

      <ChatPanel
        thread={thread}
        thinking={thinking}
        onSend={send}
        onOpenCanais={() => navigate("canais")}
        showSideHelp
      />
    </div>
  );
}
