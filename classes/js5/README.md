<!--
{ "backdrop": "blastoff" }
-->

# Javascript - Parte 5

## APIs do html5

---
# Roteiro

1. APIs do HTML5
  1. Geolocation
  1. Canvas
  1. Drag'n'drop
  1. History
  1. E muito mais

---
# APIs do HTML5

---
## APIs do HTML5

- O HTML5 trouxe (e continua trazendo) muitas funcionalidades para sites e aplicações web
  - Uma das ideias do HTML5 era de ser uma plataforma capaz de **acessar os recursos de _hardware_**
    da mesma forma como um aplicativo nativo podia fazer
- Apesar de serem funcionalidades do HTML, a maior parte delas é acessível de forma programática, o
  que faz com que precisemos **recorrer a Javascript para utilizá-las**

---
# Geolocation API

- Possibilita uma página a solicitar ao _user agent_ (navegador) que descubra a **geolocalização do usuário**
- Casos de uso:
  1. Localização em um mapa
  1. Pesquisa de locais próximos ao usuário
  1. Rastreador de namorado/namorada
- Como o navegador consegue a localização?

---
## Como o navegador consegue a localização?

- Cada navegador dispõe de suas ferramentas. Algumas delas são:
  1. GPS do dispositivo, caso disponível
  1. Triangulação por rede celular
  1. Triangulação por rede WiFi
  1. Aproximação pelo IP
- É possível saber qual método foi/será usado?
  - Não, mas é possível saber **a precisão do resultado**

---
## Geolocation API

- Como usar:
  ```js
  navigator.geolocation.getCurrentPosition(rastrear);

  function rastrear(posicao) {
    var msg = 'Eu sei aonde você está!!\n\n';
    msg += 'lat: ' + posicao.coords.latitude + ', ';
    msg += 'long: ' + posicao.coords.longitude;
    window.alert(msg);
  }
  ```
<button onclick="javascript:function rastrear(posicao){console.dir(posicao); var msg='Eu sei aonde você está!!\n\n';msg+='lat: '+posicao.coords.latitude+', ';msg+='long: '+posicao.coords.longitude;window.alert(msg);} navigator.geolocation.getCurrentPosition(rastrear); this.innerText='Mwahaha...';">Rastrear</button>

---
## **Métodos** da Geolocation API ([MDN](https://developer.mozilla.org/pt-BR/docs/Using_geolocation))

- O objeto `navigator.geolocation` possui três métodos:
  1. Solicita a posição **uma vez**:
    ```js
    getCurrentPosition(successCallback, errorCallback, options)
    ```
  1. Solicita a posição sempre que ela **mudar** ou que o navegador conseguir **um valor mais preciso**:
    ```js
    watchPosition(successCallback, errorCallback, options)
    ```
  1. **Para** de observar a posição. Usa o valor retornado por `watchPosition` para identificar o "observador":
    ```js
    clearWatch(watchId)
    ```

---
## O argumento da successCallback: **posicao**

![](../../images/geolocation-argument-example.png)

- **`coords.accuracy`**, precisão em metros
- **`coords.speed`**, velocidade tangencial em metros por segundo
  - Se não é possível obter velocidade &rarr; `heading = null`
- **`coords.heading`**, orientação em graus (0° &rarr; norte,
  90° &rarr; leste, 180° &rarr; sul, 270° &rarr; oeste)
  - Se a velocidade é 0 &rarr; `heading = NaN`
  - Se não é possível obter orientação &rarr; `heading = null`


---
## Professor, já posso usar **Geolocation**??

<div class="caniuse" data-feature="geolocation"></div>

- Para ter certeza de que pode usar, faça uma verificação:
  ```js
  if (navigator.geolocation) {
    // pode usar
  } else {
    window.location.href = 'http://browsehappy.com/';
  }
  ```

---
## E o que faço com essas coordenadas??

