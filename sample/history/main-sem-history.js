var servidorDasImagens = 'images/',
  todasAsImagens = ['philae-parts.jpg',
      'philae-rosetta.jpg',
      'philae-separation.jpg',
      'philae-67-picture.jpg',
      'philae-collecting.jpg'];

var atual = 0,
  anterior = document.getElementById('anterior'),
  proximo = document.getElementById('proximo'),
  galeria = document.getElementById('galeria'),
  galeriaImg = galeria.getElementsByTagName('img')[0];

function changeImage(direction) {
  atual = (todasAsImagens.length + atual + direction) % todasAsImagens.length;
  galeriaImg.src = servidorDasImagens + todasAsImagens[atual];
}

anterior.addEventListener('click', function () {
  changeImage(-1);
});
proximo.addEventListener('click', function () {
  changeImage(1);
});
