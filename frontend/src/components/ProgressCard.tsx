import React from "react";

interface Props { k: string; v: number | string; sub: string; pct?: number; }

export function ProgressCard({ k, v, sub, pct }: Props){
  return (
    <div className="progress-card">
      <div className="k">{k}</div>
      <div className="v">{v}</div>
      <div className="sub">{sub}</div>
      {pct !== undefined && (
        <div className="ring"><i style={{ width: `${Math.min(100, pct)}%` }} /></div>
      )}
    </div>
  );
}
