# Trabalho Prático 2 - Aplicação Web

Cansado de todo dia criar um novo sitezinho para seu pai, tio, prima,
cachorro e até para o professor de Web, você e mais um amig@ decidem
inovar. Em vez de criar um site estático, simplesmente informacional, vocês
querem agora criar uma **aplicação web interativa**, gastando todo o
JavaScript do universo.

A diferença de um site estático para uma aplicação está em seu uso:

- Um **site estático** simplesmente expõe informações e não possui
  muita interatividade. Por exemplo, as páginas do Coral 55, dos Tesouros
  do Barba Ruiva, da Exploração Espacial.
- Uma **aplicação web** envolve <u>muita interação com o usuário</u>,
  salva algum tipo de informação e geralmente permite o usuário se
  identificar (e.g., fazendo _login_)¹. Por exemplo, a Lista de Tarefas
  (exceto a parte de login, que ela não tem). A ideia é criar algo que
  permita que **o usuário crie algum conteúdo**, e não apenas o programador.

Exemplos de aplicações web interativas incluem (a) um sistema que gerencia uma
lista de jogos/livros/músicas/filmes que você quer ou já
jogou/leu/ouviu/assistiu; (b) um jogo de cartas (alguém disse truco?), de
navinha, de perguntas e respostas, tamagotchi; (c) um sistema de enquetes
que permite o usuário criar enquetes, enviá-las para outras pessoas e
visualizar os resultados em um gráfico; (d) um player de música com criação
de playlists etc.

**Nota:** neste trabalho, você vai precisar buscar por bem mais informações
do que aquelas que foram abordadas em sala de aula durante o ano!

¹ _Login_: permitir que usuários se cadastrem na aplicação requer o uso de
banco de dados e um _back-end_, que são assuntos que não foram cobertos
nesta matéria. Nesse caso, podemos usar _web storage_ para salvar informações
localmente no navegador.

## Funcionalidade da Aplicação

Valendo 70% da nota deste trabalho, sua aplicação web deve conter os
seguintes itens:

1. Permitir que **o usuário crie conteúdo** (e.g., tarefas, playlists,
   avatares, enquetes etc.) durante sua interação com a aplicação
1. Persistência de dados usando _web storage_
1. **_Layout_ e _design_ agradáveis** - não pode ter carinha de site da década
   de 90, nem dos anos 2000
1. Uma janela modal contendo **informações sobre a aplicação**, informando
   quem são os **autores do site** (o grupo)

Como você é um aluno [qualidade super premium][superpremium], você
pode atingir 100% da nota, ou até mais, até um limite de 120%, implementando
em sua aplicação web um subconjunto dos seguintes itens opcionais:

1. (+7%) Usar _media queries_ (CSS) para tornar as páginas "responsivas"
   (adaptáveis a diferentes telas)
1. Usar uma API do HTML5 diretamente para fazer coisas interessantes, como
   - (+5%) [Geolocation API][geolocation], para pegar latitude/longitude do
     usuário
     - (+5%) Usar a biblioteca do Google Maps para mostrar no mapa
   - (até +7%)[Canvas API][canvas], para desenhar na página usando JavaScript
   - (+8%) [Speech Synthesis API][synthesis], para fazer o navegador falar
     (ler um texto que você passa pra ele)
   - (+7%) [Speech Recognition API][recognition], pra fazer o navegador entender
     o que o usuário está falando no microfone
   - (+4%) [Vibration API][vibration], para fazer o telefone/tablet vibrar
1. (+7%) Usar um _framework_ CSS para agilizar o desenvolvimento, como o
   [Bootstrap][bootstrap] (:star2: _seal of approval_ do professor),
   [Materialize][materialize] (:star: muito bonito),
   [Foundation][foundation] (mais flexível, porém bem mais complexo).
1. Usar alguma biblioteca JavaScript para auxiliar
   no desenvolvimento. Por exemplo:
   - (até +5%) jQuery
   - (até +7%) Google Charts, ou NVD3.js, ou HighCharts (para exibir gráficos)
   - :bomb: (até +10%) Angular, React (para criar SPAs - _single
     page applications_)
   - :bomb: (até +15%) Phaser (para jogos que usam o &lt;canvas&gt;&lt;/canvas&gt;)
1. (+5%) Usar transformações, transições e animações (com parcimônia,
   sem exageros) para tornar a interação visualmente mais atrativa
1. :bomb: (+7%) Usar AJAX para buscar algum tipo de dados
1. :bomb::bomb: (até +10%) Criar um _back-end_ com um banco de dados
   para persistir os dados no servidor, em vez de apenas localmente com
   o _web storage_
   - :bomb: (+10%) Possibilitar usuário se cadastrar e logar na aplicação

Legenda:
- :bomb: assuntos que não são cobertos na nossa disciplina e são considerados
  complicados para serem usados neste trabalho

[superpremium]: https://www.youtube.com/watch?v=4CooiNDnPHI
[geolocation]: http://fegemo.github.io/cefet-web/classes/js5/#5
[canvas]: http://fegemo.github.io/cefet-web/classes/js5/#17
[synthesis]: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
[recognition]: https://developer.mozilla.org/pt-BR/docs/Web/API/SpeechRecognition
[bootstrap]: http://getbootstrap.com/
[materialize]: http://materializecss.com/
[foundation]: https://foundation.zurb.com/

## O que faz **perder nota**

Alguns descuidos podem fazer com que sua nota fique muito abaixo do esperado:
- Plágio do trabalho de outrem
- Ausência de itens obrigatórios
- Uso de elementos antigos dentro do HTML (e.g., _tags_ `<center>`, `<b>`,
  `<font>`)
- Ignorar boas práticas de programação:
  - Código pouco legível,
  - Muita repetição de código,
  - Criação de variáveis desnecessárias
  - Código CSS ou JavaScript _inline_ etc.

## O que deve ser **entregue**

O trabalho deve ser entregue de duas formas: (a) um arquivo compactado
contendo todo o site e (b) uma URL apontando para o site hospedado na Internet.
É isso mesmo. Na Internet :3!!

Para tanto, o grupo deve publicar o site
**usando algum serviço de hospedagem gratuito**. Ouvi dizer que o
[Neocities][neocities] é uma boa. Ouvi ainda, que para quem conhece um pouco
sobre [Git][git] e [GitHub][github], o [Github Pages][gh-pages] também é
uma boa opção.

Ao final do seu trabalho, você deve submeter pelo Moodle o arquivo compactado
e o link para seu site nas Interwebs.

## O que deve ser **apresentado**

Em uma aula a ser marcada, o trabalho deve ser apresentado em sala de aula.
Não é necessário fazer uma apresentação, mas apenas mostrar o site e falar
sobre como foi seu desenvolvimento.


[neocities]: https://neocities.org/
[git]: https://git-scm.com/
[github]: https://github.com/
[gh-pages]: https://pages.github.com/
