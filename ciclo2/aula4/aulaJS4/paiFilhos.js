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
var i=0;
//var itensArr=[];
btn.addEventListener('click', ()=>{
	let lista = ['Banana','Uva', 'Pera', 'Manga'];
	li = document.createElement("li");
	li.textContent=lista[i];
//	itensArr.push(li);
	outroPai.appendChild(li);
//	console.log(itensArr[0]);
	li.setAttribute("class","itemL");

	i++;


});
const paiDaLista = document.querySelectorAll("#outroPai");
paiDaLista.forEach(listaDeFilhas=>{
	listaDeFilhas.addEventListener('click',(filhas)=>{
		alert(filhas.target.textContent);
	})
})
}