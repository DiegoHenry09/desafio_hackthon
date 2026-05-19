import React, { useMemo, useState } from "react";
import type { Route } from "../types";
import { CardMicroconteudo } from "../components/CardMicroconteudo";
import { CardTipoViolencia } from "../components/CardTipoViolencia";
import { SearchBar } from "../components/SearchBar";
import { FilterChips } from "../components/FilterChips";
import { AvisoEducativo } from "../components/AvisoEducativo";
import { mockConteudos } from "../data/mockConteudos";
import { mockTipos, mockTemas, tiposMap, temasMap } from "../data/taxonomia";

interface Props { navigate: (r: Route | Route["name"]) => void; }

export function Biblioteca({ navigate }: Props){
  const [tipo, setTipo] = useState<string | null>(null);
  const [tema, setTema] = useState<string | null>(null);
  const [busca, setBusca] = useState("");

  const conteudos = useMemo(() => mockConteudos.filter(c => {
    if (tipo && c.tipo !== tipo) return false;
    if (tema && c.tema !== tema) return false;
    if (busca){
      const s = busca.toLowerCase();
      const hay = (c.titulo + " " + c.resumo + " " + c.nanoconteudos.map(n => n.txt).join(" ")).toLowerCase();
      if (!hay.includes(s)) return false;
    }
    return true;
  }), [tipo, tema, busca]);

  return (
    <div className="page-enter">
      <p className="eyebrow">BIBLIOTECA · {mockConteudos.length} CONTEÚDOS MOCKADOS</p>
      <h1 className="page-title">Biblioteca</h1>
      <p className="page-lede">
        Materiais educativos curados. Filtre por tipo de violência, tema, ou busque por situação. Cada conteúdo traz fonte e marcador
        de <span className="mono">usage_policy</span>.
      </p>

      <div className="stack" style={{ marginBottom: 24 }}>
        <SearchBar value={busca} onChange={setBusca} />
        <div>
          <div className="muted mono" style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 8 }}>Tipo de violência</div>
          <FilterChips options={mockTipos} value={tipo} onChange={setTipo} />
        </div>
        <div>
          <div className="muted mono" style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 8 }}>Tema / camada</div>
          <FilterChips options={mockTemas} value={tema} onChange={setTema} />
        </div>
      </div>

      {conteudos.length === 0 ? (
        <div className="empty">Nenhum conteúdo encontrado com esses filtros. Tente limpar a busca.</div>
      ) : (
        <div className="grid g-3">
          {conteudos.map(c => (
            <CardMicroconteudo
              key={c.id}
              conteudo={c}
              onOpen={(id) => navigate({ name: "detalhe", id })}
              tiposMap={tiposMap}
              temasMap={temasMap}
            />
          ))}
        </div>
      )}

      <h3 className="section-h">Explorar por tipo de violência</h3>
      <div className="grid g-2">
        {mockTipos.map(t => (
          <CardTipoViolencia key={t.id} tipo={t} onPick={setTipo} />
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <AvisoEducativo variant="page" />
      </div>
    </div>
  );
}
