
---
# Na última aula... (1/3)

- Elementos de entrada: <!-- {.multi-column-list-2} -->
  ```html
  <input type="text">
  <input type="email">
  <input type="number">
  <input type="range">
  <input type="color">
  <input type="date">
  <!-- e outros... -->
  ```
- Interagindo via JavaScript:
  ```javascript
  // pegando um valor
  const precoEl = document.querySelector('#preco')
  const preco = precoEl.value;

  // definindo um valor
  const totalEl = document.querySelector('#final');
  totalEl.value = preco * quantidade;
  ```

---
# Na última aula... (2/3)

- Elementos de escolha:
  - Checkbox
    ```html
    <label>
        <input id="emails" type="checkbox" value="sim"> Inscrever?
    </label>
      ```
  - Radio
    ```html
    <label>
        <input type="radio" name="cor" value="azul">Azul
    </label>
    <label>
        <input type="radio" name="cor" value="verde">Verde
    </label>
    ```  
  - Select

---
# Na última aula... (3/3)

- Formulário: `<form>...</form>`
- Validações:
    | Tipo      	            | Código HTML                  	        | Exemplo                 	                   |
    |-------------------------|---------------------------------------|--------------------------------------------- |
    | Campo obrigatório 	    | `<input required>`                    | <form><input required size="5"><button>Enviar</button></form>     	|
    | Quantidade de caracteres| `<input maxlength="2">`	              | <input maxlength="2" size="5"> 	|
    | Número mínimo       	  | `<input type="number" min="5">`	      | <form><input type="number" min="5" style="width: 5em"><button>Enviar</button></form>	|
    | Número máximo       	  | `<input type="number" max="10">`	    | <form><input type="number" max="10" style="width: 5em"><button>Enviar</button></form>	|
    | Padrão                  | `<input pattern="[0-9]{4}">` | <form><input pattern="[0-9]{4}" size="5"><button>Enviar</button></form>     |
    | Desabilitar             | `<input disabled>` | <input disabled size="5">     |

