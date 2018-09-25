<!-- {"layout": "title"} -->
# Javascript (parte 2)
## Arranjos, Alterando o DOM e Exploração Espacial :alien:

---
<!-- {"layout": "regular"} -->
# Na última aula... (1/4)

- Vimos novos elementos HTML para interação com o usuário:
  ```html
  <label for="numero-de-pasteis">Pastéis: </label>
  <input type="number" value="1" id="numero-de-pasteis"> <!-- não fecha -->

  <button id="calcular">Calcular Conta</button>
  ```
  - Para atribuir algum comportamento ao clique do `<button>`, é necessário
    usar JavaScript

---
<!-- {"layout": "regular"} -->
# Na última aula... (2/4)

- Assim como em CSS, há 3 formas para incluir código JavaScript
  1. **Arquivo externo** com `<script src="arquivo.js"></script>` :thumbsup:
  1. Embutido na _tag_ `<script>...</script>` :thumbsdown:
  1. Inline em atributos `onclick` :thumbsdown::thumbsdown::thumbsdown:
- A preferida é **arquivo externo**, porque ela:
  - Promove **reutilização de código JavaScript** por mais de um arquivo HTML
  - Respeita o princípio da **separação de responsabilidades**

---
<!-- {"layout": "regular"} -->
# Na última aula... (3/4)

- Definimos **funções** com `function`: <!-- {ul:.push-code-right} -->
  ```js
  function nome(parametros) {
    // comandos aqui
  }
  ```
- Vimos os **tipos de dados** _Boolean_, _Number_, _String_
- Criamos **variáveis** com `let`:
  ```js
  let gatos = 9;            // tipo Number
  let nome = 'Adamastor';   // tipo String
  let cineminha = true;     // tipo Boolean
  ```
- Não é necessário (nem possível) definir o tipo de variáveis
  - Porque ele é inferido automaticamente

---
<!-- {"layout": "regular"} -->
# Na última aula... (4/4)

- O DOM é a visão que o JavaScript tem dos elementos da página
- Dá para recuperar/alterar elementos do DOM com o objeto `document`:
  ```js
  // cria uma variável e recupera o elemento da logo (id="#logomarca")
  let logoEl = document.querySelector('#logomarca');

  // atribui um evento de 'click' ao elemento da logo
  logoEl.addEventListener('click', function() {
    alert('Logo clicada!!');
  });
  ```

*[DOM]: Document Object Model*

---
# Hoje veremos

