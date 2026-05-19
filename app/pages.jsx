/* ============================================================
 * Byst.end · pages
 * Each page is a small function. Routing is handled in App.jsx.
 * ============================================================ */

const { useState: _useState, useEffect: _useEffect, useMemo: _useMemo } = React;

/* ---------- HOME ---------- */
function HomePage({ navigate, progress }){
  return (
    <div className="page-enter">
      <p className="eyebrow">PLATAFORMA EDUCATIVA · v0.1 · DESKTOP-FIRST</p>
      <h1 className="page-title">
        Aprender em <em>silêncio competente</em>,<br/>
        sem espetáculo.
      </h1>
      <p className="page-lede">
        Byst.end é uma biblioteca viva de prevenção de assédio profissional. Você lê, treina o olhar
        com cenários, e tira dúvidas com apoio educativo — sempre com fontes e canais oficiais à mão.
        Nada aqui substitui RH, ouvidoria, sindicato ou canais públicos.
      </p>

      <div className="doors">
        <button className="door aprender" onClick={() => navigate("biblioteca")}>
          <div className="ord">PORTA 01</div>
          <h3>Aprender</h3>
          <p>Biblioteca curada de micro-conteúdos com fontes, divididos por tipo, tema e profundidade.</p>
          <span className="arrow">Ir à biblioteca</span>
        </button>
        <button className="door simular" onClick={() => navigate("simulador")}>
          <div className="ord">PORTA 02</div>
          <h3>Simular</h3>
          <p>Cenários narrativos com escolhas de conduta. Feedback educativo sobre risco e conduta mais segura.</p>
          <span className="arrow">Abrir simulador</span>
        </button>
        <button className="door conversar" onClick={() => navigate("chat")}>
          <div className="ord">PORTA 03</div>
          <h3>Conversar</h3>
          <p>Chat orientativo educativo com fontes e aviso de limite. Não é canal de denúncia.</p>
          <span className="arrow">Abrir chat</span>
        </button>
      </div>

      <h3 className="section-h">Comece pelo mais leve</h3>
      <div className="grid g-3">
        {window.mockConteudos.slice(0, 3).map(c => (
          <CardMicroconteudo
            key={c.id}
            conteudo={c}
            onOpen={(id) => navigate({ name: "detalhe", id })}
            tiposMap={window.tiposMap}
            temasMap={window.temasMap}
          />
        ))}
      </div>

      <h3 className="section-h">Seu caminho aqui</h3>
      <div className="stats">
        <div className="stat">
          <div className="k">Conteúdos vistos</div>
          <div className="v">{progress.lidos.length}</div>
          <div className="sub">salvos neste navegador</div>
        </div>
        <div className="stat">
          <div className="k">Quiz</div>
          <div className="v">{progress.quizFeitos}</div>
          <div className="sub">de 1 disponível</div>
        </div>
        <div className="stat">
          <div className="k">Simulações</div>
          <div className="v">{progress.simulacoesFeitas.length}</div>
          <div className="sub">de {window.mockCenarios.length} cenários</div>
        </div>
        <div className="stat">
          <div className="k">Sem ranking</div>
          <div className="v">·</div>
          <div className="sub">progresso é íntimo</div>
        </div>
      </div>

      <div style={{marginTop: 32}}>
        <AvisoEducativo variant="page" />
      </div>
    </div>
  );
}

