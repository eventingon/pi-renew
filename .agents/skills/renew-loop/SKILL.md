---
name: renew-loop
description: Executa trabalhos longos em ciclos com handover persistente, uma unidade por vez, verificações e continuação segura em nova task do Codex.
---

# Renew loop para Codex

Use esta skill quando o pedido mencionar `renew-loop`, handover, continuar um
trabalho longo ou dividir uma implementação em ciclos de contexto.

## Limite importante

O Codex não recebe aqui a API de extensão do Pi para substituir a task atual.
Portanto, a renovação é um protocolo de handover: finalizar um ciclo, persistir
o estado em arquivo e continuar em uma nova task/resume. Nunca diga que o
contexto foi reiniciado automaticamente.

## Protocolo

1. Resolva o objetivo e localize o handover em `.renew-loop/<slug>/handover.md`.
2. Leia primeiro o handover e somente as fontes apontadas nele.
3. Escolha uma única unidade aberta e registre arquivos permitidos, aceite e
   verificação antes de editar.
4. Faça a implementação mínima dessa unidade.
5. Execute a verificação proporcional ao risco. Separe `PASS`, `FAIL` e
   `não verificado`; não converta análise estática em UAT.
6. Atualize o handover com fatos, caminhos, comandos, resultados e a próxima
   ação única.
7. Pare no limite de ciclos (padrão: 10), ao concluir, ao encontrar um
   bloqueio repetido ou quando faltar autorização.

Não faça commit, push, merge, deploy, alteração de credenciais ou exclusão
material sem pedido explícito. Preserve mudanças não relacionadas no worktree.

## Formato do handover

```md
# Handover: <objetivo>

- Turno: <n>/<limite>
- Estado: <em andamento|bloqueado|concluído>
- Unidade atual: <uma unidade>
- Feito: <evidência objetiva>
- Decisões: <decisões fixadas>
- Arquivos alterados: <caminhos>
- Verificações: <comando + resultado>
- Bloqueios: <nenhum ou evidência>
- Próxima ação única: <ação>
- Parar quando: <condição>
```

## Continuação

Ao encerrar com pendências, responda com o caminho absoluto/relativo do
handover e instrua a próxima task a começar por ele. Ao receber um caminho,
valide existência e conteúdo antes de qualquer edição. Se estiver ausente,
vazio ou sem próxima ação, pare e reporte o bloqueio.

## Relatório do ciclo

Termine com: unidade executada, arquivos alterados, verificações com status,
estado do handover, próxima ação única e motivo de parada. Não confunda um
arquivo de handover atualizado com aceitação formal, deploy ou publicação.
