
const objeto1={
	string(){
		console.log("Imprime A");
	},
	number(){
		console.log("Imprime B");
	},
	booblean(){
		console.log("Imprime C");
	}
}

var teste=2;
//objeto1[typeof(teste)]();
/*
var tipo=typeof(teste);

switch(tipo){
	case "string":
		console.log("Imprime A");
	break;
	case "number":
		console.log("Imprime B");
	break;
	case "boolean":
		console.log("Imprime C");
	break;
}
*/

objeto1.string();