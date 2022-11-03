Se você possui um objeto Javascript no seguinte formato:

```javascript
let objeto = {"xuxu":{"oi":1},
	     "ola":[{"lala":2,"lulu":4},
	     	    {"lala":3,"lulu":5},		
	     	    {"lala":20,"lulu":40}],
	      "oi":[{"lala":20,"lulu":4},
	     	    {"lala":30,"lulu":5},		
	     	    {"lala":21,"lulu":40}],
	      "a":"alaal",
	      "b":"lulu"
	      };
```
Vc pode acessar os campos simples "a" e "b" de forma bem "usual":

```javascript
console.log(objeto["a"]); //imprime "alaal"

//para acessar dicionario dentro de dicionarios:
console.log(objeto["xuxu"]["oi"]); //imporime 1

```

Para acessar lista de dicionarios, lembre por ex, que objeto["ola"] é uma lista. Assim:

```javascript
for(let i =0 ; i< objeto["ola"].length ; i++){
	console.log(objeto["ola"][i]);//imprime o dicionario do i-ésimo numero em objeto["ola"] podendo ser, por ex, {"lala":2,"lulu":4} no caso do primeiro 
	
	console.log(objeto["ola"][i]["lala"]); //imprime o valor de "lala" para cada elemento da lista  (quando i=0, 2
	
}
```

Tambem podemos fazer algo mais "limpo" (mesmo efeito do codigo anterior):

```javascript
for(let item of objeto["ola"]){
	console.log(item);
	console.log(item["lala"]);
}
```

Como as chaves "ola" e "oi" tem o mesmo conteudo, podemos fazer uma funcao que imprime uma ou outra lista...da seguinte forma: 

```javascript
function imprimeLista(lista){
	for(let item of lista){
		console.log(item); //imprime o dicionario do i-ésimo numero em objeto["ola"] podendo ser, por ex, {"lala":2,"lulu":4} no caso do primeiro 
		console.log(item["lala"]);
	}
}

imprimeLista( objeto["ola"]); //lembre-se que objeto["ola"] e objeto["oi"] são lista de dicionários

```




	      
	  
