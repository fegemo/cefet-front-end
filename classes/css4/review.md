
---
<!-- {"layout": "centered-horizontal"} -->
# Na última aula <small>(1/3)</small>

- **Propriedade `display`** e valores `inline`, `block`, `inline-block` e `none`
  <iframe width="510" height="320" src="https://jsfiddle.net/fegemo/2gfkyrrh/3/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right bordered rounded"></iframe>
- Também há outros valores:
  - `table`, `table-row`, `table-cell` etc.
  - `flex` e `inline-flex`
  - `grid` e `inline-grid`

---
# Na última aula <small>(2/3)</small>
- Propriedades do **Flexbox**: <!-- {ul^0:.full-width.no-margin} -->
  - No elemento pai:  <!-- {ul^0:.layout-split-2} -->
    - `display: flex` <!-- {li^1:style="flex: 1"} -->
    - `flex-direction: row | column`
    - `justify-content: flex-start | flex-end | center | space-around | space-between`
  - Nos elementos filhos: <!-- {li^0:style="flex: 1"} -->
    - `align-self: flex-start | flex-end | center`
    - `order: numero`

<iframe width="100%" height="300" src="https://jsfiddle.net/fegemo/f5odrgk9/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

---
# Na última aula <small>(3/3)</small>

- Propriedades do **grid**: <!-- {ul^0:.full-width.no-margin} -->
  - No elemento pai: <!-- {ul^0:.layout-split-2} -->
    - `display: grid` <!-- {li^1:style="flex: 1"} -->
    - `grid-template-rows`
    - `grid-template-columns`
  - Nos elementos filhos: <!-- {li^0:style="flex: 1"} -->
    - `grid-row: inicio / fim`
    - `grid-column: inicio / fim`

<iframe width="100%" height="300" src="https://jsfiddle.net/fegemo/sqtdb95x/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

