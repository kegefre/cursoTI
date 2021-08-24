window.onload= function(){
/*
	const pai = document.querySelectorAll("#pai");

	pai.forEach((pegarFilhos)=>{
		pegarFilhos.addEventListener('click',(filha)=>{
			alert(filha.target.textContent);
		})
	})
*/

const btn = document.querySelector("#btn");
const outroPai = document.querySelector("#outroPai");

btn.addEventListener('click', ()=>{
	li = document.createElement("li");

	outroPai.appendChild(li).textContent="Elemento filho";
});

}