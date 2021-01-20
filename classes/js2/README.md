<!-- {"layout": "title"} -->
# JavaScript (parte 2)
## String templates, Função seta,<br>Alterando o DOM e Exploração Espacial :alien:

---
<!-- {"layout": "regular"} -->
# Na última aula... (1/3)

- Vimos novos elementos HTML para interação com o usuário:
  ```html
  <label for="numero-de-pasteis">Pastéis: </label>
  <input type="number" value="1" id="numero-de-pasteis"> <!-- não fecha! -->

  <button id="calcular">Calcular Conta</button>
  ```
  - Para atribuir algum comportamento ao clique do `<button>`, é necessário
    usar JavaScript

---
<!-- {"layout": "regular"} -->
# Na última aula... (2/3)

- Assim como em CSS, há 3 formas para incluir código JavaScript
  1. **Arquivo externo** com `<script src="arquivo.js"></script>` :thumbsup:
  1. Embutido na _tag_ `<script>...</script>` :thumbsdown:
  1. _Inline_ em atributos `onclick` :thumbsdown::thumbsdown::thumbsdown:
- A preferida é **arquivo externo**, porque ela:
  - Promove **reutilização de código JavaScript** por mais de um arquivo HTML
  - Respeita o princípio da **separação de responsabilidades**

---
<!-- {"layout": "regular"} -->
# Na última aula... (3/3)

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

---
# Hoje veremos

