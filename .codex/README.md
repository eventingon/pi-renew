# Adaptador Codex

O skill `renew-loop` adapta o protocolo do Pi para o Codex. A cópia canônica
fica em `.agents/skills/renew-loop/SKILL.md`. Ele não reinicia a task por código:
grava um handover em `.renew-loop/<slug>/handover.md` e deixa a continuação
pronta para uma nova task ou para um resume do Codex.

Use a skill pedindo ao Codex: `use renew-loop to work through <objetivo>` ou
`continue from .renew-loop/<slug>/handover.md`.

O `AGENTS.md` da raiz aponta para a skill; as regras de segurança e execução
estão no `SKILL.md`.
