<!-- {"layout": "title"} -->
# Javascript (parte 3)
## ???

<!--
// objeto window
// alterando estilos (.style)
// inserindo elementos dinamicamente -->

---
<!-- {"layout": "regular"} -->
# Na última aula... (1/4)

---
<!-- {"layout": "regular"} -->
# Na última aula... (2/4)


---
<!-- {"layout": "regular"} -->
# Na última aula... (3/4)


---
<!-- {"layout": "regular"} -->
# Na última aula... (4/4)


---
# Hoje veremos

1. [O objeto global: **window**](#o-objeto-global-window)
1. ???

---
<!-- {"layout": "section-header", "slideHash": "o-objeto-global-window"} -->
# O objeto global: **window**
## .

- O que é o objeto `window`
- Algumas funções básicas
- Propriedades importantes de `window`

<!-- {ul:.content} -->

---
## O objeto global: **window**

- O navegador **expõe um único objeto** por janela chamado `window`
- Ele possui informações e utilidades sobre a janela corrente.
  Exemplos:
  ```js
  window.alert('mensagenzinha feia');                   // retorna undefined
  window.confirm('janela pedindo confirmacao');         // true, false
  window.prompt('escreva seu nome, champz', 'b. verde');// string
  ```
  ```js
  // url, título, opções
  window.open('/popup.html', 'Enquete', 'resizable,scrollbars');
  ```

---
## O objeto global: **window** (cont.)

- Mais algumas utilidades de **window**
  ```js
  function assustaUsuario() {
    window.alert('Boo!');
  }
  window.setTimeout(assustaUsuario, 200);   // chama daqui a 200ms, 1x
  window.setInterval(assustaUsuario, 1000); // chama a cada 1s, forever
  ```
  ```js
  window.eval('window.alert("eval is evil!");');    // nao fazer em casa
  ```

---
## Objetos notáveis dentro de **window**

- Além de utilidades, o objeto `window` também possui outros objetos muito
  importantes:
  - **`window.document`**
    - Acesso à estrutura `html` da página (o DOM)
  - `window.navigator`
    - Acesso a características do navegador
  - `window.console`
    - Objeto de acesso à saída de terminal
  - `window.history`
    - Funções de manipulação do histórico da página (botões Voltar/Avançar)

*[DOM]: Document Object Model*

---
## Objetos notáveis dentro de **window** (cont.)

- Mais alguns objetos:
  - `window.Math`
    - **Funções matemáticas**
  - `window.JSON`
    - Funções de conversão entre string e JSON
  - `window.localStorage`
    - _Cache_ de informações locais à página
  - `window.sessionStorage`
    - _Cache_ com duração de apenas uma sessão
  - `window.location`
    - Informações acerca do endereço da página

*[JSON]: JavaScript Object Notation*

---
## Convenção

- Como o objeto `window` é o único objeto que o navegador expõe para os
  scripts, **podemos acessar suas propriedades <u>sem usar
  `"window."`</u>** :scream:.
  Por exemplo:
  ```js
  window.console.log('Nintendo pwns Sony');
  ```
  É o mesmo que:
  ```js
  console.log('Nintendo pwns Sony');    // sucesso!!
  ```
- Vamos falar muito agora sobre **`window.document`**, ou apenas **`document`**

---
# Referências

- Livro "Javascript: The Good Parts" (Douglas Crockford)
- [Mozilla Developer Network](https://developer.mozilla.org/)
