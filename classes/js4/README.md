# Javascript (parte 4)

---
# Roteiro

1. Criando elementos dinamicamente
1. ??
1. ??
1. ??

---
<!-- {"layout": "section-header", "slideHash": "criando-elementos-dinamicamente"} -->
# **Criando** elementos dinamicamente <!-- {h1:style="padding-top: 0"} -->
## Criando e removendo elementos HTML

- De **2 formas** diferentes:
  1. Criando **elemento por elemento**
     - `createElement`
     - `insertBefore`
     - `replaceChild`
  1. **HTML dentro de uma string**:
     - `innerHTML`

<!-- {ul^2:.content} -->

---
<!-- {"layout": "regular"} -->
## Criando elementos dinamicamente

- É possível criar elementos dinamicamente, de duas formas:
  1. Instanciando elementos e os adicionando à árvore do DOM:
     ```js
     let conteudoEl = document.querySelector('#conteudo');
     let dadoEl = document.createElement('img');
     dado.src = 'images/d12.png';
     conteudo.appendChild(dado);
     ```
  1. Definindo a propriedade de `innerHTML` de um elemento da árvore para uma
     string descrevendo uma estrutura `html`:
     ```js
     let conteudoEl = document.querySelector('#conteudo');
     conteudoEl.innerHTML = '<img src="images/d12.png">';
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
