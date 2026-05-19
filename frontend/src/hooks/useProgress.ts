import { useCallback, useEffect, useState } from "react";
import type { Progress } from "../types";

const KEY = "byst.progress.v1";
const DEFAULT: Progress = { lidos: [], quizFeitos: 0, simulacoesFeitas: [] };

export function useProgress(){
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return DEFAULT;
      return { ...DEFAULT, ...(JSON.parse(raw) as Partial<Progress>) };
    } catch { return DEFAULT; }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch {}
  }, [progress]);

  const markLido = useCallback((id: string) => {
    setProgress(p => p.lidos.includes(id) ? p : { ...p, lidos: [...p.lidos, id] });
  }, []);
  const markQuiz = useCallback(() => {
    setProgress(p => ({ ...p, quizFeitos: Math.max(1, p.quizFeitos) }));
  }, []);
  const markSimulacao = useCallback((id: string) => {
    setProgress(p => p.simulacoesFeitas.includes(id) ? p : { ...p, simulacoesFeitas: [...p.simulacoesFeitas, id] });
  }, []);
  const reset = useCallback(() => setProgress(DEFAULT), []);

  return { progress, markLido, markQuiz, markSimulacao, reset };
}
