<!-- {"layout": "title"} -->
# CSS - Parte 2
## História, a Cascata e outros Seletores, Ferramentas e Ninjas

---
# Na última aula... (1/3)

---
# Na última aula... (2/3)

---
# Na última aula... (3/3)

---
# Hoje veremos

1. [Ferramentas do Desenvolvedor](#ferramentas-do-desenvolvedor)
1. [História do CSS](#historia-do-css)
1. [A cascata](#a-cascata)
1. [Outros seletores](#outros-seletores)
1. [**Os Ninjas**](#os-ninjas)

---
<!-- {"layout": "section-header", "slideHash": "ferramentas-do-desenvolvedor"} -->
# Ferramentas do Desenvolvedor
## Investigando erros e experimentando propriedades

- Ferramenta do Google Chrome
- Alterando/testando propriedades
- Investigando erros
  1. :mega: "Criei uma regra e ela não funcionou"
  1. :mega: "Apliquei uma propriedade e ela não apareceu"
  1. :mega: "Coloquei uma imagem ou arquivo CSS e não apareceu"

<!-- {ul:.content} -->

---
## Ferramentas do Desenvolvedor

- Os navegadores possuem **excelentes ferramentas** para o programador

![Ferramentas de desenvolvedor do Chrome](../../images/chrome-dev-tools.png)

---
## Usando as Ferramentas

- Visualizando o código fonte:
  - Tecla de atalho no Chrome: <kbd>Ctrl-U</kbd>
  - Ou então:
    1. clicar com **botão direito** do Mouse **na página**
    1. selecionar **"Ver código fonte"**
- Ativando o depurador:
  - Tecla de atalho padrão: <kbd>Ctrl-Shift-I</kbd> ou <kbd>F12</kbd>
  - Ou então:
    1. clicar com **botão direito** do Mouse **na página**
    1. selecionar **"Inspecionar elemento"**

---
## Usando as ferramentas - Exemplo - Alterando/testando propriedades

<video src="../../videos/desenv-chrome.mp4" height="400" controls style="margin: 0 auto;"></video>

---
## Usando as ferramentas - Exemplo - "Criei uma regra e ela não funcionou"

---
<!-- {"layout": "section-header", "slideHash": "estilizando-tabelas"} -->
# CSS
##

- História
- Cascata
- Outros seletores
---
## História

1989 - 1993 <!-- {.bullet-old} -->
  ~ Tim Berners-Lee cria a WWW em CERN
    (_European Organization for Nuclear Research_) e a deixa aberta ao público
    geral <!-- {dd:.bullet-old} -->

1994
  ~ ::: figure .floating-portrait-container.push-right
    ![Foto de Håkon Wium Lie](../../images/howcome.jpg)
    :::
    Håkon propõe uma linguagem para dar conta da responsabilidade
    de alterar a aparência de páginas web chamada CSS

1996
  ~ Juntamente com Bert Bos, Håkon publica a especificação do  **CSS1**
1998
  ~ Já gerenciado pela W3C, a especificação do **CSS2** foi
  publicada

1998 - 2014
  ~ Desenvolvimento da especificação do **CSS3** (_living standard_)

2013
  ~ Håkon tornou-se CTO na _Opera Software_

---
# A Cascata

---
## Cascata

- CSS é a sigla para _**Cascading** Style Sheets_
- Algumas propriedades são herdadas dos elementos ascendentes
  - ```css
    body {
      color: red;
    }
    ```
    - Todo o texto que estiver dentro de &lt;body&gt;, mesmo que dentro de
      parágrafos ou outros elementos, ficarão vermelhos

---
## Exemplo da Cascata

<iframe width="100%" height="300" src="//jsfiddle.net/fegemo/gqgacz36/embedded/html,css,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- Nota: clique nas abas "HTML", "CSS" e "Result". Para editar o código, clique
  em "Edit in JSFiddle"

---
## Cascata (cont.)

- Para as propriedades que não são herdadas por padrão (_e.g._, `border`),
  podemos forçar que sejam herdadas usando o valor `inherit`:
  ```css
  p {
    border: 1px solid red;
  }
  em {
    border: inherit;
  }
  ```

---
## Cascata (cont.)

- Também podemos sobrescrever a herança de uma propriedade:
  ```css
  body {
    font-weight: bold;
  }
  em {
    font-weight: normal;
  }
  ```

---
# Seletores

---
## Seletores

- Até agora, já sabemos selecionar elementos:
  1. Pelo **nome de sua _tag_**: `p { color: white; }`
  1. Por (uma de) suas **classes**: `.spam { color: red; }`
  1. Por seu **id**: `#topo-da-pagina { color: green; }`
- Contudo, a vida não para por aí...
  - Há 20+ tipos de seletores (dos quais já vimos 3)
  - Não é necessário decorar todos, apenas saber que existem para poder
    consultá-los (Google) depois ;)

---
## Seletor: **Descendente**

- Formato: `X Y`
- Exemplo
  ```css
  li a {
    text-decoration: none;
  }
  ```
- Descrição: seleciona todos os elementos `a` que têm um `li` como antecedente

---
## Seletor: **Filho** direto

- Formato: `X` &gt; `Y`
- Exemplo
  ```css
  #menu-principal > ul {
    padding: 20px;
  }
  ```
- Descrição: seleciona todos os elementos `ul` que têm `#menu-principal` como
  elemento pai
---
## Exemplo: **Filho direto** vs **Descendente**
```css
p > a {
  text-decoration: line-through;
}
p  a {
  color: red;
}
```
```html
  <p>
    <strong>Ola! <a href="http://www.google.com">Este é meu link! </a></strong>
    <a href="http://www.terra.com.br">Esta é uma outra pagina</a>
  </p>
  <a href="http://google.com">Este é outro link</a>
```
:::result
<p >
  <strong style="color:black;">Ola! <a style="color:red;" href="http://www.google.com">Este é meu link! </a></strong>
  <a style="color:red;text-decoration: line-through;" href="http://www.terra.com.br">Esta é uma outra pagina</a>
</p>
  <a style="color:blue" href="http://google.com">Este é outro link</a>
:::
---
## Seletor: por **Atributo**

- Formato: `X[atributo]`
- Exemplo
  ```css
  img[alt] {
    border: 1px solid blue;
  }
  ```
- Descrição: seleciona toda `img` que contém o atributo `alt`

---
## Seletor: por **valor** de **atributo**

- Formato: `X[atributo="valor"]`
- Exemplo
  ```css
  a[href="http://google.com/"] {
    color: blue;
  }
  ```
- Descrição: seleciona todo `a` que tem um atributo `href` igual a http://google.com/

---
## Seletor: por **trecho de valor** de **atributo**

- Formato: `X[atributo*="trecho"]`
- Exemplo
  ```css
  a[href*="goo"] {
    color: white;
  }
  ```
- Descrição: seleciona todo `a` cujo atributo `href` contenha a _string_ `"goo"`

---
## Seletor: por **trecho inicial de valor** de **atributo**

- Formato: `X[atributo^="trecho"]`
- Exemplo
  ```css
  a[href^="http"] {
    background: url(globo.png) no-repeat;
  }
  ```
- Descrição: seleciona todo `a` cujo atributo `href` comece com a _string_
  `"http"`

---
## Seletor: por **trecho final de valor** de **atributo**

- Formato: `X[atributo$="trecho"]`
- Exemplo
  ```css
  img[src$=".jpg"] {
     color: red;
  }  
  ```
- Descrição: seleciona toda `img` cujo atributo `src` termine com a _string_
  `".jpg"`

---
## Seleção de trechos de atributos
```css
  a[href$=".br"] {
    background-image: linear-gradient(45deg, green, yellow);
  }
  img[alt*="ninja"] {
    border: 3px solid black;
  }
  a[href^="http"] {
    color: purple;
  }
```
```html
    <img src="img/a.png" alt="esta é uma ovelha">
    <img src="img/b.png" alt="este é um ninja">
    <a href="http://www.terra.com.br">Um site brasuca<a>
    <a href="http://www.cnn.com">Um site gringo<a>
```
:::result
  <img style="height:50px;" src="../../images/algod-ovelha.jpg" alt="esta é uma ovelha">
  <img style="height:50px;border: 3px solid black;" src="../../images/print-ninja-logo.png" alt="este é um ninja">
  <a style="color:purple;background-image: linear-gradient(45deg, green, yellow);" href="http://www.terra.com.br">Um site brasuca<a>
  <a style="color:purple;" href="http://www.cnn.com">Um site gringo<a>
:::
---
## Seletor: **hover**

- Formato: `X:hover`
- Exemplo
  ```css
  tr:hover {
    background-color: red;
  }
  ```
- Descrição: seleciona o estado "com mouse em cima" do elemento (no caso, `tr`s)

---
## Seletor: **Negação**

- Formato: `X:not(seletor)`
- Exemplo
  ```css
  p:not(.destacado) {
    color: gray;
  }
  ```
- Descrição: seleciona todos os elementos (`p`) que não passem pelo teste do
  `seletor` (têm a classe `destacado`)

---
## Outros seletores

- `X:first-child`
- `X:last-child`
- `X:nth-child(n)`
- `X:nth-last-child(n)`
- `X:nth-of-type(n)`
- `X:nth-last-of-type(n)`
- `X:only-child`
- `X:only-of-type`
- `X:first-of-type`
- Ver: [Os 30 seletores CSS que você precisa memorizar (inglês)][css-selectors-30]

<!-- {ul:.multi-column-list-2}-->

[css-selectors-30]: https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048



---
## Atividade de Hoje

1. Instalar o git na máquina, caso ele não esteja instalado
1. **Criar um _fork_** do repositório do professor em [`https://github.com/fegemo/cefet-web-ninjas`](https://github.com/fegemo/cefet-web-ninjas)
  e **cloná-lo para sua área de trabalho**
1. Fazer o exercício e fazer _commits_ e _push_ no seu repositório
1. Enviar, via **Moodle**, o link do seu repositório até o final da aula

---
## Exercício

![](../../images/print-ninja-logo.png)

1. Você deve estilizar as duas páginas web do repositório usando os
  conhecimentos que vimos nas aulas anteriores
1. Lembre-se das boas práticas - prefira usar CSS _linked_ (_i.e._, em arquivo
  separado)
1. Você pode modificar o HTML das páginas para colocar `class` e `id` nos
  elementos para os quais essa alteração seja necessária
1. Siga os passos descritos no [arquivo README.md do exercício](https://github.com/fegemo/cefet-web-ninjas/blob/gh-pages/README.md)


---
# Atributo **alt** da imagem e a _tag_ **iframe**
---
# Atributo **alt** da imagem e o **iframe**
---
# Propriedade **alt** da imagem

  - Descreve, textualmente a imagem
  - É recomendável que todas as imagens utilizem esta propriedade
  - Útil quando:
    - ocorreu algum erro no endereço imagem;
    - conexões lentas;
    - utiliza-se um leitor de tela.


---
## Propriedade **alt** da imagem - Exemplo

- Exemplo (imagem com endereço errado)

```html
      <img alt="Imagem de uma ovelha pirata" src="imagem-inexistente.jpg">
```

:::result
  <img alt="Imagem de uma ovelha pirata" src="img-inexistente.jpg">
:::
---
## Tag **IFrame**

- Usada para embutir outra página web dentro da atual
- Exemplo:
```html
      <iframe src="www.terra.com.br"></iframe>
```

:::result
  <iframe src="http://www.terra.com.br"></iframe>
:::




---
# Referências

1. Capítulo 7 do livro
1. [Os 30 seletores CSS que você precisa memorizar (inglês)][css-selectors-30]

[css-selectors-30]: http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048
[Print a Book in CSS]: http://alistapart.com/article/boom
