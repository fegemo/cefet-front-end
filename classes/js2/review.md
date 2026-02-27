
---
# Na última aula... (1/4)

**Null**
  ~ usado quando uma variável não tem um valor aplicável naquele momento (`let x = null;`) <!-- {p:.no-margin} -->

**Undefined**
  ~ é o tipo atribuído a variáveis que não foram associadas a nenhum valor (`let x;`) <!-- {p:.no-margin} -->


**Object**
  ~ um **"saquinho" de propriedades**: <!-- {p:.no-margin} -->
    - <!-- {.code-split-2.no-margin.compact-code} -->
      <!-- {ul:style="padding-left: 0"} -->
      ```js
      let voo = {
        companhia: 'Gol',
        destino: {
          cidade: 'Sydney'
        }
      };
      ```
      ```js
      // ...
      voo.numero = 815;
      voo.destino.IATA = 'SYD';
      if (voo.companhia === 'Gol'){
        voo.preco = 700;
      }
      ```

---
<!-- {"layout": "2-column-content", "classes": "compact-code-more"} -->
## Na última aula... (2/4)

- _Template_ strings: <!-- {ul:.no-bullets} -->
  ```js
  const x = 10;   // queremos "(10px, 20px)"
  const y = 20;


  // string NORMAL: '...' ou "..."
  let posicao1 = '(' + x + 'px, ' + y + 'px)';

  // string TEMPLATE: `...`
  let posicao2 = `(${x}px, ${y}px)`;


  // ambas geram: "(10px, 20px)"
  ```
  - Isto é bem útil quando queremos concatenar strings e variáveis

1. Função seta:  <!-- {ol:.no-bullets.no-padding} -->
   ```js
   const bebidas = ['refri', 'suco', 'cerveja'];

   
   // usando função ANÔNIMA:
   let com5Letras = bebidas.filter(function(b) {
     return b.length === 5;
   });

   // usando função SETA:
   com5Letras = bebidas.filter(b => b.length === 5);



   // callback com função ANÔNIMA:
   el.addEventListener('click', function() {
     alert(':3');
   }); 

   // callback com função SETA:
   el.addEventListener('click', () => alert(':3'));
   ```

---
## Na última aula... (3/4)

- O `document.querySelectorAll` retorna **todos** que forem selecionados <!-- {ul:.compact-code} -->
- É possível alterar o **conteúdo** de um elemento com `elemento.innerHTML`:
  <iframe width="250" height="130" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>
  <iframe width="250" height="153" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/html/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>

  ```js
  let contador = 0;
  let contadorEl = document.querySelector('#contador');
  
  // quando clicado, (1) conta e (2) altera conteúdo
  contadorEl.addEventListener('click', () => {
    contador++;                       // (1) conta
    contadorEl.innerHTML = contador;  // (2) altera
  });
  ```

---
## Na última aula... (4/4)

1. **Alterando classes** de um elemento: <!-- {ol:.full-width} -->
   ```js
   booEl.classList.toggle('selecionado');   // add, remove ou toggle (alternar)
   ```
1. **Alterando atributos** de um elemento:
   ```js
   pokemonLutandoEl.src = 'bulbasaur.png';  // qualquer atributo, aqui foi src
   ```
1. Usando o argumento da _callback_ de um evento:
   ```js
   booEl.addEventListener('click', function(e) {
     let clicadoEl = e.currentTarget;       // elemento alvo (target) do evento
     clicadoEl.classList.toggle('selecionado');
   });
   ```
