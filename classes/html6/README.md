<!-- {"layout": "title"} -->
# HTML (parte 6)

## Elementos de dados e ação, eventos de formulários
---
<!-- {"layout": "regular"} -->
# Na última aula... (1/4)

- Objeto Global Window
  ```js
  window.alert('mensagenzinha feia');                     // retorna undefined
  ```
- Objetos dentro do **window**
  - **`window.document`**: Acesso ao DOM (estrutura HTML da página)
  - `window.navigator`: Acesso a características do navegador como geolocalização,
      reconhecimento de fala etc.
  - `window.Math`: **Funções matemáticas**, como `Math.sin`, `Math.floor`, `Math.round`
  - `window.location`: Informações sobre o endereço (a URL) da página
- Convenção: omitir o window
---
# Na última aula... (2/4)

- Alterando a propriedade `style`:
   ```js
   botaoEl.style.width = '80%';           // define largura como 80%
   botaoEl.style.paddingTop = '2px';      // padding-top vira paddingTop
   ```
- CSS ➡️ JavaScript
   - `background-color` ➡️ `backgroundColor` <!-- {ul^0:.multi-column-list-2} -->
   - `border-radius` ➡️ `borderRadius`
   - `margin` ➡️ `margin`
---
# Na última aula... (3/4)

- **click** vs **mousedown** vs **mouseup**
    <iframe width="100%" height="100" src="https://jsfiddle.net/fegemo/xxemf1eq/3/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
- **mouseover** vs **mousemove** vs **mouseout**
  <iframe width="100%" height="200" src="https://jsfiddle.net/fegemo/1eoacrkm/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
# Na última aula... (4/4)

- Obtendo as posições do mouse por meio das propriedades `e.pageX` e `e.pageY`
<iframe width="100%" height="300" src="//jsfiddle.net/fegemo/79bnmhp7/embedded/result,js,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
---
# Roteiro

