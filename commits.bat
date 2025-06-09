@echo off
cd /d "%~dp0"

:: Adiciona todos os arquivos modificados
git add .

:: Commit 1
git commit -m "feat(api): adicionar endpoint GET /usuarios com dados mock"

:: Commit 2
git commit -m "feat(frontend): criar rota /usuarios com listagem usando Material UI"

:: Commit 3
git commit -m "feat(frontend): criar rota /dados/:id para exibir detalhes de um usuário"

:: Commit 4
git commit -m "feat(html): criar usuarios.html com listagem de usuários via JS"

:: Commit 5
git commit -m "feat(html): criar cadastrar.html com formulário de novo usuário"

:: Final
echo Commits aplicados com sucesso.
pause
