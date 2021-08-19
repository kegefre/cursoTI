var salario = parseFloat(prompt("Digite o salário"));
var novoSalario=0;
if (salario<=500){
		novoSalario = 1.05*salario;
} else if (salario>500 && salario<=1200){
	novoSalario = 1.12*salario;
} else {
	novoSalario = salario;
}

if(salario<=600){
	novoSalario+=150;
} else {
	novoSalario+=600;
}
document.write("O novo salário é: " + novoSalario);