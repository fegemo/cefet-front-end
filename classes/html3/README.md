# HTML - Parte 3
---
## Na última aula...

- _Tags_ de importância:`<strong>`, `<em>`, `<mark>`, `<del>` e `<ins>`
- Listas ordenadas (`<ol>`) e não ordenadas (`<ul>`)
- Podemos **criar hiperlinks** com o elemento `<a href="caminho-do-recurso">nome</a>` até para própria páginas
referenciando o `id` do elemento


---
## Na última aula...
- Mais sobre **hiperlinks**:
  - Links para emails: `<a href="mailto:hasan@decom.cefetmg.br">Me mande emails :)</a>`
  - Link interno da página referenciando o `id` do elemento
  - O atributo `target` para abrir uma página em outra aba
- Alguns elementos são `inline` e outros são `block`
  - **`inline`**: não fazem quebra de linha (e.g, `<q>`, `<strong>` etc.)
  - **`block`**: fazem quebra de linha (e.g., `<blockquote>`, `<p>` etc.)

---
## Na última aula...
  - Formato de uma regra **CSS**
  - Estilizando elementos um a um utilizando o seu **id** e o seletor iniciando com **#**
  - Colocação de bordas por meio da propriedade `border`, `border-width`, `border-style` e `border-color`
  - Para **centralizar imagens**, tranformamos a imagem em _block_ e deixamos suas margens automáticas:
  ```css
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
  ```



---
# Hoje veremos

