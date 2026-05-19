import React from "react";

type Variant = "page" | "chat" | "quiz" | "sim";
interface Props { variant?: Variant; compact?: boolean; }

const COPY: Record<Variant, string> = {
  page: "O que está aqui é material educativo. Não substitui RH, jurídico, compliance, sindicato ou canais públicos. Em situação real, procure os canais oficiais listados na página de apoio.",
  chat: "Esta é uma orientação educativa. Não substitui RH, jurídico, compliance ou canal oficial.",
  quiz: "Este quiz é educativo. Nenhuma resposta é tratada como veredito sobre uma situação real.",
  sim:  "Esta simulação é educativa. Os cenários são fictícios e não classificam casos reais.",
};

export function AvisoEducativo({ variant = "page", compact = false }: Props){
  if (compact){
    return (
      <div className="alert-compact" role="note">
        Conteúdo educativo · não substitui canais oficiais.
      </div>
    );
  }
  return (
    <div className="alert educativo" role="note">
      <span className="stripe" aria-hidden="true"></span>
      <div className="body">
        <b>Aviso educativo.</b>
        {COPY[variant]}
      </div>
    </div>
  );
}
