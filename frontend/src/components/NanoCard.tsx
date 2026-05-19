import React from "react";

export function NanoCard({ lbl, txt }: { lbl: string; txt: string }){
  return (
    <div className="nano">
      <div className="lbl">{lbl}</div>
      <div className="txt">{txt}</div>
    </div>
  );
}
