<!-- {"layout": "title"} -->
# **HTML** parte 5
## Divitite e tags semânticas, display,<br>pseudo-coisas e Assombrações :ghost:

---
# Na última aula (1/3)

- Formatos de Imagens
  - **JPEG** <!-- {strong:.alternate-color} --> (ou JPG), bom para **fotos**
    tiradas do mundo real, que possuem muita variação de cor. Não possui
    transparência
  - **GIF** <!-- {strong:.alternate-color} -->, **transparência** de 1 bit e
    suporta **animações** de quadros
    - Apenas 256 cores na imagem (muito pouco!!)
  - **PNG** <!-- {strong:.alternate-color} -->, **transparência** de 8 bits
    e suporta **mais cores** que GIF
    - Bom formato para imagens com pouca variação de cor
  - **SVG** <!-- {strong:.alternate-color} -->, imagens **vetoriais** que não
    perdem qualidade se **ampliadas**

---
# Na última aula: **vídeos** (2/3)

```html
<video src="videos/fendadobiquini.mp4" controls></video>
```
- Para aumentar a compatibilidade: <!-- {ul:.compact-code} -->
  ```html
  <video width="320" height="240" controls>
    <source src="bob-esponja.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
    <source src="bob-esponja.webm" type="video/webm; codecs=vp8,vorbis">
    Seu navegador não suporta o elemento video.
  </video>
  ```
- O navegador tentará abrir o vídeo `bob-esponja.mp4` (_i.e._, o primeiro)
  - se não conseguir, tentará o arquivo `bob-esponja.webm` (2º)
  - se, mesmo assim, não conseguir, será exibido o texto

---
# Na última aula: **_Web Fonts_** (3/3)

1. Descrever a fonte no arquivo CSS usando `@font-face {...}`: <!-- {ol:.compact-code} -->
   ```css
   @font-face {
     font-family: "Emblema One";    /* dando um nome à fonte */
     src: url("fonts/EmblemaOne-Regular.woff2") format('woff2'), /* 1º formato */
          url("fonts/EmblemaOne-Regular.ttf")   format('ttf');   /* 2º formato */
   }
   ```
2. Usar a fonte:
   ```css
   h1 {
     font-family: "Emblema One", sans-serif;
   }
   ```
   - Sempre coloque uma segunda opção (_e.g._, `sans-serif`)

---
<!-- {"layout": "centered"} -->
# Hoje veremos...

