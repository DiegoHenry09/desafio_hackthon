import React from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Biblioteca } from "./pages/Biblioteca";
import { Detalhe } from "./pages/Detalhe";
import { Quizzes } from "./pages/Quizzes";
import { SinaisAtencao } from "./pages/SinaisAtencao";
import { QuizPlay } from "./pages/QuizPlay";
import { Simulador } from "./pages/Simulador";
import { Chat } from "./pages/Chat";
import { Canais } from "./pages/Canais";
import { Progresso } from "./pages/Progresso";
import { useHashRouter } from "./hooks/useHashRouter";
import { useProgress } from "./hooks/useProgress";
import { getQuizById } from "./data/mockQuizzes";
import type { Route } from "./types";

function pageHead(route: Route): { crumb: string; title: string }{
  switch (route.name){
    case "home":       return { crumb: "BYST.END · INÍCIO",    title: "Visão geral" };
    case "biblioteca": return { crumb: "BYST.END · APRENDER",  title: "Biblioteca" };
    case "detalhe":    return { crumb: "BYST.END · APRENDER",  title: "Conteúdo" };
    case "quizzes":    return { crumb: "BYST.END · APRENDER",  title: "Quizzes" };
    case "sinais":     return { crumb: "BYST.END · APRENDER",  title: "Sinais de atenção" };
    case "quiz": {
      const q = getQuizById(route.id);
      return { crumb: "BYST.END · APRENDER", title: q?.titulo ?? "Quiz" };
    }
    case "simulador":  return { crumb: "BYST.END · SIMULAR",   title: "Radar de Conduta" };
    case "chat":       return { crumb: "BYST.END · CONVERSAR", title: "Chat orientativo" };
    case "canais":     return { crumb: "BYST.END · APOIO",     title: "Canais oficiais" };
    case "progresso":  return { crumb: "BYST.END · VOCÊ",      title: "Seu progresso" };
  }
}

function sidebarRoute(route: Route): Route["name"]{
  if (route.name === "detalhe") return "biblioteca";
  if (route.name === "quiz") return "quizzes";
  return route.name;
}

export function App(){
  const { route, navigate } = useHashRouter();
  const { progress, markLido, markQuizFeito, markSimulacao, reset } = useProgress();

  const head = pageHead(route);
  const routeKey = JSON.stringify(route);

  const page = (() => {
    switch (route.name){
      case "home":       return <Home navigate={navigate} progress={progress} />;
      case "biblioteca": return <Biblioteca navigate={navigate} />;
      case "detalhe":    return <Detalhe id={route.id} navigate={navigate} onMarkLido={markLido} />;
      case "quizzes":    return <Quizzes navigate={navigate} progress={progress} />;
      case "sinais":     return <SinaisAtencao navigate={navigate} />;
      case "quiz":       return <QuizPlay id={route.id} navigate={navigate} onQuizFeito={markQuizFeito} />;
      case "simulador":  return <Simulador navigate={navigate} onSimulacaoDone={markSimulacao} />;
      case "chat":       return <Chat navigate={navigate} />;
      case "canais":     return <Canais />;
      case "progresso":  return <Progresso progress={progress} navigate={navigate} onReset={reset} />;
    }
  })();

  return (
    <Layout
      route={sidebarRoute(route)}
      navigate={navigate}
      crumb={head.crumb}
      title={head.title}
      routeKey={routeKey}
    >
      {page}
    </Layout>
  );
}
