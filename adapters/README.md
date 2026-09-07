# Adaptadores de `pi-renew`

O runtime original de `pi-renew` é uma extensão do Pi: ele pode chamar a API de
sessão do Pi e substituir a sessão atual. Cursor e Codex não expõem esse mesmo
hook para um projeto, então os adaptadores preservam o contrato útil — handover
explícito, estado em arquivo, uma unidade por ciclo, verificações e limites —
usando as superfícies nativas de cada ferramenta.

## O que já existia

No repositório original não havia arquivos para Cursor ou Codex. A implementação
existente está acoplada ao pacote `@earendil-works/pi-coding-agent`, ao manifesto
`pi`, a `pi.registerTool`, a `pi.registerCommand` e a `ctx.compact()`.

No workspace Eventoando já existem regras e convenções de Cursor em outros
projetos, mas elas são específicas desses projetos; não havia um adaptador
portável de renovação. Também existem exemplos locais de `AGENTS.md` e `.codex`,
mas não um protocolo equivalente a `/renew-loop`.

## Matriz de capacidade

| Capacidade | Pi | Cursor | Codex |
|---|---|---|---|
| Reiniciar a sessão pelo agente | Sim, pela extensão | Não há hook de projeto equivalente | Não há hook de projeto equivalente |
| Handover em arquivo | Sim | Sim | Sim |
| Workflow reutilizável | `/renew-loop` | `.cursor/commands/renew-loop.md` | skill `renew-loop` |
| Continuação | Automática | Nova conversa/resume, orientada pelo handover | Nova task/resume, orientada pelo handover |
| Limite e guardas | Prompt + extensão | Prompt/regra | Skill/instrução |

## Instalação

Os arquivos em `.cursor/` e `.codex/` na raiz deste repositório já são a
instalação local para abrir este repositório na ferramenta correspondente.

Para reutilizar em outro projeto, copie `.cursor/` para a raiz do projeto Cursor
e `.agents/skills/renew-loop/` junto com `AGENTS.md` para a raiz do projeto
Codex. O `.codex/README.md` é documentação auxiliar. Preserve os arquivos de
instrução já existentes e faça uma mesclagem manual quando houver conflito.

O estado de execução deve ficar em `.renew-loop/`, que é ignorado pelo Git.
