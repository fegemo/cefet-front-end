# Trabalho Prático 1 - O Assunto X

Ao sair do banho, você e mais 1 ou 2 amiguinh@s decidiram **fazer um site
sobre um determinado assunto - o Assunto X -**, para motivar os amigos a
gostarem da mesma coisa que vocês.

Esse assunto deve ser algo de interesse em comum dos integrantes do grupo,
como um personagem, um filme, uma série, um tipo de comida, um anime, um jogo,
um tema de ciência, um assunto da matemática, robótica etc.

## Funcionalidades do Site

O site deve conter:

1. Um **nome**, que não deve ser simplesmente o nome do assunto, mas algo que
   o envolva. Por exemplo:
   - Um site sobre Dragon Ball não poderia se chamar "Dragon Ball", mas
     poderia ser "Ilha do Mestre Kami", ou "As Escamas de Shen Long"
 1. Um **logotipo**, que pode ser
   - um logotipo propriamente dito, preferencialmente criado pela turma, ou
   - o nome do site, escrito em uma fonte diferentona
1. Pelo menos **três páginas**
1. Um **_menu_ de navegação** para navegar entre as páginas
1. Uma das páginas deve conter **informações sobre o site**, contendo:
   - Informação sobre os **autores do site** (o grupo)
   - Informação sobre **colaboradores** (se tiver, por exemplo, pessoas que
     ajudaram)
   - Atribuição de **créditos**:
     - Se estiver usando recursos de terceiros (_e.g._, vídeos, sons, imagens
       etc.), a página deve mostrar quem é o autor de cada um, possivelmente
       com o link apontando onde esse recurso foi encontrado
1. Inclusão de **estilos em arquivo** _CSS_ externo
   - Para estilizar seu HTML, utilize mais seletores de classes e _tags_
   - Use seletores por _id_ apenas se realmente necessário, porque eles não
     promovem reuso de código
1. Alguns **elementos com posicionamento** não estático
   ([ver slides][posicionamento])
1. Uso de **_tags_ semânticas** sempre que aplicável
   ([ver slides][tags_semanticas])
1. Ter **algo interativo feito em JavaScript** (criado por vocês) para,
   por exemplo, navegar em uma galeria de imagens, mostrar/ocultar seções
   dentro da página, fazer algo acontecer com (seguir?) o movimento do mouse
   etc.
   - Vocês devem ser **capazes de extrapolar** os exemplos de JavaScript que
     foram feitos em sala de aula (eg, matemática, galeria de imagens,
     expandir/retrair)
1. Usar alguma fonte não instalada - **_webfonts_** ([ver slides][webfonts])
1. Ter uma dentre as seguintes 4 opções:
   - **Tabela** com uma célula ocupando mais de uma coluna ou linha; ou
   - Uma **lista de definição** (`<dl>...</dl>` - pesquisar); ou
   - **Código fonte** dentro da página (`<pre></pre>` e `<code></code>` -
     pesquisar); ou
   - **Campos de entrada** de dados (`<input>`s)
1. Utilizar, em algum momento, **_pseudo-elements_ ou _pseudo-classes_**
   ([ver slides][pseudo-coisas])
1. Exibição de um **vídeo sobre o tema** ([ver slides][video])
   - Pode ser um vídeo do Youtube (eg, `<iframe ...>`), ou um vídeo hospedado
     no próprio site (`<video ...>`)
1. **_Layout_ e _design_ agradáveis** - não pode ter carinha de site da década
   de 90

[pseudo-coisas]: https://fegemo.github.io/cefet-front-end/classes/html5/#pseudo-classes-e-pseudo-elements
[tags_semanticas]: https://fegemo.github.io/cefet-front-end/classes/html5/#divitite-e-tags-semanticas
[posicionamento]: https://fegemo.github.io/cefet-front-end/classes/css4
[video]: https://fegemo.github.io/cefet-front-end/classes/css3/#video-e-audio
[webfonts]: https://fegemo.github.io/cefet-front-end/classes/css3/#web-fonts

## O que faz **perder nota**

Alguns descuidos podem fazer com que sua nota fique muito abaixo do esperado:
- Plágio do trabalho de outrem
- Ausência de itens obrigatórios
- Falta de originalidade: utilização de códigos prontos (de práticas anteriores, por exemplo)
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

Na última aula do bimestre, o trabalho deve ser apresentado em sala de aula.
Não é necessário fazer uma apresentação, mas apenas mostrar o site e falar
sobre como foi seu desenvolvimento.


[neocities]: https://neocities.org/
[git]: https://git-scm.com/
[github]: https://github.com/
[gh-pages]: https://pages.github.com/
