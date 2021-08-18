var numeroOculto=5;
var nome = prompt("Digite seu nome.");
var numero = (prompt(nome + " digite um número."));
var numeroInt;
if(typeof(numero)=="string"){
	alert("Uma string foi enviada.");
	alert("A estring será convertida em um número inteiro");
	numeroInt = parseInt(numero);
}
document.write("1. Seja bem vindo..: " + nome + "<br>");
document.write("2. Você digitou o número..: (" + numero + ")<br>");
var booleano = (numeroInt == numeroOculto);
document.write("3. O retorno da comparação booleana é ..: " + booleano + "<br>");
var soma = numeroInt + numeroOculto;
document.write("4. A soma dos valores é..: " + soma + "<br>");
var subtracao = numeroInt - numeroOculto;
document.write("5. A subtração dos valores é..: " + subtracao + "<br>");
var resto = numeroInt % numeroOculto;
document.write("6. O resto da divisão é de..: " + resto + "<br>");
var quadrado = numeroInt*numeroInt;
document.write("7. O quadrado do número digitado é..:" + quadrado + "<br>");

var fruta = prompt(nome + " escolha uma das seguintes frutas, (Laranja, Uva, Pera, Manga) e digite no campo.");

if(fruta.toLowerCase()=="laranja"
 || fruta.toLowerCase()=="uva"
 || fruta.toLowerCase()=="pera"
 || fruta.toLowerCase()=="manga"){
	alert(nome + " obrigado por escolher uma das frutas do menu");
	document.write("8. " + nome + " obrigado por escolher uma fruta do menu.");
} else {
	alert(nome + " a fruta escolhida não está no menu.");
	document.write("8. " + nome + " a fruta escolhida não está no menu.");
}
