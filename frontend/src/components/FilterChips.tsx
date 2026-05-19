import React from "react";

interface Option { id: string; label: string; count?: number; }
interface Props {
  options: Option[];
  value: string | null;
  onChange: (v: string | null) => void;
  allLabel?: string;
}

export function FilterChips({ options, value, onChange, allLabel = "Todos" }: Props){
  return (
    <div className="chips" role="group">
      <button
        className={`chip ${value === null ? "active" : ""}`}
        onClick={() => onChange(null)}
        aria-pressed={value === null}
      >{allLabel}</button>
      {options.map(opt => (
        <button
          key={opt.id}
          className={`chip ${value === opt.id ? "active" : ""}`}
          onClick={() => onChange(opt.id)}
          aria-pressed={value === opt.id}
        >
          {opt.label}
          {opt.count !== undefined && <span className="count">{opt.count}</span>}
        </button>
      ))}
    </div>
  );
}
