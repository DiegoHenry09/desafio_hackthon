import { useCallback, useEffect, useState } from "react";
import type { Progress } from "../types";

const KEY = "byst.progress.v1";
const DEFAULT: Progress = { lidos: [], quizzesFeitos: [], simulacoesFeitas: [] };

export function useProgress(){
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return DEFAULT;
      const parsed = JSON.parse(raw) as Partial<Progress>;
      const quizzesFeitos = parsed.quizzesFeitos ?? (
        parsed.quizFeitos && parsed.quizFeitos > 0 ? ["legacy"] : []
      );
      return { ...DEFAULT, ...parsed, quizzesFeitos };
    } catch { return DEFAULT; }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch {}
  }, [progress]);

  const markLido = useCallback((id: string) => {
    setProgress(p => p.lidos.includes(id) ? p : { ...p, lidos: [...p.lidos, id] });
  }, []);
  const markQuizFeito = useCallback((quizId: string) => {
    setProgress(p => (
      p.quizzesFeitos.includes(quizId)
        ? p
        : { ...p, quizzesFeitos: [...p.quizzesFeitos, quizId] }
    ));
  }, []);
  const markSimulacao = useCallback((id: string) => {
    setProgress(p => p.simulacoesFeitas.includes(id) ? p : { ...p, simulacoesFeitas: [...p.simulacoesFeitas, id] });
  }, []);
  const reset = useCallback(() => setProgress(DEFAULT), []);

  return { progress, markLido, markQuizFeito, markSimulacao, reset };
}
