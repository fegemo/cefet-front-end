
---
# Na última aula... (1/3)
## Transformações <!-- {h1:style="padding-bottom: 0.15em"} -->

- **Translação**: faz um deslocamento do objeto no espaço
  - `translate(x,y)`
  - `translateX(x)`
  - `translateY(y)`
  - `translateZ(z)`<!-- {ul:.multi-column-list-4}-->
- **Escala**: faz um dimensionamento do objeto
  - `scale(x,y)`
  - `scaleX(x)`
  - `scaleY(y)`
  - `scaleZ(z)` <!-- {ul:.multi-column-list-4}-->
- **Rotação**: altera o ângulo do sistema de coordenadas do objeto
  - `rotate(ang)`,
  - `rotateZ(ang)`
  - `rotateX(ang)`
  - `rotateY(ang)`<!-- {ul:.multi-column-list-4}-->

---
<!-- {"layout": "2-column-content"} -->
# Na última aula... (2/3) <!-- {h1:style="padding-bottom: 0.15em;"} -->

- Usando transição, perspectiva e mudando a origem da transformação (`transform-origin`): <!-- {ul:.span-columns} -->

```css
.porta {
  transform-origin: left center;
  transition: transform ease 600ms;
}
.porta:hover {
  transform: rotateY(-95deg);
}
```

<iframe width="470" height="240" src="//jsfiddle.net/fegemo/2bcLx47t/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right"></iframe>

---
<!-- {"classes": "compact-code-more"} -->
# Na última aula... (3/3) <!-- {h1:style="padding-bottom: 0.15em; margin-bottom: 0;"} -->
## Animação <!-- {h1:style="padding-bottom: 0.15em"} -->

Especificada no CSS3, `animation` e `@keyframes` possibilitam o uso de
 animações de propriedades CSS de forma similar a `transition` <!-- {p:style="margin-top: 0; margin-bottom: 0.15em;"} -->
 ```html
 <img src="images/urso.jpg" id="urso">
 ```
 ```css
 #urso {
   position: relative;
   animation: flutuando .5s ease-in-out 0s infinite alternate;
 }
 @keyframes flutuando {
   from { top: 0;     }
   to   { top: -30px; }
 }
 ```
<style>
.urso-flutuante {
 position: relative;
 animation: urso-flutuando .5s ease-in-out 0s infinite alternate;
 transition: opacity 200ms ease-out;
}
.urso-flutuante:hover {
 opacity: 0.25;
}
@keyframes urso-flutuando {
 from { top: 0;     }
 to   { top: -30px; }
}
 </style>

 <div style="position: absolute; bottom: 2em; right: 1em; margin-top: -75px; margin-left: -75px;">
 <img src="../../images/urso.jpg" style="width: 150px; border-radius: 75px;" class="urso-flutuante">
 </div>
