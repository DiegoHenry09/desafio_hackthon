import React from "react";
import type { Route } from "../types";

interface Props { route: Route["name"]; onNavigate: (n: Route["name"]) => void; }

const ITEMS: Array<{ id: Route["name"]; label: string; glyph: string }> = [
  { id: "home",       label: "Início",            glyph: "•" },
  { id: "biblioteca", label: "Biblioteca",        glyph: "B" },
  { id: "quiz",       label: "Quiz",              glyph: "Q" },
  { id: "simulador",  label: "Simulador",         glyph: "S" },
  { id: "chat",       label: "Chat orientativo",  glyph: "C" },
  { id: "canais",     label: "Canais de apoio",   glyph: "!" },
  { id: "progresso",  label: "Seu progresso",     glyph: "↻" },
];

export function Sidebar({ route, onNavigate }: Props){
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <span className="mark" aria-hidden="true"></span>
        <span>Byst<span style={{ color: "var(--ink-3)" }}>.</span>end</span>
        <span className="v">v0.1</span>
      </div>
      <nav className="sb-section" aria-label="Navegação principal">
        <div className="label">Navegar</div>
        <ul className="sb-nav">
          {ITEMS.map(it => (
            <li key={it.id}>
              <button
                className={route === it.id ? "active" : ""}
                onClick={() => onNavigate(it.id)}
                aria-current={route === it.id ? "page" : undefined}
              >
                <span className="glyph" aria-hidden="true">{it.glyph}</span>
                <span>{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sb-foot">
        <b>Conteúdo educativo</b>
        Este protótipo usa dados mockados. Nenhum caso real é processado aqui.
      </div>
    </aside>
  );
}
