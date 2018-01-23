var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

	event.preventDefault();
	var tr = document.createElement('tr');	
	//Interacao para consturcção de tr e tds
	campos.forEach(function(campo){
		var td = document.createElement('td');
		td.textContent = campo.value; //setando valor dos imputs a cada td
		tr.appendChild(td);//adicionando td preenchida na tr
	});
	
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);

	tbody.appendChild(tr);

	// limpa o campo da data
	campos[0].value = '';
	// limpa o campo da quantidade
	campos[1].value = 1;
	// limpa o campo do valor
	campos[2].value = 0;
	// foca no campo da data
	campos[0].focus();

});