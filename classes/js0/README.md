<!-- {"layout": "title"} -->
# **JavaScript** parte 0
## Tipos de Dados, Variáveis, Funções e Objetos


---
# Atividade de hoje

O objetivo é entender os conceitos básicos de JavaScript

---
<!-- {"layout": "centered"} -->
# Hoje veremos...

1. [Tipos de dados e Variáveis](#tipos-de-dados-variaveis-e-funcoes)
1. [Condicionais e funções](#condicionais-vetores-e-estruturas-de-repeticao)
1. [Objetos](#objetos)

---
<!-- {"layout": "section-header", "hash": "tipos-de-dados-variaveis-e-funcoes"} -->
# Tipos de Dados, Variáveis e Funções
## Elementos da Linguagem JavaScript

- Tipos de dados
- Declarando variáveis
- Criando funções
<!-- {ul:.content} -->

---
# ![Logo da linguagem JavaScript](../../images/logo-javascript.svg) <!-- {.push-right style="max-width: 75px"} --> O que é JavaScript?

- Possui sintaxe parecida com C, C++, Java
  - JavaScript **não é Java**
  - Ter "Java" no nome foi apenas uma **jogada de marketing** na época
- Suporta os estilos de programação **orientada a objetos** e **funcional**
- Existem diferentes tipos de dados (como em C, C++, Java)
  - Mas não é necessário definir os tipos das variáveis
  - Os tipos são automaticamente inferidos
- É uma linguagem dinâmica
  - Uma variável pode ter um tipo agora, mas mudar para outro depois
- Usa programação assíncrona dirigida por **eventos**

---
<!-- {"layout": "2-column-content"} -->
## <span style="font-family: 'Amatica SC',cursive;">hello-world.js</span> e imprimindo no console

- Um arquivo HTML pode incluir um arquivo .js <!-- {ul:.bullet.compact-code-more} -->
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>...</title>
  </head>
  <body>
    <!-- ... -->
    <script src="hello-world.js"></script>
  </body>
  </html>
  ```
  ```js
  // imprime no console do navegador
  console.log('Hello world');

  // abre uma janelinha infernal
  window.alert('Sou das trevas');
  ```

1. Um arquivo JavaScript incluído por um HTML é **baixado e executado linha a linha** <!-- {ol:.bullet.compact-code-more style="margin-left: auto;"} -->
2. Para testar escrevemos no console do navegador com
   ```js
   console.log('.......');
   ```
3. Também pode abrir uma janelinha
   ```js
   window.alert('......');
   ```
   - ...mas não faça isto, jovem, porque essa janelinha é muito chata ;)

---
<!-- {"hash": "criando-variaveis-com-let"} -->
# Declarando **variáveis** (com `let`)

- Usamos a palavra-chave `let` para criar variáveis:
  ```js
  let alunosMatriculados = 20;    // isto aqui é um comentário
  let qtdeHorasAula = 66.5;       /* aqui também (de bloco) */
  let nomeAula = 'js0';
  ```
- Não é necessário (nem possível) informar o seu **tipo de dado**
  - Em JavaScript o tipo é **inferido automaticamente**
- `let` pode ser lido como "seja", tipo assim:
  > seja uma variável '`nomeAula`'
  com o valor '`js0`'

---
<!-- {"layout": "2-column-content", "hash": "const-e-var"} -->
## Outras formas de declarar variáveis `(const/var)`

- Usamos a palavra-chave `const` para criar variáveis que **sempre apontam para o mesmo valor** <!-- {ul:.compact-code-more} -->
  ```js
  const fruta = 'abacate';
  fruta = 'pera';
  // Uncaught TypeError:
  //   Assignment to constant variable.
  ```
  - É uma boa prática usar `const` sempre que se sabe que a variável não receberá um novo valor

1. **Usávamos** (passado, _old_, não use) a palavra-chave `var`:  <!-- {ol:.compact-code-more.no-bullets} -->
   ```js
   var vegetal = 'batata';
   ```
   - Similar ao `let` mas tem alguns problemas:
     - Não possui escopo de bloco, mas de função
     - Pode ser usada até mesmo antes da declaração
   - Era a única forma até ~2012
   - Encontra-se códigos antigos na Web usando `var`

---
# Fracamente tipada e dinâmica

- Em JavaScript, não é necessário declarar o tipo das variáveis:
  ```js
  let nota = 10;            // tipo numérico
  let aluno = 'Adamastor';  // tipo string
  ```
  - Dizemos que JavaScript é **fracamente tipada**
- Em JavaScript podemos mudar o tipo de uma variável no meio do caminho (exceto se usando `const`):
  ```js
  let nota = 10;            // nota é númerico
  nota = 'Dó';              // agora virou string
  ```
  - Dizemos que JavaScript é **dinâmica**

---
<!-- {"layout": "2-column-content", "hash": "tipos-de-dados"} -->
## Tipos de dados

- Há seis **tipos primitivos** de dados:
  - `1. Boolean` <!-- {.tipo-js.tipo-boolean} -->
  - `2. Number` <!-- {.tipo-js.tipo-number} -->
  - `3. String` <!-- {.tipo-js.tipo-string} -->
  - `4. Null` <!-- {.tipo} -->
  - `5. Undefined` <!-- {.tipo} -->
  - `6. Symbol` ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} -->  <!-- {code:.tipo} --> <!-- {ul:.multi-column-list-2} -->
- Um **tipo composto** de dados:
  `7. Object` <!-- {.tipo-js.tipo-object} -->
  - Há outros derivados de `Object`...
  - Veremos `Object` e seus tipos derivados em próximas aulas

1. Para verificar o tipo de uma variável, usamos `typeof` <!-- {.compact-code-more} -->
   ```js
   let vacinou = true;
   console.log(typeof vacinou);
   // imprime "boolean"

   let nota = 10;
   console.log(typeof nota);
   // imprime "number"

   let aluno = 'Adamastor';
   console.log(typeof aluno);
   // imprime "string"

   let inimigo = {
     vida: 100,
     nome: 'Slime'
   };
   console.log(typeof inimigo); // impr. "object"
   ```

---
<!-- {"layout": "2-column-content", "hash": "os-tipos-boolean-e-number"} -->
## <span>O tipo **1. Boolean** <!-- {.tipo-js.tipo-boolean} --></span> <span>O tipo **2. Number** <!-- {.tipo-js.tipo-number} --></span> <!-- {h2:style="display:flex;justify-content:space-between"} -->

1. O tipo **Boolean** <!-- {.tipo-boolean} --> armazena um valor verdadeiro ou falso. Exemplo: <!-- {ol:.bullet.compact-code-more.no-bullets} -->
   ```js
   let abelhinhaEstaVoando = true;
   let modoEscuro = false;
   let maioridade = idade >= 18;
   ```


- **Apenas 1 tipo numérico** 64bits <!-- {ul:.bullet.compact-code-more.no-bullets} --> <!-- {.tipo-number} -->
  - <small>(equivalente ao `double` de C/Java)</small>
  - Não há um tipo específico para números inteiros
- Exemplos de variáveis com números:
  ```js
  let a = 5;
  let b = 5.674;            // 5 vírgula 674
  let c = a + b;            // 10.674
  let d = 2 ** 4;           // 16 (2 elevado a 4)
  let e = Math.sqrt(25);    // 5 (raiz quadrada de 25)
  let f = Math.random();    // [0,1] - algo entre 0 e 1
  ```

---
<!-- {"hash": "o-tipo-string"} -->
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
  const nomeCompleto = primeiro + ' ' + ultimo;
  ```

---
## Manipulando Strings

- É possível **concatenar** (juntar, colar) para criar novas strings: <!-- {ul:.bulleted} -->
  ```js
  console.log('c' + 'a' + 't');   // imprime 'cat'
  ```
- Podemos acessar cada caractere usando colchetes:
  ```js
  const capitalDeMG = 'Betim';
  console.log(capitalDeMG[0]);    // imprime 'B'
  ```
- Strings possuem métodos, [vários deles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (veremos mais). Exemplos:
  ```js
  'barba negra'.toUpperCase() === 'BARBA NEGRA'
  'Mississippi'.indexOf('ss') === 2
  'Orinoco'.replace('noco', '') === 'Ori'
  '$'.repeat(3) === '$$$'
  ```

---
<!-- {"hash": "operadores", "embeddedStyles": ".less-padding ul li{padding-left:0em;list-style-type:none}"} -->
# Operadores

- Aritméticos <!-- {ul^0:.less-padding} --> <!-- {li^0:.bullet} -->
  - **`+`** soma&nbsp;&nbsp;&nbsp;**`-`** subtração
  - **`*`** multiplicação
  - **`**`** exponenciação
  - **`/`** divisão
  - **`%`** resto da divisão
  - **`++`** incremento&nbsp;&nbsp;&nbsp;**`--`** decremento
- Atribuição <!-- {li^0:.bullet} -->
  - **`=`** simples&nbsp;&nbsp;&nbsp;**`+=  /=  %=`** composta
- Relacionais (comparação) <!-- {li^0:.bullet} -->
  - **`==`** igualdade
  - **`===`** igualdade forte (!!)
  - **`!=`** desigualdade
  - **`!==`** desigualdade forte  (!!)
  - **&lt;  &lt;=** menor/menor igual
  - **&gt;  &gt;=** maior/maior igual
- Lógicos <!-- {li^0:.bullet} -->
  - **`!`** não&nbsp;&nbsp;&nbsp;**`&&`** e&nbsp;&nbsp;&nbsp;**`||`** ou <!-- {ul^4:.multi-column-list-2} -->

---
## O que significa `===` (igualdade forte)?

- Se compararmos '1' com 1 (uma **string** <!-- {.tipo-string} --> com um **number** <!-- {.tipo-number} -->) usando `==`: <!-- {ul:.bulleted-0} -->
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
  - Mais rápido para o computador, porque ele não faz a conversão
  - Prefira esta forma!! :wink:




---
<!-- {"layout": "section-header", "hash": "condicionais-vetores-e-estruturas-de-repeticao"} -->
# Condicionais e Funções
## Condicionais e uso de funções para modularizar seu código 

- Condicionais
- Funções

<!-- {ul^1:.content} -->
---
<!-- {"layout": "2-column-content", "hash": "if-else", "classes": "compact-code"} -->
## **if/else** (condicionais)

```js
if (hora < 12) {
  manha = true;
} else {
  manha = false;
}

if (nome === 'Robervaldo') { 
  conceito = 'A';
} else if (nome === 'Ana') {
  conceito = 'B';
} else {
  conceito = 'C';
}

if (estouComSono)
  dormir(); // mas evite omitir { }
```

- Dentro dos parênteses colocamos uma expressão que avalia para `true` ou `false`. Ex:
  - `nome === 'Ana'`
  - `ano < 2000`&nbsp;&nbsp;`ano % 4 === 0`
  - `!jaEstudei`
  - `hp > 0 && (balas || granada)`
- Com apenas 1 comando no `if`/`else`, é possível omitir as chaves (como em C/C++, Java)
  - Contudo, é uma má ideia

---
## **Operador ternário** (condicionais)

- Quando temos um `if/else` "simples", pode ser mais legível fazer a verificação em 1 linha com **o operador ternário ?:**
- <!-- {.code-split-2} -->
  ```js
  if (armaduraForte) {
    hp -= 10;
  } else {
    hp -= 50;
  }
  ```
  ```js
  // mesmo código, em 1 linha
  hp -= armaduraForte ? 10 : 50;
  ```
- Formato:
  ```js
  CONDICAO_TESTE ? VALOR_SE_TRUE : VALOR_SE_FALSE;
  ```

---
<!-- {"layout": "2-column-content", "hash": "switch"} -->
## **switch** (condicionais)

```js
let corDoSite = 'black';
switch (climaAgora) {
    case 'ensolarado':
      corDoSite = 'yellow';
      break;
    
    case 'nublado':
    case 'chuvoso':
      corDoSite = 'gray';
      break;

    default:
      corDoSite = 'white';
      break;
}
```

- Palavra-chave `switch` +  ( + expressão + )
- Um ou mais `case` + valor para a expressão
- Sequência de comandos
- Palavra-chave `break` para sair
  - (pode ser omitida para continuar)
- Caso `default` para pegar outros valores (equivalente ao `else`)
---
<!-- {"layout": "2-column-content-zigzag", "embeddedStyles": ".push-code-right pre{float:right;}", "hash": "declarando-e-invocando-funcoes"} -->
# Declarando e invocando **funções**


- Funções são **declaradas** usando a palavra-chave `function` <!-- {style="float:initial"} --> + nome + parâmetros + corpo ➜
  - Há outras formas, como funções anônimas (veremos depois) e funções seta

```js
// DECLARA a função dizOla()
function dizOla() {
  console.log('olá queridão');
}
```

```js
// INVOCA a função dizOla()
dizOla();  
```
- Funções são **invocadas** (chamadas) por seu nome, seguido de parênteses

---
<!-- {"layout": "2-column-content-zigzag", "classes": "compact-code", "embeddedStyles": "#parametros{width:40%;}#parametros+pre{width:56%;}"} -->
## Declarando **parâmetros para funções**

- Os parâmetros ficam entre os parênteses e separados por vírgula: <!-- {li:.push-code-right} --> <!-- {ul:#parametros.bulleted.no-margin} -->
  - Não é necessário declarar o tipo do parâmetro - apenas o nome

```js
function dizOla(nome, pronome) {
  console.log('olá ' + pronome + ' ' + nome);
}
```

```js
dizOla('enfermeira', 'srta.');
// imprime 'olá srta. enfermeira'
dizOla('jujuba', '');
// imprime 'olá  jujuba'
dizOla();
// imprime 'olá undefined undefined'
```  

- Para invocar a função ← <!-- {li:.bulleted} -->
  - Dá pra chamar uma função sem passar valores para os argumentos.
    Nesse caso, o parâmetro tem valor `undefined`

---
# Valor de **retorno** de funções

- A função pode retornar um valor explicitamente: <!-- {ul:.bulleted-0} -->
- <!-- {li:.code-split-2.compact-code-more} -->
  ```js
  function elevaAoCubo(numero) {            
    return numero ** 3;             
  }
  elevaAoCubo(2);     // retorna 8
  elevaAoCubo(3);     // retorna 27
  ```
  ```js
  function hipotenusa(cateto1, cateto2) {
    let somaQuadrados = cateto1 ** 2 + cateto2 ** 2;
    return Math.sqrt(somaQuadrados);
  }
  hipotenusa(3, 4);   // retorna 5
  ```
- Toda função sempre retorna um valor, mesmo sem `return`.
  Se não houver a palavra-chave, a função tem um `return undefined` implícito
- <!-- {li:.code-split-2.compact-code-more} -->
  ```js
  function imprimeNome(primeiro, ultimo) {
    console.log(primeiro + ' ' + ultimo);
  }
  // retorna undefined
  ```
  ```js
  function imprimeNome(primeiro, ultimo) {
    console.log(primeiro + ' ' + ultimo);
    return undefined;
  }
  ```
- São idênticas ↑ ⬈

---
<!-- {"hash": "regras-de-legibilidade-e-nomenclatura-1"} -->
## Regras de legibilidade e nomenclatura (1/2)

1. Nomes de funções e variáveis com **notação camelo** 🐪 sem acentuação: <!-- {ol:.full-width.bulleted} -->
2. <!-- {.code-split-2.compact-code} -->
   ```js
   let ultimoNome = '';    🐪 ✅✅✅
   ```
   ```js
   function removeVideo() {}   🐪 ✅✅✅
   ```
2. <!-- {.code-split-2.compact-code} -->
   ```js
   let ultimo_nome = '';   👎
   let UltimoNome = '';    👎
   let últimonome = '';    ❌
   let último nome = '';   ❌❌❌
   ```
   ```js
   function remove_video() {}  👎
   function RemoveVideo() {}   👎
   function removevídeo() {}   ❌
   function remove vídeo() {}  ❌❌❌
   ```
1. Sempre **indente o código**:
2. <!-- {.code-split-2.compact-code} -->
   ```js
   function total(preco, qtde) {   ✅✅✅
     if (confirmado) {
       return preco * qtde;
     }
     return 0;
   }
   ```
   ```js
   function total(preco, qtde) {   👎👎👎
   if (confirmado) {
   return preco*qtde;
   }
   return 0;
   }
   ```

---
<!-- {"hash": "regras-de-legibilidade-e-nomenclatura-2"} -->
## Regras de legibilidade e nomenclatura (2/2)

- **Nomes de variáveis e funções** devem ser bem **descritivos**: <!-- {ul:.push-code-left.compact-code-more.full-width.bulleted} -->
  1. ```js
     let numeroAlunos;  ✅
     let nAlunos;       👎
     ```
     Evite abreviações desnecessárias <!-- {li:style="clear:both;"} --> <!-- {ol:.no-bullets} -->
  2. ```js
     let aluno = 'Bob';  ✅
     let a = 'Amarílio'; 👎
     ```
     Evite nomes com apenas 1 letra <!-- {li:style="clear:both;margin-top: 1.25em;"} -->
  3. ```js
     let notaAluno = 10; ✅
     let numero = 10;    👎
     let temp = '...';   👎
     ```
     Evite nomes genéricos <!-- {li:style="clear:both;margin-top: 1.25em;"} -->
- Respeite **espaçamentos para dar arejamento** ao código: <!-- {li:style="clear:both"} -->
- <!-- {.code-split-2} -->
  ```js
  const dano = 5;                                   ✅
  let hp -= dano * 0.6;
  ```
  ```js
  const dano=5;                                     👎
  let hp-=dano*0.6;
  ```
- <!-- {.code-split-2} -->
  ```js
  let beleza = 10;                                  ✅
  function vestir(acessorio) {
    if (acessorio === 'laço') {
      beleza += 10;
    }
  }
  ```
  ```js
  let beleza=10;                                    👎
  function vestir  (acessorio){
    if(acessorio==='laço'){
      beleza+=10;
    }
  }
  ```





---
<!-- {"layout": "section-header", "hash": "objetos"} -->
# Objetos
## Nosso "saquinho" de propriedades e comportamento 

- Definição
- Como declarar
- Objetos dentro de objetos
- Métodos

---
<!-- {"classes": "compact-code"} -->
## O tipo `Object` <!-- {.tipo-js.tipo-object} -->

- É um **"saquinho" de propriedades**: <!-- {ul:.push-code-right.full-width} -->
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
- No exemplo, o objeto tem 2 propriedades: <!-- {li^0:.bullet} -->
  1. Nome: `pontos`, valor: `1420`
  1. Nome: `vidas`, valor: `2`
- Para acessar as propriedades, há 2 formas: <!-- {li:.bullet} -->
  - <!-- {.code-split-2} -->
    ```js
    // notação ponto
    console.log(jogador.vidas);
    ```
    ```js
    // notação colchete
    console.log(jogador['vidas']);
    ```

---
## Objetos conhecidos

- ::: did-you-know .push-right width: 250px;
  Quando um objeto tem uma **propriedade que é uma função**, chamamos ela de **método**.
  :::
  Há vários objetos comuns que usamos no dia a dia: `Math`, `console`, `window`. Exemplos:
  - O objeto `Math` possui uma propriedade:
    - ```js
      Math.PI
      ```
      (PI → 3.14159) (cujo valor é `Number`) <!-- {.tipo-js.tipo-number} -->      
  - O objeto `console` possui uma propriedade
    - ```js
      console.log
      ```
      (log → function() {...})
  - O objeto `window` possui uma propriedade
    - ```js
      window.alert
      ```
      (alert → function() {...})
- E se quisermos criar nossos próprios objetos? #mcfaz? <!-- {li:.bullet} -->

<!-- {ul^3:.bulleted-0.push-code-right-without-clearing.compact-code-more} -->


---
<!-- {"classes": "compact-code"} -->
## Criando um objeto <small>(2 formas)</small>

1. Na **forma literal**: <!-- {ol:.bulleted-0} --> 
   ```js
   let jogador = {             // forma mais expressiva, curta e sexy 😎
     pontos: 1420,             // propriedades separadas por vírgula
     vidas: 2
   };
   ```
   ```js
   let jogador = {};           // um objeto vazio: { }
   jogador.pontos = 1420;      // criou jogador.pontos com valor 1420
   jogador.vidas = 2;          // criou jogador.vidas
   ```
   - Novas propriedades podem ser atribuídas mesmo após sua criação! <!-- {li:.bullet} -->
2. Na **forma do operador `new`**: <!-- {strong:.alternate-color} -->
   - <!-- {li:.code-split-2} -->
     ```js
     let jogador = new Object();
     jogador.pontos = 1420;
     jogador.vidas = 2;
     ```
     - Contudo, desta forma sempre cria-se um objeto vazio e deve-se preenchê-lo

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
<!-- {"layout": "2-column-content"} -->
## **Métodos** de objetos <!-- {.alternate-color} -->

```js
const loja = {
  livros: [       // prop. é um vetor
    'macunaíma',
    'torre negra'
  ],
  dinheiro: 500,  // propri. é number
  
  // método vender
  vender: function() { // p. é função
    this.dinheiro += 15;
  } 
};

loja.vender(); // loja.dinheiro = 515
loja.vender(); // loja.dinheiro = 530
```

- O **<u>valor</u> de uma propriedade** pode ser uma **função**
  - Nesse caso, chamamos ela de **método** <!-- {.alternate-color} -->
  - Todo método tem acesso ao próprio objeto com o ponteiro `this`
  - Objetos com métodos formam o princípio do conceito de **Orientação a Objetos**


---
## Outros tipos, baseados em `Object` <!-- {.tipo-js.tipo-object} -->

- Existem **outros tipos complexos**, que são **baseados em `Object`**: <!-- {.tipo-js.tipo-object} -->
  
  `Date`
    ~ Por exemplo, para imprimir o horário atual no console:
      ```js
      let agora = new Date();
      console.log(agora);     //Sun Jan 17 2021 18:11:46...
      ```
  
  `Function`
    ~ (sim! funções são objetos em JavaScript)
  
  `Array`
    ~ (vetores também são objetos)

  `SeuProprioTipo`™
    ~ (é possível criar novos tipos também)

---
<!-- {"hash": "o-objeto-math"} -->
## O objeto `Math`

- Além dos operadores matemáticos (_e.g._, `+, -, /, *`), existem
  outras funções matemáticas acessíveis via o objeto `Math`:
  ```js
  const pi = Math.PI;           // a constante pi
  let a = Math.sin(1);          // seno de 1 radiano
  let b = Math.cos(pi);         // cosseno de pi radianos
  let c = Math.pow(5, 2);       // 5 elevado a 2
  let d = Math.sqrt(100);       // raiz quadrada de 100
  let e = Math.random();        // nº aleatório entre [0, 1]
  let f = Math.round(0.5);      // arredonda p/ inteiro mais próximo (1)
  let g = Math.floor(0.5);      // arredonda p/ baixo ("chão": 0)
  let h = Math.ceil(0.5);       // arredonda p/ cima ("teto": 1)
  ```
  - Todos os métodos do [objeto Math na MDN][math-mdn]

[math-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math


