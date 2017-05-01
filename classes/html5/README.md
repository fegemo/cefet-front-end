<!-- {"layout": "title"} -->
# HTML - Parte 5
## Ferramentas, Multimídia e a Cabeça (_i.e._, `head`)

---
## Aula Anterior - Revisão da Prova - Erros Comuns
- Lista de item dentro de um parágrafo
  - o parágrafo deve possuir apenas elementos _inline_
- Item de Lista definido sem sua respectiva lista
- Tags abertas e não fechadas:
  - Sempre que abrir uma `tag`, feche-a.
  - Idente bem o código
  - Lembrem-se de usar mais recursos do editor/navegador:
    - Ao criar um arquivo, digite `html` e depois <kbd>tab</kbd>
    - No navegador, entre em exibir código fonte

---
# Hoje veremos

1. Um pouco mais sobre **imagens**
1. Vídeo e Áudio
1. WebFonts
1. Unicórnios


---
<!-- {"layout": "section-header"} -->
# Um pouco mais sobre **imagens**
## .

- Formato geral (relembrando)
- Formatos de imagem

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
## Imagens

- Usamos a tag `<img src="...">`, que é um **elemento _void_**
  - Ou seja, não tem conteúdo nem tag de fechamento
- Formato geral
  ```html
  <img src="imagens/nome-do-arquivo.jpg">
  ```
- [Referência na Mozilla Developer Network][mdn-img]

[mdn-img]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img



---
<!-- {"layout": "regular"} -->
## Imagens: **formato**

- Existem vários formatos de imagens suportados por navegadores
  - **JPEG**, bom para (i.e., compacta bem) fotos e imagens complexas. Sem transparência.
  - **GIF**, transparência de 1 bit e suporta animações de quadros
  - **PNG**, transparência de 8 bits (rgba) e suporta mais cores que GIF
    - Bom formato para cores "chapadas" (pouca variação de cor)
  - **SVG**, imagens vetoriais

---
# Transparências: PNG vs GIF

- **GIF**: Um pixel é totalmente transparente ou totalmente opaco
- **PNG**: Opacidade pode variar. Exemplo:
# ![Exemplo de transparencia usando PNG](../../images/png-transparency.png)

---
# Imagens vetoriais

- Imagens que preservam o aspecto mesmo quando aumentadas
- Imagem vetorial:

![Exemplo de transparencia usando PNG](../../images/imagem-vetorial.svg)
![Exemplo de transparencia usando PNG](../../images/imagem-vetorial.svg)<!-- { style="width: 100px"} -->

- Imagem _bitmap_ (não vetorial)

![Exemplo de transparencia usando PNG](../../images/imagem-bitmap.png) ![Exemplo de transparencia usando PNG](../../images/imagem-bitmap.png)<!-- {style="width: 100px"} -->

---
<!-- {"layout": "section-header"} -->
# Áudio e Vídeo
## Como colocar recursos multimídia

- Possibilidades
- Formatos de vídeo e CODECs
- O elemento `<video></video>`
<!-- {ul:.content} -->

---
## Problema

![O Filosoraptor](../../images/philosoraptor.jpg) <!-- {.portrait} -->

- Já que temos um hipertexto (`html`), não podemos expandir o conceito para
  **hipermídia** e colocar áudio e vídeo em um documento?
  - Opção 1: colocar um link para que o usuário faça download do arquivo
  - Opção 2: usar um plugin que seja capaz de renderizar vídeo (eu escutei _flash_?)
  - Opção 3: usar os elementos de **`<audio>` e `<video>` do `html5`**

---
## Formatos de Vídeo

- Existem diversos **formatos de arquivo**:
  - Formatos (de recipiente):
    - AVI (.avi)
    - WebM (.webm)
    - MP4 (.mp4, .m4v)
    - Ogg (.ogg)
    - Flash Video (.flv)
    - ASF (.asf) <!-- {ul:.multi-column-list-2} -->
- Os formatos definem apenas **como é organizada a estrutura** de um arquivo de
  vídeo
  - Os formatos definem jeitos diferentes para se armazenar **_tracks_ de vídeo e
    de áudio**
    - Normalmente, 1 _track_ de vídeo e 2 de áudio (para som estéreo)
  - O conteúdo precisa ser codificado usando um **algoritmo CODEC**

*[CODEC]: Coder-Decoder*

---
## **CODEC**s de Vídeo e Áudio

*[CODEC]: Coder-Decoder**

- Alguns CODECs de vídeo são:
  1. H.264, ou MPEG-4 _part_ 10
  1. Theora
  1. VP8
- Para áudio, também há vários CODECs disponíveis. Alguns são:
  1. MP3 (.mp3), ou MPEG-3 _Audio Layer_
  1. AAC (.aac), ou _Advanced Audio Layer_
  1. Vorbis (.ogg, .mp4, .mkv)

---
## O elemento **video**

- Para exibir um vídeo, o `html5` propõe um novo elemento que funciona de forma
  similar ao elemento de imagem:
  ```html
  <video src="videos/fendadobiquini.mp4"></video>
  ```
