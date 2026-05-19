/* ============================================================
 * Byst.end · App root
 * Routing, progress provider (localStorage), shell layout.
 * ============================================================ */

const { useState: u_useState, useEffect: u_useEffect, useCallback: u_useCallback } = React;

const PROGRESS_KEY = "byst.progress.v1";
const DEFAULT_PROGRESS = { lidos: [], quizFeitos: 0, simulacoesFeitas: [] };

function loadProgress(){
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const v = JSON.parse(raw);
    return { ...DEFAULT_PROGRESS, ...v };
  } catch { return DEFAULT_PROGRESS; }
}
function saveProgress(p){
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch {}
}

// route encoding: string id, or {name:"detalhe", id:"c-001"}
function App(){
  const [route, setRoute] = u_useState(() => {
    if (window.location.hash){
      try { return JSON.parse(decodeURIComponent(window.location.hash.slice(1))); }
      catch { return "home"; }
    }
    return "home";
  });
  const [progress, setProgress] = u_useState(loadProgress);

  // sync route -> hash for refresh-stability
  u_useEffect(() => {
    const encoded = typeof route === "string" ? route : JSON.stringify(route);
    if (decodeURIComponent(window.location.hash.slice(1)) !== encoded){
      window.location.hash = encodeURIComponent(encoded);
    }
  }, [route]);

  // sync hash -> route on back/forward
  u_useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.slice(1);
      if (!h) { setRoute("home"); return; }
      try { setRoute(JSON.parse(decodeURIComponent(h))); }
      catch { setRoute(decodeURIComponent(h)); }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  u_useEffect(() => { saveProgress(progress); }, [progress]);

  const navigate = u_useCallback((r) => {
    setRoute(r);
    // scroll to top of main column for new page
    requestAnimationFrame(() => {
      const main = document.querySelector(".main-col");
      if (main) main.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }, []);

  const onMarkLido = u_useCallback((id) => {
    setProgress(p => p.lidos.includes(id) ? p : { ...p, lidos: [...p.lidos, id] });
  }, []);
  const onQuizDone = u_useCallback(() => {
    setProgress(p => ({ ...p, quizFeitos: Math.max(1, p.quizFeitos) }));
    navigate("progresso");
  }, [navigate]);
  const onSimulacaoDone = u_useCallback((id) => {
    setProgress(p => p.simulacoesFeitas.includes(id) ? p : { ...p, simulacoesFeitas: [...p.simulacoesFeitas, id] });
  }, []);
  const onReset = u_useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
  }, []);

  // ---- topbar text per route ----
  const routeId = typeof route === "string" ? route : route.name;
  const titles = {
    home:       { crumb: "BYST.END · INÍCIO",       title: "Visão geral" },
    biblioteca: { crumb: "BYST.END · APRENDER",     title: "Biblioteca" },
    detalhe:    { crumb: "BYST.END · APRENDER",     title: "Conteúdo" },
    quiz:       { crumb: "BYST.END · APRENDER",     title: "Quiz educativo" },
    simulador:  { crumb: "BYST.END · SIMULAR",      title: "Radar de conduta" },
    chat:       { crumb: "BYST.END · CONVERSAR",    title: "Chat orientativo" },
    canais:     { crumb: "BYST.END · APOIO",        title: "Canais oficiais" },
    progresso:  { crumb: "BYST.END · VOCÊ",         title: "Seu progresso" },
  };
  const head = titles[routeId] || titles.home;

  const sidebarRoute = (() => {
    if (routeId === "detalhe") return "biblioteca";
    return routeId;
  })();

  const renderPage = () => {
    switch (routeId){
      case "home":       return <HomePage navigate={navigate} progress={progress} />;
      case "biblioteca": return <BibliotecaPage navigate={navigate} />;
      case "detalhe":    return <DetalhePage id={route.id} navigate={navigate} onMarkLido={onMarkLido} />;
      case "quiz":       return <QuizPage navigate={navigate} onQuizDone={onQuizDone} />;
      case "simulador":  return <SimuladorPage navigate={navigate} onSimulacaoDone={onSimulacaoDone} />;
      case "chat":       return <ChatPage navigate={navigate} />;
      case "canais":     return <CanaisPage />;
      case "progresso":  return <ProgressoPage progress={progress} navigate={navigate} onReset={onReset} />;
      default:           return <HomePage navigate={navigate} progress={progress} />;
    }
  };

  return (
    <div className="app">
      <BannerCanaisOficiais onOpenCanais={() => navigate("canais")} />
      <div className="shell">
        <Sidebar route={sidebarRoute} onNavigate={navigate} />
        <div className="main-col">
          <Header
            crumb={head.crumb}
            title={head.title}
            onSearch={() => navigate("biblioteca")}
          />
          <main className="main" key={JSON.stringify(route)}>
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

// derived maps used in cards
window.tiposMap = Object.fromEntries(window.mockTipos.map(t => [t.id, t.label]));
window.temasMap = Object.fromEntries(window.mockTemas.map(t => [t.id, t.label]));

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
