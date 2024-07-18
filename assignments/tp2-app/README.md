# Trabalho Prático 2 - Aplicação Web

Cansado de todo dia criar um novo sitezinho para seu pai, tio, prima,
cachorro e até para o professor de Web, você e mais um ou odis amig@s decidem
inovar. Em vez de criar um site estático, simplesmente informacional, vocês
querem agora criar uma **aplicação web interativa**, gastando todo o
JavaScript do universo.

A diferença de um site estático para uma aplicação está em seu uso:

- Um **site estático** simplesmente expõe informações e não possui
  muita interatividade. Por exemplo, as páginas do Coral 55, dos Tesouros
  do Barba Ruiva, da Exploração Espacial. Normalmente não precisa de JavaScript, ou usa muito pouco.
- Uma **aplicação web** envolve <u>muita interação com o usuário</u>,
  salva algum tipo de informação e geralmente permite o usuário se
  identificar (e.g., fazendo _login_)¹. A ideia é criar algo que
  permita que **o usuário crie algum conteúdo**, e não apenas o programador. Na atividade "Lista de Tarefas" (ainda vamos fazer), a aplicação web permite o usuário cadastrar suas próprias atividades.

Nesta tarefa, você irão fazer uma dentre as seguintes aplicações:

(a) um sistema que gerencia uma lista de jogos/livros/músicas/filmes que você quer ou já jogou/leu/ouviu/assistiu. Nesse sistema, o usuario poderá, inclusive categorizar os itens, filtrar por categoria. Cada categoria deverá ser definida junto com sua cor. Pelo menos a lista e as categorias devem ser salvos usando WebStorage;

(b) um jogo de cartas (alguém disse truco?), de navinha, de perguntas e respostas,  tamagotchi (dentre outros). Nesses jogos, deverá obrigatoriamente haver um ranking dos jogadores, alguma forma do usuario personalisar o jogo (por exemplo, seu avatar). Pelo menos o ranking e o avatar devem ser salvos usando WebStorage;

(c) um sistema de enquetes que permite o usuário criar enquetes, enviá-las para outras pessoas e visualizar os resultados em um gráfico². As enquetes devem ser categorizadas ao serem listadas e o usuario poderá filtrar por categoria. A categoria deverá ter pelo menos um nome e uma cor. As enquetes devem ser salvas, pelo menos, usando webStorage.;

**Nota:** neste trabalho, você vai precisar <u>buscar por bem mais
informações</u> do que aquelas que foram abordadas em sala de
aula durante o ano! O trabalho será avaliado pela capacidade do grupo de
**extrapolar o que vimos em sala de aula**

¹ _Login_: permitir que usuários se cadastrem na aplicação requer o uso de
um banco de dados e um _back-end_, que são assuntos que não foram cobertos
nesta matéria. Nesse caso, podemos usar _web storage_ para salvar informações
localmente no navegador.

² O envio de enquetes para outra pessoa também requer um _back-end_.

## Análise da participação e pontuação individual

