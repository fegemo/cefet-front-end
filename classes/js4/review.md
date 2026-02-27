
---
<!-- {"layout": "2-column-content-zigzag"} -->
# Na última aula... (1/4)

- Na forma literal :arrow_right::
  - Preferiemos ela, por ser mais curta e simples

```js
let jogador = {
  pontos: 1420,
  vidas: 2
};
```

```js
let jogador = new Object();
jogador.pontos = 1420;
jogador.vidas = 2;
```

- :arrow_left: Usando o operador `new`: <!-- {ul:style="list-style: none;"} -->
  - Equivalente a `let jogador = {}`
  - Dizemos que **estamos usando uma <u>função construtora</u>**

---
<!-- {"layout": "2-column-content", "slideStyles": {"grid-template-columns": ".55fr .45fr"}, "classes": "compact-code-more"} -->
# Na última aula... (2/4)

- Podemos passar objetos como **argumentos para funções**
- A função é declarada como **recebendo 1 parâmetro** :arrow_right:
- Chamamos ela passando um **objeto como argumento** :arrow_right:
- Para um **vetor** percorremo-lo chamando a função para o
  i-ésimo item :arrow_lower_right: <!-- {ul^1:.bulleted} -->


```js
let jogadores = [
  { nome: 'Yoda', pontos: 1420 },
  { nome: 'Leia', pontos: 3010 }
];

function passouDeFase(player) {
  // a função recebe 1 parâmetro,
  // que demos o nome de player
  player.pontos += 1000;
}

// podemos chamar a função para 1 jogador:
passouDeFase(jogadores[0]);   // Yoda

// ...ou para todos eles, percorrendo o vetor:
for (let i = 0; i < jogadores.length; i++) {
  passouDeFase(jogadores[i]);
}

// ELEGANTE, usando vetor.forEach:
jogadores.forEach(passouDeFase);  // 🌟🌟🌟
```

---
# Na última aula... (3/4) <!-- {h1:style="margin-bottom: 0; padding-bottom: 0.15em;"} -->
## Inserção do elemento na árvore DOM <!-- {h1:style="padding-bottom: 0.15em"} -->

- Para vincularmos um elemento criado, precisamos conhecer seu **pai**
- Então, inserimos o elemento usando um dos seguintes comandos:
  1. `appendChild`: será o filho mais à direita
  1. `insertBefore`: será o filho que vem logo antes de outro
  1. `replaceChild`: substituirá um filho existente

```js
let containerEl = document.querySelector('#ovelhas');
let novaOvelhaEl = document.createElement('img');
novaOvelhaEl.src = 'img/ovelho-pixel.png';
containerEl.appendChild(novaOvelhaEl);
```

---
# Na última aula... (4/4) <!-- {h1:style="margin-bottom: 0.15em; padding-bottom: 0"} -->

![Uma árvore com os elementos HTML](../../images/create-element-resumo.png)
<!-- {p:.medium-width.centered} -->
<!-- {.full-width} -->
