window.onload=function(){

	//alert("Olá mundo");
	const cxCep = document.querySelector('.cxCep');
	const btnBuscaCep = document.querySelector('#btnBuscaCep');
	

	btnBuscaCep.addEventListener('click',()=>{
		var url=`https://viacep.com.br/ws/${cxCep.value}/jason`;
		alert(url);
	})

}