1. [_Template_ strings](#template-strings)
2. [Função seta](#funcao-seta)
3. [Alterando o DOM](#alterando-elementos-do-dom)
4. [Exploração Espacial](#exploracao-espacial) :alien:

---
<!-- {"layout": "section-header", "slideHash": "template-strings"} -->
# _Template_ Strings
## Criando strings bacanudas

- Relembrando o tipo `String` <!-- {.tipo-js.tipo-string} -->
- _Template_ strings
  1. Interpolação de valores
  1. Strings multilinha
  1. [Função de transformação][tagged-templates]

[tagged-templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

<!-- {ul:.content} -->

---
<!-- {"layout": "regular", "slideHash": "o-tipo-string", "backdrop": "oldtimes"} -->
## O tipo **3. String** <!-- {.tipo-js.tipo-string} -->

- **Representa um texto** <!-- {.tipo-string} --> codificado em UTF-8
- Não existe o tipo `char` como em C/C++ e Java, apenas _string_ :wink:
- Usamos aspas **simples** ou duplas
  ```js
  "Abc" === 'Abc'   // simples é mais legal!! mas basta ser consistente
  ```
- Possui uma propriedade chamada `length` com o seu comprimento:
  ```js
  console.log('Cachorro'.length); // 8
  ```
- Exemplos:
  ```js
  let aranhas = 'fofofauna';
  const caminhoVideo = 'videos/a.mp4';
  const nomeCompleto = primeiro + ' ' + ultimo;     // concatenou
  ```


---
<!-- {"layout": "regular"} -->
## _Template_ Strings: interpolação de valores (1/2)

- É uma forma mais recente para criar _strings_ <!-- {ul:.full-width.bulleted} -->
- Formato: **usa-se crase** para delimitar. Exemplo:
- <!-- {.code-split-2} -->
  ```js
  // template string
  let fruta = `Kiwi`;
  ```
  ```js
  // string normal
  let fruta =  'Kiwi';
  ```
- Permite **interpolar** (substituir) **variáveis** dentro de strings:
- <!-- {.code-split-2.compact-code-more} -->
  ```js
  const peso = 82;
  const nome = 'Kagaro Nakama';

  // com template strings
  const frase = `${nome} pesa ${peso}kg`;
  // "Kagaro Nakama pesa 82kg"
  ```
  ```js
  const peso = 82;
  const nome = 'Kagaro Nakama';
  
  // concatenando strings normais
  const frase = nome + ' pesa ' + peso + 'kg';
  // "Kagaro Nakama pesa 82kg"
  ```
- A sintaxe é mais sucinta e legível
  - Vejamos outros exemplos...
  
---
<!-- {"layout": "regular"} -->
## _Template_ Strings: interpolação de valores (2/2)

- É possível **colocar expressões** dentre de `${...}`. Exemplo: <!-- {ul:.full-width.bulleted} -->
  ```js
  // supondo que existem variáveis preco=5 e qtde=2
  let aConta = `Sua conta é R$ ${preco * qtde - 3}`;
  //           "Sua conta é R$ 7"
  ```
- <!-- {.code-split-2.compact-code-more} -->
  ```js
  // supondo variáveis dia, mês, ano e func. obtemMes
  const data = `${dia} de ${obtemMes(mes)} de ${ano}`;
  // Ex:       "20 de janeiro de 2021"
  ```
  ```js
  const tom = 128;
  const corCinza = `rgb(${tom}, ${tom}, ${tom})`;
  // Ex:           "rgb(128, 128, 128)"
  ```
- Mas qual é o tipo de dados??
  <!-- {li:.compact-code-more} -->
  ```js
  console.log(typeof "texto"); // imprime "string"
  console.log(typeof `texto`); // imprime "string"
  ```
  - É **String** <!-- {.tipo-js.tipo-string} --> mesmo! Só muda a sintaxe pra escrever
- Ou seja, a **interpolação** é apenas uma **sintaxe mais legal** para concatenar strings com variáveis/expressões

---
<!-- {"layout": "regular"} -->
## _Template_ Strings: **texto multilinha**

- Digamos que você queira que uma variável string contenha uma poesia (ocupando várias linhas)
- As _template strings_ permitem que **uma string ocupe mais do que uma linha** no código fonte
- <!-- {.code-split-2} -->
  ```js
  // com template string
  let poesia = `Cavei cavei cavei
    Isto não é um poema
    Mas é profundo.`;
  ```
  ```js
  // com string normal
  let poesia = 'Cavei cavei cavei\n' +
    'Isto não é um poema\n' +
    'Mas é profundo.';
  ```
- Nesse caso, quando há uma quebra de linha no código fonte, é colocado um `\n` dentro da _template string_

---
<!-- {"layout": "section-header", "slideHash": "funcao-seta"} -->
# Função Seta
## A 3ª forma para funções

- 3 Formas:
  - Função tradicional
  - Função anônima
  - Função seta (anônima também)

<!-- {ul^1:.content} -->

---
<!-- {"layout": "regular"} -->
## Função **tradicional** e **anônima**

- <!-- {.code-split-2} -->
  <!-- {ul:.full-width} -->
  ```js
  function cadastrar() {
    // ...
  }
  ```
  ```js
  const cadastrar = function() {
    // ...
  };
  ```
 - **Função seta** é uma **sintaxe mais nova e sucinta** para as anônimas ⬆
 - <!-- {.code-split-2.bulleted style="flex-direction: row-reverse"} -->
   ```js
   const cadastrar = () => {
     // ...
   };
   ```
   1. Omitir `function`
   2. Seta entre parâmetros e corpo
   3. `return` implícito
   4. Mantém o valor do ponteiro `this`
- Os três primeiros itens já são legais o suficiente pra **preferirmos a forma da função seta** <!-- {li:.bullet} -->
  - Vejamos alguns exemplos

---
<!-- {"layout": "2-column-content", "classes": "compact-code-more", "slideHash": "funcao-seta-sintaxe"} -->
## Função seta: sintaxe

```js
function ciao() {
  return 'Ciao';
}

function oi(prim, ult) {
  return 'Oi ' + prim + ' ' + ult;
}

function hi(name) {
  return 'Hi ' + name;
}

function fatorial(n) {
  let resultado = 1;
  while (n > 1) {
    resultado *= n;
    n--;
  }
  return resultado;  
}
```

```js
let ciao = () => 'Ciao';



let oi = (prim, ult) => 'Oi ' + prim + ' ' + ult;



let hi = name => return 'Hi ' + name;



let fatorial = n => {
  let resultado = 1;
  while (n > 1) {
    resultado *= n;
    n--;
  }
  return resultado;  
}
```

---
<!-- {"layout": "regular", "classes": "compact-code-more", "slideHash": "funcoes-seta-com-vetores"} -->
## Exemplo: funções seta com vetores

```js
let usuarios = ['Joel', 'Fani', 'Fúlvio'];
let alunos = [{ matricula: '...' }];
let numeros = [1, 4, 2, 5];
```

1. Pegar apenas usuários que começam com letra 'F': <!-- {ol:.full-width.bulleted-0} -->
   - <!-- {.code-split-2} -->
     <!-- {ul:style="padding-left: 0"} -->
     ```js
     usuarios.filter(function(nome) {
       return nome.startsWith('F');
     });
     ```
     ```js
     usuarios.filter(nome => nome.startsWith('F'));
     
     
     ```
2. Buscar pelo aluno com uma matrícula:
   - <!-- {.code-split-2} -->
     <!-- {ul:style="padding-left: 0"} -->
     ```js
     alunos.find(function(aluno) {
       return aluno.matricula === '2005046102';
     });
     ```
     ```js
     alunos.find(al => al.matricula === '2005046102');
     
     
     ```
3. Vetor com os quadrados do original:
   - <!-- {.code-split-2} -->
     <!-- {ul:style="padding-left: 0"} -->
     ```js
     numeros.map(function(numero) {
       return numero ** 2;
     });
     ```
     ```js
     numeros.map(numero => numero ** 2);


     ```

---
<!-- {"layout": "section-header", "slideHash": "alterando-elementos-do-dom"} -->
# Alterando o DOM
## Mudando os elementos HTML

- Relembrando `document.querySelector()`
- Selecionando vários elementos
- Alterando o contéudo
- Alterando atributos
- Colocando/removendo classes

<!-- {ul:.content} -->

---
<!-- {"layout": "regular", "slideHash": "recuperando-elemento-dom", "backdrop": "oldtimes"} -->
# Selecionando um elemento

- O método `document.querySelector(seletor)` permite que, a partir de um código
  JavaScript, recuperemos um elemento do DOM
  - Ele recebe um único **argumento** que é um **seletor CSS**. Exemplo:
    ```js
    let logoEl = document.querySelector('#logomarca');
    let tabelaEl = document.querySelector('#tesouros-pirata');
    let principalEl = document.querySelector('main');
    ```
    - Ele retorna um elemento HTML que pode ser alterado
  - Também existe `document.querySelectorAll(seletor)` (repare o **`all`**),
    que retorna mais de um elemento, mas veremos ele depois


---
<!-- {"layout": "regular", "slideHash": "selecionando-varios-elementos"} -->
# Selecionando vários elementos

- O `document.querySelector` retorna **apenas 1 elemento**
  - Se tiver mais de um, retorna o primeiro encontrado
- O `document.querySelectorAll` retorna **todos** que forem selecionados:
  ```js
  let inputs = document.querySelectorAll('input');  // retornou um 'NodeList'
                                                    // com todos inputs da página

  console.log(`Quantidade de inputs na página: ${inputs.length}`);
  let primeiroInputEl = inputs[0];
  ```

---
<!-- {"layout": "regular"} -->
## Selecionando vários elementos (2/3)

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
<!-- {"layout": "regular", "embeddedStyles": ".codigos-com-pouco-espaco-vertical pre { margin-top: 0.2em !important;}"} -->
## Selecionando vários elementos (3/3)

- <!-- {ul:.compact-code.bulleted-pre} -->
  Um `NodeList` é **"praticamente um _array_"** - ele possui os métodos essenciais: 
  ```js
  let inputs = document.querySelectorAll('input');      // inputs é um 'NodeList'
  ```
- <!-- {.no-bullets.codigos-com-pouco-espaco-vertical style="margin-top: 1em;"} -->
  ```js
  // propriedade .length (igual um array)
  console.log(`Quantidade de elementos: ${inputs.length}`);
  ```
  ```js
  // método 'forEach' (igual um array)
  inputs.forEach(function(el) {
    // ...
  });
  ```
  ```js
  // pegando um elemento como se fosse um array
  let primeiroEl = inputs[0];
  ```

---
<!-- {"layout": "regular"} -->
## `NodeList` vs Vetor

- Um **`NodeList`** é praticamente um _array_, mas **não possui todos os métodos**. Por exemplo:
- <!-- {.code-split-2.compact-code-more} -->
  ```js
  umNodeList.length        ✅
  umNodeList[5]            ✅
  umNodeList.forEach(...)  ✅

  umNodeList.indexOf(...)  ❌
  umNodeList.sort()        ❌
  umNodeList.reverse()     ❌
  umNodeList.filter()      ❌
  umNodeList.find()        ❌
  ```
  ```js
  umVetor.length          ✅
  umVetor[5]              ✅
  umVetor.forEach(...)    ✅
  
  umVetor.indexOf(...)    ✅
  umVetor.sort()          ✅
  umVetor.reverse()       ✅
  umVetor.filter()        ✅
  umVetor.find()          ✅
  ```
- Se quiser transformar um `NodeList` em um vetor, use<br>`vetor = Array.from(umNodeList)`:
  ```js
  let todosParagrafos = document.querySelectorAll('p');   // é um 'NodeList'
  todosParagrafos = Array.from(todosParagrafos);          // agora é um 'Array'
  ```

---
<!-- {"layout": "regular", "backdrop": "oldtimes", "embeddedStyles": "@keyframes highlighting{from{border-color:transparent;background:transparent;transform:scale(1);}to{border-color:darkgoldenrod;background:white;transform:scale(1.05);}}"} -->
## O objeto **document**

- O objeto `document` dá acesso ao **Document Object Model**, ou DOM
- Por exemplo, para pegar um elemento a partir de seu `id` e colocá-lo em
  uma variável:
  ```js
  let botaoDeliciaEl = document.querySelector('#botao-delicia');
  ```
  - Agora é possível fazer várias coisas com o botão, como: <!-- {li:style="border: 3px solid transparent;padding:0.5em;border-radius:10px;animation:highlighting 1s ease-in-out 5s infinite alternate"} -->
    1. Associar um evento de clique
    1. Pegar ou alterar seus atributos
    1. Alterar seu conteúdo
    1. Alterar seu estilo

---
<!-- {"backdrop": "oldtimes"} -->
# Anatomia de uma **_tag_**

::: figure .figure-slides
![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag-1.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag-2.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag-3.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag-4.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag-5.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
:::

- Tags de abertura podem ter **atributos**: <!-- {ul:.no-bullets.bullet.compact-code} -->
  ```html
  <img src="bob-esponja.png">
  <p class="destacado">...</p>
  <input type="number">
  ```


---
<!-- {"layout": "centered", "slideHash": "alterando-o-conteudo"} -->
# Alterando **o conteúdo**

- É possível **alterar o conteúdo** <!-- {.alternate-color} --> de um elemento com `elemento.innerHTML`:
  <iframe width="250" height="130" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>
  <iframe width="250" height="153" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/html/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>

  ```js
  let clicks = 0;
  let contadorEl = document.querySelector('#contador');
  
  // quando clicado, (1) conta e (2) altera conteúdo
  contadorEl.addEventListener('click', function() {
    contador++;                       // (1) conta
    contadorEl.innerHTML = contador;  // (2) altera
  });
  ```

---
<!-- {"layout": "centered", "slideHash": "alterando-atributos"} -->
# Alterando **atributos**

- É possível **alterar atributos** <!-- {.alternate-color} --> dos elementos:
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
<!-- {"layout": "centered", "slideHash": "colocando-removendo-classes"} -->
# Colocando/removendo **classes**

- É possível **colocar ou remover classes** <!-- {.alternate-color} --> de elementos: <!-- {ul:.bulleted} -->
  ```js
  botaoEl.classList.add('selecionado');   // coloca .selecionado
  imageEl.classList.remove('oculta');     // remove .oculta
  pEl.classList.toggle('expandido');      // coloca ou tira .expandido
  ```
  - <iframe width="250" height="170" src="//jsfiddle.net/fegemo/wbq109xg/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right"></iframe>
    Isso pode ser usado, por exemplo, para ↘<br>"marcar" elementos
  - Ou então pra fazer um menu lateral aparecer...

---
<!-- {"layout": "2-column-content-zigzag"} -->
## Definindo "quem está selecionado"

<iframe width="340" height="200" style="width: 340px" src="//jsfiddle.net/fegemo/wbq109xg/embedded/result,js,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>    

- **Marca/desmarca** elemento. Ideia: <!-- {ul:.bullet style="width: calc(100% - 340px)"} -->
  - No evento de `'click'` de cada um:
    1. Alterna a classe `.selecionado` do elemento que foi "clicado"
       - `el.classList.toggle('selecionado')`

<iframe width="340" height="200" style="width: 340px" src="//jsfiddle.net/fegemo/8nsjhgga/embedded/result,js,css/" allowfullscreen="allowfullscreen" frameborder="0" class="bullet"></iframe>    

- **Apenas 1** elemento selecionado por vez. Ideia: <!-- {ul:.bullet style="width: calc(100% - 340px)"} -->
  - No evento de `'click'` de cada um:
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
- Que elemento foi clicado?
- Subindo na árvore do DOM
- Alternando uma classe

<!-- {ul:.content} -->

---
<!-- {"backdrop": "space"} -->

---
<!-- {"layout": "regular"} -->
# Exploração Espacial :alien:

- Crie parágrafos que expandem/retraem e uma galeria :notebook:
  - [Baixe os arquivos][space] e veja as instruções
    no arquivo `README.md`
- Há 2 atividades:
  1. Criar um código em JavaScript para **fazer os botões "+"
     expadirem ou retrairem o texto dos parágrafos**
     - Fazer no arquivo `atividade1.js`
  2. Criar uma **galeria** mostrando **fotos e imagens** da sonda Philae
     - Fazer no arquivo `atividade2.js`

[space]: https://github.com/fegemo/cefet-front-end-space/archive/master.zip

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
<!-- {"slideHash": "subindo-na-arvore", "classes": "compact-code"} -->
# Subindo na árvore do DOM

- Todo elemento do DOM conhece, na árvore, quem é:
  1. seu pai (**`elemento.parentNode`** ou `elemento.parentElement`)
  1. seus filhos (`elemento.childNodes` ou `elemento.children`)
  1. irmão anterior e irmão posterior
- Exemplo: clicou numa `<img> `, mas quero a `<div></div>` que é "pai" dela:
  ```js
  function clicouNaImagem(e) {
    let clicadoEl = e.currentTarget;          // a <img> que foi clicada
    let divEl = clicadoEl.parentNode;         // <--- <div> é o pai da <img>
    console.log(divEl.id);                    // imprime id da div
  }

  let imgEl = document.querySelector('div > img');
  imgEl.addEventListener('click', clicouNaImagem);
  ```

---
<!-- {"slideHash": "alternando-uma-classe"} -->
# Alternando uma classe

- Às vezes queremos colocar/remover uma classe em um elemento **alternadamente**
- Para isso, existe o `elemento.classList.toggle('nome-da-classe')`
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
