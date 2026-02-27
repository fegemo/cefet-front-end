
---
# Na última aula... (1/4)
## Ferramentas de Produtividade

- Boas ferramentas possuem: Destacamento de código fonte,
  indentação e autocompletar
- Atalhos interessantes no **VS Code/Atom/Sublime**
  - Abertura de pasta inteira
  - Esqueleto básico de um arquivo HTML
  - Uso do <kbd>tab ↔️</kbd> após uma _tag_ para autocompletar
  - Atualização automática do navegador ao salvar

---
# Na última aula... (2/4)
## Codificação e DOCTYPE

- ![Exemplo de Codificação de Texto](../../images/codificacao.png)
  <!-- {.push-right.small-width} -->
  Codificação do arquivo
  - Como um texto é armazenado em seu computador?
    - ASCII
    - UNICODE e UTF-8
- Versão do HTML
  - DOCTYPE:
    ```xml
    <!DOCTYPE html>  <!-- HTML 5 👍 -->
    ```

---
# Na última aula... (3/4)
## Sobre CSS

- **Seletores de classe**: uso de `.curiosidades` para selecionar
uma classe curiosidade (previamente definido na tag pelo atributo `class` )
- **Incluindo arquivos CSS**:
  ```html
  <link rel="stylesheet" href="estilos.css">
  ```
  - Vantagem: Reaproveita o estilo para diversas páginas

---
<!-- {"layout": "2-column-content", "classes": "compact-code-more"} -->
# Na última aula... (4/4)
## Cores e gradientes <!-- {.span-columns} -->


1. **Cores** <!-- {ol:.no-bullets.no-padding} -->
   ```css
   /* nome */
   black, blue, green, white,
   purple, forestgreen,
   cornflowerblue, etc.

   /* notação rgb/a */
   rgb(255, 129, 100)
   rgba(255, 129, 100, 0.5)

   /* notação hexadecimal */
   #ffca38
   #ffca38cc
   ```

- **Gradientes** (degradês): <!-- {ul:.no-bullets.no-padding} -->
  ```css
  p {
    background-image: linear-gradient( 45deg, blue, #00FF00 );
  }
  ```
