<!-- {"layout": "title"} -->
# CSS - Parte 3
## Divitite e tags semânticas,  SEO e Acessibilidade, display, pseudo-elements

---
## Na última aula (1/3)

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
# Na última aula... (2/3)
```html
<video src="videos/fendadobiquini.mp4" controls></video>
```
- Para aumentar a compatibilidade:
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
# Na última aula (3/3)

- WebFonts:
  1. Descrever a fonte no arquivo CSS usando `@font-face {...}`:
     ```css
     @font-face {
       font-family: "Emblema One";    /* dando um nome à fonte */
       src: url("fonts/EmblemaOne-Regular.woff2") format('woff2'), /* 1º formato */
            url("fonts/EmblemaOne-Regular.woff")  format('woff'),  /* 2º formato */
            url("fonts/EmblemaOne-Regular.ttf")   format('ttf');   /* 3º formato */
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
# Hoje veremos...

1. Divitite - doença e cura com **_tags_ semânticas**
1. A propriedade **display**
1. Alterando a visibilidade
1. _Pseudo-classes_ e _pseudo-elements_=

---
# Divitite e _Tags_ Semânticas

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

- O Dr. html5 propôs elementos idênticos às `divs`/`spans`, mas que **possuem
  sentido para o navegador**. Por exemplo:
  ```html
  <header></header>   <!-- em vez de <div id="header"></div> -->
  <footer></footer>   <!-- em vez de <div id="footer"></div> -->
  <article></article> <!-- em vez de <div id="article"></div> -->
  <time></time>       <!-- em vez de <span id="time"></span> -->
  <nav></nav>         <!-- em vez de <div id="navigation"></div> -->
  ```

---
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
## Exmplo de uso - Elementos semânticos

  <iframe width="90%" height="80%" src="//jsfiddle.net/fegemo/eehL6wry/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0" style="float: right"></iframe>


---
## Elementos semânticos **pré-html5**

- [`<address></address>`](http://www.w3.org/wiki/HTML/Elements/address)
- [`<abbr title=""></abbr>`](http://www.w3.org/wiki/HTML/Elements/abbr)
- [`<blockquote></blockquote>`](http://www.w3.org/wiki/HTML/Elements/blockquote),
  [`<q></q>`](http://www.w3.org/wiki/HTML/Elements/q)
- [`<cite></cite>`](http://www.w3.org/wiki/HTML/Elements/cite)
- [`<code></code>`](http://www.w3.org/wiki/HTML/Elements/code)
- [`<kbd></kbd>`](http://www.w3.org/wiki/HTML/Elements/kbd)
- E outros...

---
# A propriedade **display**

---
## A propriedade **display** (na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display))

- Define o **tipo de visualização** de um elemento e também seu
  **comportamento** no fluxo da página
- Os valores mais comuns
  - `block`, para definir um elemento com comportamento `block`
  - `inline`, similarmente, para `inline`
  - `inline-block`, similar a `block`, porém sem quebra de linha
  - `none`, sem renderização
- Ao todo, são ~25 valores, dos quais apenas 15 são suportados pelos principais
  navegadores

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
  <div class="passo">1<br>Instalar</div>
  <div class="passo">2<br>Aprender</div>
  <div class="passo">3<br>Programar</div>
  ```
  ```css
  .passo {
    display: inline-block;
    width: 150px;
    height: 100px; /* ... */
  }
  ```

---
## Display: **inline-block**

- Resultado:

  <style>.passo { display: inline-block; width: 150px; height: 150px; border: 2px inset rebeccapurple; background: rgba(255, 255, 255, .5); font-size: 26px; font-family: "Comic Sans MS"; text-align: center; line-height: 50px; border-radius: 75px; }</style>
  <div class="passo">1<br>Instalar</div>
  <div class="passo">2<br>Aprender</div>
  <div class="passo">3<br>Programar</div>

---
<!-- {"scripts": ["../../scripts/classes/caniuse.min.js"]} -->
## Display: **table-***

- <div class="caniuse" data-feature="css-table" style="float: right;"></div>

  Alguns valores são para a criação de _layouts_ em formato de tabelas:
  - `table`, `table-cell`, `table-column`, `table-column-group`,
    `table-footer-group`, `table-header-group`, `table-row`,
    `table-row-group`, `inline-table`
- [Exemplos de uso](http://colintoh.com/blog/display-table-anti-hero)


---
<!-- {"layout": "section-header"} -->
# Alterando a visibilidade
## Fazendo elementos aparecerem ou sumirem

- Com `display: none`
- Com `visibility: hidden`

<!-- {ul:.content} -->

---
## Usando **display**

- É possível tornar um elemento invisível usando `display: none;`
- O elemento é **removido do fluxo**, ou seja, o espaço onde ele seria
  posicionado é liberado
- ```css
  img#logotipo {
    display: none;
  }
  ```

---
## A propriedade **visibility** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility))

- Usada para alterar a visibilidade de elementos
- ```css
  img#logotipo {
    visibility: hidden; /* visible */
  }
  ```
- Os elementos invisíveis (`hidden`) continuam ocupando espaço
- Descendentes de elementos invisíveis herdam o valor `hidden`, mas podem
  tornar-se visíveis usando `visibility: visible;`



---
## A propriedade **overflow** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow))

- Controla se conteúdo que extrapola o elemento deve ser cortado, se deve ser
  mostrado ou se deve ser criada uma barra de rolagem
- ```css
  div {
    overflow: scroll; /* visible, hidden, scroll, auto */
  }
  ```

---
# _Pseudo-classes_ e _Pseudo-elements_

---
## _Pseudo-**classes**_

- Indicam um estado de um elemento. Exemplos:
  ```css
  .link-para-comprar:hover {
    text-decoration: underline;
  }
  ```
- Algumas das _pseudo-classes_ mais comuns:
  - `:focus` - contém o foco
  - `:hover` - mouse em cima
  - `:last-child` - último
  - `:not()` - exceto que
  - `:nth-child()` - n-ésimo
  - `:checked` - caixa marcada <!-- {ul:.multi-column-list-2} -->
- [Lista com todas](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
  na MDN

---
## _Pseudo-**elements**_

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
## _Pseudo-**elements**_ comuns

- Os _pseudo-elements_ mais comuns:
  - `::selection` - seleção de texto
  - `::placeholder` - descrição de `input`
  - **`::before` - conteúdo "pré-conteúdo"**
  - **`::after` - conteúdo "pós-conteúdo"**
  - `::first-letter` - primeira letra
- [Lista com todos](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
  na MDN

---
## Exemplo de **::before**

- Por exemplo, como colocar um texto de "leia mais" ao final de cada notícia?
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
# Referências

- Capítulo 12 do livro
- [Capítulo _semantics_](http://diveintohtml5.info/semantics.html) do livro
  diveintohtml5.org
- [Propriedade **display** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Propriedade **visibility** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [Propriedade **overflow** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
