# O cardápio

Indique as alterações no HTML necessárias para que a tabela seja apresentada
da forma indicada.


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Cardapio</title>
  </head>
  <body>
      <div id="promocao">
        <p>
          Promoção! No dia do seu aniversário, ganhe 50% de desconto.
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th colspan="2">Cardápio</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colspan="2">Entradas</td></tr>
          <tr><td>Pão de Queijo Recheado</td><td rowspan="2">R$ 5,00</td></tr>
          <tr><td>Coxinha</td></tr>
          <tr><td>Infarto Frito (torresmo)</td><td>R$ 3,00</td></tr>
          <tr><td>Salada simples</td><td>R$ 7,00</td></tr>

          <tr><td>Prato Principal</td></tr>
          <tr><td>Mexidão</td><td>R$ 20,00</td></tr>
          <tr><td>PF Executivo</td><td>R$ 15,00</td></tr>

          <tr><td>Sobremesa</td></tr>
          <tr><td>Pudim</td><td>R$ 10,00</td></tr>
          <tr><td>Sorvete</td><td>R$ 10,00</td></tr>
        </tbody>
        <tfoot>
          <tr><td colspan="2">* os preços podem alterar sem aviso prévio</td></tr>
        </tfoot>
      </table>

  </body>
</html>
```
