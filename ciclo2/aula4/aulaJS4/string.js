/*
var nome = "Marcelo";

console.log(nome.length);
console.log(nome[0]);
*/
/* match()
O método match procura uma palavra em uma string.
Existem alguns parametros de pesquisa que permite uma maior precisão conforma a
*/

//var palavras = "Maçã doce";

//console.log(palavras.match(/D/gi));

/* search()
O método search() procura pela ocorrência e retorna a posição na cadeia da string, a posição é em relação ao primeiro carácter da ocorrência.rua
*/

//console.log(palavras.search(/d/gi));

/* replace()
Este método susbtitui uma string por outra, simples assim, ele pesquisa

*/

//var str = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius recusandae officiis nostrum totam repudiandae et sed accusantium";

//var mudarStr = str.replace(/totam/gi, 'Xxxx');
//console.log(mudarStr);

// localeCompare()
/*
var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

//console.log(`Estes é o c1: ${c1} e este o c2: ${c2}`);

var comparacao = c1.localeCompare(c2);
console.log(comparacao);
*/

// trim
/*
var p = '     fpalavra+  ';
var r = p.trim();
console.log(r);
var s = r.replace(/f/gi,'');
console.log(s);
var sub_a = s.replace(/\+/gi,'');
console.log(`Removdo: ${sub_a}`);
*/
// tpLocaleString

var valor = 1.35 //1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {style: 'currency',
currency: 'BRL'
});

console.log(formatarMoeda);

