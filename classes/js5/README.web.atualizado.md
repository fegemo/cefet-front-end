<!-- {"layout": "title"} -->
# Javascript (parte 4)
## Web Storage, AJAX, JSON e Star Wars :stars:

---
# Roteiro

1. _Web Storage_
1. AJAX
1. JSON
1. jQuery

<!--
# Exercícios

- Há três exercícios a serem feitos e entregues nesta aula
  1. Dois sobre armazenamento
  1. Um sobre AJAX
- Eles serão descritos ao longo dos slides de conteúdo
- Você deve entregá-los como um código do jsfiddle ou do codepen.io e colocar
  o link no Moodle
 -->
---
<!-- {"slideHash": "web-storage"} -->
# _Web Storage_

---
## _Web Storage_

- A especificação do HTML5 detalha o _Web Storage_, uma forma de
  **armazenamento de dados no navegador** por parte de uma página Web
- Exemplos de **motivação**:
  1. Salvar as preferências do usuário para quando ele voltar à página
  1. Fazer um _cache_ de informações temporário ou permanente
- Existem dois sabores:
  1. `localStorage`
  1. `sessionStorage`

---
## _Web Storage_ (cont.)

- Armazenam apenas _Strings_
- Cada item armazenado é composto por uma chave e um valor (famoso
  _key-value pair_)
  - Exemplo:
    ```js
    window.localStorage.setItem('nome', 'Papa léguas');
    window.sessionStorage.setItem('nome', 'Coiote');
    ```
- O tamanho do espaço para armazenamento varia entre navegadores, mas costuma
  ser algo próximo de 5MB para `localStorage` e 5MB para `sessionStorage`

---
## **localStorage**

- O navegador armazena informações permanentemente para aquela página
  - ![right](../../images/clear-cookies.png)
    Ou até que o usuário remova "Cookies e outros dados de site e plug-in"



---
## Exemplo de uso do **localStorage**

- Um evento de clique em um botão que faz o menu aparecer e desaparecer:
  ```js
  botaoMenu.addEventListener('click', function() {
    var menu = document.getElementById('menu'),
        expandido = menu.classList.toggle('expandido');

    // expandido = true ou false
    window.localStorage.setItem('menu-expandido', expandido);
  });
  ```

---
## Exemplo de uso do **localStorage** (cont.)

- Após a página ter sido carregada (e.g., um _script_ ao final do _body_):
  ```js
  var menuExpandido = localStorage.get('menu-expandido'),
      menu = document.getElementById('menu');
  if (menuExpandido === 'true') {
    menu.classList.add('expandido');
  }
  ```

---
## Interface do **localStorage**

- Salvar um item:
  ```js
  localStorage.setItem('chave', 'valor');
  ```
- Recuperar um item por chave:
  ```js
  localStorage.getItem('chave');
  ```
- Recuperar um item por índice numérico:
  ```js
  localStorage.key(numero);
  ```

---
## Interface do **localStorage** (cont.)

- Excluir uma entrada:
  ```js
  localStorage.removeItem('chave');
  ```
- Limpar todas as entradas:
  ```js
  localStorage.clear();
  ```
- Quantidade de entradas salvas:
  ```js
  localStorage.length;
  ```

---
## **sessionStorage**

- Exata mesma funcionalidade do `localStorage`, porém o navegador armazena
  as informações apenas enquanto o **usuário está "em uma sessão"**
  - Uma sessão é encerrada:
    1. Com o usuário digitando outro endereço na barra
    1. O navegador fechando
    1. O usuário navegando para outro domínio naquela mesma janela/aba
- A interface do `sessionStorage` também é a mesma daquela do `localStorage`

---
## Formato de armazenamento

- Como dito, o _web storage_ armazena apenas _Strings_
  - Mas seria útil armazenar objetos complexos. Por exemplo:
    ```js
    var jogo = { fase: 4, vidas: 5, jogador: 'Ariosvaldo' };
    localStorage.setItem('estado-do-jogo', jogo);

    console.log(localStorage.getItem('estado-do-jogo'));
    // Saída no console: "[object Object]"
    ```

---
## Armazenando objetos serializados

- Na verdade, o Javascript sabe **serializar e desserializar** objetos em
  _Strings_, usando um formato que se chama JSON
    - JSON é Javascript Object Notation
  - Salvando:
    ```js
    localStorage.setItem('estado-do-jogo', JSON.stringify(jogo));
    // Salvou: {"fase":4,"vidas":5,"jogador":"Ariosvaldo"}"
    ```
  - Recuperando:
    ```js
    var jogo = localStorage.getItem('estado-do-jogo');
    jogo = JSON.parse(jogo);
    ```

*[JSON]: JavaScript Object Notation*

---
# JSON

*[JSON]: JavaScript Object Notation*

---
## JSON

*[JSON]: JavaScript Object Notation*

- _Javascript Object Notation_ é um formato leve de troca de dados
- Pode ser usado para troca de informação entre programas escritos em
  diversas linguagens
  - Assim como o XML