1. [Mais tipos de dados](#mais-tipos-de-dados)
1. [Arranjos e estruturas de repetição](#arranjos-e-estruturas-de-repeticao)
1. [Alterando o DOM](#alterando-elementos-do-dom)
1. [Exploração Espacial](#exploracao-espacial) :alien:

---
<!-- {"layout": "section-header", "slideHash": "mais-tipos-de-dados"} -->
# Mais tipos de dados
## Os primitivos e o complexo

- _Null_
- _Undefined_
- _Object_

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
# O tipo _Null_

- O tipo Null contém apenas um valor
  - `null`
- Usado quando uma variável **não tem um valor aplicável naquele momento**
  ```js
  let x = null;
  console.log(typeof x);    // imprime null
  ```

---
<!-- {"layout": "regular"} -->
# O tipo _Undefined_

- O tipo Undefined é o tipo atribuído a **variáveis que não foram associadas a
  nenhum valor**
- Tem um único valor
  - `undefined`
- Exemplo:
  ```js
  let x;
  console.log(typeof x);    // imprime undefined
  ```

---
# O tipo _Object_

- É um **"saquinho" de propriedades**: <!-- {ul:.push-code-right} -->
  ```js
  let jogador = {
    pontos: 1420,
    vidas: 2
  };
  console.log(jogador.pontos);
  // imprime 1420
  ```  
  - Propriedade: (**nome → valor**)
    - Nome: uma String
    - Valor: qualquer coisa, exceto `undefined`
- No exemplo, o objeto tem 2 propriedades:
  1. Nome: `pontos`, valor: `1420`
  1. Nome: `vidas`, valor: `2`
- Novas propriedades podem ser atribuídas mesmo após sua criação

---
## Instanciando um _Object_

- Na forma literal:
  ```js
  let jogador = {             // forma mais expressiva, curta e sexy
    pontos: 1420,             // propriedades separadas por vírgula
    vidas: 2
  };
  ```
  ```js
  let jogador = {};           // um objeto vazio: { }
  jogador.pontos = 1420;      // criou jogador.pontos com valor 1420
  jogador.vidas = 2;          // criou jogador.vidas
  ```


---
<!-- {"layout": "2-column-content"} -->
## Objetos dentro de objetos

```js
let voo = {
    companhia: 'Gol',
    numero: 815,
    decolagem: {
        IATA: 'SYD',
        horario: '2004-09-22 14:55',
        cidade: 'Sydney'
    },
    chegada: {
        IATA: 'LAX',
        horario: '2004-09-23 10:42',
        cidade: 'Los Angeles'
    }
};
```
- Aqui existem 3 objetos:
  - O **`voo`**, com as propriedades:
     - `companhia`
     - `numero`
     - **`decolagem`**
     - **`chegada`**
  - `decolagem` e `chegada` são objetos por si mesmos

---
## Outros tipos

- O Javascript possui **outros tipos complexos, que são baseados em Object**:
  - `Date`
    - Por exemplo, para imprimir o horário atual no console:
      ```js
      let agora = new Date();
      console.log(agora);
      ```
  - `Function` (sim! funções são objetos em JavaScript)
  - `Array` (veremos na próxima seção)


---
<!-- {"layout": "section-header", "slideHash": "arranjos-e-estruturas-de-repeticao"} -->
# Arranjos e Estruturas de repetição
## .

- Definindo _arrays_
- Métodos de _arrays_
- 3 sabores de `for`
- _Loops_ `while`/`do { ... } while`

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
# Arrays

- Arrays são vetores unidimensionais, **heterogêneos**
  - Os itens dos vetores **não** precisam ter o mesmo tipo
    ```js
    let listaDeCoisas = ['Aew', 35, true, [], 'outra string'];
    ```
- Assim como a _String_, um _Array_ tem um **comprimento**:
  - Propriedade `length`:
    ```js
    console.log(listaDeCoisas.length);  // imprime 5
    ```

---
<!-- {"layout": "regular", "elementStyles": { "h2 + pre": "overflow: hidden; width: 100%;"}} -->
## **Usando** Arrays

```js
let listaDeCoisas = ['Aew', 35, true, [], 'outra string'];
```

- Indexação: usa-se os símbolos `[` e `]` para acessar um item do array
  ```js
  console.log(listaDeCoisas[1]);      // imprime 35
  listaDeCoisas[0] = '';              // altera primeiro elemento
  console.log(listaDeCoisas[0]);      // imprime string vazia
  ```
- Arrays possuem métodos, [vários](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):
  ```js
  let frutas = [];                    // cria um array vazio
  frutas.push('kiwi');                // colca 'kiwi' no array
  console.log(frutas.length);         // imprime 1
  ```

---
<!-- {"layout": "regular", "slideHash": "metodos-de-arrays"} -->
## **Métodos** de Arrays

- Inserindo e removendo elementos
  ```js
  frutas.push('mamão');         // insere 'mamão' no final do array
  frutas.pop();                 // remove o último ('mamão')
  frutas.unshift('tangerina');  // insere 'tangerina' no início
  frutas.shift();               // remove o primeiro ('tangerina')
  ```
- E alguns outros:
  ```js
  frutas.reverse()              // inverte a ordem dos itens
  frutas.sort();                // ['banana', 'kiwi', 'maçã']
  frutas.splice(2, 1);          // Remove 1 elemento, a partir do 3º
  ```

---
<!-- {"layout": "regular"} -->
# **for** <small>(forma tradicional)</small>

- Forma tradicional com `for (inicio; condicao; incremento)`:
  ```js
  for (let i = 0; i < 10; i++) {
    console.log(i);               // 0, 1, 2 ... 9
  }
  ```
- Percorrendo items de um _array_:
  ```js
  let cores = ['azul', 'rosa'];
  for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);        // azul, rosa
  }
  ```

---
<!-- {"layout": "2-column-content", "slideHash": "for-formas-preferiveis"} -->
# **for** <small>(formas **preferíveis**)</small>

1. Usando `for (let item of array)` ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} --> :thumbsup::
   ```js
   let cores = ['azul', 'rosa'];
   for (let cor of cores) {
     console.log(cor);
     // azul, rosa
   }
   ```
- Usando `array.forEach` :thumbsup::
  ```js
  let cores = ['azul', 'rosa'];
  cores.forEach(function(cor) {
    console.log(cor);
    // azul, rosa
  });
  ```

---
<!-- {"layout": "2-column-content"} -->
# while/do..while

- Condição **primeiro**
  ```js
  let i = 1;
  while (i !== 10) {
    console.log(i);
    i++;
  }
  ```
1. Condição **depois**
   ```js
   let i = 0;
   do {
     i++;
     console.log(i);
   } while (i !== 10);
   ```

---
<!-- {"layout": "section-header", "slideHash": "alterando-elementos-do-dom"} -->
# Alterando o DOM
## Mudando os elementos HTML

- Selecionando vários elementos
- Alterando o contéudo de um elemento
- Alterando atributos
- Colocando/removendo classes

<!-- {ul:.content} -->

---
<!-- {"layout": "regular", "slideHash": "selecionando-varios-elementos"} -->
# Selecionando vários elementos

- O `document.querySelector` retorna **apenas 1 elemento**
- O `document.querySelectorAll` retorna **todos** que forem selecionados:
  ```js
  let inputs = document.querySelectorAll('input');  // retornou um 'NodeList'
                                                    // com todos inputs da página

  console.log('Quantidade de inputs: ' + inputs.length);
  let primeiroInputEl = inputs[0];
  ```

---
## Selecionando vários elementos (cont.)

- Para **atribuir um evento a todos** os elementos retornados:
  ```js
  let imagens = document.querySelectorAll('img');  // retornou um 'NodeList'

  // INCORRETO: um NodeList não possui um método "addEventListener"
  imagens.addEventListener('click', function() { });

  // CORRETO: cada item do NodeList (array) é um elemento HTML, logo,
  // possui a propriedade "addEventListener"
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function() { });
  }
  ```

---
## Selecionando vários elementos (cont.)

- Um `NodeList` é **"praticamente um _array_"** - ele possui os métodos essenciais:
  ```js
  let inputs = document.querySelectorAll('input');

  // propriedade .length (igual um array)
  console.log('Quantidade de elementos: ' + inputs.length);
  // método 'forEach' (igual um array)
  inputs.forEach(function(el) {
    // ...
  });
  // pegando um elemento como se fosse um array
  let primeiroEl = inputs[0];
  ```

---
<!-- {"slideHash": "alterando-o-conteudo"} -->
# Alterando **o conteúdo**

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
# Alterando **atributos**

- É possível alterar atributos dos elementos:
  ```html
  <img src="imgs/pikachu.png" id="pokemon-lutando">
  ```
  ```js
  let pokemonEl = document.querySelector('#pokemon-lutando');
  pokemonEl.src = 'imgs/bulbasaur.png';        // alteramos o 'src'
  ```
  - Aqui, alteramos o atributo `src` da `img`, mas poderia ser qualquer um
    - Por exemplo, em `input` costumamos pegar/alterar o `value`

---
<!-- {"slideHash": "colocando-removendo-classes"} -->
# Colocando/removendo **classes**

- É possível colocar ou remover classes de elementos:
  ```js
  botaoEl.classList.add('selecionado');   // coloca .selecionado
  imageEl.classList.remove('oculta');     // remove .oculta
  pEl.classList.toggle('expandido');      // coloca ou tira .expandido
  ```
  - <iframe width="250" height="160" src="//jsfiddle.net/fegemo/wbq109xg/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right"></iframe>
    Isso pode ser usado, por exemplo, pra "marcar" elementos:
  - Ou então pra fazer um menu lateral aparecer...

---
<!-- {"layout": "2-column-content-zigzag"} -->
## Definindo "quem está selecionado"

<iframe width="340" height="250" src="//jsfiddle.net/fegemo/wbq109xg/embedded/result,js,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>    

- **Marca/desmarca** elemento. Ideia:
  - No evento de `'click'`:
    1. Alterna a classe `.selecionado` do elemento que foi "clicado"
       - `el.classList.toggle('selecionado')`

<iframe width="340" height="250" src="//jsfiddle.net/fegemo/8nsjhgga/embedded/result,js,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>    

- **Apenas 1** elemento selecionado por vez. Ideia:
  - No evento de `'click'`:
    1. Tira a classe `.selecionado` de todos
    1. "Re"coloca a classe no elemento "clicado"

---
<!-- {"layout": "2-column-content", "slideHash": "menu-lateral"} -->
## Um menu lateral aparecer

<iframe width="100%" height="400" src="//jsfiddle.net/fegemo/dj37kc7e/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- No HTML:
  ```html
  <body>
    <nav id="menu">...</nav>
    <main>...</main>
  </body>
  ```
- No JavaScript, alterna a classe `.menu-visivel` no `<body>`
- No CSS, desloca tudo para a direita quando o `<body>` tem `.menu-visivel`

---
<!-- {"layout": "section-header", "slideHash": "exploracao-espacial"} -->
# Exploração Espacial :alien:
## Conhecendo o além-atmosfera

- Atividade de hoje
- Definindo constantes com `const`
- Que elemento foi clicado?
- Subindo na árvore do DOM
- Alternando uma classe

<!-- {ul:.content} -->

---
<!-- {"backdrop": "space"} -->

---
<!-- {"layout": "regular"} -->
# Exploração Espacial :alien:

- Crie um sisteminha de gerenciamento de tarefas :notebook:
  - [Baixe os arquivos][space] e veja as instruções
    detalhadas no arquivo `README.md`
- Há 2 atividades:
  1. Criar um código em JavaScript para **fazer os botões "+"
     expadirem ou retrairem o texto dos parágrafos**
     - Fazer no arquivo `atividade1.js`
  1. Criar uma **galeria** mostrando **fotos e imagens** da sonda Philae
     - Fazer no arquivo `atividade2.js`

[space]: https://github.com/fegemo/cefet-front-end-space/archive/master.zip

---
<!-- {"slideHash": "definindo-constantes"} -->
# Definindo constantes com **`const`**

- O `let` possui um irmão, mais conservador, chamado `const`
  - Uma variável `let` **pode** apontar para outro valor
    ```js
    let personagemCoadjuvante = 'Lula Molusco';
    personagemCoadjuvante = 'Seu Sirigueijo'; // Ok, funciona
    ```
  - Uma variável `const` (ou constante) **não pode** apontar para outro valor
    ```js
    const cargoDoBobEsponja = 'cozinheiro';
    cargoDoBobEsponja = 'chefe';              // TypeError: Assignment to
                                              //   constant variable
    ```

---
<!-- {"slideHash": "argumento-de-click"} -->
# Que elemento foi clicado?

- A _callback_ de eventos é executada com um **argumento com informações
  sobre o evento**. Tipicamente damos o nome de `e`, `evt` ou `event`:
  ```js
  function imprimeId(e) {      // repare o argumento 'e' (evento)
    let booClicadoEl = e.currentTarget; // <--- o elemento "alvo" do evento (img.boo)
    console.log(booClicadoEl.id);       // imprime 'boo1' (id do boo clicado)
  }

  document.querySelectorAll('.boo').forEach(function(booEl) {   // pega os .boo e
    booEl.addEventListener('click', imprimeId);                 // coloca o evento
  });                                                           // 'click' neles
  ```

---
<!-- {"slideHash": "subindo-na-arvore"} -->
# Subindo na árvore do DOM

- Todo elemento do DOM conhece, na árvore, quem é:
  1. seu pai (**`elemento.parentNode`**)
  1. seus filhos (`elemento.childNodes`)
  1. irmão anterior e irmão posterior
- Para pegar o "pai" de um elemento que foi clicado, por exemplo:
  ```js
  function clicouNoCaption(e) {
    let clicadoEl = e.currentTarget;          // o <caption> foi clicado
    let tabelaEl = clicadoEl.parentNode;      // <--- <tabel> é o pai do <caption>
    console.log(tabelaEl.id);                 // imprime id da tabela
  }
  let captionEl = document.querySelector('table > caption');
  captionEl.addEventListener('click', clicouNoCaption);
  ```

---
<!-- {"slideHash": "alternando-uma-classe"} -->
# Alternando uma classe

- Às vezes queremos colocar/remover uma classe em um elemento **alternadamente**
- Para isso, existe o `document.classList.toggle('nome-da-classe')`
- Além de colocar/remover a classe, **o método retorna**:
  - `true` se tiver colocado a classe
  - `false` se tiver removido a classe
- Exemplo:
  ```js
  let colocou = booEl.classList.toggle('selecionado');
  console.log(colocou);         // imprime 'true', porque colocou .selecionado
  colocou = booEl.classList.toggle('selecionado');
  console.log(colocou);         // imprime 'false', porque tirou .selecionado
  ```

---
# Referências

- Livro "Javascript: The Good Parts" (Douglas Crockford)
- [Mozilla Developer Network](https://developer.mozilla.org/)