/* ---------- BIBLIOTECA ---------- */
function BibliotecaPage({ navigate }){
  const [tipo, setTipo] = _useState(null);
  const [tema, setTema] = _useState(null);
  const [busca, setBusca] = _useState("");

  const conteudos = _useMemo(() => {
    return window.mockConteudos.filter(c => {
      if (tipo && c.tipo !== tipo) return false;
      if (tema && c.tema !== tema) return false;
      if (busca){
        const s = busca.toLowerCase();
        const hay = (c.titulo + " " + c.resumo + " " + c.nanoconteudos.map(n => n.txt).join(" ")).toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [tipo, tema, busca]);

  return (
    <div className="page-enter">
      <p className="eyebrow">BIBLIOTECA · 9 CONTEÚDOS MOCKADOS</p>
      <h1 className="page-title">Biblioteca</h1>
      <p className="page-lede">
        Materiais educativos curados. Filtre por tipo de violência, tema, ou busque por situação. Cada conteúdo traz fonte e marcador
        de <span className="mono">usage_policy</span>.
      </p>

      <div className="stack" style={{marginBottom: 24}}>
        <SearchBar value={busca} onChange={setBusca} />
        <div>
          <div className="muted mono" style={{fontSize:11, letterSpacing:".08em", textTransform:"uppercase", marginBottom:8}}>Tipo de violência</div>
          <FilterChips options={window.mockTipos} value={tipo} onChange={setTipo} />
        </div>
        <div>
          <div className="muted mono" style={{fontSize:11, letterSpacing:".08em", textTransform:"uppercase", marginBottom:8}}>Tema / camada</div>
          <FilterChips options={window.mockTemas} value={tema} onChange={setTema} />
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
              tiposMap={window.tiposMap}
              temasMap={window.temasMap}
            />
          ))}
        </div>
      )}

      <h3 className="section-h">Explorar por tipo de violência</h3>
      <div className="grid g-2">
        {window.mockTipos.map(t => (
          <CardTipoViolencia key={t.id} tipo={t} onPick={setTipo} />
        ))}
      </div>

      <div style={{marginTop: 32}}>
        <AvisoEducativo variant="page" />
      </div>
    </div>
  );
}

/* ---------- DETALHE ---------- */
function DetalhePage({ id, navigate, onMarkLido }){
  const c = window.mockConteudos.find(x => x.id === id) || window.mockConteudos[0];

  _useEffect(() => { onMarkLido(c.id); }, [c.id]);

  const relacionados = _useMemo(() => {
    return window.mockConteudos.filter(x => x.id !== c.id && (x.tipo === c.tipo || x.tema === c.tema)).slice(0, 3);
  }, [c.id]);

  return (
    <div className="page-enter">
      <button className="btn btn-ghost small" onClick={() => navigate("biblioteca")} style={{marginBottom:16}}>← Voltar à biblioteca</button>

      <article className="article">
        <div className="meta-row">
          <PolicyBadge policy={c.usage_policy} />
          {c.status === "draft" && <DraftBadge />}
          <MetaTag>{window.tiposMap[c.tipo]}</MetaTag>
          <MetaTag>{window.temasMap[c.tema]}</MetaTag>
          <MetaTag>{c.tempo} min de leitura</MetaTag>
        </div>

        <h1>{c.titulo}</h1>
        <p className="lede">{c.resumo}</p>

        <AvisoEducativo variant="page" />

        <h2>O que vale observar</h2>
        <div className="nano-stack">
          {c.nanoconteudos.map((n, i) => (
            <NanoCard key={i} lbl={n.lbl} txt={n.txt} />
          ))}
        </div>

        <h2>Em mais detalhe</h2>
        {c.paragrafos.map((p, i) => <p key={i}>{p}</p>)}

        <h2>Fonte</h2>
        <div className="stack">
          {c.fontes.map((f, i) => <FonteCitada key={i} fonte={f} />)}
        </div>

        <div className="source-footer">
          SOURCE_ID · {c.source_id} &nbsp;·&nbsp; SOURCE_ROW · {c.source_row} &nbsp;·&nbsp; STATUS · {c.status.toUpperCase()}
        </div>
      </article>

      {relacionados.length > 0 && (
        <div className="related">
          <h3>Conteúdos relacionados</h3>
          <div className="grid g-3">
            {relacionados.map(r => (
              <CardMicroconteudo
                key={r.id}
                conteudo={r}
                onOpen={(id) => navigate({ name: "detalhe", id })}
                tiposMap={window.tiposMap}
                temasMap={window.temasMap}
              />
            ))}
          </div>
        </div>
      )}

      <hr className="divider" />
      <div className="row">
        <button className="btn btn-primary" onClick={() => navigate("quiz")}>Fazer o quiz educativo</button>
        <button className="btn btn-secondary" onClick={() => navigate("simulador")}>Ir para o simulador</button>
        <button className="btn btn-ghost" onClick={() => navigate("chat")}>Tirar dúvida no chat</button>
      </div>
    </div>
  );
}

