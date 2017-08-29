<!-- {"layout": "title"} -->
# JavaScript (parte 3)
## História, Estilizando elementos, Eventos de mouse, Depurando

---
<!-- {"layout": "regular", "embeddedStyles": "#tipo-object pre {display: inline-block; margin-top: 0!important; vertical-align: top;} #tipo-object pre:first-of-type { width: 40%; }"} -->
# Na última aula... (1/4)

**Null**
  ~ usado quando uma variável não tem um valor aplicável naquele momento
    (`let x = null;`)

**Undefined**
  ~ é o tipo atribuído a variáveis que não foram associadas
    a nenhum valor (`let x;`)

**Object**
  ~ um **"saquinho" de propriedades**:  <!-- {dd:#tipo-object} -->
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
    if (voo.companhia === 'Gol') {
      voo.preco = 700;
    }

    ```

---
<!-- {"layout": "2-column-content"} -->
## Na última aula... (2/4)

- Declarando e usando _arrays_ (_i.e._, vetores):
  ```js
  // cria array vazio, coloca 2
  // strings e imprime seu tamanho
  // e apenas o 1º elemento
  let frutas = [];
  frutas.push('kiwi');
  frutas.push('banana');
  console.log(frutas.length);
  console.log(frutas[0]);
  ```
1. Iterando com **for tradicional**:
   ```js
   let crs = ['azul', 'rosa'];
   for (let i=0; i<crs.length; i++) {
     console.log(crs[i]); //azul,rosa
   }
   ```
1. Usando `for (let item of array)` ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} --> :thumbsup::
   ```js
   for (let cor of cores) {
     console.log(cor);  // azul, rosa
   }  // mais curto e elegante!
   ```

---
<!-- {"layout": "regular"} -->
## Na última aula... (3/4)

- O `document.querySelectorAll` retorna **todos** que forem selecionados
- ![Uma tag, composta por tag de abertura, conteúdo e tag de fechamento](../../images/anatomia-tag.png)
  <!-- {.push-right style="width: 250px"} -->
  É possível alterar o **conteúdo** de um elemento com `elemento.innerHTML`:
  <iframe width="250" height="130" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>
  <iframe width="250" height="153" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/html/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>

  ```js
  let contador = 0,
    contadorEl = document.querySelector('#contador');
  // quando clicado, (1) conta e (2) altera conteúdo
  contadorEl.addEventListener('click', function() {
    contador++;                       // (1) conta
    contadorEl.innerHTML = contador;  // (2) altera
  });
  ```

---
<!-- {"layout": "regular"} -->
## Na última aula... (4/4)

1. **Alterando classes** de um elemento:
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


---
# Hoje veremos

1. [História do JavaScript](#historia-do-javascript)
1. [Estilizando elementos dinamicamente](#estilizando-elementos-dinamicamente)
1. [Eventos de mouse - além do `click`](#eventos-de-mouse)
1. [Depurando código](#depurando-codigo)

---
<!-- {"layout": "section-header", "slideHash": "historia-do-javascript"} -->
# História do JavaScript
## Como chegamos até aqui

- **História** da linguagem
- O objeto global: **`window`**

<!-- {ul:.content} -->

---
# História

1989 - 1993 <!-- {.bullet-old} -->
  ~ Tim Berners-Lee cria a WWW em CERN (*European Organization for
    Nuclear Research*) e a deixa aberta ao público <!-- {dd:.bullet-old} -->

1994 <!-- {.bullet-old} -->
  ~ Håkon propõe uma linguagem para dar conta da responsabilidade de
    alterar a aparência de páginas web chamada CSS <!-- {dd:.bullet-old} -->

1995 (maio)
  ~ ![Foto de Brendan Eich](../../images/brendan-eich.png) <!-- {.portrait.push-right} -->
    Brendan Eich, funcionário do Netscape, criou (em 10 dias!!) uma
    linguagem para alterar páginas web dinamicamente - o _Mocha_

1995 (setembro)
  ~ _LiveScript_ (novo nome) é lançado com a versão beta do Netscape 2.0

1995 (dezembro)
  ~ Nome alterado para JavaScript na versão 2.0 oficial para
    aproveitar a fama do Java

---
## História (cont.)

1996 (agosto)
  ~ Microsoft adota o JavaScript sob o nome de JScript no navegador
    Internet Explorer 3.0

1996 (novembro)
  ~ A Netscape submeteu o JavaScript para a
    _Ecma international_ para padronização. A especificação recebeu o nome de
     _ECMAScript_

1997 (junho)
  ~ A _Ecma International_ publicou a primeira versão, o ECMA-262

1998
  ~ Versão 2 do ECMAScript

1999 (junho)
  ~ Versão 3 do ECMAScript

2009
  ~ Versão 5 do ECMAScript

2013 - 2018
  ~ Versões 6-9
    ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} -->
    do ECMAScript, que mudaram de nome para **es2015**, **es2016**, **es2017**
    e **es2018** respectivamente


*[ECMA]: European Computer Manufacturers Association*
*[Ecma]: European Computer Manufacturers Association*

---
<!-- {"layout": "regular", "slideHash": "o-objeto-global-window"} -->
# O objeto global: **window**

- O navegador **expõe um único objeto** por janela chamado `window`
- Ele possui informações e utilidades sobre a janela corrente.
  Exemplos:
  ```js
  window.alert('mensagenzinha feia');                     // retorna undefined
  window.confirm('janela pedindo confirmacao');           // retorna true, false
  window.prompt('escreva seu nome, champz', 'b. verde');  // retorna uma string
  ```
  ```js
  // url, título, opções
  window.open('/popup.html', 'Enquete', 'resizable,scrollbars');  // #feioDemais!
  ```

---
<!-- {"layout": "regular"} -->
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
<!-- {"layout": "regular"} -->
## Objetos notáveis dentro de **window**

- Além de utilidades, `window` possui outros objetos importantes:
  - **`window.document`**
    - Acesso ao DOM (estrutura HTML da página)
  - `window.navigator`
    - Acesso a características do navegador como geolocalização,
      reconhecimento de fala etc.
  - `window.console`
    - Objeto de acesso ao terminal do navegador
  - `window.Math`
    - **Funções matemáticas**, como `Math.sin`, `Math.floor`, `Math.round`
  - `window.location`
    - Informações sobre o endereço (a URL) da página

*[DOM]: Document Object Model*
*[URL]: Unique Resource Locator*

---
# Convenção: omitir ~~window~~

- Como o objeto `window` é o único objeto global, **podemos acessar
  suas propriedades <u>sem usar `"window."`</u>** :scream:. Por exemplo:
  ```js
  window.console.log('Piccolo > Goku');
  ```
  É o mesmo que:
  ```js
  console.log('Piccolo > Goku');    // sucesso!!
  ```
- Podemos omitir `window` para que o código fique menorzinho

---
<!-- {"layout": "section-header", "slideHash": "estilizando-elementos-dinamicamente"} -->
# **Estilizando** elementos dinamicamente <!-- {h1:style="padding-top: 0"} -->
## Alterando propriedades CSS de elementos

- De **2 formas** diferentes:
  1. Usando classes (*já vimos*<!--{em:.underline.upon-activation.delay-1800}-->):
     - `el.classList.add(...)`
     - `el.classList.remove(...)`
     - `el.classList.toggle(...)`
  1. **Usando propriedade `style`**


<!-- {ul^1:.content} -->

---
<!-- {"layout": "regular"} -->
## Alterando o **estilo** de elementos

- Há **2 formas** para alterar o estilo de elementos:
  1. Adicionando ou removendo classes (já vimos):
     ```js
     booEl.classList.add('selecionado');    // adiciona .selecionado
     botaoEl.classList.remove('oculto');    // remove .oculto
     ```
     - Usa a **propriedade `.classList` do elemento**
  1. Alterando a propriedade `style`:
     ```js
     botaoEl.style.width = '80%';           // define largura como 80%
     botaoEl.style.paddingTop = '2px';      // padding-top vira paddingTop
     ```
     - Usa a **propriedade `.style` do elemento**

---
<!-- {"layout": "regular"} -->
## Nomes das propriedades de estilo em JS

- Repare a mudança das propriedades **CSS para JS**:
  ```js
  botaoEl.style.backgroundColor = '#cccccc';
  ```
  - CSS ➡️ JavaScript
    - `background-color` ➡️ `backgroundColor` <!-- {ul^0:.multi-column-list-2} -->
    - `border-radius` ➡️ `borderRadius`
    - `margin` ➡️ `margin`
    - `list-style-type` ➡️ `listStyleType`
    - `z-index` ➡️ `zIndex`
    - etc.
- Isso acontece porque em JavaScript **não podemos usar hífens**:
  ```js
  let nome-da-variavel = 'incorreto'; // Uncaught SyntaxError: Unexpected token -
  ```


---
<!-- {"layout": "regular"} -->
## Usar _classes_ ou `elemento.style`?

- Devemos **preferir usar _classes_**, porque a estilização fica por conta
  do arquivo CSS
  - Lembre-se do princípio da separação de responsabilidades
- Contudo, **em certos casos é melhor usar `.style`**:
  - ![Abelha voando](../../images/exemplo-position-absolute-bees.gif) <!-- {.push-right} -->
    Quando precisamos calcular, em JavaScript, o valor de uma propriedade
  - Exemplo: `abelhinhas.js`
    ```css
    .abelhinha {
      position: absolute;   /* precisamos disto */
      left: ??;             /* mas como calcular left e top? */
      top: ??;
    }
    ```

---
<!-- {"layout": "2-column-content-result", "embeddedStyles": "#abelhinha-js ~ pre {margin: 0!important; vertical-align: top;}"} -->
## Exemplo: _abelhinhas.js_

<!-- {h2:#abelhinha-js} -->

```js
// cria um objeto abelhinha
let abelhinha = {
  x: 0,   // pos. x inicial
  y: 0,   // pos. y inicial
  imagemEl: document
              .querySelector('#abel')
};
```

<iframe height="175" src="//jsfiddle.net/fegemo/a1vLv657/embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

```js
// função que acha a nova posição
function atualizaAbel() {
  abelhinha.x += 1;
  abelhinha.y +=
    Math.sin(abelhinha.x);

  abelhinha.imagemEl.style.left =
    abelhinha.x + 'px';
  abelhinha.imagemEl.style.top =
    abelhinha.y + 'px';
}

// registra a função em um intervalo
window.setInterval(atualizaAbel, 33);
```

---
<!-- {"layout": "section-header", "slideHash": "eventos-de-mouse"} -->
# Eventos de mouse
## Acionados com o controle do mouse

- _Event handlers_
- Eventos de clique
- Eventos ao movimentar o mouse

<!-- {ul:.content} -->

---
<!-- {
  "layout": "regular",
  "scripts": ["../../scripts/classes/mouse-events.min.js"],
  "styles": ["../../styles/classes/mouse-events.min.css"]
} -->
## Eventos

- Eventos são **associados a elementos específicos** e causam a invocação
  de uma função "manipuladora" (_event handler_ ou apenas _handler_)
- Eventos relacionados ao mouse:
  - `click` (clique simples) **.**
  - `dblclick` (clique duplo) **.**
  - `mousedown` (press. um botão) **.**
  - `mouseup` (liberou um botão) **.**
  - `mousemove` (movimentou) **.**
  - `mouseover` (sobrevoou um elem.) **.**
  - `mouseout` (saiu de um elemento) **.** <!-- {ul:.multi-column-list-2#mouse-events}-->


---
<!-- {"layout": "regular"} -->
## _Event handlers_

- Há 2 formas de atribuir _handlers_ a eventos
  - Forma clássica (e feia :thumbsdown:)
    ```js
    botaoEl.onclick = function(e) { /*...*/ };
    ```
    - Foi a única forma por muitos anos
    - Permite **apenas um _handler_** por tipo de evento :thumbsdown:
  - Forma bacana :thumbsup::
    ```js
    botaoEl.addEventListener('click', function(e) { /*...*/ });
    ```
    - Pode haver mais de um _handler_ :thumbsup:

---
<!-- {"layout": "regular"} -->
## Comparação: **click** vs **mousedown** vs **mouseup**

  - **mousedown**: evento invocado ao **apertar** o botão do mouse
  - **mouseup**: evento invocado ao **soltar** o botão  do mouse
  - **click**: após ter sido efetuado o click no mouse
  - Exemplo:
    <iframe width="100%" height="300" src="https://jsfiddle.net/fegemo/xxemf1eq/3/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"layout": "regular"} -->
## Comparação:
##  **mouseover** vs **mousemove** vs **mouseout**

- Eventos invocados quando:
  - **mouseover**: o mouse **entra** no elemento
  - **mousemove**: o mouse **se movimenta** dentro do elemento
  - **mouseout**: o mouse **sai** do elemento
  - Exemplo:
    <iframe width="100%" height="300" src="https://jsfiddle.net/fegemo/1eoacrkm/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"slideHash": "posicao-mouse"} -->
## Pegando (x,y) do mouse

- Todos os eventos de mouse informam a posição (x,y) do mouse
  - Essa informação está em `e.pageX` e `e.pageY`
  <iframe width="100%" height="300" src="//jsfiddle.net/fegemo/79bnmhp7/embedded/result,js,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
## Exemplo: _segue-mouse.js_

<iframe width="100%" height="500" src="//jsfiddle.net/fegemo/1zg25ebs/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
<!-- {"layout": "section-header", "slideHash": "depurando-codigo"} -->
# Depurando código
## Como executar Javascript passo-a-passo

- A aba _Sources_
- Erros comuns
- Investigando "elementos que não foram alterados como previsto"
- Depuração passo-a-passo

<!-- {ul:.content} -->

---
## Depuração: **a aba _Sources_**

- Além de **CSS** e **HTML** podemos depurar o **JavaScript** de uma página:

![Descrição de uso das ferramentas de desenvolvedor para JavaScript no chrome](../../images/developer-js.png)

---
# Erros comuns (1/2)

- _"Uncaught SyntaxError: Identifier 'x' **has already been declared**"_:
  - Declarou mais de uma vez a mesma variável.
  ```js
    let x = 1;
    let x = 3;  // erro
  ```
- _"Uncaught ReferenceError: paragrafoEl **is not defined**"_:
  - Acessou uma variável antes de inicializá-la.
  ```js
    function alternarElementoExpandir(e){
      paragrafoEl.classList.toggle('expandido');  // paragrafoEl não havia sido
    }                                             // declarada
  ```

---
# Erros comuns (2/2)

- _"Uncaught TypeError: botoesExpandir.addEventListener **is not a function**"_:
  - O objeto não possui essa função.
  ```js
    let botoesExpandir = document.querySelectorAll(".botao-expandir-retrair");

    botoesExpandir.addEventListener('click', alternarElementoExpandir); // erro!
    // dá erro porque botoesExpandir é um array, não um elemento HTML
  ```

---
# Investigando:
## "um elemento não foi alterado (via JS) como era previsto"

---
<!-- {"fullPageElement": "#video-propriedade-nao-alterada", "playMediaOnActivation": {"selector": "#video-propriedade-nao-alterada" }} -->

<video src="//fegemo.github.io/cefet-front-end-large-assets/videos/erro-js-propriedade-nao-alterada.mp4" controls id="video-propriedade-nao-alterada"></video>

---
# Depurando passo-a-passo (1/2)

---
<!-- {"fullPageElement": "#video-depurando-1", "playMediaOnActivation": {"selector": "#video-depurando-1" }} -->

<video src="//fegemo.github.io/cefet-front-end-large-assets/videos/depurando-js-parte-1.mp4" controls id="video-depurando-1"></video>

---
# Depurando passo-a-passo (2/2)

---
<!-- {"fullPageElement": "#video-depurando-2", "playMediaOnActivation": {"selector": "#video-depurando-2" }} -->

<video src="//fegemo.github.io/cefet-front-end-large-assets/videos/depurando-js-parte-2.mp4" controls id="video-depurando-2"></video>
