
---
<!-- {"classes": "compact-code"} -->
# Na última aula... (1/2) <!-- {h1:style="padding: 0; margin-bottom: 0.15em"} -->
## **Web Storage**: `localStorage` + `sessionStorage`

- Ambos nos permitem **armazenar valores dentro de _Strings_**
- Cada item armazenado é composto por **uma chave (nome) e um valor**
  - Exemplo (salvando):
    ```js
    window.localStorage.setItem('personagem', 'Jake');          // pra sempre
    window.sessionStorage.setItem('quest', 'Salvar a Jujuba');  // temporariam.
    ```
    - Lembre-se: ~~`window.`~~`localStorage` e ~~`window.`~~`sessionStorage`
  - Exemplo (recuperando):
    ```js
    let nome = localStorage.getItem('personagem');    // retorna "Jake"
    let objetivo = sessionStorage.getItem('quest');   // retorna "Salvar a Jujuba"
    ```

---
# Na última aula... (2/2) <!-- {h1:style="padding: 0; margin-bottom: 0.15em"} -->
## **JSON** no navegador

- O objeto `window` possui o objeto `JSON` que contém métodos de conversão
  do formato JSON entre _string_ e objetos JavaScript
  - De JavaScript para _string_ (serialização):
    ```js
    JSON.stringify({ nome: 'Flavio', sobrenome: 'Coutinho' });
    // retorna '{"nome":"Flavio","sobrenome":"Coutinho"}' (uma string)
    ```
  - De _string_ para JavaScript (desserialização):
    ```js
    let banco = JSON.parse('{"nome":"Itaú","codigo":"341"}');
    console.log(banco.nome);          // imprime Itaú
    ```
