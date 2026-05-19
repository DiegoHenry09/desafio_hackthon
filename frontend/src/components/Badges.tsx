import React from "react";
import type { UsagePolicy } from "../types";

const LABELS: Record<UsagePolicy, string> = {
  public: "PUBLIC", educational: "EDUCATIONAL", internal: "INTERNAL", restricted: "RESTRICTED",
};

export function PolicyBadge({ policy }: { policy: UsagePolicy }){
  return <span className={`badge ${policy}`}>{LABELS[policy]}</span>;
}
export function DraftBadge(){ return <span className="badge draft">DRAFT</span>; }
export function MetaTag({ children }: { children: React.ReactNode }){
  return <span className="tag">{children}</span>;
}
