
---
# Na última aula <small>(1/3)</small>

- **_Tags_ semânticas**:
  - O HTML5 ![Logomarca do HTML](../../images/logo-html.svg) <!-- {.emoji} -->
    propôs elementos idênticos às `divs`/`spans`, mas que **possuem
    sentido para o navegador**. Por exemplo:
    ```html
    <header></header>   <!-- em vez de <div id="header"></div> -->
    <footer></footer>   <!-- em vez de <div id="footer"></div> -->
    <article></article> <!-- em vez de <div id="article"></div> -->
    <time></time>       <!-- em vez de <span id="time"></span> -->
    <nav></nav>         <!-- em vez de <div id="navigation"></div> -->
    ```
    - E várias outras...

---
# Na última aula <small>(2/3)</small>

- Quando **mais de uma regra CSS se aplica**, uma delas prevalece
  - O navegador calcula uma pontuação de especificidade (**`abc`**<!--{strong:.alternate-color}-->) do seletor
    de cada regra:
    - **`a`**<!--{strong:.alternate-color}-->: quantidade de **ids** no seletor
    - **`b`**<!--{strong:.alternate-color}-->: quantidade de **classes, atributos e pseudo-classes** no seletor
    - **`c`**<!--{strong:.alternate-color}-->: quantidade de **pseudo-elementos** no seletor
  - Quanto maior esse número, maior a precedência da regra ser aplicada

---
# Na última aula <small>(3/3)</small>

- **_Pseudo-classes_ e _Pseudo-elements_**:

  _Pseudo-class_
    ~ permitem **selecionar** elementos em **diferentes situações**
    ~ Exemplos: `:focus` (contém o foco), `:hover` (mouse em cima)

  _Pseudo-element_
    ~ permitem **estilizar** certas **partes de elementos**
    ~ Exemplos: `::selection` (seleção de texto) `::first-letter`
      (primeira letra)
