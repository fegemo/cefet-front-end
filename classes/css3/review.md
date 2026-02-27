
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
<!-- {"classes": "compact-code-more"} -->
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
<!-- {"classes": "compact-code-more"} -->
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
