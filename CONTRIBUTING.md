# Configuração do ambiente de desenvolvimento

Os slides são uma aplicação exclusivamente de _front-end_ (páginas estáticas)
que utilizam um _micro-framework_ JavaScript chamado [bespoke.js][bespoke]
para fazer apresentações de slides.

Como a aplicação não possui _back-end_, tudo é renderizado pelo próprio
navegador em tempo de execução da página. Além disso, em vez de codificar
os estilos em CSS diretamente, o projeto usa um pré-processador chamado
[stylus][stylus].

Como precisa haver esse **pré-processamento** dos arquivos (e.g.,
transformar arquivos `.styl` em arquivos `.css`), usamos um gerenciador de
tarefas chamado [gulp][gulp]. Por sua vez, o gulp é escrito em JavaScript e
executa na plataforma [Node.js][nodejs], que basicamente é um ambiente para
se executar código JavaScript fora de um navegador.

O Node.js pode ser instalado por seu [site oficial][nodejs], mas é
mais interessante ter um programa que gerencia múltiplas versões do Node.js -
assim, quando uma nova versão do Node.js sai, não é necessário desinstalar a
última para instalar a nova, além de ser possível ter múltiplas
versões instaladas. Para Windows existe o [nodist][nodist] e para o Linux
existe o [nvm][nvm].

O restante do tutorial assume uma instalação no Linux. Os passos macro são:

1. Instalar o Node.js
1. Instalar o gulp globalmente
1. Clonar o projeto para o computador
1. Instalar as dependências do projeto (e.g., o bespoke e seus plugins)
1. Executar o projeto em modo de desenvolvimento
1. Publicar os slides em produção

## (1) Instalando o Node.js via [`nvm`][nvm]

1. Executar o seguinte comando no terminal para instalar o nvm:
  ```bash
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
  ```
1. Instalar a última versão do Node.js via nvm
  ```bash
  nvm install node
  ```
1. Verificar a instalação do Node.js e do npm
  ```
  node --version
  npm --version
  ```
  - O npm será explicado mais adiante, mas, por ora, basta saber que ele é
    instalado junto com o Node.js

## (2) Instalando o gulp

Ao instalar o Node.js, basicamente dois executáveis (de linha de comando) são
instalador:

- o `node` (`.exe`, no Windows), que é o "executador de JavaScript"
- o `npm` (idem), que é um instalador de "bibliotecas" (dependências)

Para instalar o gulp, basta pedir o `npm` para fazê-lo:

```
npm install gulp-cli -g
```

Nota: o `-g` significa "instalar globalmente", em vez de "instalar no
diretório atual".

## (3) Clonando o projeto

Para ter os arquivos no computador de trabalho, é necessário clonar seu
repositório git. Para isso, é necessário ter o git instalado e isso pode
ser feito a partir do [site oficial do git][git] ou de repositório apt:

```
sudo apt-get install git -y
```

Com o git instalado, basta clonar este repositório via terminal:

```
git clone https://github.com/fegemo/cefet-front-end.git
```

Esse comando criará uma pasta chamada `cefet-front-end` com os arquivos do
projeto, dentro da pasta que estava aberta no terminal.

## (4) Instalando as dependências

Esta aplicação possui algumas dependências, como a biblioteca
bespoke.js e alguns de seus plugins, o stylus (para pré-processar
código e transformá-lo em CSS) e algumas outras.

Todas as dependências do projeto estão descritas no arquivo
`package.json` que, além dos nomes e das versões das dependências,
também contém alguns metadados deste projeto como o nome dos
seus autores, o nome e uma descrição do projeto.

Para instalar as dependências, basta pedir ao `npm`:

```
cd cefet-front-end
npm install
```

Esse comando irá baixar todas as dependências (e suas próprias dependências,
recursivamente) e colocá-las em uma pasta chamada `node_modules`, dentro da
pasta do projeto (i.e., `cefet-front-end`).

## (5) Executando o projeto

Para ver os slides em ação, é necessário usar o gulp para executar uma tarefa
chamada `dev`. Isso pode ser feito executando, dentro da pasta do projeto:

```
gulp dev
```

Quando isso acontece, uma pasta `dist` é criada no projeto e ela recebe
todos os arquivos necessários para a exibição dos slides, com suas devidas
transformações (e.g., arquivos `.styl` se transformar em `.css`).

Nesse momento, uma série de subtarefas são executadas com o intuito de copiar
(e, em alguns casos, transformar) arquivos para a pasta `dist/` (distribuição):

1. Imagens (dentro do diretório `images/`) são copiadas para `dist/`
1. Videos (pasta `videos/`) copiados para `dist/`
1. Scripts (pasta `scripts/`) copiados para `dist/`
1. Estilos (pasta `styles/`) são transformados pelo Stylus (`.styl`) em
   arquivos CSS (`.css`) e então copiados para `dist/`
1. Arquivos anexos (e.g., algum arquivo `.zip`) copiados para `dist/`
1. Fontes (`fonts/`), ícone de favoritos (`favicon/`), páginas de exemplo
   (`sample/`), arquivos html (`html/`) também são copiados para `dist/`
1. As pastas dentro de `classes/`, que possuem os arquivos no
   [formato Markdown][markdown] com o conteúdo dos slides. Cada pasta
   refere-se a uma aula e possui apenas 1 arquivo chamado `README.md`

Além da cópia/transformação dos arquivos para `dist`, a tarefa `dev` (de
`gulp dev`) também faz outras três coisas:

1. Abre um servidor web na porta 8081 que fica servindo os arquivos. Ou
   seja, basta acessar `http://localhost:8081/` para visualizá-los.
1. Abre o navegador padrão com os slides abertos.
1. Inicia uma observação dos arquivos fonte de forma que sempre que há uma
   alteração em um dos arquivos (e.g., modifica e salva um arquivo
   `README.md`), o gulp copia/transforma o arquivo novamente e automaticamente
   atualiza o navegador, refletindo as alterações.

## Publicando os slides

Quando finalizada uma alteração, para torná-la acessível publicamente (e.g., em https://fegemo.github.io/cefet-front-end/), é necessário enviar a nova versão
para um *branch* com um especial para o GitHub chamado `gh-pages`
(de GitHub Pages¹).

Para fazer isso, é necessário fazer *commit* das alterações e então executar
uma outra tarefa gulp chamada `deploy`:

1. Fazendo *commit* das alterações:
  ```
  git add -A
  git commit -m "Descreve o que foi feito nas alterações"
  ```
1. Instruindo o gulp a invocar o git para publicar a nova versão em produção:
  ```
  gulp deploy
  ```
  - Esta tarefa pode demorar um pouquinho
1. Subindo as últimas alterações do código fonte (*commits*) para o GitHub:
  ```
  git push -u origin master
  ```

¹ [GitHub Pages][gh-pages] é um serviço gratuito do GitHub que permite que
cada repositório lá hospedado possa ter um pequeno site estático explicativo
sobre o repositório, tipicamente contendo uma documentação do projeto.
Este projeto utiliza esse espaço para colocar os slides "em produção",
acessível publicamente.

[bespoke]: http://markdalgleish.com/projects/bespoke.js/
[stylus]: http://stylus-lang.com/
[gulp]: http://gulpjs.com/
[nodejs]: https://nodejs.org/en/
[nodist]: https://github.com/marcelklehr/nodist
[nvm]: https://github.com/creationix/nvm
[git]: https://git-scm.com/
[markdown]: https://daringfireball.net/projects/markdown/
[gh-pages]: https://pages.github.com/
