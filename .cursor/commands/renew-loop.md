# Renew loop

Execute um ciclo controlado de trabalho longo usando o protocolo de
`.cursor/rules/pi-renew.mdc`.

A solicitação do usuário depois de `/renew-loop` é o objetivo. Se ela não
indicar um arquivo de tarefas, trate o objetivo como uma lista e materialize
uma unidade por vez no handover; não crie um backlog amplo sem necessidade.

1. Identifique ou crie `.renew-loop/<slug>/handover.md`.
2. Leia o handover existente e apenas os arquivos apontados por ele.
3. Escolha exatamente uma unidade aberta. Se não houver uma unidade clara,
   pare e peça uma decisão curta.
4. Registre no handover a unidade, os arquivos permitidos, o critério de aceite
   e o comando de verificação.
5. Implemente somente essa unidade.
6. Execute a verificação proporcional ao risco e reporte PASS, FAIL ou não
   verificado separadamente.
7. Atualize o handover com evidência e a próxima ação única.
8. Pare ao atingir o limite informado pelo usuário (padrão: 10 ciclos), ao
   concluir o objetivo ou diante de bloqueio/ausência de autorização.

Ao parar com trabalho pendente, informe: `Continue com /renew-from-handover
<caminho>`. Não tente controlar a criação de uma nova conversa por script.
