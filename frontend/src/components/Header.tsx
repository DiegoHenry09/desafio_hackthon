import React from "react";

interface Props { crumb: string; title: string; onSearch: () => void; }

export function Header({ crumb, title, onSearch }: Props){
  return (
    <header className="topbar">
      <div>
        <div className="tb-crumb">{crumb}</div>
        <div className="tb-title">{title}</div>
      </div>
      <div className="tb-spacer"></div>
      <button type="button" className="tb-search" onClick={onSearch} aria-label="Buscar na biblioteca">
        <span className="ic" aria-hidden="true"></span>
        <span>Buscar na biblioteca</span>
        <span style={{ flex: 1 }}></span>
        <span className="kbd">/</span>
      </button>
    </header>
  );
}
