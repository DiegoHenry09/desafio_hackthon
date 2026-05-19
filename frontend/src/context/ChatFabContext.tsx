import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useChatSession } from "../hooks/useChatSession";

interface ChatFabContextValue {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  thread: ReturnType<typeof useChatSession>["thread"];
  thinking: boolean;
  send: (text: string) => void;
}

const ChatFabContext = createContext<ChatFabContextValue | null>(null);

export function ChatFabProvider({ children }: { children: React.ReactNode }){
  const [open, setOpen] = useState(false);
  const { thread, thinking, send } = useChatSession();

  const openChat = useCallback(() => setOpen(true), []);
  const closeChat = useCallback(() => setOpen(false), []);
  const toggleChat = useCallback(() => setOpen(v => !v), []);

  const value = useMemo(
    () => ({ open, openChat, closeChat, toggleChat, thread, thinking, send }),
    [open, openChat, closeChat, toggleChat, thread, thinking, send],
  );

  return (
    <ChatFabContext.Provider value={value}>
      {children}
    </ChatFabContext.Provider>
  );
}

export function useChatFab(){
  const ctx = useContext(ChatFabContext);
  if (!ctx) throw new Error("useChatFab deve ser usado dentro de ChatFabProvider");
  return ctx;
}

/** Retorna null fora do provider (uso opcional em páginas). */
export function useChatFabOptional(){
  return useContext(ChatFabContext);
}
