
---
<!-- {"layout": "2-column-content-zigzag"} -->
# Na última aula... (1/3)

- Vimos a **ferramenta do desenvolvedor** do Google Chrome
  - Usamos para **investigar erros** e **experimentar propriedades**

![Ferramentas de desenvolvedor do Chrome](../../images/chrome-dev-tools.png) <!-- {.push-right.large-width.bordered.rounded} -->

![Uma árvore com os elementos HTML](../../images/html-tree-1.png) <!-- {.medium-width.centered.block} -->

- Podemos enxergar o HTML da página como uma "árvore" de elementos

---
<!-- {"layout": "tall-figure-right"} -->
# ![Foto de Håkon Wium Lie](../../images/howcome.jpg) <!-- {.portrait.push-right} --> Na última aula... (2/3)

<iframe width="100%" height="300" src="//jsfiddle.net/fegemo/gqgacz36/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right"></iframe>

- CSS foi criada por Håkon Wium Lie em 1994
- Entendemos o que é **a cascata** no CSS:
  - Algumas **propriedades são herdadas** dos elementos ancestrais (_e.g._,
     cor do texto), outras não (_e.g._, a borda)

---
# Na última aula... (3/3)

- Além de selecionar por _tag_, id ou classe, há diversos **outros seletores**:

descend./filho <!-- {dl:.no-margin} -->
  ~ `p strong`: todo `<strong>` descendente de `<p>` (filho, neto etc.)
  ~ `p > strong`: todo `<strong>` filho direto de `<p>`

atributo
  ~ `img[alt]`: toda `<img>` que tem atributo `alt="..."`
  ~ `a[href$=".html"]`: todo `<a>` apontando para um `.html` etc.

estado do link
  ~ `a:link`, `a:visited`, `a:hover`, `a:active`

negação
  ~ `img:not([alt])`: `<img>` sem o atributo `alt`