/* ---------- QUIZ ---------- */
function QuizPage({ navigate, onQuizDone }){
  const quiz = window.mockQuiz;
  const [i, setI] = _useState(0);
  const [selecionadas, setSelecionadas] = _useState({});
  const [revealed, setRevealed] = _useState({});

  const total = quiz.perguntas.length;
  const pergunta = quiz.perguntas[i];

  const handleSelect = (id) => {
    if (revealed[i]) return;
    setSelecionadas(s => ({ ...s, [i]: id }));
  };
  const handleReveal = () => {
    setRevealed(r => ({ ...r, [i]: true }));
  };
  const handleNext = () => {
    if (i < total - 1) setI(i + 1);
    else onQuizDone();
  };
  const isLast = i === total - 1;
  const done = revealed[i];
  const escolha = selecionadas[i];

  return (
    <div className="page-enter">
      <p className="eyebrow">QUIZ · {quiz.titulo.toUpperCase()} · DRAFT</p>
      <h1 className="page-title">Treinar o olhar</h1>
      <p className="page-lede">{quiz.intro}</p>

      <AvisoEducativo variant="quiz" />

      <div style={{marginTop: 24}}>
        <QuizQuestionCard
          pergunta={pergunta}
          total={total}
          index={i}
          selected={escolha}
          onSelect={handleSelect}
          showFeedback={!!done}
        />

        {done && (
          <>
            <FeedbackEducativo feedback={pergunta.feedback} />
            {escolha && (
              <div className="alert limite" style={{marginTop: 14}}>
                <span className="stripe" aria-hidden="true"></span>
                <div className="body">
                  <b>Sobre a alternativa que você escolheu</b>
                  {pergunta.opcoes.find(o => o.id === escolha).explica}
                </div>
              </div>
            )}
          </>
        )}

        <div className="row mt-6">
          {!done ? (
            <>
              <button className="btn btn-primary" disabled={!escolha} onClick={handleReveal}>
                Ver leitura mais segura
              </button>
              <button className="btn btn-ghost" onClick={() => navigate("biblioteca")}>Sair do quiz</button>
            </>
          ) : isLast ? (
            <>
              <button className="btn btn-primary" onClick={handleNext}>Concluir</button>
              <button className="btn btn-secondary" onClick={() => navigate("simulador")}>Ir para o simulador</button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>Próxima pergunta</button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- SIMULADOR ---------- */
function SimuladorPage({ navigate, onSimulacaoDone }){
  const cenarios = window.mockCenarios;
  const [idx, setIdx] = _useState(0);
  const [escolha, setEscolha] = _useState({});
  const [revelado, setRevelado] = _useState({});

  const c = cenarios[idx];
  const done = revelado[idx];
  const pick = escolha[idx];

  const onEscolher = (id) => {
    if (done) return;
    setEscolha(e => ({ ...e, [idx]: id }));
  };
  const revealOnce = () => {
    setRevelado(r => ({ ...r, [idx]: true }));
    onSimulacaoDone(c.id);
  };
  const relacionados = (c.relacionados || []).map(rid => window.mockConteudos.find(x => x.id === rid)).filter(Boolean);

  return (
    <div className="page-enter">
      <p className="eyebrow">RADAR DE CONDUTAS · DRAFT</p>
      <h1 className="page-title">Simular uma situação</h1>
      <p className="page-lede">
        Três cenários narrativos. A leitura é educativa: falamos em <i>sinais de atenção</i>,
        <i> conduta mais segura</i> e <i>risco ético/legal</i> — nunca em "isso é assédio" ou "isso é crime".
      </p>

      <AvisoEducativo variant="sim" />

      <div className="chips" style={{marginTop:16}}>
        {cenarios.map((cc, i) => (
          <button
            key={cc.id}
            className={`chip ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            Cenário {i+1}
          </button>
        ))}
      </div>

      <div style={{marginTop: 20}}>
        <CenarioCard
          cenario={c}
          escolha={pick}
          onEscolher={onEscolher}
          showFeedback={!!done}
        />

        <div className="row mt-6">
          {!done ? (
            <>
              <button className="btn btn-primary" disabled={!pick} onClick={revealOnce}>
                Ver leitura mais segura
              </button>
              <button className="btn btn-ghost" onClick={() => navigate("chat")}>Tirar dúvida no chat</button>
            </>
          ) : (
            <>
              {idx < cenarios.length - 1 ? (
                <button className="btn btn-primary" onClick={() => setIdx(idx+1)}>
                  Próximo cenário
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => navigate("progresso")}>
                  Concluir simulação
                </button>
              )}
              <button className="btn btn-secondary" onClick={() => navigate("chat")}>Conversar sobre isso</button>
            </>
          )}
        </div>

        {done && relacionados.length > 0 && (
          <div className="related">
            <h3>Para aprofundar</h3>
            <div className="grid g-3">
              {relacionados.map(r => (
                <CardMicroconteudo
                  key={r.id}
                  conteudo={r}
                  onOpen={(id) => navigate({ name: "detalhe", id })}
                  tiposMap={window.tiposMap}
                  temasMap={window.temasMap}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- CHAT ---------- */
function ChatPage({ navigate }){
  const [thread, setThread] = _useState(window.mockChatThread);
  const [draft, setDraft] = _useState("");
  const [thinking, setThinking] = _useState(false);
  const scroller = React.useRef(null);

  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [thread, thinking]);

  const send = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: `u${Date.now()}`, role: "user", text: text.trim() };
    setThread(t => [...t, userMsg]);
    setDraft("");
    setThinking(true);
    setTimeout(() => {
      const known = window.mockChatReplies[text.trim()];
      const reply = known || window.mockChatFallback;
      const botMsg = {
        id: `b${Date.now()}`,
        role: "bot",
        text: reply.text,
        sources: reply.sources,
        reminder: reply.reminder,
      };
      setThread(t => [...t, botMsg]);
      setThinking(false);
    }, 650);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      send(draft);
    }
  };

  return (
    <div className="page-enter">
      <p className="eyebrow">CHAT ORIENTATIVO · APOIO EDUCATIVO</p>
      <h1 className="page-title">Tirar uma dúvida</h1>
      <p className="page-lede">
        Conversa educativa com fontes. O assistente não conclui se uma situação concreta é ou não assédio —
        para isso, há canais oficiais. Tudo o que você digita aqui fica apenas neste navegador (protótipo).
      </p>

      <div className="chat-shell">
        <div className="chat-main">
          <div className="chat-head">
            <span className="pill">Assistente · v0.1 · mock</span>
            <span className="lim">
              <b>Aviso fixo:</b> Esta é uma orientação educativa. Não substitui RH, jurídico, compliance ou canal oficial.
            </span>
          </div>
          <div className="chat-body" ref={scroller}>
            {thread.map(m => <ChatMessage key={m.id} msg={m} />)}
            {thinking && (
              <div className="msg bot" aria-live="polite">
                <span className="muted">Consultando materiais&hellip;</span>
              </div>
            )}
          </div>
          <SuggestedPrompts prompts={window.mockChatSuggested} onPick={send} />
          <div className="chat-input">
            <input
              type="text"
              placeholder="Escreva sua dúvida educativa…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={handleKey}
              aria-label="Mensagem"
            />
            <button className="btn btn-primary" onClick={() => send(draft)} disabled={!draft.trim()}>
              Enviar
            </button>
          </div>
        </div>

        <aside className="chat-side" aria-label="Apoio">
          <div className="group">
            <h4>O que este chat faz</h4>
            <p className="muted" style={{fontSize: 13, lineHeight: 1.5, margin: 0}}>
              Explicar conceitos, sugerir materiais e listar fontes. Mantém o tom educativo, sem concluir sobre casos concretos.
            </p>
          </div>
          <div className="group">
            <h4>O que ele não faz</h4>
            <ul style={{margin:0, paddingLeft: 18, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55}}>
              <li>Não afirma "isso é assédio".</li>
              <li>Não substitui RH, jurídico ou canal oficial.</li>
              <li>Não recebe denúncia.</li>
              <li>Não garante anonimato ou confidencialidade.</li>
            </ul>
          </div>
          <div className="group">
            <h4>Em situação real</h4>
            <button className="btn btn-coral small" style={{width: "100%", justifyContent: "center"}} onClick={() => navigate("canais")}>
              Ver canais oficiais
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------- CANAIS ---------- */
function CanaisPage(){
  return (
    <div className="page-enter">
      <p className="eyebrow">CANAIS DE APOIO · ORIENTAÇÃO GERAL</p>
      <h1 className="page-title">Onde buscar apoio</h1>
      <p className="page-lede">
        Canais públicos e referências para situações que demandem orientação especializada. Esta página
        não recebe denúncia, não garante anonimato e não substitui o canal interno da sua organização.
      </p>

      <div className="alert canais">
        <span className="stripe" aria-hidden="true"></span>
        <div className="body">
          <b>Em risco imediato, procure ajuda agora.</b>
          Os canais 180 e 100 atendem 24h e podem orientar próximos passos. Em emergência, ligue 190.
        </div>
      </div>

      <div className="grid g-3" style={{marginTop: 20}}>
        {window.mockCanais.map((cn, i) => (
          <div className={`canal ${cn.featured ? "featured" : ""}`} key={i}>
            <div className="who">{cn.who}</div>
            <div className="num">{cn.num}</div>
            <h3>{cn.titulo}</h3>
            <p>{cn.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="section-h">O que esta página é, e o que não é</h3>
      <div className="grid g-2">
        <div className="card">
          <h4 style={{fontSize:15, fontWeight:600, marginBottom:8}}>É</h4>
          <ul style={{margin:0, paddingLeft: 18, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6}}>
            <li>Lista geral de canais públicos.</li>
            <li>Orientação introdutória sobre por onde começar.</li>
            <li>Reforço de que canais internos da empresa também existem.</li>
          </ul>
        </div>
        <div className="card flat">
          <h4 style={{fontSize:15, fontWeight:600, marginBottom:8}}>Não é</h4>
          <ul style={{margin:0, paddingLeft: 18, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6}}>
            <li>Canal de denúncia.</li>
            <li>Garantia de anonimato ou confidencialidade.</li>
            <li>Parecer jurídico ou psicológico.</li>
          </ul>
        </div>
      </div>

      <div style={{marginTop: 32}}>
        <AvisoEducativo variant="page" />
      </div>
    </div>
  );
}

/* ---------- PROGRESSO ---------- */
function ProgressoPage({ progress, navigate, onReset }){
  const totalConteudos = window.mockConteudos.length;
  const totalCenarios = window.mockCenarios.length;
  const ultimosLidos = progress.lidos.slice(-3).reverse().map(id => window.mockConteudos.find(c => c.id === id)).filter(Boolean);
  return (
    <div className="page-enter">
      <p className="eyebrow">PROGRESSO LOCAL · LOCALSTORAGE · SEM RANKING</p>
      <h1 className="page-title">Seu caminho aqui</h1>
      <p className="page-lede">
        Tudo o que você fez ficou neste navegador. Não há comparação com outras pessoas. Você pode limpar
        a qualquer momento.
      </p>

      <div className="progress-grid">
        <ProgressCard
          k="Conteúdos lidos"
          v={progress.lidos.length}
          sub={`de ${totalConteudos} disponíveis`}
          pct={(progress.lidos.length / totalConteudos) * 100}
        />
        <ProgressCard
          k="Quiz realizado"
          v={progress.quizFeitos}
          sub="de 1 disponível"
          pct={progress.quizFeitos > 0 ? 100 : 0}
        />
        <ProgressCard
          k="Cenários simulados"
          v={progress.simulacoesFeitas.length}
          sub={`de ${totalCenarios} disponíveis`}
          pct={(progress.simulacoesFeitas.length / totalCenarios) * 100}
        />
      </div>

      <h3 className="section-h">Últimos materiais lidos</h3>
      {ultimosLidos.length === 0 ? (
        <div className="empty">
          Você ainda não leu nenhum material. <button className="btn btn-ghost small" onClick={() => navigate("biblioteca")}>Abrir a biblioteca</button>
        </div>
      ) : (
        <div className="grid g-3">
          {ultimosLidos.map(c => (
            <CardMicroconteudo
              key={c.id}
              conteudo={c}
              onOpen={(id) => navigate({ name: "detalhe", id })}
              tiposMap={window.tiposMap}
              temasMap={window.temasMap}
            />
          ))}
        </div>
      )}

      <hr className="divider" />
      <div className="row between center">
        <div className="muted" style={{fontSize:13}}>
          Salvo em <span className="kbd">localStorage["byst.progress"]</span>
        </div>
        <button className="btn btn-secondary small" onClick={onReset}>Limpar progresso</button>
      </div>
    </div>
  );
}

Object.assign(window, {
  HomePage, BibliotecaPage, DetalhePage, QuizPage,
  SimuladorPage, ChatPage, CanaisPage, ProgressoPage,
});
