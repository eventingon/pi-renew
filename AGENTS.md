# AGENTS.md — pi-renew adapters

Este repositório contém uma extensão nativa do Pi e adaptadores de protocolo
para Cursor e Codex. Ao trabalhar no adaptador Codex, use a skill local
`.agents/skills/renew-loop/SKILL.md`. Ao trabalhar no adaptador Cursor, use a
regra `.cursor/rules/pi-renew.mdc` e os comandos em `.cursor/commands/`.

O Pi possui reinício de sessão real pela extensão. Cursor e Codex usam handover
persistente e nova conversa/task; não declare reinício automático nessas duas
ferramentas.

Preserve mudanças não relacionadas. Antes de alterar a implementação Pi, leia
`README.md`, `docs/renew-loop.md` e `docs/STATUS.md`. Para mudanças em
adaptadores, mantenha o protocolo de uma unidade por ciclo, verificação
explícita e limites de parada.
