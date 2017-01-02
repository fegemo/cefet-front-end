# Trabalho Prático 0

Conhecendo o Git

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
![Foto do Linus Torvalds](../../images/linus-torvalds.jpg)

_Fonte: foto ~~do filme Harry Potter e o Cálice de Fogo~~ de Linus Torvalds_

---
# Ok, professor, mas não era Web?

---
## Por que **Git**?

<img src="../../images/git-trends.jpg" class="medium-height" alt="Foto mostrando as pesquisas dos termos Git, SVN e CVS no Google ao longo dos anos">

<div class="layered-paragraph">
  <p>
    Descrição: Foto mostrando as pesquisas dos termos Git, SVN e CVS no Google
    ao longo dos anos
  </p>
  <p>_Fonte: [Google Trends](http://www.google.com/trends/explore#q=%2Fm%2F05vqwg%2C%20%2Fm%2F012ct9%2C%20%2Fm%2F09d6g&cmpt=q)_</p>
</div>

---
<img src="../../images/git-trends.jpg" class="full-width" alt="Foto mostrando as pesquisas dos termos Git, SVN e CVS no Google ao longo dos anos">

---
Além disso,
- Toda **empresa/organização precisa** gerenciar código
- O Git é uma opção de _SCM_ **muito usada em empresas** e em **projetos de
  código aberto**
- Todos os **trabalhos da disciplina** deverão ser entregues via [GitHub](http://www.github.com),
  um serviço de hospedagem de repositórios Git
  ![Mascote do GitHub - o Octocat](../../images/octocat.png)
  _Descrição: Octocat, mascote do GitHub.com_


---
# Beleza, vamos fazer isso aí!!

---
# O Trabalho

1. Aprender a usar o Git
  1. Fazer o curso gratuito sobre Git [no Code School](https://www.codeschool.com/courses/try-git)
  1. Instalar o Git no seu computador (sugiro usar em linha de comando)
1. Registrar-se no [GitHub](https://github.com/)
1. Criar um **repositório público** (gratuito) no GitHub com o nome `"web-tp0"` e
   descrição `"TP0 do curso de Programação Web do CEFET/MG"`
1. Clonar o repositório criado no GitHub **para o seu computador**
```bash
$ git clone https://github.com/SEU_USUARIO/web-tp0.git
```
1. _continua..._

---
1. Criar um arquivo com o nome `README.md`, no seu computador, na pasta raiz do
  repositório, com o conteúdo:  

  ```html
  <img src="http://fegemo.github.io/cefet-web/images/medalha.png">

  Link para minha medalha de conclusão do curso TryGit:
  <a href="https://www.codeschool.com/users/SEU_ID/badges/121">
    medalha
  </a>
  ```

  Apenas troque `SEU_ID` pelo número correspondente ao seu usuário no
  site Code School.
1. _continua..._

---
1. Adicionar o arquivo `README.md` ao repositório
```bash
$ git add README.md
```
1. Marcar essa inclusão do arquivo na "história" do repositório (_commit_)
```bash
$ git commit -m "Adiciona o arquivo README.md com a medalha"
```
1. Enviar o repositório para o servidor de origem - no caso, estamos hospedando
   no GitHub
```bash
$ git push
```
1. _continua..._

---
1. **Enviar o link do repositório** (https://github.com/SEU_USUARIO/web-tp0) para o
professor **via Moodle** da disciplina.

  Caso o Moodle da disciplina ainda não exista, favor enviar por email para
  `coutinho@decom.cefetmg.br` com assunto `"web-tp0 SEU NOME COMPLETO"` e o link
  para o repositório no corpo do e-mail.

  Por exemplo:
  ```bash
  to: coutinho@decom.cefetmg.br
  subject: web-tp0 Flávio Roberto dos Santos Coutinho
  body:
  https://www.github.com/fegemo/web-tp0.git
  ```
