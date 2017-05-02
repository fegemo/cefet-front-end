<!-- {"layout": "title"} -->
# CSS (Parte 3)
## Layout, Fontes, Multimídia e Unicórnios 🦄

---
<!-- {"layout": "2-column-content-zigzag"} -->
# Na última aula... (1/4)

- Vimos que existem os elementos `<div>...</div>` e `<span>...</span>` que
  não possuem interpretação visual, mas **servem para agruparmos e
  estilizarmos** outros elementos ou texto

  ![](../../images/coelhos-vampiros-desired.png) <!-- {.bordered} -->

```html
<body>
  <div id="topo-da-pagina">  
    <h1>Coelhos Vampiros</h1>
    <h2>De onde vêm, onde vivem ...</h2>
  </div>
  <p>Sexta-feira, no Globo Repórter</p>
</body>
```


---
# Na última aula... (2/4)

- ![](../../images/box-model.png) <!-- {.push-right} -->
  Entendemos o _Box Model_ (modelo da caixa) que é **como o navegador enxerga
  os elementos**
  - Há espaço para _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} -->,
    _`padding`_ <!-- {em:.box-model-part style="background: #c2ce89;"} -->,
    _`border`_ <!-- {em:.box-model-part style="background: #fddc9a;"} --> e
    _`margin`_ <!-- {em:.box-model-part style="background: #f9cc9d;"} -->

---
# Na última aula... (3/4)

- Quando se define `width` ou `height` para um elemento, reserva-se
  aquele espaço para o _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} -->
  - O tamanho total do elemento pode ficar maior que isso
- Podemos alterar isso, dizendo que o valor definido para `width` ou `height`
  deve caber _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} --> +
  _`padding`_ <!-- {em:.box-model-part style="background: #c2ce89;"} --> +
  _`border`_ <!-- {em:.box-model-part style="background: #fddc9a;"} -->:
  ```css
  .produto {
    width: 50px;
    box-sizing: border-box; /* o padrão é content-box */
  }
  ```


---
# Na última aula... (4/4)

- É possível que um elemento interrompa uma flutuação à esquerda (`left`),
  à direita (`right`) ou em ambos os lados (`both`) usando `clear`

  <iframe width="50%" height="340" src="//jsfiddle.net/fegemo/vxb79m2c/embedded/result,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0" style="float: right"></iframe>

  - A **propriedade `clear`** pode ser:
    - `left` ou `right`: interrompe apenas as flutuações à esquerda ou à direita
    - `both`: interrompe **ambos** lados
    - `none`: **não interrompe** (valor padrão)

---
# Hoje veremos