- Um caso de uso é localizar o usuário num mapa. Opções e como fazer:
  - [Google Maps](https://developers.google.com/maps/?hl=pt-br)
  - [Bing Maps](http://www.microsoft.com/maps/choose-your-bing-maps-API.aspx)
  - [Open Street Maps](http://wiki.openstreetmap.org/wiki/API )
- Veja um exemplo usando o Google Maps nos próximos slides

---
## O código para mostrar o mapa

```js
var map;
function showMap(position) {
  var coords = position.coords;
  var mapOptions = {
    zoom: 12,
    center: { lat: coords.latitude, lng: coords.longitude },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapDiv = document.getElementById('gmaps-example');
  map = new google.maps.Map(mapDiv, mapOptions);
}
```

---
## O código que invoca **showMap**

```js
window.onload = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap);
  }
}
```

---
<!--
{ "scripts": "https://maps.googleapis.com/maps/api/js?API_KEY=AIzaSyCSdP45elEaQN0CIIWpAfMq6XIRGhcICM4&callback=noop" }
-->

## O resultado

<button type="button" onclick="function showMap(a){var b=a.coords,c={zoom:12,center:{lat:b.latitude,lng:b.longitude}},d=document.getElementById('gmaps-example');map=new window.google.maps.Map(d,c)}var map;navigator.geolocation&&navigator.geolocation.getCurrentPosition(showMap);">Carregar mapa</button>
<div id="gmaps-example" class="gmap" style="border: 1px dotted rgba(0,0,0,.3);">
  O mapa será carregado aqui...
</div>

---
## Colocando **um marcador** para mostrar nossa posição

```js
function addMarker(map, latlong, title, content) {
  var markerOptions = {
    position: latlong,
    map: map,
    title: title,
    clickable: true
  };
  var marker = new google.maps.Marker(markerOptions);
}
```


---
## O resultado com o marcador

<button type="button" onclick="function showMap2(a){var b=a.coords,c={zoom:12,center:{lat:b.latitude,lng:b.longitude}},d=document.getElementById('gmaps-example-2');map=new google.maps.Map(d,c);var e={position:{lat:b.latitude,lng:b.longitude},map:map,title:'Aqui estamos',clickable:!1};new google.maps.Marker(e)}var map;navigator.geolocation&&navigator.geolocation.getCurrentPosition(showMap2);">Carregar mapa</button>
<div id="gmaps-example-2" class="gmap" style="border: 1px dotted rgba(0,0,0,.3);">
  O mapa será carregado aqui...
</div>

---
# Canvas

---
## Canvas

- Expõe uma API de desenho arbitrário em uma "tela de pintura" **de forma programática**
- Representado pelo elemento `<canvas></canvas>`
- O elemento, por si só, não possui conteúdo ou borda. Por exemplo:
  ```html
  <canvas width="200" height="50" style="border: 1px solid black">
  </canvas>
  ```
  - Resulta em:

    <canvas width="200" height="50" style="border: 1px solid black"></canvas>

---
## Desenhando no canvas

- Inicialmente, o `canvas` é apenas um retângulo transparente
- Para desenharmos nele, precisamos (em javascript) solicitar um contexto de desenho, que é um objeto
  que contém a API gráfica (os métodos para desenho)
- Para os exemplos a seguir, considere o seguinte código html:
  ```html
  ...
  <canvas id="tela" width="600" height="300">
    Seu navegador não tem suporte ao elemento <code>canvas</code>.
  </canvas>
  ```

---
## Desenhando no canvas (cont.)

- Solicitando o contexto gráfico e desenhando dois retângulos
  ```js
  function desenhaRetangulos() {
    var ctx = document.getElementById('tela').getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect (10, 10, 55, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect (30, 30, 55, 50);
  }
  ```
  <button type="button" style="float:right" onclick="javascript:var ctx = document.getElementById('tela').getContext('2d');ctx.fillStyle='rgb(200,0,0)';ctx.fillRect (10, 10, 55, 50);ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';ctx.fillRect (30, 30, 55, 50);">Desenha retângulos</button>
  <canvas id="tela" width="100" height="80">
    Seu navegador não tem suporte ao elemento <code>canvas</code>.
  </canvas>

---
## Contexto gráfico

- Solicitamos o contexto gráfico com o método `getContext(...)` de um elemento `canvas`
- Como argumento, passamos o tipo do contexto ("2d")
- Já existe o contexto "3d", que foi/está sendo adicionado ao html
  - Contudo, a API do contexto "3d" é totalmente diferente (usa WebGL)
- Obtido o contexto, podemos começar a invocar métodos para desenhar (e.g., `fillRect(x1, y1, x2, y2);`)

---
## Sistema de coordenadas

- ![right](../../images/canvas-coords.png)
  O sistema de coordenadas de um elemento `canvas` começa no canto superior esquerdo (0,0)
  - O eixo X é horizontal e crescente para a direita
  - O eixo Y é vertical e crescente para baixo

---
## Métodos de desenho do contexto gráfico

1. ```js
   fillRect(x, y, width, height)
   ```
   Desenha um retângulo preenchido (com cor)
1. ```js
   strokeRect(x, y, width, height)
   ```
   Desenha um contorno retangular
1. ```js
   clearRect(x, y, width, height)
   ```
   Apaga a área retangular especificada, tornando-a transparente

---
## Exemplo

```js
function desenhaRetanguloFurado() {
  var ctx = document.getElementById('tela').getContext('2d');
  ctx.fillRect(25,25,100,100);
  ctx.clearRect(45,45,60,60);
  ctx.strokeRect(50,50,50,50);
}
```
<button type="button" style="float:right" onclick="javascript:var a=document.getElementById('tela-2').getContext('2d');a.fillRect(25,25,100,100),a.clearRect(45,45,60,60),a.strokeRect(50,50,50,50)">Desenha retângulo furado</button>
<canvas id="tela-2" width="150" height="150">
  Seu navegador não tem suporte ao elemento <code>canvas</code>.
</canvas>

---
## Usando **trajetórias** (path)

- Um _path_ é uma lista de pontos conectados por seguimentos de linhas
- Para criar um _path_, devemos:
  1. Criar um _path_
  1. Escolher os comandos de desenho que formarão a trajetória
  1. Fechar o _path_
  1. Uma vez criado, podemos preenchê-lo ou usá-lo como contorno

---
## Métodos de **gerenciamento de trajetórias**

1. ```js
   beginPath()
   ```
   Cria uma nova trajetória (_path_)
1. ```js
   closePath()
   ```
   Encerra a trajetória
1. ```js
   stroke()
   fill()
   ```
   Desenha a forma especificada pela trajetória como um contorno
   (`stroke`) ou como uma forma preenchida (`fill`)

---
## Métodos de **desenho de segmentos de trajetórias**

- Entre `beginPath` e `closePath`, devemos especificar que segmentos
  formam a trajetória sendo criada
- A API de desenho de segmentos lembra `turtle graphics`:
  - Move-se para uma posição
  - Desenha-se a partir de lá até outra posição
- Veja alguns exemplos desses métodos
  ```js
  moveTo(x, y);
  ```
  Move o ponto de desenho para as coordenadas `(x, y)`

---
## Métodos de **desenho de segmentos de trajetórias**

- ```js
  lineTo(x, y);
  ```
  Conecta o segmento ao ponto `(x, y)` com uma linha reta
- ```js
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  ```
  Acrescenta novo ponto com um trajeto como curva de Bézier
- ```js
  quadraticCurveTo(cpx, cpy, x, y)
  ```
  Acrescenta novo ponto com um trajeto como curva de Bézier quadrática

---
## Métodos de **desenho de segmentos de trajetórias**

- ```js
  arcTo(x1, y1, x2, y2, radius)
  ```
  Acrescenta um arco com 2 pontos de controle `(x1, y1), (x2, y2)` e raio igual a
  `radius`, conectados ao último ponto por uma linha reta
- ```js
  arc(x, y, radius, startAngle, endAngle, anticlockwise)
  ```
  Acrescenta um arco centralizado em `(x, y)` com raio `radius`, com ângulos entre
  `startAngle` e `endAngle` na direção horária caso `anticlockwise` seja `false` ou
   não especificado

---
## Exemplos de trajetórias (arcos)

```js
ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI*2,true); // Rosto
ctx.moveTo(110,75);
ctx.arc(75,75,35,0,Math.PI);        // Boca hor.
ctx.moveTo(65,65);
ctx.arc(60,65,5,0,Math.PI*2,true);  // Olho esq.
ctx.moveTo(95,65);
ctx.arc(90,65,5,0,Math.PI*2,true);  // Olho dir.
ctx.stroke();
```

<button type="button" style="float:right" onclick="javascript:var ctx=document.getElementById('tela-3').getContext('2d');ctx.beginPath(),ctx.arc(75,75,50,0,2*Math.PI,!0),ctx.moveTo(110,75),ctx.arc(75,75,35,0,Math.PI,!1),ctx.moveTo(65,65),ctx.arc(60,65,5,0,2*Math.PI,!0),ctx.moveTo(95,65),ctx.arc(90,65,5,0,2*Math.PI,!0),ctx.stroke();">Desenha <em>smile</em></button>
<canvas id="tela-3" width="150" height="150">
  Seu navegador não tem suporte ao elemento <code>canvas</code>.
</canvas>

---
## Exemplos de trajetórias (curvas quadráticas)

```js
ctx.beginPath();
ctx.moveTo(75,25);
ctx.quadraticCurveTo(25,25,25,62.5);
ctx.quadraticCurveTo(25,100,50,100);
ctx.quadraticCurveTo(50,120,30,125);
ctx.quadraticCurveTo(60,120,65,100);
ctx.quadraticCurveTo(125,100,125,62.5);
ctx.quadraticCurveTo(125,25,75,25);
ctx.stroke();
```

<button type="button" style="float:right" onclick="javascript:var ctx=document.getElementById('tela-4').getContext('2d');ctx.beginPath(),ctx.moveTo(75,25),ctx.quadraticCurveTo(25,25,25,62.5),ctx.quadraticCurveTo(25,100,50,100),ctx.quadraticCurveTo(50,120,30,125),ctx.quadraticCurveTo(60,120,65,100),ctx.quadraticCurveTo(125,100,125,62.5),ctx.quadraticCurveTo(125,25,75,25),ctx.stroke();">Desenha balão</button>
<canvas id="tela-4" width="150" height="150">
  Seu navegador não tem suporte ao elemento <code>canvas</code>.
</canvas>

---
## Mais recursos sobre canvas na MDN

- [Alterando estilos][estilos]
- [Escrevendo texto][texto]
- [Manipulando imagens][imgs]
- [Transformações][tranfs]
- [Animações][anim]
- [_Frameworks_](https://html5gameengine.com/) para jogos 2D:
  - [Phaser][phaser]
  - [Impact.js][impact]
  - [CraftyJS][crafty]

[estilos]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
[texto]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
[imgs]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
[tranfs]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
[anim]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
[phaser]: http://phaser.io/
[impact]: http://impactjs.com/
[crafty]: http://craftyjs.com/

---
## Exemplo na Phaser

[![Exemplo de space invaders feito na Phaser](../../images/phaser-example.png)](http://phaser.io/examples/v2/games/invaders)

---
## Professor, já posso usar **Canvas**??

<div class="caniuse" data-feature="canvas"></div>

---
# Drag'n'drop

---
<!--
{ "scripts": ["../../scripts/classes/draganddrop.min.js"] }
-->

## Exemplo de _Drag and Drop_

<div id="dnd-example-container">
  <section id="dnd-target" class="anim-dashes">
    <div class="anim-dashes-blank"></div>
  </section>
  <section id="dnd-sources">
    <ul>
      <li draggable="true" class="dnd-draggable bullet-old" id="johnny">Johnny</li>
      <li draggable="true" class="dnd-draggable bullet-old" id="dmitry">Dmitry</li>
      <li draggable="true" class="dnd-draggable bullet-old" id="ales">Ales</li>
      <li draggable="true" class="dnd-draggable bullet-old" id="andraz">Andraz</li>
      <li draggable="true" class="dnd-draggable bullet-old" id="logar">Logar</li>
    </ul>
  </section>
</div>

---
## 1º passo para _Drag and Drop_

- Defina um elemento arrastável usando o atributo global `draggable="true"`
  ```html
  <li draggable="true" class="draggable" id="johnny">Johnny</li>
  <style>
    .draggable {
      cursor: move;
      user-select: none;
    }
  </style>
  ```

---
## 2º passo para _Drag and Drop_

- Deve haver um elemento alvo para receber os elementos soltos (_dropped_).
  Para que um elemento seja considerado um alvo, ele deve implementar os eventos:
  **`dragenter`** e **`dragover`**
  ```js
  dragTarget.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('element-over-me');
    e.dataTransfer.dropEffect = 'move';
  });
  ```

---
## 3º passo para _Drag and Drop_

- O alvo deve também implementar o evento `drop`, que é chamado quando o elemento
  sendo arrastado é solto:
  ```js
  dragTarget.addEventListener('drop', function(e) {
    // faz algo com o elemento solto aqui
    // ID do elem. solto: e.dataTransfer.getData('text/plain');
    // ...
    dragTarget.classList.remove('element-over-me');
  });
  ```

---
## 4º passo para _Drag and Drop_

- O alvo pode implementar o evento `dragleave`, chamado quando um elemento
  arrastado sai de cima dela (sem largar):
  ```js
  dragTarget.addEventListener('dragleave', function() {
    this.classList.remove('element-over-me');
  });
  ```

---
## 5º passo para _Drag and Drop_

- Por fim, os elementos arrastáveis devem implementar o evento `dragstart` e
  declarar o conteúdo que será "arrastado":
  ```js
  var draggables = document.getElementsByClassName('monstrinho');
  for (var i in draggables) {
    draggables[i].addEventListener('dragstart', function(e) {
      e.dataTransfer.effectAllowed = 'move';

      // "arrasta" o id do elemento
      e.dataTransfer.setData('text/plain', this.id);
    });
  }  
  ```

---
## **Críticas** à Drag'n'Drop API

- A API de Drag'n'Drop foi padronizada como parte do esforço do HTML5
- Contudo, ela foi criada pelo Internet Explorer em 1999
  - Vários erros de projeto acabaram por criar uma API feia:
    - 7 eventos diferentes, sendo que apenas o evento `drop` poderia resolver
    - Necessidade de previnir a ação padrão (`e.preventDefault()`) de `dragover` e `dragenter` para funcionar
    - `dragenter` é chamado múltiplas vezes em vez de apenas 1x quando um elemento
      é arrastado para um alvo
  - Veja os palavrões de [Peter-Paul Koch](http://www.quirksmode.org/blog/archives/2009/09/the_html5_drag.html)

---
## Professor, já posso usar **Drag'n'Drop**??

<div class="caniuse" data-feature="dragndrop"></div>

---
# _History_ API

---
<!--
{ "backdrop": "oldtimes" }
-->
## _History_ API, **pré-HTML5**

- Sempre esteve em `window.history`, ou apenas `history`
- Muito usado no passado para criar botões que voltavam para a página anterior:
  ```html
  <input type="button" onclick="javascript: history.back()">
  ```
- Além de `history.back()`, havia (e há) também `history.forward()` e
  `history.go(numero)`, sendo que este último tem um parâmetro que indica
  o número de navegações no histórico que devem ser feitas
  (positivo para frente e negativo para o passado)
  - `history.back` é o mesmo que `history.go(-1)`

---
## _History_ API, hoje em dia

- O histórico de navegação de uma janela/aba é armazenado pelo navegador
  numa **pilha (_push, pop_) de páginas visitadas**
- O HTML5 introduziu **dois métodos** que possibilitam a **modificação da pilha**, sem
  que haja uma mudança de página:
  1. `history.pushState(stateObject, title, url)`
  1. `history.replaceState(stateObject, title, url)`
- Além disso, foi criado também um **evento `popstate`** lançado no objeto `window`
  sempre que a pilha do histórico é alterada (seja por chamadas a `pushState/replaceState`
  ou pelo próprio usuário clicando nos botões `back` e `forward` do navegador

---
## Por que precisamos dos novos métodos?

- Uma tendência de páginas e aplicações web que surgiu nos anos 2000 é do uso da
  criação de **_single-page applications_** (SPAs), que são aplicações web construídas
  inteiramente em cima de apenas um arquivo .html
- Uma SPA funciona com o uso de AJAX para atualizar pequenos pedaços da tela em vez
  de atualizar a tela inteira quando "troca-se" de página
  - Na verdade, nas SPAs não há troca de página
- Exemplo canônico de SPA: [gmail.com](http://gmail.com)
- Se não há troca de páginas, **o navegador não salva novas entradas no histórico**
  - Nova _History_ API _to the rescue_ \o/

---
## Método **pushState** e evento **popstate**

- Toda vez que desejamos alterar a URL da página (navegar), porém sem carregar uma
  outra página, chamamos:
  ```js
  history.pushState(null, null, '/novo-endereco');
  ```

---
## Professor, já posso usar **History API**??

<div class="caniuse" data-feature="history"></div>

---
# E tem muito mais...

- Web workers
- WebRTC
- Vibration API
- Proximity API
- Web Sockets
- Web Audio e Web Video APIs
- Web Storage
- WebGL (Canvas 3D)
- Offline Web Apps
- Apresentação: [I Read All the W3C Specs](http://sandersk.github.io/reading-w3c/)

---
# Referências

1. Geolocation
   - http://diveintohtml5.info/geo.html
1. Canvas
   - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
   - http://diveintohtml5.info/canvas.html
1. Drag and Drop
   - https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
1. History API
   - https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
   - http://diveintohtml5.info/history.html
