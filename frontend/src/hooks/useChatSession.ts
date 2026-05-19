import { useCallback, useState } from "react";
import type { ChatMsg } from "../types";
import { mockChatThread, mockChatReplies, mockChatFallback } from "../data/mockChat";

/** Histórico apenas em memória React — sem persistência em banco ou localStorage. */
export function useChatSession(){
  const [thread, setThread] = useState<ChatMsg[]>(mockChatThread);
  const [thinking, setThinking] = useState(false);

  const send = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMsg = { id: `u${Date.now()}`, role: "user", text: trimmed };
    setThread(t => [...t, userMsg]);
    setThinking(true);

    window.setTimeout(() => {
      const known = mockChatReplies[trimmed];
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
  }, []);

  const reset = useCallback(() => {
    setThread(mockChatThread);
    setThinking(false);
  }, []);

  return { thread, thinking, send, reset };
}