Cada integrante do grupo deverá usar o GitHub e a participação (e nota) do aluno será avaliado individualmente pelo GitHub por meio da tela de contribuições - [veja aqui um exemplo](https://github.com/daniel-hasan/ri-crawler/graphs/contributors). Por exemplo, caso o grupo tenha 3 alunos e for verificado que apenas 2 alunos participaram ativamente do projeto, o aluno que participou menos terá a nota mais reduzida em relação aos demais.

## Funcionalidade da Aplicação

Valendo 80% da nota deste trabalho, sua aplicação web deve conter os
seguintes itens:

1. Permitir que **o usuário crie conteúdo** (e.g., tarefas, playlists,
   avatares, enquetes etc.) durante sua interação com a aplicação
   - A criação de conteúdo deve envolver a criação/atualização/remoção de
     elementos HTML da página (manipulação do DOM)
1. Armazenamento de dados usando _web storage_. Por exemplo:
   - O nome de usuário/senha que a pessoa criou
   - As playlists/músicas que a pessoa criou e curtiu
   - A pontuação, nome e em qual fase a pessoa está em um joguinho
1. **_Layout_ e _design_ agradáveis** - não pode ter carinha de site da década
   de 90, nem dos anos 2000. E deve ser consistente entre as páginas
   <details>
     <summary>Carinha dos anos 90???</summary>
     <p>Nos primórdios da Web, os designs eram bem ruins:</p>
     <p>
       <img src="../../images/site-anos-90s-1.png" height="250">
       <img src="../../images/site-anos-90s-2.png" height="250">
       <img src="../../images/site-anos-90s-3.png" height="250">
       <img src="../../images/site-anos-90s-4.png" height="250">
       <img src="../../images/site-anos-90s-5.png" height="250">
       <img src="../../images/site-anos-90s-6.png" height="250">
     </p>
     <p>O que faziam "de errado"? Bom, hoje evitamos:</p>
     <ul>
       <li>Usar cores demais.</li>
       <li>Usar imagens de fundo indiscriminadamente. Hoje devemos usar com parcimônia (de preferência sem repetição).</li>
       <li>Usar as fontes padrão (ex: Arial, Times New Roman etc.). Hoje se elas aparecem o usuário sente que houve desleixo do programador.</li>
       <li>A estilização padrão dos hiperlinks (sublinhado com cor azul ou roxo, depois de visitado). O sublinhado pode ficar charmoso apenas em <code>:hover</code>.</li>
       <li>Usar degradês muito extravagentes.</li>
       <li>Usar layouts simples de 1 única coluna.</li>
       <li>Não separar visualmente os "ambientes" (cabeçalho, miolo, rodapé etc.). Hoje em dia é bom que sejam bem distintos.</li>
       <li>Usar bordas muito grossas. Elas devem ser sutis (1px? Máximo 2px em geral).</li>
       <li>Arredondar demais as bordas, especialmente se o elemento for retangular. Isso distorce. Se quiser arrendondar, que seja circular ou que seja apenas os cantinhos (ex: máximo 5-10px).</li>
       <li>Não usar imagens. Hoje elas são essenciais para compor o design de sites. Tanto imagens de conteúdo (isto é, <code>&lt;img&gt;</code>), quanto de fundo.</li>
       <li>Não pensar sobre o "espaço vazio". É muito importante planejarmos os espaços que possuem coisas e aqueles que não possuem. Não pode ter tudo "agarrado". Devemos pensar bem nas distâncias entre as coisas.</li>
     </ul>
     <p>Alguns exemplos de bons designs de hoje em dia:</p>
     <ul>
       <li><a href="https://www.batokasafaris.com/">Batoka Safaris</a></li>
       <li><a href="https://wovenmagazine.com/">Revista Woven</a></li>
       <li><a href="https://alistapart.com/">A List Apart</a></li>
       <li><a href="https://www.artstation.com/">ArtStation</a></li>
       <li><a href="https://www.nowness.com/">Loja Nowness</a></li>
       <li><a href="https://store.steampowered.com/">Steam</a></li>
     </ul>
   </details>
1. Uma janela modal contendo **informações sobre a aplicação**, informando
   quem são os **autores do site** (o grupo)

Como você é um aluno [qualidade super premium][superpremium], você
pode atingir 100% da nota, ou até mais, limitado a 150%, implementando
em sua aplicação web um subconjunto dos seguintes itens opcionais:

1. (3 a 6%) Usar flexbox e grid para o layout
1. (6%) Usar _media queries_ (CSS) para tornar as páginas "responsivas"
   (adaptáveis a diferentes telas - todas as páginas têm que ficar boas em telas grandes, médias e pequenas - pelo menos 320px de largura)
1. (3 a 6%) Usar transformações, transições e animações (com parcimônia, sem exageros) para tornar a interação visualmente mais atrativa
1. Usar uma API do HTML5 diretamente para fazer coisas interessantes, como
   - (5%) [Geolocation API][geolocation], para pegar latitude/longitude do
     usuário
     - (+5%) Usar a biblioteca do Google Maps para mostrar no mapa
     - (+10%) Consultar a previsão do tempo no local onde o usuário está (usando por ex., a API do OpenWeatherMap via Ajax bomb)
   - (2 a 12%)[Canvas API][canvas], para desenhar na página usando JavaScript
   - (9%) [Speech Synthesis API][synthesis], para fazer o navegador falar (ler  em voz alta uma string que você passa pra ele - string -> voz)
   - (12%) [Speech Recognition API][recognition], pra fazer o navegador entender o que o usuário está falando no microfone (voz -> string)
   - (5%) [Vibration API][vibration], para fazer o telefone/tablet vibrar
1. (10%) Usar um _framework_ CSS para agilizar o desenvolvimento, como o
   [Bootstrap][bootstrap],
   [Materialize][materialize],
   [JQueryUI][jqueryui],
   [Foundation][foundation]
1. Usar alguma biblioteca JavaScript para auxiliar
   no desenvolvimento. Por exemplo:
   - (0 a 3%) cheet.js pra fazer Easter Eggs (mas tem que ser bem mais legal que um window.alert hein!!)
   - (até 8%) jQuery
   - (até 10%) Google Charts, ou NVD3.js, ou HighCharts (para exibir gráficos)
   - 💣 (até 15%) Angular, React (para criar SPAs - _single
     page applications_)
   - 💣 (até 18%) Phaser (para jogos que usam o &lt;canvas&gt;&lt;/canvas&gt;)
1. 💣 (7%) Usar AJAX para buscar algum tipo de dados
1. 💣💣 (até 25%) Criar um _back-end_ com um banco de dados
   para persistir os dados no servidor, em vez de apenas localmente com
   o _web storage_
   - 💣 (+10%) Possibilitar usuário se cadastrar e logar na aplicação
1. (8%) Usar o Git com o Github (ou outro serviço de hospedagem de repositórios) fazendo vários commits (por todos alunos pelo menos 1 por semana)

Legenda:
- 💣 assuntos que não são cobertos na nossa disciplina e são considerados
  complicados para serem usados neste trabalho

[superpremium]: https://www.youtube.com/watch?v=4CooiNDnPHI
[geolocation]: http://fegemo.github.io/cefet-web/classes/js5/#5
[canvas]: http://fegemo.github.io/cefet-web/classes/js5/#17
[synthesis]: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
[recognition]: https://developer.mozilla.org/pt-BR/docs/Web/API/SpeechRecognition
[bootstrap]: http://getbootstrap.com/
[materialize]: http://materializecss.com/
[foundation]: https://foundation.zurb.com/
[jqueryui]: https://jqueryui.com/
[vibration]: https://googlechrome.github.io/samples/vibration/
[tama]: https://lista.mercadolivre.com.br/tamagotchi?matt_tool=11841399&matt_word=TAMAGOTCHI&matt_source=google&matt_campaign_id=10767207031&matt_ad_group_id=106548917999&matt_match_type=e&matt_network=g&matt_device=c&matt_creative=471216240189&matt_keyword=tamagotchi&matt_ad_position=&matt_ad_type=&matt_merchant_id=&matt_product_id=&matt_product_partition_id=&matt_target_id=aud-206376730844:kwd-295616600360&gclid=Cj0KCQiA1KiBBhCcARIsAPWqoSpob1m-86Tij7_1dKedHp2xG5IVBLMZfn_dJgyfUm4qWZsfvNgEiT4aAo-2EALw_wcB

### O que faz **perder nota**

Alguns descuidos podem fazer com que sua nota fique muito abaixo do esperado:
- Plágio do trabalho de outrem
- Ausência de itens obrigatórios
- Falta de originalidade: utilização de códigos prontos (de práticas anteriores, por exemplo)
- Uso de elementos antigos dentro do HTML (e.g., _tags_ `<center>`, `<b>`,
  `<font>`)
- Ignorar boas práticas de programação:
  - Código pouco legível
  - Muita repetição de código
  - Criação de variáveis desnecessárias
  - Código CSS ou JavaScript _inline_ etc.


## O que deve ser **entregue**

Apenas a URL apontando para o site hospedado na Internet.
Para tanto, o grupo deve publicar o site
**usando algum serviço de hospedagem gratuito**. Ouvi dizer que o
[Neocities][neocities] é uma boa. Ouvi ainda, que para quem conhece um pouco
sobre [Git][git] e [GitHub][github], o [Github Pages][gh-pages] **é
uma opção bem melhor** (vide vídeo).

Apenas 01 integrante do grupo deve enviar a URL e pelo Moodle.
E deve **seguir o formato** usado no exemplo de entrega a seguir:

**Título do tópico**

Grupo 05 - BioHazard

**Conteúdo do tópico**

_URL do site:_ https://usuario.github.io/biohazard/
_Integrantes:_
1. Arzimar da Silva Costa
1. Frederico Aleixo Alencar
1. Genézio Oliveira Pontes
1. Custódio Armando Gato

_Itens opcionais implementados (conforme enunciado):_
- (até +7%)[Canvas API][canvas], para desenhar na página usando JavaScript
- (até +5%) jQuery
- (+7%) Usar AJAX para buscar algum tipo de dados

**Anexos da postagem**

_(colocar evidências que comprovem os itens opcionais implementados, se necessário - ex: repositório no github...)_




## O que deve ser **apresentado**

Na última aula do bimestre, o trabalho deve ser apresentado em sala de aula. Não é necessário fazer uma apresentação, mas apenas mostrar o site e falar sobre como foi seu desenvolvimento. Todos integrantes do grupo devem participar.




[neocities]: https://neocities.org/
[git]: https://git-scm.com/
[github]: https://github.com/
[gh-pages]: https://pages.github.com/
