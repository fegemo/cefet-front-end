

# Comandos mais frequentes


- Baixar um repositório na sua máquina:

```
git clone https://github.com/usuario/nome-do-repositorio.git
```



- Enviar as alterações:

```
git add --all
git commit -m "Mensagem do que foi alterado"
git push -u origin master
```

- Você pode também enviar arquivos na interface web do GitHub.

- Caso algum integrante mudou algo, para obter as modificações atualizadas por outra pessoa (ou em outro computador), execute:

```
git pull origin master
```

# Significado de cada comando

- `git status`: verifica o estado dos arquivos em seu repositório local
- `git add -A`: adiciona os arquivos em seu repositório local
- `git commit -m "mensagem"`: faz commit de seus arquivos para o repositório local
- `git push origin nome-da-branch`: envia os arquivos para o respositório remoto na branch chamada `nome-da-branch`
- `git pull origin nome-da-branch`: obtém os arquivos do repositório remoto
- `git branch`: exibe as branches existentes e mostra em qual branch você está atualmente trabalhando
- `git branch nome-da-branch`: cria uma nova branch
- `git checkout nome-da-branch`: vai para uma determinada branch
