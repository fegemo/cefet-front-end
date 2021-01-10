<!-- {"layout": "title"} -->
# JavaScript (parte 1)
## Características, Escrevendo código, Clicando em botões e Resolvendo equações :chart_with_upwards_trend:

---
<!-- {"layout": "regular"} -->
# Na última aula (1/2)

- Quando **mais de uma regra CSS se aplica**, uma delas prevalece
  - O navegador calcula uma pontuação de especificidade (**`abc`**<!--{strong:.alternate-color}-->) do seletor
    de cada regra:
    - **`a`**<!--{strong:.alternate-color}-->: quantidade de **ids** no seletor
    - **`b`**<!--{strong:.alternate-color}-->: quantidade de **classes, atributos e pseudo-classes** no seletor
    - **`c`**<!--{strong:.alternate-color}-->: quantidade de **pseudo-elementos** no seletor
  - Quanto maior esse número, maior a precedência da regra ser aplicada

---
<!-- {"layout": "regular"} -->
## Na última aula (2/2)
- Exemplo: qual a cor do `<h2>` que seja filho direto de alguém com as classes `.post` e `.novidade` que, por sua vez, esteja dentro de um `#posts-recentes`?
  ```css
  /* id: 1, classes: 2, tag: 1; pontuação: 121 */
  #posts-recentes .post.novidade > h2 {
    color: blue;
  }
  /* id: 0, classes: 0, tag: 1; pontuação: 001 */
  h2 {
    color: green;
  }
  ```
  - Azul!


---
<!-- {"layout": "regular", "embeddedStyles": ".html-tree { margin: 0 auto; } .html-tree img { max-height: 320px; }"} -->
# Em alguma aula anterior <!-- {style="padding-bottom: 0.2em"} -->
## O HTML visto como uma árvore

