class NegociacaoController {
	
	adiciona(event){
		// cancelando a submissão do formulário
		event.preventDefault();
		let inputData = document.querySelector('#data');
		let inputQuantidade = document.querySelector('#quantidade');
		let inputValor = document.querySelector('#valor');

		console.log(inputData.value);
		console.log(parseInt(inputQuantidade.value));
		console.log(parseFloat(inputValor.value));
	}
}