1. [Formatos de imagens](#formatos-de-imagens)
1. [Vídeo e Áudio](#video-e-audio)
1. [Web fonts](#web-fonts)
1. [Unicórnios](#unicornios) 🦄

---
<!-- {"layout": "section-header", "slideHash": "formatos-de-imagens"} -->
# Formatos de imagens
## Usando diferentes formatos

- JPEG
- GIF
- PNG
- SVG

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
## Imagens

- Usamos a tag `<img src="...">`, que é um **elemento _void_**
  - Ou seja, não tem conteúdo nem tag de fechamento
- Formato geral
  ```html
  <img src="imagens/nome-do-arquivo.jpg" alt="Descrição bacana">
  ```
  - [Referência na Mozilla Developer Network][mdn-img]
- Mas que **formatos** <!-- {.underline.upon-activation} --> de imagens existem?

[mdn-img]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img

---
<!-- {"layout": "regular"} -->
## Imagens: **formato**

- Existem vários formatos de imagens suportados por navegadores
  <!-- {ul:.bulleted} -->
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

*[JPEG]: Joint Photographic Experts Group*
*[GIF]: Graphics Interchange Format*
*[PNG]: Portable Network Graphics*
*[SVG]: Scalable Vector Graphics*

---
<!-- {"layout": "2-column-content-zigzag"} -->
## Transparências: PNG _vs_ GIF

**GIF**: Um pixel é totalmente transparente ou totalmente opaco

::: figure .no-margin
![Exemplo de transparência usando GIF](../../images/gif-transparency-2.gif)
![Exemplo de transparência usando GIF](../../images/gif-transparency.gif)
:::

**PNG**: Opacidade pode variar entre 0 (transparente) e 255 (opaco), ou
0% e 100%

::: figure .no-margin
![Exemplo de transparência usando PNG](../../images/png-transparency-2.png)
![Exemplo de transparência usando PNG](../../images/png-transparency.png)
:::

---
<!-- {"layout": "2-column-content-zigzag"} -->
## Imagens **vetoriais** (_e.g._, SVG)

Imagem _bitmap_ (JPG, GIF, PNG) original (pequena) e aumentada
(fica "**estourada**")

::: figure .no-margin.center-aligned
![Exemplo de transparencia usando PNG](../../images/imagem-bitmap.png)
![Exemplo de transparencia usando PNG](../../images/imagem-bitmap.png)<!-- {style="width: 100px"} -->
:::

Imagem vetorial (SVG) original (pequena) e aumentada (mantém a qualidade)

::: figure .no-margin.center-aligned
![Exemplo de transparencia usando PNG](../../images/imagem-vetorial.svg)
![Exemplo de transparencia usando PNG](../../images/imagem-vetorial.svg)<!-- { style="width: 100px"} -->
:::

---
<!-- {"layout": "section-header", "slideHash": "multimidia"} -->
# Vídeo e Áudio
## Usando elementos multimídia

- Vídeo
- Áudio

<!-- {ul:.content} -->

---
# Formatos de Vídeo

- Existem diversos **formatos de arquivo**:
  - AVI (.avi)
  - WebM (.webm)
  - MP4 (.mp4, .m4v)
  - Ogg (.ogg)
  - Flash Video (.flv)
  - ASF (.asf) <!-- {ul:.multi-column-list-2} -->
- Nem todo navegador consegue exibir todos os formatos!
  - Às vezes, devemos disponibilizar mais de um formato do vídeo

---
## O elemento **video**

- Para exibir um vídeo, existe um elemento similar ao de imagem:
  ```html
  <video src="videos/fendadobiquini.mp4"></video>
  ```
- Resultado:

  <video src="../../videos/fendadobiquini.mp4" width="320" height="240" class="push-left" style="margin-right: 2em;"></video>
  - O `<video>` abre e fecha (_i.e._, `</video>`)
  - O elemento `<vídeo>` surgiu no HTML5
  - O que estiver dentro da _tag_ `<video>...</video>` é exibido caso
    o navegador não consiga exibi-lo
  - Por padrão, não há controles para o vídeo

---
## Querida, onde está o controle?

- O atributo `controls` associa um conjunto de controles ao `<video>`
  ```html
  <video src="videos/fendadobiquini.mp4" controls></video>
  ```
- Resultado:

  <video src="../../videos/fendadobiquini.mp4" width="320" height="240" controls class="push-left" style="margin-right: 2em;"></video>
  - Repare que `controls` é um atributo que não requer um valor
    - Isso se chama **atributo booleano**

---
## Opções (atributos) de **video**

`controls`
  ~ mostra um conjunto de controles

`autoplay`
  ~ começa a executar o vídeo assim que a página carregar

`muted`
  ~ tira o som

`preload="..."`
  ~ começa a baixar o vídeo assim que a página carrega
  ~ `preload="none"`: não pré-carrega
  ~ `preload="metadata"`: pré-carrega apenas metadados
  ~ `preload="auto"`: pré-carrega todo o vídeo

`loop="x"`
  ~ quantas vezes o vídeo deve ser executado (0 = infinitas)

`poster="http://..."`
  ~ URL de uma imagem mostrada antes do vídeo ser executado

- Também há os atributos `width="x"` e `height="y"`

---
<!-- {"layout": "regular"} -->
## Suporte dos navegadores por formato

- Nem todos navegadores suportam **os mesmos formatos de vídeo**
- Assim, usamos uma outra forma do elemento `<video>`:
  ```html
  <video width="320" height="240" controls>
    <source src="bob-esponja.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
    <source src="bob-esponja.webm" type="video/webm; codecs=vp8,vorbis">
    <source src="bob-esponja.ogv" type="video/ogg; codecs=theora,vorbis">
    Seu navegador não suporta o elemento video.
  </video>
  ```
- O navegador tentará abrir o vídeo `bob-esponja.mp4` (_i.e._, o primeiro)
  - se não conseguir, tentará o arquivo `bob-esponja.webm` (2º)
  - caso ainda não consiga, tentará o `bob-esponja.ogv` (3º)
  - se, mesmo assim, não conseguir, será exibido o texto

---
<!-- {"scripts": ["../../scripts/classes/caniuse.min.js"]} -->
## Suporte **hoje** (formatos de vídeo)

<span class="caniuse" data-feature="webm" style="width: 30%"></span>
<span class="caniuse" data-feature="mpeg4" style="width: 30%"></span>
<span class="caniuse" data-feature="ogv" style="width: 30%"></span>

<!-- {p:.center-aligned} -->

---
## Audio

- `<audio>` funciona **exatamente** da mesma forma que `<video>`
  - [Referência na MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- Formatos mais comuns: **MP3** <!-- {strong:.alternate-color} --> e
  **OGG**  <!-- {strong:.alternate-color} -->
- Exemplo: <!-- {style="display: flex; flex-direction: row;"} -->
  ```html
  <audio src="banjo-kazooie.mp3" controls loop="0"></audio>
  ```
  <audio src="../../audios/banjo-kazooie-short.mp3" controls loop="0"></audio>

*[MP3]: MPEG-1/2 Audio Layer 3*

---
## Suporte **hoje** (formatos de áudio)

<span class="caniuse" data-feature="mp3" style="width: 40%"></span>
<span class="caniuse" data-feature="ogg-vorbis" style="width: 45%"></span>

<!-- {p:.center-aligned} -->

---
<!-- {"layout": "section-header", "slideHash": "web-fonts"} -->
# _Web Fonts_
## Usando fontes não-instaladas

- Formatos de fontes
- A regra `@font-face`
- Google Fonts

<!-- {ul:.content} -->

---
# Web Fonts

- Motivação:
  - Utilizar **fontes que não estão instaladas** no computador
- Passos:
  1. Escolher a fonte
  1. Gerar **todos os formatos** para que funcione em todos os principais
     navegadores
     - `.ttf`
     - `.otf`
     - `.eot`
     - `.woff`
     - `.woff2` <!-- {ul:.multi-column-list-5} -->
  1. Publicar a fonte na Internet (ou no seu próprio site)

---
## Web Fonts (cont.)

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
<!-- {"scripts": ["../../scripts/classes/caniuse.min.js"]} -->
## **Formatos de fonte** e os navegadores

<span class="caniuse" data-feature="woff2" style="width: 45%"></span>
<span class="caniuse" data-feature="woff" style="width: 45%"></span>

- **WOFF2** é até 50% menor que **WOFF**
- **TTF** é suportado em todos navegadores

---
## Usando fontes "mais facinho"

- ![](../../images/google-fonts.png) <!-- {.push-right.small-width} -->
  Gerar os formatos de fonte necessários pode dar trabalho
- Outra alternativa é usar **sites que provêem diversas fontes** para
  serem usadas
  - Exemplos:
    1. [**Google Fonts**][google-fonts] <!-- {strong:.alternate-color} -->
    1. [Dafont][dafont]
    1. [FontSpace][font-space]
  - Além de ter vários formatos das fontes, eles fornecem o código CSS

[google-fonts]: https://fonts.google.com/
[dafont]: http://www.dafont.com/pt/
[font-space]: http://www.fontspace.com/

---
## Utilização do Google Fonts

<video src="../../videos/web-fonts-google.mp4" width="802" height="456" controls style="margin: 0 auto;"></video>

---
<!-- {"layout": "section-header", "slideHash": "unicornios"} -->
# _Unicorns are real_
## Conheça a verdade

- ![Little Pony](../../images/little-pony.png) <!-- {.portrait.push-right} -->
  Atividade de hoje
- _Layouts_ no Photoshop
- Quebrando linhas no texto
- Relembrando o _Box Model_

<!-- {ul:.content} -->

---
<!-- {"backdrop": "pratica-unicornios"} -->

---
<!-- {"layout": "regular"} -->
# Atividade de Hoje

- Criar uma página para expor a verdade sobre esses pôneis.
  - Seu amigo _designer_ criou um _layout_ no Photoshop para sua página e você
    deve criá-la de forma a reproduzir esse _layout_ na sua página HTML
  - Você pode ver o _layout_ na página seguinte
  - Você vai precisar lembrar: `div`, `span`, _Box Model_,
    `float` e `clear`

---
<!-- {"layout": "regular"} -->
# _Layouts_ no Photoshop

- ![](../../images/psd-to-html-css.png) <!-- {.push-right} -->
  **Designers usam editores de imagens** (como o Photoshop) para
  **criar páginas web bonitas**
  - O Photoshop gera uma imagem, que precisa ser "cortada" e transformada
    em uma página HTML e código CSS
- O designer tipicamente cria um (a) **_layout_** e uma (b) **especificação** da
  página, **para orientar o programador**
  1. (a) Também chamada de _comp_ ou _comprehensive layout_
  2. (b) Também chamada de _specs_

---
## Comp / Specs

[![](../../images/unicorns-comp-lpw.png)](../../images/unicorns-comp-lpw.png) <!-- {style="max-width: 25%"} -->
[![](../../images/unicorns-specs-lpw.png)](../../images/unicorns-specs-lpw.png) <!-- {style="max-width: 25%"} -->

*[Comp]: Comprehensive Layout*
*[Specs]: Specifications*

<!-- {p:.center-aligned} -->

---
<!-- {"slideHash": "quebra-de-linha"} -->
# Quebra de linha (tag `<br>`)

- A _tag_ `<br>` funciona para quebrarmos linha em um parágrafo
  - `<br>` vem de _break line_
- Utilize-a para **quebrar linhas**, porém, **não** para separar parágrafos
  ou outros elementos
- Exemplo: escrevendo um poema

<iframe width="100%" height="460" src="//jsfiddle.net/danielhasan/v3zkLwp2/embedded/html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


---
<!-- {"layout": "regular", "embeddedStyles": ".box-model-part {color: #333; border-radius: 4px; font-style: normal; padding: 1px 3px; } .box-model-part code { background: initial; }", "backdrop": "oldtimes"} -->
## _Box Model_ ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model))

- ![](../../images/box-model.png) <!-- {.push-right} -->
  O navegador enxerga todo elemento de conteúdo como uma "caixa"
- A "caixa" é formada por:
  - Espaço do _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} -->
  - Espaço de _preenchimento (`padding`)_ <!-- {em:.box-model-part style="background: #c2ce89;"} -->
  - Bordas _(`border`)_ <!-- {em:.box-model-part style="background: #fddc9a;"} -->
  - Espaço _externo (`margin`)_ <!-- {em:.box-model-part style="background: #f9cc9d;"} -->

<!-- {ul^1:style="margin-bottom: 0;"} -->

![](../../images/box-model-sample.png) <!-- {p:.centered.no-margin} -->

---
<!-- {"layout": "regular", "backdrop": "oldtimes"} -->
## _Box Model_: **largura** e **altura**

- Quando definimos a **largura** (`width`) ou **altura** (`height`) de
  um elemento, estamos definindo o tamanho
  do _conteúdo da caixa_, <!-- {em:.box-model-part style="background: #8bb4c0;"} -->
  e não da caixa inteira

::: figure .figure-slides
![](../../images/box-model-product-0.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-1.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-2.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-3.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-4.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-5.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
:::

---
<!-- {"layout": "regular-block", "slideHash": "alterando-o-box-model", "backdrop": "oldtimes"} -->
## Alterando o _box model_

::: did-you-know .push-right width: 260px; margin-right: 6px;
As **margens** de um elemento formam um **espaçamento externo** e não contam
espaço dentro da caixa.
:::

- É possível alterar o significado da `width` e `height` que damos a um elemento
   **usando _a propriedade `box-sizing`_** <!-- {em:.underline.upon-activation.delay-3000} -->:
  - `box-sizing: content-box` (valor padrão)
    - `width` = largura do _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} -->
  - `box-sizing: border-box`
    - `width` = _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} --> +
      _padding_ <!-- {.box-model-part style="background: #c2ce89;"} --> +
      _border_ <!-- {.box-model-part style="background: #fddc9a;"} -->
    - Esta forma é mais intuitiva :thumbsup: :thumbsup: :thumbsup:


::: figure .figure-slides.centered margin: 0 auto
![](../../images/box-model-product-0.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-2.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-border-box-1.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
![](../../images/box-model-product-border-box-2.png)<!-- {.bullet.figure-step.bullet-no-anim.rounded.bordered} -->
:::

---
# Referências

1. Capítulos 5 e 6 do livro
