<!-- {"layout": "title"} -->
# Trabalho Prático 0

## Conhecendo o Git

![Logomarca do Git](../../images/git-logo.png)

_Data de entrega e valor em pontos vide plano de ensino_

---
# O que é?

**Git** é um sistema de controle de versão e de **gerenciamento de código fonte**
(tipo CVS, SVN, SourceSafe, TFS etc.) descentralizado (ou distribuído).

Ele foi originalmente proposto e criado por Linus Torvalds para possibilitar
que várias pessoas pudessem **eficientemente** trabalhar no Kernel do Linux
ao mesmo tempo.

---
<!-- {"layout": "centered"} -->
![Foto do Linus Torvalds](../../images/linus-torvalds.jpg) <!-- {.portrait} -->

_Fonte: foto ~~do filme Harry Potter e o Cálice de Fogo~~ de Linus Torvalds_

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Ok, professor, mas não era Web?

---
<!-- {"layout": "2-column-content"} -->
## Por que **Git**?

![Foto mostrando as pesquisas dos termos Git, SVN e CVS no Google ao longo dos anos](../../images/git-trends.jpg) <!-- {.full-width} -->

- Descrição: Foto mostrando as pesquisas dos termos Git, SVN e CVS no Google
ao longo dos anos
- _Fonte: [Google Trends](http://www.google.com/trends/explore#q=%2Fm%2F05vqwg%2C%20%2Fm%2F012ct9%2C%20%2Fm%2F09d6g&cmpt=q)_

---
![Foto mostrando as pesquisas dos termos Git, SVN e CVS no Google ao longo dos anos](../../images/git-trends.jpg) <!-- {.slide-contain.centered.block} --> <!-- {p:.full-width} -->

---
Além disso,

- Toda **empresa/organização precisa** gerenciar código
- O Git é uma opção de _SCM_ **muito usada em empresas** e em **projetos de
  código aberto**
- ![Mascote do GitHub - o Octocat](../../images/octocat.png) <!-- {.push-right} --> 
  Todos os **trabalhos da disciplina** deverão ser entregues via [GitHub](http://www.github.com),
  um serviço de hospedagem de repositórios Git
  _Descrição: Octocat, mascote do GitHub.com_


---
# Beleza, vamos fazer isso aí!!

---
# O Trabalho

1. Aprender a usar o Git
   1. Fazer o curso gratuito sobre Git [na DIO](https://web.digitalinnovation.one/course/introducao-ao-git-e-ao-github/learning/75b9fe49-6ed4-4480-83a7-7e37fc356aa9/) (aprox. 3h)
   1. Instalar o Git no seu computador
1. Registrar-se no [GitHub](https://github.com/)
1. Criar um **repositório público** (gratuito) no GitHub com o nome `"web-tp0"` e
   descrição `"TP0 do curso de Programação Web do CEFET/MG"`
1. Clonar o repositório criado no GitHub **para o seu computador**
   ```bash
   $ git clone https://github.com/SEU_USUARIO/web-tp0.git
   ```

---
<!-- {"classes": "compact-code"} -->
5. Criar um arquivo com o nome `README.md`, no seu computador, na pasta raiz do
   repositório, com o conteúdo:  

   ```html
   <h1>TP0 de Web: Aprendendo Git</h1>

   Link para meu perfil na Digital Innovation One (DIO):
   <a href="https://web.digitalinnovation.one/users/SEU_USUARIO?tab=achievements">
     perfil
   </a>

   Link para baixar meu certificado na DIO:
   <a href="https://certificates.digitalinnovation.one/ID_DO_CERTIFICADO">
     perfil
   </a>

   <img src="https://fegemo.github.io/cefet-web/images/medalha-curso-git-na-dio.png">
   ```

   Troque `SEU_USUARIO` e `ID_DO_CERTIFICADO` pelos valores correspondentes.

---
6. Adicionar o arquivo `README.md` ao repositório
   ```bash
   $ git add README.md
   ```
7. Marcar essa inclusão do arquivo na "história" do repositório (_commit_)
   ```bash
   $ git commit -m "Adiciona o arquivo README.md com a medalha"
   ```
8. Enviar o repositório para o servidor de origem - no caso, estamos hospedando
   no GitHub
   ```bash
   $ git push
   ```
9. **Enviar o link do repositório** (https://github.com/SEU_USUARIO/web-tp0) para o
professor **via Moodle** da disciplina.