1. [Divitite - doença e cura com **_tags_ semânticas**](#divitite-e-tags-semanticas)
1. [A propriedade **display**](#a-propriedade-display)
1. [_Pseudo-classes_ e _pseudo-elements_](#pseudo-classes-e-pseudo-elements)
1. [Assombrações](#assombracoes) :ghost:

---
<!-- {"layout": "section-header", "hash": "divitite-e-tags-semanticas"} -->
# Divitite e _Tags_ Semânticas
## Inflamação das `<div>`s

Motivação
  ~ SEO e Acessibilidade na Web

Doença
  ~ a **divitite**

Cura
  ~ **_tags_ semânticas**
<!-- {dl:.content} -->

---
# SEO e Acessibilidade na Web

SEO
  ~ Sigla para _Search Engine Optimization_, ou Otimização para Motores de Busca
  ~ É um conjunto de técnicas para **aumentar a possibilidade de um site
    aparecer no topo** dos resultados do **Google** (e outros motores de busca)

Acessibilidade
  ~ Possibilidade de uma pessoa consumir conteúdo das páginas web independente
    de condições físicas
  ~ Pessoas cegas usam um programa especial (o **"leitor de tela"**) que **lê o
    código HTML em voz alta** para elas

*[SEO]: Search Engine Optimization*

---
<!-- {"backdrop": "divitite"} -->

---
## Divitite

- Sintomas
  - Um acúmulo grande de elementos `div` e `span` aninhados
- Muitas páginas Web usam `div`/`span` da seguinte forma:
  ```html
  <div id="header">...</div>
  <div id="footer">...</div>
  <div class="article">...</div>
  <span class="time">...</div>
  <div id="navigation">...</div>
  ```


---
## A cura da Divitite: **_tags_ semânticas**

- O dr. HTML5 ![Logomarca do HTML](../../images/logo-html.svg) <!-- {.emoji} -->
  propôs elementos idênticos às `divs`/`spans`, mas que **possuem
  sentido para o navegador**. Por exemplo:
  ```html
  <header></header>   <!-- em vez de <div id="header"></div> -->
  <footer></footer>   <!-- em vez de <div id="footer"></div> -->
  <article></article> <!-- em vez de <div id="article"></div> -->
  <time></time>       <!-- em vez de <span id="time"></span> -->
  <nav></nav>         <!-- em vez de <div id="navigation"></div> -->
  ```

---
<!-- {"hash": "elementos-semanticos"} -->
## Elementos semânticos (1/3)

- [`<main></main>`](http://www.w3.org/wiki/HTML/Elements/main) `(block)`
  - Conteúdo principal da página
- [`<header></header>`](http://www.w3.org/wiki/HTML/Elements/header) `(block)`
  - Cabeçalho da página ou de seções (`section`) ou artigos (`article`)
- [`<footer></footer>`](http://www.w3.org/wiki/HTML/Elements/footer) `(block)`
  - Análogo ao `header`, porém recomendado para que contenha informação típica
    de um rodapé de página
- [`<article></article>`](http://www.w3.org/wiki/HTML/Elements/article)
  `(block)`
  - Um componente "completo" (ou auto-contido) da página
    - Em um blog, seria um _post_
    - Em uma loja, seria um produto

---
## Elementos semânticos (2/3)

- [`<section></section>`](http://www.w3.org/wiki/HTML/Elements/sectionhtml)
  `(block)`
  - Uma seção lógica da página, tipicamente contendo um título
- [`<nav></nav>`](http://www.w3.org/wiki/HTML/Elements/nav) `(block)`
  - Uma seção da página que contenha _links_ de navegação
  - Exemplos:
    - O menu principal da página
    - Tabela de conteúdo (TOC) com
      _links_ internos

*[TOC]: Table of Contents*

---
## Elementos semânticos (3/3)

- [`<aside></aside>`](http://www.w3.org/wiki/HTML/Elements/aside) `(block)`
  - Uma seção de conteúdo periférico na página
  - Exemplos:
    - Barras laterais
    - _Widgets_ periféricos
    - Conteúdo à parte do principal
- [`<time></time>`](http://www.w3.org/wiki/HTML/Elements/time) `(inline)`
  - Representa uma data e/ou horário
- [`<mark></mark>`](http://www.w3.org/wiki/HTML/Elements/mark) `(inline)`
  - Representa uma marcação no texto
    (tipo <mark style="background-color: yellow">caneta marcadora</mark>)

---
## Exemplo de uso - Elementos semânticos

  <iframe width="100%" height="80%" src="//jsfiddle.net/fegemo/oy82x4tu/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0" style="float: right"></iframe>

---
## Elementos semânticos **pré-HTML5**

[`<address></address>`](http://www.w3.org/wiki/HTML/Elements/address) <!-- {dl:.width-30.full-width} -->
~ para endereços

[`<abbr title=""></abbr>`](http://www.w3.org/wiki/HTML/Elements/abbr)
~ para abreviações

[`<blockquote></blockquote>`](http://www.w3.org/wiki/HTML/Elements/blockquote)
~ para citação em bloco

[`<q></q>`](http://www.w3.org/wiki/HTML/Elements/q)
~ para citação em linha

[`<cite></cite>`](http://www.w3.org/wiki/HTML/Elements/cite)
~ para referência

[`<code></code>`](http://www.w3.org/wiki/HTML/Elements/code)
~ para código fonte

[`<kbd></kbd>`](http://www.w3.org/wiki/HTML/Elements/kbd)
~ para teclas do teclado


---
<!-- {"layout": "section-header", "hash": "a-propriedade-display"} -->
# A propriedade **display**
## e seus diversos valores

- Valores:
  - `block`
  - `inline`
  - `inline-block`
  - `none`
  - `table`
  - `table-row`
  - `table-cell`
  - `flex` e `inline-flex` ![Logomarca do CSS](../../images/logo-css.svg) <!-- {.emoji} -->
  - `grid` e `inline-grid` ![Logomarca do CSS](../../images/logo-css.svg) <!-- {.emoji} -->
- Alterando a visibilidade

<!-- {ul^1:.content} -->

---
## A propriedade **display** (na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display))

- Define o **tipo de visualização** de um elemento e também seu
  **comportamento** no fluxo da página
- Os valores mais comuns
  - `block`, para definir um elemento com comportamento `block`
  - `inline`, similarmente, para `inline`
  - `inline-block`, similar a `block`, porém sem quebra de linha
  - `none`, sem renderização

---
## A propriedade **display** (cont.)

- É possível, por exemplo:
  ```css
  div { display: inline; }
  span { display: block; }
  ```

  - Mas é claro que você não vai fazer isso... ;)
- Para **remover um elemento do fluxo e não renderizá-lo** de forma alguma:
  ```css
  a[href*="xxx"] { display: none; }
  ```

---
## Display: **inline-block**

- Une a **capacidade de se <u>definir dimensões</u> de `block`** e a
  possibilidade de **ter um <u>fluxo lateral</u>** (sem quebra de linha), como
  `inline`. Exemplo:
  ```html
  <div class="passo">Instalar</div>
  <div class="passo">Aprender</div>
  <div class="passo">Programar</div>
  ```
  ```css
  .passo {
    display: inline-block;
    width: 150px;
    height: 150px; /* ... */
  }
  ```

---
## Resultado do display **inline-block**

<iframe width="600" height="400" src="//jsfiddle.net/fegemo/2gfkyrrh/3/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0" class="flex-align-center bordered rounded"></iframe>

---
<!-- {"layout": "tall-figure-right", "scripts": ["../../scripts/classes/caniuse.min.js"]} -->
## Display: **table-***

<div class="caniuse" data-feature="css-table" style="justify-self: flex-end"></div>

- Alguns valores são para a criação de _layouts_ em formato de tabelas:
  - `table`, `table-cell`, `table-column`, `table-column-group`,
    `table-footer-group`, `table-header-group`, `table-row`,
    `table-row-group`, `inline-table`
- Veja alguns [exemplos de uso](http://colintoh.com/blog/display-table-anti-hero) no link

**Hoje em dia**: preferimos _flex_ ou _grid_ ;) <!-- {p:.span-columns.note.info} -->

---
<!-- {"layout": "tall-figure-left", "slideStyles": {"grid-template-columns": "auto 1fr"}} -->
## Display: **flex** e **inline-flex** ![Logomarca do CSS](../../images/logo-css.svg) <!-- {.emoji} -->

<div class="caniuse" data-feature="flexbox"></div>

- Mais recentemente, o CSS3 introduziu o **flexbox** <!-- {ul:.bulleted} -->
- É uma forma **bem flexível** para dispor os elementos
- Cria uma linha (`row`) ou coluna (`column`) com os filhos
- Além de `display: flex` e `display: inline-flex`, foram introduzidas outras propriedades. Exemplos:

`flex-direction` <!-- {dl:.span-columns.width-20.full-width.no-margin.bulleted.bullet} -->
~ `row` (padrão), `column`, `row-reverse`, `column-reverse`
~ dispõe filhos na horizontal (se `row`) ou vertical (`column`)

`justify-content`
~ `flex-start` (padrão), `center`, `space-around`, `space-between`...
~ define como distribuir o espaço que sobrou

`align-items`
~ `stretch` (padrão), `flex-start`, `center`...
~ define posição dos elementos no "contraeixo"

---
<!-- {"layout": "2-column-content", "embeddedStyles": ".horizontal-flex-example li { font-size: .8em; flex: 1; margin-right: 4px; background: #fffc; outline: 1px solid silver; } .horizontal-flex-example { display: flex; justify-content: space-between; list-style-type: none; padding-left: 0; }"} -->
## Exemplo com flexbox: lista horizontal

```css
ul.horizontal {
  display: flex;
  justify-content: space-around;

  /* tirar coisas que vem na <ul> */
  list-style-type: none;
  padding-left: 0;
}

ul.horizontal > li {
  flex: 1; /* crescer com peso 1 */
  
  /* espacinho e centralização */
  margin-right: 4px;
  text-align: center;
}
```

- ::: result . text-align: center
  - Abacaxi <!-- {ul:.horizontal-flex-example} -->
  - Kiwi
  - Maçã
  - Uva
  - Limão
  :::
- Veremos mais sobre **flexbox** em outra aula <!-- {ul^1:.no-bullets.no-padding.bulleted-0} -->

---
<!-- {"layout": "tall-figure-right", "slideStyles": {"grid-template-columns": "auto 1fr"}, "embeddedStyles": ".grid-desc-dl dd {margin-bottom: .15em;}"} -->
## Display: **grid** <!-- {.alternate-color} --> e **inline-grid** <!-- {.alternate-color} --> ![Logomarca do CSS](../../images/logo-css.svg) <!-- {.emoji} -->

<div class="caniuse" data-feature="css-grid"></div>

- **Flexbox** é uma ferramenta de **1 dimensão**:
  - Cria linha (`row`) ou coluna (`column`)
- Mas vários _layouts_ têm 2 dimensões (linhas+cols)
- O `display: grid` e `display: inline-grid` criam **_layouts_ 2D** <!-- {strong:.alternate-color} -->
- E, como o flexbox, há várias outras propriedades. Por exemplo: <!-- {ul^1:.bulleted} -->

`grid-template-rows`<br>`grid-template-columns`  <!-- {dl:.span-columns.smaller-text-90.width-20.full-width.no-margin.bulleted.bullet.grid-desc-dl} -->
~ determina os tamanhos das linhas ou colunas
~ ex: `auto 1fr auto` (3 partes, do meio ocupando o que sobrar)
~ ex: `200px 10% 1fr` (3 partes, 1ª fixa, 2ª fluida e 3ª restante)
~ ex: `1fr 3fr` (2 partes, 1ª ocupando 1/4 e 2ª 3/4 do espaço)

`grid-row`<br>`grid-column`
~ propriedade de cada filho, define onde ficar nas linhas e colunas, ex: `1 / 3`, `1 / 2`

---
<!-- {"layout": "2-column-content", "classes": "compact-code-more"} -->
## Exemplo usando `grid`

- HTML <!-- {ul:.no-bullets.no-padding} -->
  ```html
  <main>
    <header></header>
    <nav></nav>
    <section></section>
    <footer></footer>
  </main>
  ```
  CSS (elemento pai)
  ```css
  main {
    display: grid;
    grid-template-rows: 200px 1fr auto;
    grid-template-columns: 300px 1fr;
  }
  ```

1. CSS (dos filhos) <!-- {ol:.no-bullets.no-padding.two-column-code} -->
   ```css
   header {
     grid-column: 1 / 3;
   }

   nav {
     grid-column: 1 / 2;
     grid-row: 2 / 3;
   }
   section {
     grid-column: 2 / 3;
     grid-row: 2 / 3;
   }
   footer {
     grid-column: 1 / 3;
     grid-row: 3 / 4;
   }
   ```
   ::: result .full-width height: 250px; display: grid; grid-template-rows: 60px 1fr auto; grid-template-columns: 90px 1fr;
   <header style="background: lightblue; grid-column: 1/3;"></header>
   <nav style="background: black; grid-column: 1/2; grid-row: 2/3;"></nav>
   <section style="background: green; grid-column: 2/3; grid-row: 2/3;"></section>
   <footer style="background: gray; grid-column: 1/3; grid-row: 3/4; min-height: 40px;"></footer>
   :::

---
<!-- {"layout": "section-header"} -->
# Alterando a visibilidade
## Fazendo elementos aparecerem ou sumirem

- Com `display: none`
- Com `visibility: hidden`
- Com `opacity: 0`
<!-- {ul:.content} -->

---
## Visibilidade usando **display**

- É possível tornar um elemento invisível usando `display: none;`
- O elemento é **removido do fluxo**, ou seja, o espaço onde ele seria
  posicionado é liberado
  ```css
  img#logotipo {
    display: none;
  }
  ```

---
## A propriedade **visibility** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility))

- Usada para alterar a visibilidade de elementos
  ```css
  img#logotipo {
    visibility: hidden; /* visible */
  }
  ```
- Os elementos invisíveis (`hidden`) continuam ocupando espaço
- Descendentes de elementos invisíveis herdam o valor `hidden`, mas podem
  tornar-se visíveis usando `visibility: visible;`

---
## A propriedade **opacity** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity))

- Usada para definir a opacidade (transparência) de elementos
  ```css
  video {
    opacity: 0.5; /* 0.0 (transparente) a 1.0 (opaco) */
  }
  ```
- Os elementos transparentes continuam ocupando espaço, mas deixam transparecer
  quem está "atrás" deles

1. <!-- {ol:.no-bullets.layout-split-2.no-margin.no-padding.full-width} -->
   <iframe width="600" height="180" src="//jsfiddle.net/fegemo/dr3546z9/embedded/result,html,css/" allowfullscreen="allowfullscreen"  allowpaymentrequest frameborder="0" class="bordered"></iframe>
1. ↙️ Comparação entre `display`, `visibility` e `opacity`

---
## A propriedade **overflow** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow))

- Controla se conteúdo que extrapola o elemento deve ser cortado, se deve ser
  mostrado ou se deve ser criada uma barra de rolagem
  ```css
  div {
    overflow: scroll; /* visible, hidden, scroll, auto */
  }
  ```
- Exemplo:
  - <!-- {li^0:.no-bullets.no-padding.layout-split-2.compact-code} -->
    ```css
    div {
      max-height: 175px;
      overflow: auto;

      /* para visualizar a div */        
      border: 1px dashed gray;
    }
    ```
    ::: result . max-width: 50%
    <div style="max-height: 175px; overflow: auto; border: 1px dashed gray;">
      <p class="smaller-text-70">Cultuadas ao longo da história por diversas civilizações como símbolo
        de riqueza, trabalho ou de perseverança, pela forma como defendem
        seu território, as abelhas surgiram muito antes do homem,
        há mais de 100 milhões de anos.
      </p>
      <p class="smaller-text-70">Pertencentes à ordem <em>Hymenoptera</em> e à superfamília dos
        <em>Apoidea</em> (grupo <em>Apiformes</em>), as abelhas se dividem em
        cerca de 20 mil espécies e a mais conhecida é a
        <em>Apis mellifera</em>.
      </p>
    </div>
    :::

---
<!-- {"layout": "section-header", "hash": "pseudo-classes-e-pseudo-elements"} -->
# _Pseudo-classes_ e _Pseudo-elements_
## Mais alguns seletores

_Pseudo-class_
  ~ permitem **selecionar** elementos em **diferentes situações**

_Pseudo-element_
  ~ permitem **estilizar** certas **partes de elementos**
<!-- {dl:.content} -->

---
## _Pseudo-**classes**_

- Indicam um estado (situação) de um elemento. Exemplos:
  ```css
  .link-para-comprar:hover { /* :hover (mouse em cima), mas tbm há :active, :visited... */
    text-decoration: underline;
  }
  ```
- Algumas das _pseudo-classes_ mais comuns:
  - `:focus` contém o foco
  - `:hover` mouse em cima
  - `:first-child` é o último filho
  - `:last-child` é o último filho
  - `:not()` exceto que
  - `:nth-child()` é o n-ésimo filho
  - `:nth-of-type()` n-ésimo filho de tag
  - `:checked` caixa marcada <!-- {ul:.multi-column-list-2} -->
- [Lista com todas](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
  na MDN

---
## Exemplos _com pseudo-**classes**_

- Estilização de links: <!-- {ul:.compact-code-more.horizontal-list.no-bullets.no-padding.full-width style="justify-content: space-around"} -->
  ```css
  a:link {
    text-decoration: none;
    color: cornflowerblue;
  }
  a:visited {
    color: gray;
  }
  a:hover {
    text-decoration: underline;
  } 
  a:active {
    color: darkred;
  }
  ```
  ::: result
  <style>
  .a:link {
    text-decoration: none;
    color: cornflowerblue;
  }
  .a:visited {
    color: gray;
  }
  .a:hover {
    text-decoration: underline;
  } 
  .a:active {
    color: darkred;
  }
  </style>
  [Site do Pudim](http://www.pudim.com.br) <!-- {.a} -->
  :::
- Realçando o foco:
  ```css
  *:focus {
    outline: 3px dashed yellow;
  }
  ```
  ::: result .b
  <style>
  .b *:focus {
    outline: 3px solid yellow;
  }
  .b input {
    width: 8em;
  }
  .b label, .b input {
    font-size: 0.75em;
  }
  .b label {
    display: block;
  }
  </style>
  <label>Digite seu nome: <input></label>
  <label>Digite seu email <input type="email"></label>
  <label>Digite a senha <input type="password"></label>
  <label>Confirme a senha <input type="password"></label> 
  :::
- Pegando 1º de tipo:
  ```css
  article:nth-of-type(1) {
    width: 100%;
  }
  article:not(:nth-of-type(1)) {
    width: 50%;
  }
  ```
  ::: result .c max-width: 320px; display: flex; flex-wrap: wrap;
  <style>
  .c article {
    font-size: 0.5em;
    border: 1px solid gray;
    margin-bottom: 0.75em;
    box-shadow: 3px 3px 8px #0003;
  }
  .c h3 {
    font-size: 1.25em;
  }
  .c p {
    font-size: 1em;
    line-height: 1;
    text-align: left;
  }
  .c article:nth-of-type(1) {
    width: 100%;
  }
  .c article:not(:nth-of-type(1)) {
    width: 50%;
  }  
  .c article:not(:nth-of-type(1)) p {
    height: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1;
    white-space: nowrap;
  }
  </style>
  <article><h3>Primeira manchete</h3><p>Esta é a primeira nóticia e ela fala sobre os animais que estão enjaulados no zoológico da asa leste da cidade de Itapecerica da Serra.</p></article>
  <article><h3>Segunda manchete</h3><p>Esta é a segunda nóticia e ela fala sobre os animais que estão enjaulados no zoológico da asa leste da cidade de Itapecerica da Serra.</p></article>
  <article><h3>Terceira</h3><p>Esta é a terceira nóticia e ela fala sobre os animais que estão enjaulados no zoológico da asa leste da cidade de Itapecerica da Serra.</p></article>
  :::


---
## _Pseudo-**elements**_ <!-- {.alternate-color} -->

- Indicam partes de um elemento. Exemplos:
  ```css
  p::selection {
    color: white;
    background-color: hotpink;
  }
  ```
  <style>
    .different-selection::selection { background-color: hotpink; color: white; }
  </style>
  `<p>`<span class="different-selection">Me selecione, bem aqui &larr;</span>`</p>`
- Pode-se usar tanto `::pseudo-element` quanto `:pseudo-element`

---
<!-- {"layout": "2-column-content"} -->
## _Pseudo-**elements**_ comuns <!-- {.alternate-color} -->

- Os _pseudo-elements_ mais comuns:
  - `::selection` - seleção de texto
  - `::placeholder` - descrição de `input`
  - **`::before` - conteúdo "pré-conteúdo"**
  - **`::after` - conteúdo "pós-conteúdo"**
  - `::first-letter` - primeira letra
  - `::first-line` - primeira linha
- [Lista com todos](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
  na MDN

1. Exemplo de `::first-letter`: <!-- {ol:.no-bullets.no-padding.compact-code} -->
   ```css
   p:first-of-type::first-letter {
      float: left;
      font-size: 5em;
      line-height: 0.6em;
      padding-top: 0.1em;
   }
   ```
   ::: result .d
   <style>
    .d p {
      text-align: left;
    }
    .d p:first-of-type::first-letter {
      float: left;
      font-size: 5.5em;
      line-height: 0.6em;
      padding-top: 0.1em;
    }
   </style>
   Esta é a primeira nóticia e ela fala sobre os animais que estão enjaulados no zoológico da asa leste da cidade de Itapecerica da Serra.
   :::

---
<!-- {"hash": "exemplo-de-before"} -->
## Exemplo de **::before**

- Por exemplo, como colocar um texto de "Novidade!" antes de cada notícia?
  ```css
  .novidade::before {
    content: "Novidade!";
    display: inline-block;
    background: orange; /* ... */
  }
  ```
  - Resultado:
    <iframe width="100%" height="120" src="//jsfiddle.net/fegemo/76wdcLao/embedded/html,result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"layout": "section-header", "hash": "assombracoes"} -->
# Assombrações :ghost:
## Faça o **Blog Assombrado**

- Atividade de hoje
- Transformando uma lista em **um menu**
<!-- {ul:.content} -->

---
<!-- {"backdrop": "assombrado"} -->

---
# Atividade de Hoje

- Completar a página inicial do "Blog Assombrado"
- [Baixe os arquivos][assombrado-seminal] contendo o HTML e faça os exercícios
  - O resultado final tem que ser semelhante ao [desta imagem](../../images/assombrado.jpg)
  - Leia as instruções detalhadas no arquivo `README.md`. No geral:
    1. Converter as `<div>`s e `<span>`s em _tags_ semânticas
       - Pode haver algumas que não possuem _tags_ semânticas
    1. Estilizar o menu principal
    1. Colocar "Novidade!" antes dos 2 posts mais recentes

[assombrado-seminal]: https://github.com/fegemo/cefet-front-end-assombrado/archive/master.zip

---
<!-- {"hash": "transformando-lista-em-menu"} -->
## Transformando uma lista em **um menu**

- É muito comum que um site tenha um "menu principal" que é uma **lista de itens
  na horizontal** <!-- {.underline.upon-activation} -->. #comofaz?
  1. ![](../../images/ul-default-padding.png) <!-- {.push-right} --> **Tirar
     o `padding-left`** da `<ul>` ➡️
  1. Transformar **`<li>`s em `inline-block`** ou **usar flexbox para a `<ul>`** <!-- {strong:.alternate-color} --> 🌟
  1. Tirar "bolinha" do item:
     ```css
     #menu-principal li {
       list-style-type: none;
     }
     ```
  1. Colocar uma **margem lateral** entre os `<li>`s
  1. Estilizar o `<li>` no estado de `:hover` para mostrar que ele é "clicável"

---
<!-- {"layout": "centered"} -->
# Referências

- Capítulo 12 do livro
- [Capítulo _semantics_](http://diveintohtml5.info/semantics.html) do livro
  diveintohtml5.org
- [Propriedade **display** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Propriedade **visibility** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [Propriedade **opacity** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
