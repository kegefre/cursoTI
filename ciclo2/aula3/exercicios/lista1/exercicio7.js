var salario = parseFloat(prompt("Insira o salário base"));

sal_liq = salario + 600 - 0.1*salario;

document.write("O salário liquido é: " + sal_liq.toFixed(2));