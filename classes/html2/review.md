
---
# Na última aula... (1/4)

- _Tags_ de importância: `<strong>`, `<em>`, `<mark>`, `<del>` e `<ins>`
- Listas numeradas (`<ol>`) e não-numeradas (`<ul>`)
- Podemos **criar hiperlinks** com o elemento
  `<a href="caminho-do-recurso">nome</a>`
  - Link interno da página referenciando o `id` do elemento:
    ```html
    <a href="#banda-calypso">Ir para banda Calypso</a>
    ...
    <h2 id="banda-calypso">Calypso</a>
    ```

---
# Na última aula... (2/4)

- Mais sobre **hiperlinks**:
  - Link para email:
    `<a href="mailto:hasan@cefetmg.br">Me mande emails</a>`
  - O atributo `target` para abrir uma página em outra aba
    ```html
    <a href="http://www.pudim.com.br" target="_blank">Site legal</a>
    ```
- Alguns elementos são `inline` e outros são `block`

  **`block`**
  ~ fazem quebra de linha (e.g., `<blockquote>`, `<p>` etc.)
  
  **`inline`** <!-- {.alternate-color} -->
  ~ não fazem quebra de linha (e.g, `<q>`, `<strong>` etc.)

---
<!-- {"embedSVG": "img[src$='.svg']", "embeddedStyles": ".css-rule-anatomy:not(.selector,.declaration.property,.value) .other-rule { opacity: 1 !important; } .css-rule-anatomy.rule .other-rule path { fill: #999 !important; } .css-rule-anatomy.rule .rule,.css-rule-anatomy.selector .selector,.css-rule-anatomy.declaration .declaration,.css-rule-anatomy.property .property,.css-rule-anatomy.value .value { opacity: 1 !important; }"} -->
# Na última aula... (3/4)

- ![Regra e seletor CSS](../../images/css-rule-anatomy.svg) <!-- {.css-rule-anatomy.rule.declaration.selector.push-right style="width: 300px" data-viewbox="56 0 144 120"} -->
  Formato de uma regra **CSS**
  - **Regra**: conjunto de declarações aplicadas em alguém
  - **Seletor**: a quem se aplica uma regra
  - **Declaração**: um par de &lt;propriedade, valor&gt;
- **Estilizando elementos um a um** utilizando o seu **id** e o seletor
  iniciando com **#**

---
# Na última aula... (4/4)

- Colocação de bordas por meio da propriedade `border`, ou então
  `border-width`, `border-style` e `border-color`
- ![](../../images/margin-auto.png) <!-- {.push-right} -->
  Para **centralizar imagens**:
  ```css
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  ```
