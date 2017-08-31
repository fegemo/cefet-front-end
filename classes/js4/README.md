# Javascript (parte 4)

---
# Roteiro

1. Objeto Javascript
1. Criando elementos dinamicamente
1. Exemplo de uso (objeto+criação de elementos)

---
# Conforme vimos: O tipo _Object_


- É um **"saquinho" de propriedades**: <!-- {ul:.push-code-right} -->
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
- No exemplo, o objeto tem 2 propriedades:
  1. Nome: `pontos`, valor: `1420`
  1. Nome: `vidas`, valor: `2`
- Novas propriedades podem ser atribuídas mesmo após sua criação

---
## Conforme vimos: Instanciando um _Object_

- Na forma literal:
  ```js
  let jogador = {             // forma mais expressiva, curta e sexy
    pontos: 1420,             // propriedades separadas por vírgula
    vidas: 2
  };
  ```
  ```js
  let jogador = {};           // um objeto vazio: { }
  jogador.pontos = 1420;      // criou jogador.pontos com valor 1420
  jogador.vidas = 2;          // criou jogador.vidas
  ```


---
<!-- {"layout": "2-column-content"} -->
## Conforme vimos: Objetos dentro de objetos

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
## Vetores de Objetos

- Como qualquer outro tipo, podemos fazer um vetor de Objetos:
```js  
  let jogadores = [{
                      nome: "Yoda",pontos: 1420,vidas: 2
                    },
                    {
                        nome: "Leia",pontos: 3420,vidas: 5
                    },
                    {
                        nome: "Luke", pontos: 5420, vidas: 7
                    }];
```

- Posteriormente, podemos percorrer seus resultados:

```js
  for(let i = 0 ; i<jogadores.length ; i++){
    console.log("Nome: "+jogadores[i].nome+"  vidas: "+jogadores[i].vidas);
  }
```

---
<!-- {"layout": "section-header", "slideHash": "criando-elementos-dinamicamente"} -->
# **Criando** elementos dinamicamente <!-- {h1:style="padding-top: 0"} -->
## Criando e removendo elementos HTML

- De **2 formas** diferentes:
  1. Criando **elemento por elemento**
     - `createElement`
     - `insertBefore`
     - `replaceChild`
     - `appendChild`
  1. **HTML dentro de uma string**:
     - `innerHTML`
- Além disso, podemos:
  - **remover elementos**: `removeChild`<!-- {ul^2:.content} -->

---
<!-- {"layout": "regular"} -->
## Criando elementos dinamicamente

- É possível criar elementos dinamicamente, de duas formas:
  1. Definindo a propriedade de `innerHTML` de um elemento da árvore para uma
   string descrevendo uma estrutura `html` (conforme já vimos):
   ```js
   let conteudoEl = document.querySelector('#conteudo');
   conteudoEl.innerHTML = '<img src="images/d12.png">';
   ```
  1. Instanciando elementos e os adicionando à árvore do DOM (veremos a seguir)


---
# Instanciação de elementos HTML
## Claúsula **create**
- A claúsula **create** cria um elemento HTML
- Devemos especificar a _Tag_ do elemento que iremos criar
- Exemplo - criação de uma imagem
  ```js
  let imgEl = document.createElement('img');
  imgEl.src = 'images/d12.png';
  ```
  - Resultado:
  ```HTML
    <img src="images/d12.png">
  ```
- **Atenção**: Você **criou** o elemento, porém **não o adicionou** na árvore DOM
  - Ou seja, ele ainda não faz parte da página

---
## Vinculação do elemento na árvore DOM

  - Para vincularmos um elemento criado, primeiramente teremos que buscar o **pai** do elemento
  - Logo após, podemos adicionar o elemento usando um dos seguintes comandos:
    - `appendChild`
    - `insertBefore`
    - `replaceChild`

```js
let conteudoEl = document.querySelector('#conteudo');
let dadoEl = document.createElement('img');
dado.src = 'images/d12.png';
conteudo.appendChild(dado);
```

---
## Criando elementos dinamicamente (cont.)

- Além de `no.appendChild(elemento)`, também é possível incluir novos elementos
  na árvore usando:
  ```js
  no.insertBefore(novoEl);            // novoEl vira irmão de 'no'
  no.replaceChild(novoEl, antigoEl);  // novoEl vira filho de 'no' e
                                      // exclui o elemento antigo
  ```
- Para remover um elemento da árvore
  ```js
  no.removeChild(paraRemoverEl);
  ```
