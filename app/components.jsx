/* ============================================================
 * Byst.end · UI components
 * All exposed on `window` so other Babel scripts can find them.
 * ============================================================ */

const { useState, useEffect, useMemo, useRef, useCallback } = React;

/* ---------- BannerCanaisOficiais ---------- */
function BannerCanaisOficiais({ onOpenCanais }){
  return (
    <div className="banner" role="region" aria-label="Canais oficiais de apoio">
      <span className="stripe" aria-hidden="true"></span>
      <span>
        <b>Plataforma educativa.</b>{" "}
        <span className="muted" style={{color:"var(--ink-2)"}}>
          Em situação real, procure os canais oficiais — esta página não recebe denúncias.
        </span>
      </span>
      <div className="actions">
        <button className="link-btn" onClick={onOpenCanais}>Ver canais de apoio</button>
      </div>
    </div>
  );
}

/* ---------- Header / Topbar ---------- */
function Header({ crumb, title, onSearch }){
  return (
    <header className="topbar">
      <div>
        <div className="tb-crumb">{crumb}</div>
        <div className="tb-title">{title}</div>
      </div>
      <div className="tb-spacer"></div>
      <button
        type="button"
        className="tb-search"
        onClick={onSearch}
        aria-label="Buscar na biblioteca"
      >
        <span className="ic" aria-hidden="true"></span>
        <span>Buscar na biblioteca</span>
        <span style={{flex:1}}></span>
        <span className="kbd">/</span>
      </button>
    </header>
  );
}

