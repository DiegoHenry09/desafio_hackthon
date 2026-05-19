import React from "react";

export function BannerCanaisOficiais({ onOpenCanais }: { onOpenCanais: () => void }){
  return (
    <div className="banner" role="region" aria-label="Canais oficiais de apoio">
      <span className="stripe" aria-hidden="true"></span>
      <span>
        <b>Plataforma educativa.</b>{" "}
        <span style={{ color: "var(--ink-2)" }}>
          Em situação real, procure os canais oficiais — esta página não recebe denúncias.
        </span>
      </span>
      <div className="actions">
        <button className="link-btn" onClick={onOpenCanais}>Ver canais de apoio</button>
      </div>
    </div>
  );
}