1. [HTML: Tabelas e seus elementos](#tabelas)
1. [Mais sobre bordas em **CSS**](#bordas)
1. [A propriedade `border-collapse` em tabelas](#propriedade-border-collapse)
1. [_Margin_ vs _Padding_](#margin-e-padding)
1. [Definição da largura de um elemento](#largura-de-elementos)
1. [Mais propriedades **CSS** para fontes e textos](#outras-propriedades-do-texto)
1. [Piratas e seus tesouros](#piratas-e-seus-tesouros) 👑

---
<!-- {"slideHash": "tabelas"} -->
# Tabelas


<iframe width="50%" height="225px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/7/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Nesta aula iremos:
- fazer a estrutura desta tabela via **HTML**
- estilizar esta tabela via **CSS**

---
## O que uma tabela possui?

<iframe width="50%" height="225px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/7/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


---
## O que uma tabela possui? (cont.)

<iframe width="50%" height="225px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/7/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

  - Linhas e colunas, sendo:
    - uma linha com o **cabeçalho**
    - última linha com o **rodapé**
  - Legenda
  - Em HTML, utilizamos _Tags_ para indicar os elementos de uma tabela.

---
## _Tags_ de **Tabela**

- Tabelas são criadas com as tags:
  - **`table`**, para marcar a tabela
  - **`tr`**, linha
  - **`td`**, célula
  - `th`¹, célula do cabeçalho
  - `caption`¹, legenda
  - `thead`¹, marca as linhas do **cabeçalho**
  - `tbody`¹, marca as linhas do **corpo**
  - `tfoot`¹, marca as linhas do **rodapé**
- ¹: elementos opcionais, mas desejáveis
- [Referência sobre tabelas na Mozilla Developer Network][mdn-table]

[mdn-table]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

---
<!-- {"slideHash": "tags-basicas-de-tabela"} -->
## _Tags_ Básicas de Tabela

[![Exemplo de Tabela Exibindo suas Tags](../../images/tags-html.png)]

  - A **tabela** inicia-se com `<table>` e finaliza com `</table>`
  - Cada **linha** possui a _tag_ `<tr>` correspondente, finalizada com `</tr>`
  - A _tag_ `<td>` armazena os dados de uma **célula** da tabela
  - Para o **cabeçalho**, ao invés de `<td>`, utiliza-se a _tag_ `<th>`
  - As _tags_ `<td>` e `<th>` **devem** estar dentro de uma linha (`<tr>`)

---
## Apresentação da tabela do nosso exemplo
<iframe width="65%" height="375px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/17/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- OBS: Como ainda não aplicamos o **estilo**, ainda não possuimos **borda**
---
<!-- {"slideHash": "caption"} -->
## __Tag__ Caption
  - Tag que define a legenda de uma tabela
    ```html
    <table>
      <caption>Quadro 01: Alunos Matriculados</caption>
      <tr>
        <th>Matrícula</th><th>Nome</th>
      </tr>
      <tr>
        <td>201792829293</td><td>Alice Fernandez</td>
      </tr>
    </table>
    ```
    - Exemplo: https://jsfiddle.net/danielhasan/8tr4z959/
---
## Apresentação da tabela (com caption) do nosso exemplo
<iframe width="65%" height="375px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/19/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- OBS: Como ainda não aplicamos o **estilo**, ainda não possuimos **borda**
---
<!-- {"slideHash": "tag-de-cabecalho-e-rodape"} -->
## Tag de cabeçalho, corpo e rodapé


```html
<table>
  <caption>Gastos em janeiro</caption>
  <thead>
    <tr>
      <th>Descrição</th><th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alimentação</td><td>300,00</td>
    </tr>
    <tr>
      <td>Transporte</td><td>100,00</td>
    </tr>
  </tbody>
  <tfoot>
      <tr>
        <td>Total</td><td>400,00</td>
      </tr>
  </tfoot>
</table>
```
- Exemplo: https://jsfiddle.net/danielhasan/z62vg9xq/5/
- `<thead>`, `<tbody>` e `<tfoot>` devem marcar as linhas de corpo, cabeçalho e rodapé, respectivamente.
  - Útil para:
    - aplicarmos **estilos** diferentes no **corpo**, **cabeçalho** e **rodapé**
    - impressão: caso a tabela seja maior que a página, o cabeçalho será impresso em todas as páginas

---
## Utilização de corpo, cabeçalho e rodapé em nosso exemplo

<iframe width="65%" height="375px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/10/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"slideHash": "meclando-celulas-horizontais-e-verticais"} -->
## Mesclando células **horizontais** e **verticais**

```html
<table>
  <tr>
    <th colspan="2">Pessoas</th>
  </tr>
  <tr>
    <td>2005046102</td><td>Epaminondas</td>
  </tr>
</table>
```
- **`colspan="X"`** faz com que aquela **célula ocupe `X` colunas**
  - Para mesclar células "para baixo", usamos **`rowspan="Y"`**, onde `Y` é o
    **número de linhas** que a célula vai ocupar
- Exemplos: de [`colspan`](https://jsfiddle.net/fegemo/o6gsb0t9/) e
  de [`rowspan`](https://jsfiddle.net/fegemo/65rvt05m/)

---
<!-- {"layout": "section-header", "slideHash": "mais-regras-css"} -->
# Mais **regras CSS**

- Mais sobre Bordas: `border-top`, `border-bottom`, `border-left` e `border-right`
- A propriedade `border-collapse` em tabelas
- _Margin_ e _Padding_
- Propriedade de largura: `width`
- Fontes: `font-size`, `font-style`, `font-weight` e `text-decoration`

<!-- {ul:.content} -->

---
<!-- {"layout": "regular", "backdrop": "oldtimes"} -->
## Colocando bordas         

- A **propriedade `border`** é um atalho para `border-width`, `border-style` e
  `border-color`
  - Exemplo (os dois são **equivalentes**):
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
<!-- {"slideHash": "bordas"} -->
## Bordas
- De forma similar, podemos fazer com que exiba apenas a borda do **topo**, **esquerda**, **direita** ou **abaixo**
- Para isso, usamos as propriedades  `border-top`, `border-bottom`, `border-left` e `border-right`

```css
p {
  border-top: 1px solid red;
  border-bottom: 2px dotted blue;
}
```
- Também podemos usar a forma mais extensa. Por exemplo, `border-top-width`, `border-top-style` e `border-top-color` definem, respectivamente, a largura, o estilo e a cor da borda do topo.
---
<!-- {"slideHash": "propriedade-border-collapse"} -->
## Propriedade **border-collapse**
  - Ao adicionarmos a borda nas celulas de uma tabela o resultado ficaria assim:
<iframe width="65%" height="150px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/23/embedded/result,css,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

  - Para mudarmos isso, adicionamos `border-collapse:collapse` à regra CSS da tabela:
  <iframe width="65%" height="200px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/24/embedded/result,css,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
---
<!-- {"slideHash": "margin-e-padding"} -->
## Margem e _Padding_
![Desenho de máscara de festa a fantasia](../../images/margin_and_padding.png)
- **Padding**: Espançamento entre o texto e a borda
- **Margem**: Espançamento por fora da borda
---
## Margem e _Padding_ - Exemplo
  <iframe width="65%" height="250px" src="https://jsfiddle.net/danielhasan/vs1w9khr/embedded/result,css,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"slideHash": "largura-de-elementos"} -->
## Largura de elementos
  - Podemos especificar a largura dos elementos _**blocks**_ por meio da propriedade **width**
  ```css
      p {
        width: 100px;
      }
  ```

  <iframe width="65%"  src="https://jsfiddle.net/danielhasan/t1joy5v6/embedded/html,css,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
---
<!-- {"slideHash": "outras-propriedades-do-texto"} -->
## Outras propriedades do texto

- `font-size`: Define o tamanho da fonte
- `font-weight`: Define a espessura da fonte.
  - Valores: `normal`, `lighter`, `bold`, `bolder` ou um número representando sua espessura
- `font-style`: Define o estilo da fonte
  - Valores: `normal` e `italic`
- `text-decoration`: Sublinha, risca ou coloca um risco acima do texto:
  - Valores: `none` (nenhum), `underline` (sublinhado), `overline` (acima do texto), `line-through` (riscado)
---
## Outras propriedades do texto - Exemplo

  <iframe width="65%" height="400px"  src="https://jsfiddle.net/danielhasan/x2m8fnL6/embedded/html,css,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


---
## Utilização do CSS para a tabela do nosso exemplo...


<iframe width="50%" height="225px" src="https://jsfiddle.net/danielhasan/nmrbhqkb/7/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"layout": "section-header", "slideHash": "piratas-e-seus-tesouros"} -->
# Piratas e seus Tesouros 👑
## Ajude Barba-Ruiva!

- Definindo uma imagem de fundo da página
- Ocupando toda a altura do navegador
- Textos sombreados
- Cores semitransparentes

<!-- {ul:.content} -->

---
<!-- {"backdrop": "piratas"} -->

---
# Gerenciador de Tesouros

1. [Baixe as imagens e o ícone](https://github.com/fegemo/cefet-front-end-pirates/archive/master.zip) que serão usados
1. **Crie uma pasta** na área de trabalho com o nome `tesouro-piratas`
1. **Crie um arquivo `index.html`** na mesma pasta e siga os passos:
   1. Faça a **estrutura básica** e coloque o ícone e a imagem de fundo
   1. Coloque o **título (`h1`) e o parágrafo**, deixando espaço para tabela
      - Estilize-os
   1. **Crie a tabela** e, por fim, estilize-a
   1. Veja [instruções detalhadas aqui](https://github.com/fegemo/cefet-front-end-pirates/blob/master/README.md)

---
# Imagem de fundo

```css
body {
  background-image: url(caminho-para-a-imagem);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
}
```

- `background-image` para escolher que imagem será usada
- `background-repeat: no-repeat` para que a imagem apareça só 1x
- `background-position: left bottom` para fixar que o canto **inferior
  esquerdo** da imagem fique sempre visível
- `background-size: cover` para que a imagem **cubra todo o espaço** da tela

---
## **Ancorando** a imagem **em um canto da tela**

![](../../images/background-position-left-bottom.png)
![](../../images/background-position-right-bottom.png)

<!-- {p:style="margin-bottom: 0;"} -->

- Deixando um canto da imagem sempre visível com `background-position`
- Outros valores possíveis: `left top`, `center center`, `center bottom` etc.


---
## Ajustando o **tamanho da imagem**

![](../../images/background-size-cover.png)
![](../../images/background-size-contain.png)

<!-- {p:style="margin-bottom: 0;"} -->

- `background-size: cover`: imagem redimensionada para cobrir todo o espaço
- `background-size: contain`: imagem redimensionada para aparecer completamente

---
## Ocupando toda a altura do navegador

![](../../images/ocupando-toda-altura-disponivel.png)

---
## Ocupando toda a altura do navegador (cont.)

- **1ª tentativa**: definir a altura do elemento `body` como `100%`:
  ![](../../images/ocupando-toda-altura-disponivel-body.png) <!-- {.push-right style="height: 134px; margin-top: 1em;"} -->
  ```css
  body {
    height: 100%;
  }
  ```
- **Jeito certo**: definir a altura **do elemento `body` <ins>e do
  `html`</ins>** como `100%`:
  ![](../../images/ocupando-toda-altura-disponivel-body-html.png) <!-- {.push-right style="height: 134px; margin-top: 1em;"} -->
  ```css
  html, body {
    height: 100%;
  }
  ```

---
## Textos <span style="text-shadow: 2px 2px purple; color: hotpink;">sombreados</span>

![](../../images/text-shadow-none.png)
![](../../images/text-shadow-black.png)

<!-- {p:style="margin-bottom: 0;"} -->

- Colocar sombras em textos facilita sua leitura quando o texto está sobre uma
  imagem que pode ter muitas cores
  ```css
  h1 {
    text-shadow: 2px 2px black;
  }
  ```

---
<!-- {"layout": "regular"} -->
## Cores semitransparentes

- É possível usar cores com transparência, que deixam
  "o que está atrás" aparecer. Por exemplo:
  - ```css
    color: rgba(255, 255, 255, 0.3); /* branco 30% opaco */
    color: rgba(255, 255, 255, 0.7); /* branco 70% opaco */
    color: rgba(255, 255, 255, 1);   /* mesmo que white */
    color: rgba(0, 0, 0, 0.5);       /* preto 50% opaco */
    color: rgba(0, 0, 255, 0.6);     /* azul 60% opaco */
    ```
    <!-- {li:style="flex-grow: 1;"} -->
  - ::: result
    - branco <!-- {li:style="color: rgba(255, 255, 255, 0.3)"} -->
    - branco <!-- {li:style="color: rgba(255, 255, 255, 0.7)"} -->
    - branco  <!-- {li:style="color: rgba(255, 255, 255, 1)"} -->
    - preto  <!-- {li:style="color: rgba(0, 0, 0, 0.5)"} -->
    - _azul_ <!-- {em:style="color: rgba(0, 0, 255, 0.6); font-style: normal;"} -->
    :::
    <!-- {ul^1:.layout-split-2.no-list-icon.no-padding} -->
    <!-- {li:style="flex-grow: 1;"} -->
    <!-- {ul^2:style="width: 100%;"} -->


---
<!-- {"layout": "regular"} -->
## Cores semitransparentes

- Também podemos fazer isso com `background-color`:
  - ```css
    p {
      /* preto 50% opaco */
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
    }
    ```
    ```html
    <p>Yarrr Harrr, marujo!!</p>
    ```
    <!-- {li:style="flex-grow: 1;"} -->
  - ::: result
    <p style="background-color: rgba(0, 0, 0, 0.5); color: white;">Yarrr Harrr, marujo!!</p>
    :::
    <!-- {ul^0:.layout-split-2.no-list-icon.no-padding} -->
    <!-- {li:style="flex-grow: 1;"} -->
    <!-- {ul^1:style="width: 100%;"} -->
    - Repare que o fundo do parágrafo ficou azulado
      - ...porque o fundo do "resultado" era azul


---
# Referências

1. Capítulos 13 do livro
