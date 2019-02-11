# Programador sem café ☕

O código a seguir refere-se a uma página que deveria mostrar um cardápio
de um restaurante. Contudo, o programador que o criou estava precisando
de um pouco mais de café e acabou por cometer alguns erros. Você deve
corrigir o código de forma que ele fique correto.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Cardapio</title>
  </head>
  <body>
    <img src="logo-restaurante.jpg">Logomarca</img>
    <p id="promocao">
      <em> Promoção! No dia do seu aniversário, ganhe 50% de desconto.
    </p>

    <table>
      <thead>
        <th colspan="2">Cardápio</td>
      </thead>
      <tbody>
        <tr><td colspan="2">Entradas</td></tr>
        <tr><td>Pão de Queijo Recheado</td><td rowspan="2">R$ 5,00</td></tr>
        <tr><td>Coxinha</td></tr>
        <tr><td>Infarto Frito (torresmo)</td><td>R$ 3,00</td></tr>
        <tr><td>Salada simples</td><td>R$ 7,00</td></tr>

        <tr><td colpan="2">Prato Principal</td></tr>
        <tr><td>Mexidão</td><td>R$ 20,00</td></tr>
        <tr><td>PF Executivo</td><td>R$ 15,00</td></tr>

        <tr><td colspan="2">Sobremesa</td></tr>
        <tr><td>Pudim</td><td>R$ 10,00</td></tr>
        <tr><td>Sorvete</td> <td>R$ 10,00</td></tr>      
        <tfoot>
          <tr><th colspan="2">* os preços podem alterar sem aviso prévio</th></tr>
        </tfoot>
      </tbody>
    </table>
  </body>
</html>
```
