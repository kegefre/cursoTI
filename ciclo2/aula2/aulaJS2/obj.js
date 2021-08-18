/*
	var / let / const
*/
/*
var nome = "Marcelo" ; //var global
let sobreNome = "Weihmayr";

if(true){
	console.log("Var nome = " + nome);
	var nm = nome;
	console.log("Chamando o sobrenome " + sobreNome)
	let sn = "da Silva";
	console.log(sobreNome);
}

var teste;
console.log("Meu nome é " + nm + " " + sobreNome + " " + sn);
console.log("Var nome= " + nm);
*/

var Pessoa = {
	nome: "Kellis",
	rua: "Rua lá",
	ncasa: "333",
	dados: function(){
		document.write(
				"Nome...:" + this.nome + "<br>" +
				"Rua...:" + this.rua + "<br>" +
				"N. casa...:" + this.ncasa
			)
	}
}

/*
Pessoa.dados();
console.log("Nome " + Pessoa.nome +
 " Endereço " + Pessoa.rua + " N. " + Pessoa.ncasa);
 */