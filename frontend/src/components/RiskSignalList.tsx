import React from "react";

export function RiskSignalList({ items }: { items: string[] }){
  return (
    <ol className="risk-list" aria-label="Sinais de atenção">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ol>
  );
}