1. [Elementos de **dados**](#elementos-de-dados)
1. [Eventos em campos de formulários](#eventos-formularios)


---
<!-- {"layout": "section-header", "slideHash": "elementos-de-dados"} -->
# Elementos de **dados**
##

  - e-mail, telefone, inputs de número e cor
  - outros tipos de campos de entrada:
    - radio, select e checkbox<!-- {ul:.content} -->



---
## Caixa de texto

- _Markup_:
  ```html
  <input id="palavra" type="text" placeholder="Digite...">
  <input id="palavra">
  <input>
  ```
  - `type="text"` é o valor padrão para o `input`
  - `placeholder="um texto..."` define um texto de ajuda

::: result
  <input type="text" placeholder="Digite...">
:::
---
## Rótulos

- Tipicamente atribuímos rótulos (`<label></label>`) aos campos (`input`)
  - Podemos clicar nos rótulos e o foco será movido para dentro do `input`
    a ele associado
  - Há duas formas de associação
    ```html
    <label for="cidade">Cidade: </label><input id="cidade">
    <!-- ...ou... -->
    <label>Cidade: <input id="cidade"></label>
    ```
    ::: result
      <div><label>Cidade: <input id="cidade"></label></div>
    :::
---
## Caixa de texto para **e-mail** ![À partir do html5](../../images/html5-logo-32.png)

- <img src="../../images/form-email-sample.png" style="float: right; margin-left: 20px">
  Idêntico à caixa de texto, porém o navegador espera um e-mail válido
- _Markup_:
  ```html
  <label>Remetente:
    <input id="remetente" type="email">
  </label>
  ```
  - Em _smartphones_, os navegadores mudam o _layout_ do teclado colocando
    "@" em posições mais fáceis, por exemplo
::: result
  <div><label>Remetente:
    <input id="remetente" type="email">
  </label></div>
:::
---
## Outros semelhantes à caixa de texto ![À partir do html5](../../images/html5-logo-32.png)

- Pesquisa
  `<input type="search">`: <input type="search">
- URL
  `<input type="url">`: <input type="url">
- Telefone
  `<input type="tel">`: <input type="tel">

---
## Checkbox

- _Markup_:
  ```html
  <label>
    <input id="emails" type="checkbox" value="sim"> Inscrever?
  </label>
  ```
  - **!!** Se não colocarmos um `<label></label>`, o usuário precisará
    clicar exatamente na caixinha
::: result
  <div><label>
    <input type="checkbox"> Inscrever?
  </label></div>
:::
- Atributos:
  - `checked`, para deixar marcado
    ```html
    <input id="..." type="checkbox" checked>
    ```

---
## Radio (escolha dentro de um grupo)

- _Markup_:
  ```html
  <label>
    <input name="cor" type="radio" value="azul">Azul
  </label>
  <label>
    <input name="cor" type="radio" value="verde">Verde
  </label>
  ```
::: result
  <div><label>
    <input name="cor" id="azul" type="radio" value="azul"> Azul
  </label>
  <label>
    <input name="cor" id="azul" type="radio" value="verde"> Verde
  </label></div>
:::
- **Atributo name**: define qual é o nome do input ao enviar o fomulário
para o servidor

- Repare que apenas uma cor pode ser escolhida - porque os dois `input` têm o
  mesmo `name`

---
## Select (lista de opções)

- _Markup_:
  ```html
  <label for="sabor">Sabor da pizza:</label>
  <select id="sabor">
    <option value="marg">Marguerita</option>
    <option value="muzza" selected>Muzzarela</option>
  </select>
  ```
::: result
  <label for="sabor">Sabor da pizza:</label> <select name="sabor" id="sabor">
    <option value="marg">Marguerita</option>
    <option value="muzza" selected>Muzzarela</option>
  </select>
:::
- Atributos
  - `selected`, para o `option`, para deixar selecionado
  - `multiple`, para o `select`, para permitir mais de um `option`
---
## Data e Hora ![À partir do html5](../../images/html5-logo-32.png)

- _Markup_
  ```html
  <input type="date"> <!-- exemplo -->
  <input type="datetime">
  <input type="datetime-local">
  <input type="month">
  <input type="week">
  <input type="time">
  ```

::: result
  <input type="date">
:::
---
## Números ![À partir do html5](../../images/html5-logo-32.png)

- _Markup_:
  ```html
  <input type="number" step="0.5">
  <input type="range" min="0" max="100" step="1">
  ```
::: result
  <input type="number" step="0.5" size="4"><br>
  <input type="range" min="0" max="100" step="1">
:::
---
## Cores ![À partir do html5](../../images/html5-logo-32.png)

- _Markup_:
  ```html
  Cor: <input type="color">
  ```
::: result
  <input type="color">
:::

---
## Outros elementos de dados

| Tipo               	| Markup                  	| Exemplo                 	|
|--------------------	|-------------------------	|-------------------------	|
| Seleção de arquivo 	| `<input type="file">`     | <input type="file">     	|
| Campo de senha     	| `<input type="password">`	| <input type="password"> 	|
| Texto oculto       	| `<input type="hidden">`	  |                          	|
| Texto multi-linha   | `<textarea></textarea>`   | <textarea></textarea>     |

---
<!-- {"layout": "section-header", "slideHash": "historia-do-javascript"} -->
# Elementos de **ação**
## <img src="../../images/rambo.png" alt="Foto do Rambo" class="portrait">


- submit
- reset
- tag **form**
---
## Tag form e Botões

- A tag _form_ agrupa _inputs_ para, posteriormente, serem enviados:
```html
  <form action="salva_dados.php">
    <label for="nome">Nome</label>
    <input id="nome" type="">
    <label for="nome">E-mail:</label>
    <input id="email" type="email">
    <button type="submit">Enviar</button>
    <button type="reset">Limpar</button>
  </form>
```
- **Botão submit**: envia os dados para o endereço
  especificado pelo atributo `action` do formulário
- **Botão reset**: volta os dados do formulario aos seus valores iniciais
---
## Botões de submissão

- Existem duas formas para criar o botão de envio
  - `input`
    ```html
    <input type="submit" value="Enviar">
    ```
  - `button`
    ```html
    <button type="submit">Enviar</button><!-- HTML5 -->
    <button>Enviar</button><!-- HTML5 -->
    ```

---
## Reset e outros botões

- Botão reset
  ```html
  <input type="reset" value="Limpar">
  <button type="reset">Limpar</button><!-- HTML5 -->
  ```
- Botões que não fazem nada, mas podem ter algum comportamento associado
  (via javascript)

  ```html
  <input type="button" value="Ver detalhes">
  <button type="button">Ver detalhes</button><!-- HTML5 -->
  ```


---
<!-- {"layout": "section-header", "slideHash": "eventos-formularios"} -->
# Eventos relacionados aos formulários
##

  - Foco: `blur` e `focus`
  - Teclado: `keydown` e `keyup`
  - Modificação: `change`, `input`<!-- {ul:.content} -->


---
- Lembrando que: eventos são **atrelados a nós específicos** e causam a invocação de uma função
  "manipuladora" (_event handler_ ou apenas _handler_)
- Eventos de entrada de dados:
  - `change` ou `input` (Modificou)
  - `blur` (Perdeu foco)
  - `focus` (ganhou foco)
  - `keydown` (pressionou uma tecla)
  - `keyup` (liberou uma tecla)<!-- {ul:.multi-column-list-2}-->
<!--  - `reset`(limpou o formulário)
  - `submit` (enviou o formulário)-->
- (Muitos) outros tipos: [Eventos na MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
---
<!-- {"layout": "regular"} -->
## Exemplo

<iframe width="100%" height="300" src="https://jsfiddle.net/fegemo/gprgLz88/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


---
# Referências

1. Capítulo _"A Form of Madness"_ do livro online diveintohtml5.info
1. Capítulo 14 do livro
1. Mozilla Developer Network (MDN)