- Resultado:

  <video src="../../videos/fendadobiquini.mp4" width="320" height="240"></video>

---
## Querida, onde está o controle?

- O atributo `controls` associa um conjunto de controles ao `<video />`
  ```html
  <video src="videos/fendadobiquini.mp4" controls></video>
  ```
- Resultado:

  <video src="../../videos/fendadobiquini.mp4" width="320" height="240" controls></video>

---
## Opções (atributos) de **video**

- `controls`, para um conjunto de controles
- `width="px"`, `height="px"`, para as dimensões (vídeo não é redimensionado)
- `autoplay`, para começar a executar o vídeo assim que a página carregar
- `preload="none|metadata|auto"`, para começar a baixar o vídeo assim que a
  página carregar
- `loop`
- `muted`
- `poster="http://..."`, `url` de uma imagem para ser mostrada antes do vídeo
  ser "tocado"

---
## Suporte dos navegadores por formato

- Os navegadores não suportam **os mesmos formatos de vídeo**
- Assim, usamos uma outra forma do elemento `<video>`:
  ```html
  <video width="320" height="240" controls>
    <source src="f.mp4"  type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
    <source src="f.webm" type="video/webm; codecs=vp8,vorbis">
    <source src="f.ogv"  type="video/ogg; codecs=theora,vorbis">
    Seu navegador não suporta o elemento <code>video</code>.
  </video>
  ```
- O navegador tentará abrir o vídeo `f.mp4`
  - se não conseguir, tentará o arquivo `f.webm`
  - caso ainda não consiga, tentará o `f.ogv`
  - se, mesmo assim, não conseguir, <del>chore</del> será exibida uma mensagem informando que o vídeo não é suportado
---
<!-- {"scripts": ["../../scripts/classes/caniuse.min.js"]} -->
## Suporte **hoje**

<span class="caniuse" data-feature="webm" style="width: 30%"></span>
<span class="caniuse" data-feature="mpeg4" style="width: 30%"></span>
<span class="caniuse" data-feature="ogv" style="width: 30%"></span>

---
## Em caso de navegadores antigos

- Você pode colocar uma mensagem
  ```html
  <video src="f.ogv">
    Seu navegador não suporta o elemento <code>video</code>.
  </video>
  ```
- Ou, melhor ainda, usar _flash_ como _fallback_
  ```html
  <video>
    <source src="f.ogv" type="video/ogg; codecs=theora,vorbis">
    <object data="f.swf" type="application/x-shockwave-flash">
    </object>
  </video>
  ```

---
## Audio

- `<audio>` funciona **exatamente** da mesma forma que `<video>`
- [Referência na MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

  ![](../../images/baby-success.jpg)

---
# Web Fonts

---
## Web Fonts

- Motivação
    - Utilizar fontes que não estão instaladas no computador dos clientes
- Passos
    1. Escolher a fonte
    1. Gerar todos os formatos para que funcione em todos os principais
       navegadores
       - `.ttf`
       - `.otf`
       - `.eot`
       - `.woff`
    1. Publicar a fonte na Internet (ou no seu próprio site)

---
## Web Fonts (cont.)

1. Descrever a fonte no seu arquivo `CSS`:
  ```css
         @font-face {
           font-family: "Emblema One";
           src: url("fonts/EmblemaOne-Regular.woff"),
               url("fonts/EmblemaOne-Regular.ttf");
         }
  ```
2. Usar a fonte:
  ```css
         h1 {
           font-family: "Emblema One", sans-serif;
         }
  ```
---
## Utilização do Google Fonts

<video src="../../videos/web-fonts-google.mp4" width="802" height="456" controls style="margin: 0 auto;"></video>



---
<!-- {"layout": "section-header"} -->
# Unicórnios
## .

- Especificação
- Quebra de linha em um parágrafo


---
---
# _Unicorns are real_ (Exercício)

![Little Pony](../../images/little-pony.png) <!-- {.portrait} -->

---
## Exercício

1. Criar uma página para expor a verdade sobre os pôneis.
   - Seu amigo _designer_ criou um _layout_ no Photoshop para sua página e você
     deve criá-la de forma a reproduzir esse _layout_ na sua página `html`
   - Você pode ver o _layout_ na página seguinte
   - Você vai precisar usar novas tags e conceitos: `div`, `span`, _Box Model_ e
     `float`. Portanto, continue navegando até o final dos slides antes de
     colocar as mãos na massa ;)
---
## Comp / Specs

[![](../../images/unicorns-comp-thumb.png)](../../images/unicorns-comp.png)
[![](../../images/unicorns-specs-thumb.png)](../../images/unicorns-specs.png)

*[Comp]: Comprehensive Layout*
*[Specs]: Specifications*

---
# Quebra de linha (tag _br_)
- A _tag_ br funciona para quebrarmos a linha em um parágrafo
- Utilize-a para **quebrar linhas**, porém, **não** para separar parágrafos ou outros elementos
- Exemplo: escrever um poema

<iframe width="100%" height="460" src="//jsfiddle.net/danielhasan/v3zkLwp2/embedded/html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
# Referências

1. Capítulos 5 e 6 do livro