::: figure .figure-slides.clean.html-tree
![Uma árvore com os elementos HTML](../../images/html-tree-1.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Uma árvore com os elementos HTML](../../images/html-tree-2.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Uma árvore com os elementos HTML](../../images/html-tree-3.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![Uma árvore com os elementos HTML](../../images/html-tree-4.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
:::



---
# Hoje veremos...

1. [Resolvendo Equações!](#resolvendo-equacoes)
1. [Características da linguagem](#caracteristicas-da-linguagem)
1. [Escrevendo código](#escrevendo-codigo)
1. [Clicando em um botão](#clicando-em-um-botao)

---
<!-- {"layout": "section-header", "slideHash": "resolvendo-equacoes"} -->
# Resolvendo Equações!
## ~~para roubar na prova~~

- Atividade de hoje
- Elementos HTML para:
  - Entrada de números (`<input>`)
  - Rótulos (`<label>...</label>`)
  - Botão (`<button>...</button>`)

<!-- {ul^1:.content} -->

---
<!-- {"backdrop": "matematica"} -->

---
<!-- {"layout": "regular"} -->
# Atividade de hoje

1. O objetivo é começar a usar JavaScript nas páginas
1. Você deve criar código JavaScript para calcular as raízes reais de uma
   **equação de segundo grau** na forma `ax² + bx + c = 0`
1. [Baixe os arquivos][matematica-seminal]. Instruções detalhadas estão no
   arquivo README.
1. Será necessário utilizar novos elementos HTML:
   - Campo de entrada de dados numéricos
   - Rótulo (ou _label_)
   - Botão

[matematica-seminal]: https://github.com/fegemo/cefet-front-end-math/archive/master.zip

---
<!-- {"fullPageElement": "#input-video", "playMediaOnActivation": {"selector": "#input-video" }} -->

<video src="//fegemo.github.io/cefet-front-end-large-assets/videos/pastel-parte-1.mp4" controls id="input-video"></video>

---
<!-- {"layout": "regular", "slideHash": "campo-de-entrada-numerica"} -->
## **Campo de entrada** de dados numéricos

- Usuários podem digitar valores em elementos `<input type="...">`: <input>
- Há vários tipos, como `text`, `date`, `number`
  - Hoje vamos usar **o `type="number"`**:
    ```html
    <input type="number" id="qtde-de-pasteis" value="4">
    ```
    ::: result
    <input type="number" value="4">
    :::
  - É possível estilizá-los para, por exemplo, definir a largura:
    ```css
    input[type="number"] {  /* apenas <input>s do tipo "number" */
      width: 40px;
    }
    ```

<!-- {ul^0:.bulleted} -->

---
<!-- {"layout": "regular"} -->
## **Entrada** de dados numéricos - **atributos** <!-- {.underline.upon-activation} -->

- Existem alguns atributos do `<input type="number">`:
  - `value="..."`: **valor inicial**
    ::: result
    <input type="number" value="4" style="width: 4em;"> \<input type="number" **value="4"**\>
    :::
  - `min="..."`, `max="..."`: valor **mínimo/máximo** permitido
    ::: result
    <input type="number" min="3" max="5" style="width: 4em;"> \<input type="number" **min="3" max="5"**\>
    :::
  - `step="..."`: **quanto aumentar/diminuir** ao clicar nas setinhas
    ::: result
    <input type="number" step="0.2" style="width: 4em;"> \<input type="number" **step="0.2"**\>
    :::

<!-- {ul^0:.bulleted} -->

---
<!-- {"layout": "regular"} -->
## **Rótulo** para o campo de entrada

- Além do campo de entrada de dados, é comum colocarmos um texto indicando
  o que deve ser colocado nele, tipo: <label>Pastéis: <input type="number" value="4" style="width: 2em;"></label>
  - Chamamos isso de **rótulo, ou _label_** e usamos `<label>...</label>`
  - Quando clicado, **o rótulo move o foco** para o `<input>`
  - É necessário especificar a que `<input>` ele se refere e isso pode ser feito de duas formas:
    1. ```html
       <label>Pastéis: <input type="number" value="4"></label>
       ```
    1. ```html
       <label for="qtde-de-pasteis">Pastéis:</label>
       <input type="number" value="4" id="qtde-de-pasteis">
       ```

---
<!-- {"layout": "regular", "slideHash": "botoes-de-acao"} -->
## **Botões** de ação

- É possível criar botões com o elemento `<button>texto</button>`, em que:
  - `texto` é o que aparece dentro do botão:
    ```html
    <button id="delicia">Sou um delicioso botão</button>
    ```
    ::: result
    <button>Sou um delicioso botão</button> - mas não acontece nada?!
    :::
  - Para atribuir comportamento ao clique do botão, **é necessário usar
    JavaScript!**
    ```js
    let botaoDeliciaEl = document.querySelector('#delicia');
    botaoDeliciaEl.addEventListener('click', function() {
      window.alert(':3');
    });     // veremos como!!
    ```

---
<!-- {"layout": "section-header", "slideHash": "caracteristicas-da-linguagem"} -->
# Características da linguagem
## O que é JavaScript e como usar

- Características da linguagem
- Incluindo código JavaScript na página

<!-- {ul:.content} -->

---
# O que é JavaScript?

- Uma linguagem **orientada a objetos**
- Uma linguagem fracamente tipada
  - Não é necessário definir tipos das variáveis
- Uma linguagem dinâmica
  - Uma variável pode ter um tipo agora, mas mudar depois
- Usa programação dirigida por **eventos**
- Possui sintaxe parecida com C, C++, C# e Java
  - Javascript **não** é Java
  - Ter "Java" no nome foi apenas uma **jogada de marketing** :scream:

---
<!-- {"slideHash": "incluindo-js"} -->
# Como usar em uma página Web

---
## Três formas de inclusão

- O navegador executa o código assim que vê o elemento `<script></script>` e
  faz _download_ do arquivo apontado
- **Há 3 formas para incluir**:
  1. **Arquivo externo** :thumbsup::thumbsup::thumbsup:
     ```html
       ...  <!-- dentro do HEAD -->
       <script src="executa-no-inicio.js"></script>
     </head>
     <body>
       ...
       <!-- última coisa antes de fechar /BODY -->
       <script src="executa-no-fim-da-pagina.js"></script>
     </body>
     ```

---
## Inclusão em páginas

2. Código embutido :thumbsdown:
   ```html
   <script>
     // código javascript aqui
   </script>
   ```
   - Evitar isto, para não ferir o **princípio da separação
     de responsabilidades** entre as 3 linguagens da Web
3. *Inline* :thumbsdown::thumbsdown::thumbsdown:
   ```html
   <button onclick="javascript: window.alert('papagaio');">Mensagem</button>
   ```
   - Além de ferir o **princípio**, não tem como reaproveitar o mesmo código
     para outros elementos

<!-- {ol:.bulleted} -->

---
<!-- {"fullPageElement": "#inclusion-video", "playMediaOnActivation": {"selector": "#inclusion-video" }} -->

<video src="//fegemo.github.io/cefet-front-end-large-assets/videos/pastel-parte-2.mp4" controls id="inclusion-video"></video>

---
<!-- {"layout": "section-header", "slideHash": "escrevendo-codigo"} -->
# Escrevendo código
## A sintaxe da linguagem

- Criando variáveis com `let`
- Tipos de dados (_Boolean_, _Number_ e _String_)
- Operadores
- `if/else`

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
# Criando **variáveis** com `let`

- Usamos a palavra-chave `let` para criar variáveis:
  ```js
  let alunosMatriculados = 20;
  let qtdeHorasAula = 66.5;
  let nomeAula = 'js1';
  ```
- Não é necessário (nem possível) informar o seu **tipo de dados**
  - Ele é **inferido automaticamente**
- `let` pode ser lido como "seja", tipo
  "<span style="text-decoration: underline">seja uma variável 'nomeAula'
  com o valor 'js1'</span>"

---
<!-- {"layout": "regular"} -->
# Tipos de dados

- JavaScript é **fracamente tipada**:
  - Não é necessário declarar o tipo, ele é inferido:
    ```js
    let nota = 10;            // tipo numérico
    let aluno = 'Adamastor';  // tipo string
    ```
- JavaScript é **dinâmica**:
  - Uma variável pode mudar seu tipo no meio do caminho:
    ```js
    let nota = 10;            // nota é númerico
    nota = 'Dó';              // agora virou string
    ```

---
<!-- {"layout": "regular"} -->
## Tipos de dados (cont.)

- Há seis **tipos primitivos** de dados:
  - `Boolean`
  - `Number`
  - `String`
  - `Null`
  - `Undefined`
  - `Symbol` ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} --> <!-- {ul:.multi-column-list-3} -->
- Um **tipo complexo** de dados:
  - `Object`
  - Há outros derivados de `Object`...
- Hoje vamos conhecer os tipos _Boolean_, _Number_ e _String_
  - O tipo **_Boolean_**
    - Exemplo:
      ```js
      let abelhinhaEstaVoando = true;   // poderia ser false
      ```

---
<!-- {"layout": "regular"} -->
## O tipo **_Number_**

- Em JavaScript **há apenas 01 tipo numérico**: de 64bits
- Não há um tipo para representar inteiros
  - 1 e 1.0 são o mesmo valor
- Um número pode ser expresso das seguintes formas:
  ```js
  let a = 5;
  let b = 5.674;            // 5 vírgula 674
  let c = a + b;            // 10.674
  let d = Math.pow(2, 4);   // 16 (2 elevado a 4)
  let e = Math.sqrt(25);    // 5 (raiz quadrada de 25)
  let f = Math.random();    // [0,1] - algo entre 0 e 1
  ```

---
<!-- {"layout": "regular", "slideHash": "o-tipo-string"} -->
## O tipo **_String_**

- Armazena um texto
- Não existe o tipo `char` como em C/C++, apenas _String_ :wink:
- Usamos áspas **simples** ou duplas
  ```js
  "Abc" === 'Abc'   // simples é mais legal!! mas basta ser consistente
  ```
- Possui uma propriedade chamada `length`:
  ```js
  console.log('Cachorro'.length); // 8
  ```

---
<!-- {"layout": "regular"} -->
## String (cont.)

- É possível concatenar para criar novas strings:
  ```js
  console.log('c' + 'a' + 't');   // imprime 'cat'
  ```
- Strings possuem métodos, [vários deles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - Exemplos:
    ```js
    'barba negra'.toUpperCase() === 'BARBA NEGRA'
    'Mississippi'.indexOf('ss') === 2
    'Orinoco'.replace('noco', '') === 'Ori'
    '$'.repeat(3) === '$$$'
    ```

---
<!-- {"slideHash": "operadores"} -->
# Operadores

- Semelhantes aos de C/C++ e Java:
  - Aritméticos
    - **`+`** soma
    - **`-`** subtração
    - **`*`** multiplicação
    - **`/`** divisão
    - **`%`** resto da divisão
    - **`++`** incremento
    - **`--`** decremento
  - Atribuição
    - **`=`** simples
    - **`+=  /=  %=`** composta
  - Relacionais
    - **`==`** igualdade
    - **`===`** igualdade forte (!!)
    - **`!=`** desigualdade
    - **`!==`** desigualdade forte  (!!)
    - **&lt;  &lt;=** menor/menor igual
    - **&gt;  &gt;=** maior/maior igual
  - Lógicos
    - **`!`** não
    - **&amp;&amp;** e
    - **`||`** ou

<!-- {ul^4:.multi-column-list-2} -->

---
<!-- {"layout": "regular"} -->
## O que significa `===` (igualdade forte)?

- Se compararmos '1' com 1 (uma _String_ com um _Number_) usando `==`:
  ```js
  console.log('1' == 1);    // imprime true
  ```
  - A comparação `==` tenta converter um elemento no tipo do outro e depois
    compara
  - Neste caso, converte `1` em `'1'` e só então compara
- Para que essa conversão não aconteça, usamos `===` :thumbsup::
  ```js
  console.log('1' === 1);   // imprime false
  ```
  - Isto é mais rápido para o computador, porque ele não faz a conversão
  - Prefira esta forma!! :wink:

---
<!-- {"slideHash": "funcoes-matematicas"} -->
## Funções matemáticas

- Além dos operadores matemáticos (_e.g._, `+, -, /, *`), existem
  outras funções matemáticas acessíveis via `Math`:
  ```js
  let pi = Math.PI;       // a constante pi
  let a = Math.sin(1);    // seno de 1 radianos
  let b = Math.cos(pi);   // cosseno de pi radianos
  let c = Math.pow(5, 2); // 5 elevado a 2
  let d = Math.sqrt(100); // raiz quadrada de 100
  let e = Math.random();  // algo entre [0, 1]
  ```

---
# if/else

- Similar a C/C++, Java:
  ```js
  if (hora < 12) {
    manha = true;
  } else {
    manha = false;
  }
  ```
  ```js
  if (nota === 3)      { conceito = 'C'; }
  else if (nota === 4) { conceito = 'B'; }
  else if (nota === 5) { conceito = 'A'; }
  else                 { conceito = 'D'; }
  ```

---
<!-- {"layout": "section-header", "slideHash": "clicando-em-um-botao"} -->
# Clicando em um botão
## Dando comportamento à página

- Funções em JavaScript
- Conhecendo o DOM
- Selecionando um elemento
- Criando um evento de clique

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
# Nosso plano...

- Para fazer algo acontecer quando um botão for pressionado, precisamos,
  em JavaScript:
  1. Criar uma **função com o código que será executado** quando o botão
  for clicado
  1. **Recuperar o elemento HTML** do botão e colocá-lo em uma variável
  1. Atribuir a função ao **evento de clique** do botão
- Sendo assim, vamos aprender cada passo, começando com
  **como criar uma função**

---
<!-- {"layout": "regular"} -->
# Funções

- São declaradas usando a palavra `function`, de duas formas:
  ```js
  function dizOla(nome) {
    console.log('olá ' + nome);
  }
  dizOla('enfermeira');   // imprime 'olá enfermeira'
  ```
  - Não é necessário declarar o tipo do parâmetro - apenas o nome

---
<!-- {"layout": "regular"} -->
# Funções - forma alternativa

- É possível criar uma **função anônima** e **atribuí-la a uma variável**:
  ```js
  let dizOla = function(nome) {   // uma função anônima atribuída
    console.log('olá ' + nome);   // à variável dizOla
  };
  dizOla('submundo');             // imprime 'olá submundo'
  ```
  - Funciona exatamente **da mesma forma**!

---
<!-- {"layout": "regular"} -->
## Funções - **retorno**

- A função pode retornar um valor:
  ```js
  function elevaAoCubo(numero) {            
    return Math.pow(numero, 3);             
  }
  elevaAoCubo(2);     // retorna 8
  elevaAoCubo(3);     // retorna 27
  ```
  ```js
  function hipotenusa(cateto1, cateto2) {
    let somaDosQuadrados = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
    return Math.sqrt(somaDosQuadrados);
  }
  hipotenusa(3, 4);   // retorna 5
  ```

---
<!-- {"layout": "regular", "slideHash": "conhecendo-o-dom"} -->
# Conhecendo o DOM

- O DOM é uma **visão dos elementos** HTML da página **como uma árvore**:
  <img src="../../images/dom-tree.png" style="float:right;width:50%;">
  <pre style="float:right;width:50%;margin:0;"><code class="hljs lang-html">&lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;HTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Add your content here--&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>


*[DOM]: Document Object Model*

---
<!-- {"layout": "regular"} -->
## O objeto **document**

- O objeto `document` dá acesso ao **Document Object Model**, ou DOM
- Por exemplo, para pegar um elemento a partir de seu `id` e colocá-lo em
  uma variável:
  ```js
  let botaoDeliciaEl = document.querySelector('#botao-delicia');
  ```
  - Agora é possível fazer várias coisas com o botão, como:
    1. **Associar um evento de clique**
       - Veja nos próximos slides
    1. Pegar ou alterar seus atributos
    1. Alterar seu texto
    1. Alterar seu estilo

---
<!-- {"layout": "regular", "slideHash": "recuperando-elemento-dom"} -->
# Selecionando um elemento

- A função `document.querySelector(seletor)` permite que, a partir de um código
  JavaScript, recuperemos um elemento do DOM
  - Ela recebe um único **argumento** que é um **seletor CSS**. Exemplo:
    ```js
    let logoEl = document.querySelector('#logomarca');
    let tabelaEl = document.querySelector('#tesouros-pirata');
    let principalEl = document.querySelector('main');
    ```
    - Ela retorna um elemento HTML que pode ser alterado
  - Também existe `document.querySelectorAll(seletor)` (repare o **`all`**),
    que retorna mais de um elemento, mas veremos ele depois

---
<!-- {"layout": "regular", "slideHash": "evento-clique"} -->
<!-- FALAR DE PROG. ORIEN. EVENTOS???? EXPLICAR CALLBACKS -->
# Criando um evento de clique

- Para **executar alguma coisa quando um botão** (ou qualquer elemento, na verdade)
  **é clicado**, precisamos **registrar uma função para ser chamada** quando um
  clique for feito nele:
  ```js
  // recupera o elemento do botão no DOM
  let botaoDeliciaEl = document.querySelector('#botao-delicia');

  // atrela uma função ao evento de 'click' do botão
  botaoDeliciaEl.addEventListener('click', function() { /* ... */ });
  ```
  - Chamamos essa função de **_callback_**

---
<!-- {"layout": "regular"} -->
## Exemplo de _callback_

- Uma _callback_ é só um nome especial para quando uma função passada
  como argumento:
  ```js
  // recupera o elemento do botão no DOM
  let botaoDeliciaEl = document.querySelector('#botao-delicia');

  // atrela uma callback ao evento de 'click' do botão
  botaoDeliciaEl.addEventListener('click', function() {
    alert('O botão delícia foi clicado!!');
    // pode fazer várias coisas aqui
  });
  ```

---
<!-- {"layout": "regular"} -->
## Implementando a função **antes**

- É possível implementar a função **antes da linha onde ela é atribuída ao
  evento** de clique:
  ```js
  // define a função 'mostraMensagem'
  function mostraMensagem() {
    alert('O botão delícia foi clicado!!');
  }

  // atrela uma função ao evento de 'click' do botão
  botaoDeliciaEl.addEventListener('click', mostraMensagem);
  ```
  - Isso costuma deixar o código mais legível e organizado :thumbsup:

---
<!-- {"layout": "regular", "slideHash": "valor-do-input"} -->
# Usando o valor de um `input`

- Para **_pegar_ <!-- {.underline.upon-activation.delay-600} --> o valor**
  digitado em um `<input>`:
  ```js
  let qtdePasteisEl = document.querySelector('#qtde-de-pasteis');
  let quantidade = qtdePasteisEl.value;
  console.log(quantidade);    // imprime valor que estava no input
  ```
- Para **_definir_ <!-- {.underline.upon-activation.delay-1800} --> o valor**
  mostrado no `<input>` usando JavaScript:
  ```js
  let qtdePasteisEl = document.querySelector('#qtde-de-pasteis');
  qtdePasteisEl.value = 25;
  ```

---
<!-- {"fullPageElement": "#writing-video", "playMediaOnActivation": {"selector": "#writing-video" }} -->

<video src="//fegemo.github.io/cefet-front-end-large-assets/videos/pastel-parte-3.mp4" controls id="writing-video"></video>

---
# Referências

1. Capítulo 2 do livro "Javascript: The Good Parts"
1. Mozilla Developer Network (MDN)
