# HTML (parte 6)

---
# Roteiro

1. Elementos de **dados**
1. Elementos de **ação**
1. Eventos em campos de formulários


---
# Elementos de **dados**

---
## Caixa de texto

- _Markup_:
  ```html
  <input name="palavra" type="text" placeholder="Digite...">
  <input name="palavra">
  <input>
  ```
  - `type="text"` é o valor padrão para o `input`
  - `placeholder="um texto..."` define um texto de ajuda
- Resultado:

  <input type="text" placeholder="Digite...">

---
## Rótulos

- Tipicamente atribuímos rótulos (`<label></label>`) aos campos (`input`)
  - Podemos clicar nos rótulos e o foco será movido para dentro do `input`
    a ele associado
  - Há duas formas de associação
    ```html
    <label for="cidade">Cidade: </label><input name="cidade">
    <!-- ...ou... -->
    <label>Cidade: <input name="cidade"></label>
    ```
    - Resultado:
      <div><label>Cidade: <input name="cidade"></label></div>

---
## Caixa de texto para **e-mail** ![À partir do html5](../../images/html5-logo-32.png)

- <img src="../../images/form-email-sample.png" style="float: right; margin-left: 20px">
  Idêntico à caixa de texto, porém o navegador espera um e-mail válido
- _Markup_:
  ```html
  <label>Remetente:
    <input name="remetente" type="email">
  </label>
  ```
  - Em _smartphones_, os navegadores mudam o _layout_ do teclado colocando
    "@" em posições mais fáceis, por exemplo
- Resultado:
  <div><label>Remetente:
    <input name="remetente" type="email">
  </label></div>

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
    <input name="emails" type="checkbox" value="sim">Inscrever?
  </label>
  ```
  - **!!** Se não colocarmos um `<label></label>`, o usuário precisará
    clicar exatamente na caixinha
- Resultado:
  <div><label>
    <input type="checkbox">Inscrever?
  </label></div>
- Atributos:
  - `checked`, para deixar marcado
    ```html
    <input name="..." type="checkbox" checked>
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
- Resultado:
  <div><label>
    <input name="cor" type="radio" value="azul">Azul
  </label>
  <label>
    <input name="cor" type="radio" value="verde">Verde
  </label></div>
- Repare que apenas uma cor pode ser escolhida - porque os dois `input` têm o
  mesmo `name`

---
## Select (lista de opções)

- _Markup_:
  ```html
  <label for="sabor">Sabor da pizza:</label>
  <select name="sabor" id="sabor">
    <option value="marg">Marguerita</option>
    <option value="muzza" selected>Muzzarela</option>
  </select>
  ```
- Resultado:
  <label for="sabor">Sabor da pizza:</label> <select name="sabor" id="sabor">
    <option value="marg">Marguerita</option>
    <option value="muzza" selected>Muzzarela</option>
  </select>
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
- Resultado:

  <input type="date">

---
## Números ![À partir do html5](../../images/html5-logo-32.png)

- _Markup_:
  ```html
  <input type="number" step="0.5"><br>
  <input type="range" min="0" max="100" step="1">
  ```
- Resultado:

  <input type="number" step="0.5" size="4"><br>
  <input type="range" min="0" max="100" step="1">

---
## Cores ![À partir do html5](../../images/html5-logo-32.png)

- _Markup_:
  ```html
  Cor: <input type="color">
  ```
- Resultado:

  Cor: <input type="color">

---
## Outros elementos de dados

| Tipo               	| Markup                  	| Exemplo                 	|
|--------------------	|-------------------------	|-------------------------	|
| Seleção de arquivo 	| `<input type="file">`     | <input type="file">     	|
| Campo de senha     	| `<input type="password">`	| <input type="password"> 	|
| Texto oculto       	| `<input type="hidden">`	  |                          	|
| Texto multi-linha   | `<textarea></textarea>`   | <textarea></textarea>     |

---
# Elementos de **ação**

<img src="../../images/rambo.png" alt="Foto do Rambo" class="portrait">

---
## Botões de submissão

- Quando acionados, enviam (`submit`) os dados para o endereço
  especificado pelo atributo `action` do formulário
- Existem duas formas para criar a marcação
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
## Outros botões

- Botões para voltar os campos do formulário a seus valores iniciais
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
## Outros botões (cont.)

- Botão de imagem
  - Serve para submeter e para enviar as coordenadas da imagem onde o usuário
    clicou
    ```html
    <input type="image" src="images/cafe.png">
    ```
  - Resultado:
    <div><input type="image" src="../../images/cafe.png"></div>
- **!!** Este é um elemento HTML muito antigo e estranho - quase não vemos
  isto atualmente


---
# Eventos relacionados aos formulários
---
- Lembrando que: eventos são **atrelados a nós específicos** e causam a invocação de uma função
  "manipuladora" (_event handler_ ou apenas _handler_)
  - Eventos de entrada de dados:
  - `change`
  - `blur`
  - `focus`
  - `keydown`
  - `keyup`
  - `reset`
  - `submit` <!-- {ul:.multi-column-list-4}-->
- (Muitos) outros tipos: [Eventos na MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

---
# Referências

1. Capítulo _"A Form of Madness"_ do livro online diveintohtml5.info
1. Capítulo 14 do livro
1. Mozilla Developer Network (MDN)
