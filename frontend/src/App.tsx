import React from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Biblioteca } from "./pages/Biblioteca";
import { Detalhe } from "./pages/Detalhe";
import { Quiz } from "./pages/Quiz";
import { Simulador } from "./pages/Simulador";
import { Chat } from "./pages/Chat";
import { Canais } from "./pages/Canais";
import { Progresso } from "./pages/Progresso";
import { useHashRouter } from "./hooks/useHashRouter";
import { useProgress } from "./hooks/useProgress";
import type { Route } from "./types";

const TITLES: Record<Route["name"], { crumb: string; title: string }> = {
  home:       { crumb: "BYST.END · INÍCIO",    title: "Visão geral" },
  biblioteca: { crumb: "BYST.END · APRENDER",  title: "Biblioteca" },
  detalhe:    { crumb: "BYST.END · APRENDER",  title: "Conteúdo" },
  quiz:       { crumb: "BYST.END · APRENDER",  title: "Quiz educativo" },
  simulador:  { crumb: "BYST.END · SIMULAR",   title: "Simulador de condutas" },
  chat:       { crumb: "BYST.END · CONVERSAR", title: "Chat orientativo" },
  canais:     { crumb: "BYST.END · APOIO",     title: "Canais oficiais" },
  progresso:  { crumb: "BYST.END · VOCÊ",      title: "Seu progresso" },
};

export function App(){
  const { route, navigate } = useHashRouter();
  const { progress, markLido, markQuiz, markSimulacao, reset } = useProgress();

  const head = TITLES[route.name] || TITLES.home;
  const sidebarRoute: Route["name"] = route.name === "detalhe" ? "biblioteca" : route.name;
  const routeKey = JSON.stringify(route);

  const page = (() => {
    switch (route.name){
      case "home":       return <Home navigate={navigate} progress={progress} />;
      case "biblioteca": return <Biblioteca navigate={navigate} />;
      case "detalhe":    return <Detalhe id={route.id} navigate={navigate} onMarkLido={markLido} />;
      case "quiz":       return <Quiz navigate={navigate} onQuizDone={markQuiz} />;
      case "simulador":  return <Simulador navigate={navigate} onSimulacaoDone={markSimulacao} />;
      case "chat":       return <Chat navigate={navigate} />;
      case "canais":     return <Canais />;
      case "progresso":  return <Progresso progress={progress} navigate={navigate} onReset={reset} />;
    }
  })();

  return (
    <Layout
      route={sidebarRoute}
      navigate={navigate}
      crumb={head.crumb}
      title={head.title}
      routeKey={routeKey}
    >
      {page}
    </Layout>
  );
}
