import React from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Busque por situação, palavra ou pergunta" }: Props){
  return (
    <label className="searchbar">
      <span className="ic" aria-hidden="true"></span>
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Busca"
      />
      <span className="hint">{value ? `${value.length} car.` : "ESC PARA LIMPAR"}</span>
    </label>
  );
}
