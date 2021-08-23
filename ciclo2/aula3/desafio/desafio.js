window.onload = function(){
	const val1 = document.querySelector("#val1");
	const val2 = document.querySelector("#val2");
	const resultado = document.querySelector("#resul");
	const btn = document.querySelector("#btnConfirma");
	btn.addEventListener('click',()=>{
		var soma = Number(val1.value) + Number(val2.value);
		var verifica = soma == Number(resultado.value)?"Certo":"Errado";
		alert(verifica);
	});
}