- Baseado na notação literal de objetos do Javascript
- Criado pelo autor do nosso livro: [Douglas Crockford](http://tools.ietf.org/html/rfc4627)
- É codificado como texto puro
- Exemplo:
  `produto.json`
  ```json
  {
    "idProduto": 44235,
    "quantidade": 1
  }
  ```

---
## JSON

*[JSON]: JavaScript Object Notation*

- O formato possui seis tipos de valores:
  - Objetos
  - Arrays
  - `String`
  - `Number`
  - `Boolean`
  - `null` <!-- {ul:.multi-column-list-4} -->
- Um objeto JSON é como um objeto Javascript: um container não ordenado de
  propriedades
  - Uma chave é sempre uma string entre aspas duplas
    - Diferente de Javascript, que não precisa de aspas
  - Um valor pode ser qualquer um dos listados acima
- Espaço em branco ou quebras de linha não alteram a semântica

---
## **JSON** vs XML

*[JSON]: JavaScript Object Notation*
*[XML]: eXtensible Markup Language*

```json
[
  {
    "nome": "JavaScript - The Good Parts",
    "autores": ["Douglas Crockford"],
    "ano": 2005
  },
  {
    "nome": "Node.js in Action",
    "autores": ["Mike Cantelon", "Mark Harter"],
    "ano":  2014
  }
]
```
- 216 caracteres

---
<!-- {"state": "show-active-slide-and-previous"} -->
## JSON vs **XML**

*[JSON]: JavaScript Object Notation*
*[XML]: eXtensible Markup Language*

```xml
<livros>
  <livro nome="JavaScript - The Good Parts" ano="2005">
    <autores>
      <autor>Douglas Crockford</autor>
    </autores>
  </livro>
  <livro nome="Node.js in Action" ano="2014">
    <autores>
      <autor>Mike Cantelon</autor>
      <autor>Mark Harter</autor>
    </autores>
  </livro>
</livros>
```
- 319 caracteres (48% maior)

---
## JSON no navegador

- O objeto `window` possui o objeto `JSON` que contém métodos de conversão
  do formato JSON entre _string_ e objetos Javascript
  - De Javascript para _string_ (serialização)
    ```js
    JSON.stringify({ nome: 'Flavio', sobrenome: 'Coutinho' });
    // "{"nome":"Flavio","sobrenome":"Coutinho"}"
    ```
  - De _string_ para Javascript (desserialização)
    ```js
    var banco = JSON.parse('{"nome":"Itaú","codigo":"341"}');
    console.log(banco.nome);    // Itaú
    ```

<!--
# Exercício 1

1. Crie um formulário referente ao cadastro de uma pessoa com os seguintes
   dados: id, nome, telefone. Os dados deverão ser cadastrados utilizando o
   **`localStorage`** para persistir, quando um botão **salvar** for pressionado
   - Os dados deverão ser armazenados em objetos no formato JSON
2. Crie um botão **"carregar"** que possibilite a recuperação dos dados
   cadastrados e os mostre em uma DIV ou nos próprios campos do formulário
   criado
- [Código seminal](https://jsfiddle.net/fegemo/uj42ynbv/1/) no JSFiddle
 -->
---
<!-- {"slideHash": "ajax"} -->
# AJAX

*[AJAX]: Asynchronous JavaScript and XML*
*[XML]: eXtensible Markup Language*

![Foto do personagem Deadpool enfrentando um limpador multiuso AJAX](../../images/ajax-deadpool.jpg)

---
## Problema

- Algumas vezes, queremos alterar **apenas um pedaço** de uma página Web
  - Exemplo no Facebook:
    1. Botão _like_
    1. Enviar comentário
  - Exemplo no Twitter:
    1. Carregar mais _tweets_
  - Exemplo em lojas virtuais:
    1. Adicionar um produto ao carrinho sem sair da página

---
## Problema

- Se fosse possível enviar e receber apenas um pedaço de página **em vez de
  páginas completas**, o tráfego entre navegador e servidor reduziria bastante
- De fato, os navegadores possibilitam a realização de uma requisição/resposta
  assíncrona, sem o carregamento de uma página completa
  - Essa técnica se chama AJAX
  - Surgiu no Internet Explorer, no ano 2000, por [Jesse Gareth](http://www.adaptivepath.com/ideas/ajax-new-approach-web-applications/)

---
## AJAX

*[AJAX]: Asynchronous JavaScript and XML*
*[XML]: eXtensible Markup Language*

- É a sigla para _Asynchronous JavaScript and XML_
- É uma operação realizada via Javascript no navegador
- Originalmente, usava-se Javascript para fazer uma requisição de dados ao
  servidor, que respondia no formato XML
  - Hoje em dia, responde-se com qualquer objeto reconhecido pelo navegador
- Usamos um objeto do tipo `window.XMLHttpRequest` para fazer a requisição e
  receber a resposta

---
## O **XMLHttpRequest**

- Para cada requisição, devemos instanciar um objeto `XMLHttpRequest`,
  configurá-lo e acioná-lo. Supondo um exemplo de botão "curtir":
  ```js
  var curtirRequest = new XMLHttpRequest();
  curtirRequest.onreadystatechange = callbackCurtir;
  curtirRequest.open('GET', '/curtir/3434', true);
  curtirRequest.send(null);
  ```
- Uma função (configurada em `onreadystatechange`) é invocada a cada **mudança
  de estado** do objeto (veja nos próximos 2 slides)
- [Referência](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest) e [Tutorial](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/Usando_XMLHttpRequest) na MDN

---
## Estados de um XMLHttpRequest

- **`0`	UNSENT:** `open()` ainda não foi invocado
- **`1`	OPENED:**	`send()` ainda não foi invocado
- **`2`	HEADERS_RECEIVED:**	`send()` foi invocado e os cabeçalhos da resposta já estão disponíveis
- **`3`	LOADING:** fazendo _download_ da resposta
  - `responseText` tem informação parcial da resposta
- **`4`	DONE:**	Operação finalizada

---
## _Callback_ de mudança de estado

- Invocada a cada alteração de estado do objeto `XMLHttpRequest`
  ```js
  function callbackCurtir() {
    // 4: DONE
    if (this.readyState === 4) {
      if (this.status === 200) {
        alert('Post curtido!');
      } else {
        console.log('Erro ao curtir post. Código ' +
          'da resposta HTTP: ' + this.status);
      }
    }
  }
  ```

---
# jQuery

---
## Jake Weary

![Foto do ator Jake Weary](../../images/jake-weary.jpg) <!-- {.portrait} -->

- Criado em 1990 na cidade de Trenton, New Jersey
- Criado por A.C. Weary, juntamente com Kim Zimmer, ambos atores
- Usado em filmes e seriados
- Não confunda Jake Weary com jQuery!! :D

---
![Logomarca da biblioteca jQuery](../../images/jquery-logo.png)

- Criado em 2006 na cidade de Nova York
- ![Foto do autor da biblioteca jQuery, John Resig](../../images/john-resig.jpg) <!-- {.portrait.push-right} -->
  Criado por John Resig, um engenheiro de software e empreendedor americano
- Usado em páginas Web, originalmente para facilitar a interação com o DOM de
  forma _cross-browser_

---
## jQuery

- A biblioteca expõe apenas dois objetos no _namespace_ global:
  - `window.jQuery`
  - `window.$`, que apontam para o mesmo objeto
- O objeto é uma função de busca de elementos no DOM através de uma `String`
  que contém um seletor `CSS`:
  ```js
  var itens = window.jQuery('nav#main-menu .item');
  var itens = window.$('nav#main-menu .item'); // mesma coisa
  ```

---
## jQuery (cont.)

- A jQuery oferece formas bastante simplificadas para se interagir com o
  navegador em relação
  - Eventos
  - Busca, caminhamento e manipulação no DOM
  - Manipulação de propriedades CSS e atributos HTML
  - Efeitos (animações)
  - AJAX
- Para a aula de hoje, vamos ver **como usar AJAX do jeito jQuery**

---
## AJAX mais facinho com jQuery

- O jQuery possui uma abstração do objeto `XMLHttpRequest` para agilizar a
  realização de requisições AJAX
  - Veja como ficaria o exemplo do botão "curtir" usando jQuery:
    ```js
    $.ajax({
      url: '/curtir/3434',
      method: 'GET',      // opcional: 'GET' é o valor padrão
      success: function(resposta) {
        console.dir(resposta);  // veja a resposta no terminal
        alert('Post curtido!');
    });
    ```    

---
# Intro nas Estrelas

- Vamos criar um letreiro Star Wars em Javascript e CSS \o/
- Faça um _fork_ do repositório: http://github.com/fegemo/cefet-web-starwars
- Você deve escrever código Javascript para fazer chamadas AJAX para
  uma API pública com informações sobre Star Wars
  - Disponível em https://swapi.co/
    <div class="resolution">Resolução: http://codepen.io/fegemo/pen/YXGxzN</div>
- O uso de jQuery está liberado neste exercício \o/

---
# Referências

1. Capítulo 12 do livro "Head First: JavaScript"
1. Apêndice E do livro "JavaScript - The Good Parts"
1. Mozilla Developer Network (MDN)


---
<!-- {"slideHash": "setup-local-server"} -->
## Erro ao fazer o AJAX (slide oculto :P)

- Os navegadores têm uma política de permissões diferente para quando acessamos uma
página via o protocolo file:// que proíbe o uso de requisições AJAX, dentre
outras coisas
- Para contornar a restrição, precisamos hospedar nosso arquivo em um servidor
Web e acessar a página usando o protocolo http
  1. Navegue até seu diretório com o arquivo index.html **pelo terminal**
  1. Use um servidor http simples em python
     ```
     $ python -m SimpleHTTPServer
     ```
  1. Acesse http://localhost:8000 no navegador