/* ---------- Sidebar / Layout ---------- */
function Sidebar({ route, onNavigate }){
  const items = [
    { id: "home",       label: "Início",        glyph: "•" },
    { id: "biblioteca", label: "Biblioteca",    glyph: "B" },
    { id: "quiz",       label: "Quiz",          glyph: "Q" },
    { id: "simulador",  label: "Simulador",     glyph: "S" },
    { id: "chat",       label: "Chat orientativo", glyph: "C" },
    { id: "canais",     label: "Canais de apoio", glyph: "!" },
    { id: "progresso",  label: "Seu progresso", glyph: "↻" },
  ];
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <span className="mark" aria-hidden="true"></span>
        <span>Byst<span style={{color:"var(--ink-3)"}}>.</span>end</span>
        <span className="v">v0.1</span>
      </div>
      <nav className="sb-section" aria-label="Navegação principal">
        <div className="label">Navegar</div>
        <ul className="sb-nav">
          {items.map(it => (
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

/* ---------- AvisoEducativo ---------- */
function AvisoEducativo({ variant = "page", compact = false }){
  if (compact){
    return (
      <div className="alert-compact" role="note">
        Conteúdo educativo · não substitui canais oficiais.
      </div>
    );
  }
  const copy = {
    page:   "O que está aqui é material educativo. Não substitui RH, jurídico, compliance, sindicato ou canais públicos. Em situação real, procure os canais oficiais listados na página de apoio.",
    chat:   "Esta é uma orientação educativa. Não substitui RH, jurídico, compliance ou canal oficial.",
    quiz:   "Este quiz é educativo. Nenhuma resposta é tratada como veredito sobre uma situação real.",
    sim:    "Esta simulação é educativa. Os cenários são fictícios e não classificam casos reais.",
  };
  return (
    <div className="alert educativo" role="note">
      <span className="stripe" aria-hidden="true"></span>
      <div className="body">
        <b>Aviso educativo.</b>
        {copy[variant] || copy.page}
      </div>
    </div>
  );
}

/* ---------- FonteCitada ---------- */
function FonteCitada({ fonte }){
  return (
    <div className="fonte" role="note">
      <span className="stripe" aria-hidden="true"></span>
      <div>
        <b>{fonte.titulo}</b>
        <div className="meta">{fonte.autor.toUpperCase()} · {fonte.ano} · {fonte.tipo.toUpperCase()}</div>
      </div>
    </div>
  );
}

/* ---------- Badges + Tags ---------- */
function PolicyBadge({ policy }){
  const labels = {
    public:       "PUBLIC",
    educational:  "EDUCATIONAL",
    internal:     "INTERNAL",
    restricted:   "RESTRICTED",
  };
  return <span className={`badge ${policy}`}>{labels[policy] || policy.toUpperCase()}</span>;
}
function DraftBadge(){ return <span className="badge draft">DRAFT</span>; }
function MetaTag({ children }){ return <span className="tag">{children}</span>; }

/* ---------- CardMicroconteudo ---------- */
function CardMicroconteudo({ conteudo, onOpen, tiposMap, temasMap }){
  return (
    <button
      className="card interactive"
      onClick={() => onOpen(conteudo.id)}
      style={{textAlign:"left", display:"flex", flexDirection:"column"}}
      aria-label={`Abrir conteúdo: ${conteudo.titulo}`}
    >
      <div className="mc">
        <div className="row">
          <PolicyBadge policy={conteudo.usage_policy} />
          {conteudo.status === "draft" && <DraftBadge />}
          <MetaTag>{conteudo.tempo} min</MetaTag>
        </div>
        <h3>{conteudo.titulo}</h3>
        <p>{conteudo.resumo}</p>
        <div className="foot">
          <span>{tiposMap[conteudo.tipo]} · {temasMap[conteudo.tema]}</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </button>
  );
}

/* ---------- CardTipoViolencia ---------- */
function CardTipoViolencia({ tipo, onPick }){
  const descricoes = {
    moral:     "Padrões de conduta repetidos que afetam o trabalho ou bem-estar de uma pessoa específica.",
    sexual:    "Condutas de natureza sexual não desejadas, especialmente em contextos com assimetria.",
    discrim:   "Tratamento desigual baseado em características protegidas, repetido no tempo.",
    organizac: "Práticas de cultura organizacional que criam pressão sistemática sobre grupos.",
  };
  return (
    <button className="tv" onClick={() => onPick(tipo.id)} aria-label={`Filtrar por ${tipo.label}`}>
      <div className="kind">TIPO</div>
      <h3>{tipo.label}</h3>
      <p>{descricoes[tipo.id] || "Categoria educativa para organizar materiais."}</p>
      <div className="n">{tipo.count} CONTEÚDOS</div>
    </button>
  );
}

/* ---------- NanoCard ---------- */
function NanoCard({ lbl, txt }){
  return (
    <div className="nano">
      <div className="lbl">{lbl}</div>
      <div className="txt">{txt}</div>
    </div>
  );
}

/* ---------- SearchBar ---------- */
function SearchBar({ value, onChange, placeholder = "Busque por situação, palavra ou pergunta" }){
  return (
    <label className="searchbar">
      <span className="ic" aria-hidden="true"></span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Busca"
      />
      <span className="hint">{value ? `${value.length} car.` : "ESC PARA LIMPAR"}</span>
    </label>
  );
}

/* ---------- FilterChips ---------- */
function FilterChips({ options, value, onChange, allLabel = "Todos" }){
  return (
    <div className="chips" role="group">
      <button
        className={`chip ${value === null ? "active" : ""}`}
        onClick={() => onChange(null)}
        aria-pressed={value === null}
      >
        {allLabel}
      </button>
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

/* ---------- QuizQuestionCard ---------- */
function QuizQuestionCard({ pergunta, total, index, selected, onSelect, showFeedback }){
  return (
    <div className="quiz">
      <div className="quiz-progress">
        <div className="bar"><span className="fill" style={{width: `${((index)/total)*100}%`}}></span></div>
        <div className="num">QUESTÃO {String(index+1).padStart(2,"0")} / {String(total).padStart(2,"0")}</div>
      </div>
      <h2>{pergunta.texto}</h2>
      <div className="quiz-options" role="radiogroup" aria-label="Alternativas">
        {pergunta.opcoes.map((opt, i) => {
          let cls = "option";
          if (showFeedback){
            if (opt.kind === "safer") cls += " safer";
            else if (selected === opt.id) cls += " flag";
          } else if (selected === opt.id) cls += " selected";
          return (
            <button
              key={opt.id}
              className={cls}
              role="radio"
              aria-checked={selected === opt.id}
              disabled={showFeedback}
              onClick={() => onSelect(opt.id)}
            >
              <span className="marker">{String.fromCharCode(65+i)}</span>
              <span>{opt.texto}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- FeedbackEducativo ---------- */
function FeedbackEducativo({ feedback }){
  return (
    <div className="feedback" role="region" aria-label="Feedback educativo">
      <div className="lbl">Leitura mais segura</div>
      <h4>{feedback.situacao}</h4>
      <p>{feedback.leituraSegura}</p>
      <div className="why">
        <div className="kk">Por quê</div>
        <div className="vv">{feedback.porQue}</div>
      </div>
      <div style={{marginTop: 14}}>
        <FonteCitada fonte={feedback.fonte} />
      </div>
    </div>
  );
}

/* ---------- CenarioCard ---------- */
function CenarioCard({ cenario, escolha, onEscolher, showFeedback }){
  return (
    <div className="cenario">
      <div className="pre">CENÁRIO · {cenario.id.toUpperCase()} · DRAFT</div>
      <h2>{cenario.titulo}</h2>
      <span className="role">{cenario.role}</span>
      <p className="narr">{cenario.narrativa}</p>

      <h3 className="section-h" style={{marginTop:8}}>Sinais de atenção observáveis</h3>
      <RiskSignalList items={cenario.sinais} />

      <h3 className="section-h">Qual conduta tende a ser mais segura?</h3>
      <div className="quiz-options">
        {cenario.condutas.map((c, i) => {
          let cls = "option";
          if (showFeedback){
            if (c.kind === "safer") cls += " safer";
            else if (escolha === c.id) cls += " flag";
          } else if (escolha === c.id) cls += " selected";
          return (
            <button
              key={c.id}
              className={cls}
              disabled={showFeedback}
              onClick={() => onEscolher(c.id)}
            >
              <span className="marker">{String.fromCharCode(65+i)}</span>
              <span>{c.texto}</span>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="feedback" style={{marginTop:18}}>
          <div className="lbl">Conduta mais segura</div>
          <h4>{cenario.condutas.find(c => c.kind === "safer").texto}</h4>
          <p>{cenario.leituraSegura}</p>
          <div className="why">
            <div className="kk">Risco ético/legal</div>
            <div className="vv">{cenario.riscoEtico}</div>
          </div>
          {escolha && (
            <div className="why">
              <div className="kk">Sobre sua escolha</div>
              <div className="vv">{cenario.condutas.find(c => c.id === escolha)?.feedback}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- RiskSignalList ---------- */
function RiskSignalList({ items }){
  return (
    <ol className="risk-list" aria-label="Sinais de atenção">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ol>
  );
}

/* ---------- ChatMessage ---------- */
function ChatMessage({ msg }){
  if (msg.role === "user"){
    return <div className="msg user">{msg.text}</div>;
  }
  return (
    <div className="msg bot">
      <div style={{whiteSpace:"pre-wrap"}}>{msg.text}</div>
      {msg.sources && msg.sources.length > 0 && (
        <div className="sources">
          {msg.sources.map((f, i) => <FonteCitada key={i} fonte={f} />)}
        </div>
      )}
      {msg.reminder && (
        <div className="reminder">
          <b>Lembrete:</b> para situações concretas, os canais oficiais (RH, ouvidoria, 180, 100) são o caminho.
        </div>
      )}
    </div>
  );
}

/* ---------- SuggestedPrompts ---------- */
function SuggestedPrompts({ prompts, onPick }){
  return (
    <div className="chat-suggested" role="group" aria-label="Sugestões de perguntas">
      {prompts.map(p => (
        <button key={p} className="chip" onClick={() => onPick(p)}>{p}</button>
      ))}
    </div>
  );
}

/* ---------- ProgressCard ---------- */
function ProgressCard({ k, v, sub, pct }){
  return (
    <div className="progress-card">
      <div className="k">{k}</div>
      <div className="v">{v}</div>
      <div className="sub">{sub}</div>
      {pct !== undefined && (
        <div className="ring"><i style={{width: `${Math.min(100, pct)}%`}} /></div>
      )}
    </div>
  );
}

/* expose everything */
Object.assign(window, {
  BannerCanaisOficiais, Header, Sidebar,
  AvisoEducativo, FonteCitada,
  PolicyBadge, DraftBadge, MetaTag,
  CardMicroconteudo, CardTipoViolencia, NanoCard,
  SearchBar, FilterChips,
  QuizQuestionCard, FeedbackEducativo,
  CenarioCard, RiskSignalList,
  ChatMessage, SuggestedPrompts,
  ProgressCard,
});
