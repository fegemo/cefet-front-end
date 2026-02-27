
---
# Na última aula... (2/4)

- ![](../../images/box-model.png) <!-- {.push-right} -->
  Entendemos o _Box Model_ (modelo da caixa) que é **como o navegador enxerga
  os elementos**
  - Há espaço para _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} -->,
    _`padding`_ <!-- {em:.box-model-part style="background: #c2ce89;"} -->,
    _`border`_ <!-- {em:.box-model-part style="background: #fddc9a;"} --> e
    _`margin`_ <!-- {em:.box-model-part style="background: #f9cc9d;"} -->

---
# Na última aula... (3/4)

- Quando se define `width` ou `height` para um elemento, reserva-se
  aquele espaço para o _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} -->
  - O tamanho total do elemento pode ficar maior que isso
- Podemos alterar isso, dizendo que o valor definido para `width` ou `height`
  deve caber _conteúdo_ <!-- {.box-model-part style="background: #8bb4c0;"} --> +
  _`padding`_ <!-- {em:.box-model-part style="background: #c2ce89;"} --> +
  _`border`_ <!-- {em:.box-model-part style="background: #fddc9a;"} -->:
  ```css
  .produto {
    width: 50px;
    box-sizing: border-box; /* o padrão é content-box */
  }
  ```


---
# Na última aula... (4/4)

- É possível que um elemento interrompa uma flutuação à esquerda (`left`),
  à direita (`right`) ou em ambos os lados (`both`) usando `clear`

  <iframe width="50%" height="260" src="//jsfiddle.net/fegemo/vxb79m2c/embedded/result,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0" style="float: right"></iframe>

  - A **propriedade `clear`** pode ser:
    - `left` ou `right`: interrompe apenas as flutuações à esquerda ou à direita
    - `both`: interrompe **ambos** lados
    - `none`: **não interrompe** (valor padrão)
