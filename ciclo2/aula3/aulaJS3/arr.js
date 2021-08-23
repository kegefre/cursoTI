/*concat() Junta os elementos de dois ou mais arrays e retorna uma cópia com os elementos juntos*/

var frutas = ["Uva", "Banana", "Amora", "Melão"]; //var frutas = Array()
console.log(`Quantidade do array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2 = ["Maçã", "Pera", "Laranja"];frutas

var todasAsFrutas = frutas.concat(frutas2);frutas

console.log(frutas);
console.log(todasAsFrutas);

/* indexOf() Procura por um elemento específico no array e retorna a sua posição */

var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2

/* join() Junta todos oa elementos de um array em uma string */

var stringDeArray  = todasAsFrutas.join();
console.log(stringDeArray);

/* push() Insere um novo elemento no final do array */

var outraLista = ["Bola","Peteca"];
var novaLista = outraLista.push("Boneca","Qualquer brinquedo");

console.log(novaLista);

console.log(outraLista);

console.log(outraLista[3]);

/* pop() remove ultimo elemento do array */

console.log(outraLista.pop());

console.log(outraLista);

/* reverse() Invetre a ordem dos elementos do array */

console.log(outraLista.reverse());

/* shift remove o primeiro elemento do array */

var removePrimeiro =  ["fusca", "variante"];

removePrimeiro.shift();

console.log(removePrimeiro);

/* sort() Ordena os elementos do array em ordem crescente */

var alfa = ["b","z","t","a"];
var numeros = ["4","6","9","2"];

alfa.sort();
numeros.sort();

console.log(alfa);

console.log(numeros);

/* toString() Converte um array em string e retorna essa string */

//vide join()

/* unshift() Insere um novo elemento no início do array */

alfa.unshift(10);
console.log(alfa);


/*splice() Corta o array em um ponto indicado dois parametros indice e quantos elementos quer remover a partir da posição */

var f = ["Uva", "Banana", "Amora", "Melão"];
var idx = f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx,1));
console.log(f);

//arays de objetos

var dados = [
	{
		nome: "Marcelo"
	},//0,
	{
		nome: "Rafael"
	}//1
]

//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: doc[0],
		cpf: doc[1]
	}
}

var pessoa2 = new Pessoa2("Rafael", "","",['22','255']);

//console.log("Nome: "+ pessoa2.nome+ ' '+ pessoa2.doc.rg);

console.log(`Nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);