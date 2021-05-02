<!-- {"layout": "title"} -->
# **HTML** parte 2
## Coding Dojo :japanese_castle:, Mais _tags_ HTML<br>e Entendendo regras CSS

---
# Na última aula... (1/2)

- Aprendemos:
  1. Que **plantas carnívoras** ~~se vestem de papai noel~~ são legais
  1. A **estrutura de um arquivo HTML**
     ```html
     <!DOCTYPE html>
     <html>
       <head>...</head> <!-- meta-informação sobre a página -->
       <body>...</body> <!-- tudo que é visível -->
     </html>
     ```

---
# Na última aula... (2/2)

- Também vimos:
  1. Algumas **_tags_ básicas**, como `<p>`, `<img>`, `<h1...6>`, `<a href="">`
  1. A usar um **pouquinho de CSS**: `color`, `margin`,
     `background-color`, `font-family`

---
<!-- {"layout": "centered-horizontal"} -->
# Atividade de Hoje

![Coding Dojo](../../images/coding-dojo.png)

Vamos fazer nosso primeiro **Code Dojo** :japanese_castle:!

---
<!-- {"layout": "centered"} -->
# Hoje veremos

- [_Tags_ que indicam importância](#tags-de-importancia)
- [_Tags_ de listas](#tags-de-listas) de itens
- [Elementos _inline_ _vs._ _block_](#elementos-inline-vs-block)
- [Mais tipos de hiperlinks](#mais-tipos-de-hiperlinks)
- [Entendendo regras CSS](#entendendo-regras-css)

---
<!-- {"layout": "section-header", "hash": "tags-de-importancia"} -->
# _Tags_ de importância
## Destacando partes do texto

1. _Tag_ `<strong></strong>`
1. _Tag_ `<em></em>`
1. _Tags_ `<del></del>` e `<ins></ins>`
1. _Tag_ `<mark></mark>`
<!-- {ol:.content} -->

---
## (1) _Tag_ **`<strong></strong>`** :muscle:

- Usada para marcar **texto com alta importância**, seriedade ou urgência:
  ```html
  <p><strong>Não se esqueça!</strong> Tragam seus fones de ouvido.</p>
  ```
- Por padrão, elementos `<strong>` são desenhados em **negrito**:
  ::: result
  <strong style="color: inherit">Não se esqueça!</strong> Tragam seus fones de ouvido.
  :::

---
## (2) _Tag_ **`<em></em>`**

- Usada para **dar ênfase** ("dar entonação") **ao texto**. A ideia é
  alterar como uma frase deve ser lida:
  ```html
  <p>Gatos são animais <em>bonitinhos</em>.</p>
  ```
  - Ao enfatizar _"bonitinhos"_, a frase está reafirmando a caractística dos
    gatos
- Por padrão, elementos `<em>` são desenhados em **itálico**:
  ::: result
  Gatos são animais <em>bonitinhos</em>.
  :::

---
## (3) _Tags_ **`<del></del>`** e **`<ins></ins>`** :pencil:

- Usadas para indicar **texto que foi removido** ou **inserido**:
  ```html
  <p>O jardineiro é Jesus.</p>
  <p>E as árvores... somos <del>nós</del> <ins>nozes</ins>.</p>
  ```
- Por padrão, elementos `<del>` são **riscados** e `<ins>` são **sublinhados**:
  ::: result
  O jardineiro é Jesus.<br>
  E as árvores... somos <del>nós</del> <ins>nozes</ins>.
  :::

---
## (4) _Tag_ **`<mark></mark>`** :part_alternation_mark:

- Usada para **realçar parte do texto** considerada **importante para o
  leitor**. Tipo quando usandos caneta marcadora de texto:
  ```html
  <p><mark>HTML, CSS e JavaScript</mark> são as três linguagens da Web.</p>
  ```
- Por padrão, elementos `<mark>` possuem o **fundo com a cor amarela**:
  ::: result
  <mark>HTML, CSS e JavaScript</mark> são as três linguagens da Web.
  :::

---
<!-- {"layout": "section-header", "hash": "tags-de-listas"} -->
# _Tags_ de listas
## Enumerando coisas

- Lista numerada: `<ol></ol>`
- Lista não-numerada: `<ul></ul>`
- ~~[Lista de termos e definições][dl]~~ (_veja você mesmo_)

[dl]: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dl
<!-- {ul:.content} -->

---
## Listas de itens **`<ol></ol>`** e **`<ul></ul>`** 

- Lista **numerada** (também conhecida como _ordenada_):
  - ```html
    <ol>
      <li>Linux</li>
      <li>Windows</li>
    </ol>
    ```
    <!-- {li:style="flex-grow: 1; margin-right: 1em;"} -->
  - ::: result
    <ol>
      <li>Linux</li>
      <li>Windows</li>
    </ol>
    :::
    <!-- {ul:.layout-split-2.no-list-icon.no-padding} -->
    <!-- {li:style="flex-grow: 1;"} -->
    <!-- {ul^1:style="width: 100%;"} -->
- Lista **<u>não</u>-numerada** (ou _não-ordenada_):
  - ```html
    <ul>
      <li>Uva</li>
      <li>Maçã</li>
    </ul>
    ```
    <!-- {li:style="flex-grow: 1; margin-right: 1em;"} -->
  - ::: result
    <ul>
      <li>Uva</li>
      <li>Maçã</li>
    </ul>
    :::
    <!-- {ul:.layout-split-2.no-list-icon.no-padding} -->
    <!-- {li:style="flex-grow: 1;"} -->
    <!-- {ul^1:style="width: 100%;"} -->

---
<!-- {"layout": "section-header", "hash": "elementos-inline-vs-block"} -->
# Elementos _inline_ _vs._ _block_
## Quebrar ou não quebrar linha? :thought_balloon:


![](../../images/philosoraptor.jpg) <!-- {.portrait.centered style="display: block"} -->

Pergunta
~  Por que um **parágrafo** está sempre **abaixo do outro**, mas
  um elemento **`<strong>`** pode ficar **ao lado** de outro texto?

<!-- {dl:.content.width-30} -->

---
## Vamos fazer um *teste*... <!-- {.bullet} -->

1. Colocando dois `<p>` seguidos (lado a lado) no código <!-- {ol:.bulleted} -->
   - ```html
     <p>Primeiro</p> <p>Segundo</p>
     ```
     <!-- {li:style="flex-grow: 1;"} -->
   - ::: result . margin-left: 1em;
     <p>Primeiro</p> <p>Segundo</p>
     :::
     <!-- {ul:.layout-split-2.no-list-icon.no-padding} -->
     <!-- {li:style="flex-grow: 1;"} -->
     <!-- {ol:style="width: 100%;"} -->
1. Colocando dois `<strong>` seguidos
   - ```html
     <strong>Primeiro</strong> <strong>Segundo</strong>
     ```
     <!-- {li:style="flex-grow: 1;"} -->
   - ::: result . margin-left: 1em;
     <strong style="color: inherit;">Primeiro</strong> <strong style="color: inherit;">Segundo</strong>
     :::
     <!-- {ul:.layout-split-2.no-list-icon.no-padding} -->
     <!-- {li:style="flex-grow: 1;"} -->
     <!-- {ol:style="width: 100%;"} -->

Por quê isso acontece? <!-- {.bullet} -->

---
## Elementos **block** e elementos **inline** <!-- {.alternate-color} -->

- Ao desenhar uma página, o navegador precisa decidir **como <u>dispor</u>
  os elementos**
- Alguns elementos são do tipo `block`, outros são `inline`:

  Elementos **`block`** <!-- {dl:.bullet} -->
    ~ são dispotos um <u>abaixo do outro</u>
    ~ ex: parágrafos, títulos e subtítulos, listas <!-- {dd:.bullet} -->

  Elementos **`inline`** <!-- {.alternate-color} -->
    ~ são dispostos um <u>à direita do outro</u>
    ~ ex: links, strong, em, imagens <!-- {dd:.bullet} -->

Vamos ver como o navegador faz... <!-- {.bullet} -->

---
## Elementos **`block`**

![](../../images/flow1.png) <!-- {p:.flex-align-center} -->

---
## Elementos **`inline`** <!-- {.alternate-color} -->

![](../../images/flow2.png) <!-- {p:.flex-align-center} -->

---
<!-- {"layout": "centered-horizontal"} -->
## **`block`** e **`inline`** <!-- {.alternate-color} -->, juntos

![](../../images/flow3.png)

---
<!-- {"layout": "2-column-content"} -->
## De volta ao **`<p>` _vs._ `<strong>`** <!-- {.alternate-color} -->...

- São elementos **`block`**: <!-- {ul:.no-bullets.no-padding} -->
  - **`<p>`**
  - `<h1>, <h2> ... <h6>`
  - `<ul>`, `<ol>`, `<li>`
  - e outros...

1. São elementos **`inline`**: <!-- {.alternate-color} --> <!-- {ol:.no-bullets.no-padding} -->
   - **`<strong>`** <!-- {.alternate-color} -->
   - `<em>`
   - `<del>`, `<ins>`
   - `<mark>`
   - `<em>`
   - `<a>`
   - `<img>`
   - e outros...

---
<!-- {"layout": "section-header", "hash": "mais-tipos-de-hiperlinks"} -->
# Mais tipos de **hiperlinks**
## Ligações internas entre recursos e para emails

- Hiperlinks para:
  - Outras páginas do site
  - Emails
  - Telefones
  - Dentro de uma parte da página
- Atributo _target_

<!-- {ul^1:.content} -->

---
<!-- {"backdrop": "oldtimes"} -->
## *Relembrando* hiperlinks

- [Link externo](http://www.google.com) (para fora da página):
  ```html
  <a href="http://www.google.com">Link externo</a>
  ```
- [Link interno](../../attachments/exemplo.zip) (para algo hospedado no
  próprio computador)
  ```html
  <a href="downloads/exemplo.zip">Link interno</a>
  ```

1. ![](../../images/philosoraptor.jpg) <!-- {.portrait.push-left.bullet} --> <!-- {ol:.flex-align-end.no-bullets.no-padding.bullet} -->
   - Mas como criar um link para **outra página do meu próprio site**? <!-- {ul:.no-bullets.no-padding.bullet} -->

---
## Mais sobre hiperlinks

- [Link para uma **outra página**](/classes/html1/index.html) do próprio site:
  ```html
  <a href="outra-pagina.html">Outra página</a>
  ```
- [Link para **enviar um email**](mailto:coutinho@decom.cefetmg.br) para alguém:
  ```html
  <a href="mailto:fegemo@cefetmg.br">Me envie um email</a>
  ```
  - Ao clicar no link, o navegador abre o email do usuário

1. ![](../../images/philosoraptor.jpg) <!-- {.portrait.push-left.bullet} --> <!-- {ol:.flex-align-end.no-bullets.no-padding.bullet style="margin-top: 1.5em"} -->
   - Como fazer para o link **abrir em outra aba**? <!-- {ul:.no-bullets.no-padding.bullet} -->

---
## O **atributo `target="..."`** dos links

A _tag_ de hiperlink possui um atributo `target="..."` que pode ter
  os seguintes valores:

  `_self` <!-- {dl:.width-10.full-width} -->
    ~ O recurso "linkado" **abre <u>na própria aba</u>** (valor padrão)
    ~ _Exemplo_: `<a href="..." target="_self">Sobre mim</a>`

  `_blank`
    ~ O recurso "linkado" abre em **uma <u>nova</u> aba**
    ~ _Exemplo_: `<a href="..." target="_blank">Salgadinhos</a>`

---
## Link para dentro de uma página

- <video style="float: right; width: 400px; height: 331px; margin-left: 1em" controls autoplay loop="0" src="../../videos/link-interno.mp4"></video>
  Para criar um link para dentro da própria página:
  ```html
  <a href="#id-de-um-elemento">Link interno</a>
  ```
  - Repare o `#id-de-um-elemento`
    ```html
    <h2 id="id-de-um-elemento">Um título</h2>
    ```
    - Ao clicar no link, o navegador vai rolar a barra até que esse `<h2></h2>`
      fique visível e no topo do navegador (**mas o que é esse atributo `id`?**)

---
<!-- {"hash": "id-de-um-elemento-html"} -->
## O **`id`** de um elemento HTML

- É possível **definir um nome** que **identifique um elemento** da página <!-- {ul:.bulleted} -->
- Todo elemento HTML pode ter um atributo `id`. Exemplos:
  ```html
  <img src="..." id="logomarca-da-empresa">
  ```
  ```html
  <h1 id="titulo-principal">Origem da Polícia Intergalática</h1>
  ```
  ```html
  <ul id="melhores-pokemon">...</ul>
  ```
  - O atributo `id` **<u>deve ser único</u> na página**
    - Não pode haver 2+ elementos com um mesmo `id`
  - Podemos **usar o `id` para <u>estilizar elementos</u> em CSS**!

---
<!-- {"layout": "section-header", "hash": "entendendo-regras-css"} -->
# Entendendo **regras CSS**
## Como funcionam as regras

- Formato de uma regra
- Estilizando elementos um a um
- Colocando bordas
- Centralizando imagens
<!-- {ul:.content} -->

---
<!-- {"layout": "centered", "embedSVG": "img[src$='.svg']", "styles": ["../../styles/classes/css-rule-anatomy.min.css"]} -->

::: figure .figure-slides.clean
![Uma regra CSS mostrando](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy} --> <!-- {p:.bullet.figure-step.bullet-no-anim} -->

![Uma regra CSS mostrando](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy.rule} --> <!-- {p:.bullet.figure-step.bullet-no-anim} -->
:::
---
<!-- {"layout": "centered", "embedSVG": "img[src$='.svg']", "state": "show-active-slide-and-previous", "containerStyles": {"--show-2-slides-x-distance": "200px", "--show-2-slides-z-distance": "-150px", "--show-2-slides-rotation": "5deg"}} -->

![Regra CSS](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy.selector.declaration} -->

---
<!-- {"layout": "centered", "embedSVG": "img[src$='.svg']"} -->

![Regra CSS](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy.property.value} -->

---
<!-- {"layout": "tall-figure-left", "embedSVG": "img[src$='.svg']", "hash": "seletores-css", "slideStyles": {"grid-template-columns": ".2fr 1fr"}} -->
## **Seletores** CSS

![Uma regra CSS destacando o seletor](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy.selector style="width: 242px" data-viewbox="50 0 100 65"} -->

- O seletor define a **que(ais) elemento(s)** HTML da página a **regra CSS será aplicada** <!-- {ul:.bulleted-0} -->
- Há [diversos tipos de seletores][outros-seletores]. Veremos 2 hoje:
  1. _tag_
  1. `id`
- Regras podem ter 1+ seletor, separados por vírgula:
  ```css
  /* tanto <p>, qto <h1>, qto <ul> */
  p, h1, ul {
    color: black;
  }
  ```

[outros-seletores]: http://localhost:8080/classes/css2/#outros-seletores

---
<!-- {"hash": "seletor-de-tag"} -->
## Seletor de <u>_tag_</u>

- Se usarmos um seletor que é **o nome de uma _tag_**...
  ```css
  p { /* usamos 'p', que é o nome da tag de parágrafo */
    margin-left: 5%;
  }
  ```
  - ...selecionamos **todos os elementos da página <u>com aquela _tag_</u>**
    (_e.g._, todos os parágrafos)
- Outros exemplos: <!-- {li:.three-column-code} -->
  ```css
  img {
    border-radius: 50%;
  }
  body {
    font-size: 20px;
  }
  strong {
    color: forestgreen;
  }
  ```

---
<!-- {"hash": "seletor-de-id"} -->
## Seletor de <u>`id`</u>

- Se usarmos um seletor **que começa com o símbolo `#`** (_hashtag_)...
  ```css
  #titulo-principal {
    font-family: 'Verdana', sans-serif;
  }
  ```
  - ...selecionamos **<u>apenas o</u> elemento que possua aquele <u>atributo `id`</u>**
    (_e.g._, um `<h1 id="titulo-principal">...</h1>`)

---
<!-- {"layout": "2-column-content"} -->
## Exemplo: estilizando apenas um título `<h2>`

```html
    ...
    <style>
      #ponche-vermelho {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Receitas para Monstros</h1>
    <h2 id="ponche-vermelho">
      Ponche Vermelho</h2>
    <h2>Joelhos de Lagartixa</h2>
    <h2>Orelhas Verdes Fritas</h2>
  </body>
</html>
```

::: result
<h1 style="font: unset; font-size: 125%;">Receitas para Monstros</h1>
<h2 style="color: red; font: unset;">Ponche Vermelho</h2>
<h2 style="color: unset; font: unset;">Joelhos de Lagartixa</h2>
<h2 style="color: unset; font: unset;">Orelhas Verdes Fritas</h2>
:::

---
<!-- {"hash": "colocando-bordas", "embedSVG": "img[src$='.svg']"} -->
## Colocando bordas         

- A **propriedade `border`** é um atalho para `border-width`, `border-style` e
  `border-color`
  - Exemplo (os dois são **equivalentes**):
    ![](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy.property.value.push-right data-viewbox="56 30 90 65" style="width: 250px"} -->
    ```css
    p {
      border-width: 1px;    /* largura de 1 pixel */
      border-style: solid;  /* borda toda colorida */
      border-color: red;    /* cor vermelha */
    }
    ```
    ```css
    p {  /* preferimos esta forma, que é mais sucinta */
      border: 1px solid red;
    }
    ```

---
## Estilos de borda

- Há diversos estilos de borda:
  - `border-style: solid` <!-- {code:style="border: 4px solid red"} -->
  - `border-style: double` <!-- {code:style="border: 4px double red"} -->
  - `border-style: groove` <!-- {code:style="border: 4px groove red"} -->
  - `border-style: outset` <!-- {code:style="border: 4px outset red"} -->
  - `border-style: dotted` <!-- {code:style="border: 4px dotted red"} -->
  - `border-style: dashed` <!-- {code:style="border: 4px dashed red"} -->
  - `border-style: inset` <!-- {code:style="border: 4px inset red"} -->
  - `border-style: ridge` <!-- {code:style="border: 4px ridge red"} --> <!-- {ul:.multi-column-list-2} -->
- Veja a descrição dos [estilos de bordas na MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/border-style)


---
<!-- {"hash": "centralizando-imagens"} -->
## Centralizando imagens

- Para centralizar uma imagem, é necessário definir "margens
  laterais automáticas":
  ```css
  #imagem-principal {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  ```
  - As margens "automáticas" fazem com que o navegador divida o espaçamento
    horizontal igualmente nos dois lados
  - `display: block` é necessário porque `<img>` é `inline`, mas o navegador
    não permite definir margens para elementos `inline`

---
<!-- {"layout": "centered"} -->
# Referências

1. Capítulos 1, 2 e 3 do livro
