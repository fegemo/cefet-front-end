
---
# Nas últimas aulas... (1/3)

- Vimos novos elementos HTML para interação com o usuário:
  ```html
  <label for="numero-de-pasteis">Pastéis: </label>
  <input type="number" value="1" id="numero-de-pasteis"> <!-- não fecha! -->

  <button id="calcular">Calcular Conta</button>
  ```
  - Para atribuir algum comportamento ao clique do `<button>`, é necessário
    usar JavaScript

---
# Nas últimas aulas... (2/3)

- Assim como em CSS, há 3 formas para incluir código JavaScript
  1. **Arquivo externo** com `<script src="arquivo.js"></script>` :thumbsup:
  1. Embutido na _tag_ `<script>...</script>` :thumbsdown:
  1. _Inline_ em atributos `onclick` :thumbsdown::thumbsdown::thumbsdown:
- A preferida é **arquivo externo**, porque ela:
  - Promove **reutilização de código JavaScript** por mais de um arquivo HTML
  - Respeita o princípio da **separação de responsabilidades**

---
# Nas últimas aulas... (3/3)

- O DOM é a visão que o JavaScript tem dos elementos da página
- Dá para recuperar/alterar elementos do DOM com o objeto `document`:
  ```js
  // cria uma variável e recupera o elemento da logo (id="logomarca")
  let logoEl = document.querySelector('#logomarca');

  // atribui um evento de 'click' ao elemento da logo
  logoEl.addEventListener('click', function() {
    alert('Logo clicada!!'); 👹
  });
  ```

*[DOM]: Document Object Model*
