
---
# Na última aula... (1/4)

- Objeto Global Window
  ```js
  window.alert('mensagenzinha feia');                     // retorna undefined
  ```
- Objetos dentro do **window**
  - **`window.document`**: Acesso ao DOM (estrutura HTML da página)
  - `window.navigator`: Acesso a características do navegador como geolocalização,
      reconhecimento de fala etc.
  - `window.Math`: **Funções matemáticas**, como `Math.sin`, `Math.floor`, `Math.round`
  - `window.location`: Informações sobre o endereço (a URL) da página
- Convenção: omitir o window

---
# Na última aula... (2/4)

- Alterando a propriedade `style`:
   ```js
   botaoEl.style.width = '80%';           // define largura como 80%
   botaoEl.style.paddingTop = '2px';      // padding-top vira paddingTop
   ```
- CSS ➡️ JavaScript
   - `background-color` ➡️ `backgroundColor` <!-- {ul^0:.multi-column-list-2} -->
   - `border-radius` ➡️ `borderRadius`
   - `margin` ➡️ `margin`

---
# Na última aula... (3/4)

- **click** vs **mousedown** vs **mouseup**
    <iframe width="100%" height="100" src="https://jsfiddle.net/fegemo/xxemf1eq/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
- **mouseover** vs **mousemove** vs **mouseout**
  <iframe width="100%" height="200" src="https://jsfiddle.net/fegemo/1eoacrkm/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
# Na última aula... (4/4)

- Obtendo as posições do mouse por meio das propriedades `e.pageX` e `e.pageY`
<iframe width="100%" height="260" src="https://jsfiddle.net/fegemo/79bnmhp7/embedded/result,js,css/dark/" allowfullscreen="allowfullscreen" frameborder="0" class="bordered"></iframe>
