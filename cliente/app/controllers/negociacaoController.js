class NegociacaoController {
	
	adiciona(event){
		// cancelando a submissão do formulário
		event.preventDefault();

		//criando um alias para lembrar um pouco do jquery
		let $ = document.querySelector.bind(document);
		let inputData = $('#data');
		let inputQuantidade = $('#quantidade');
		let inputValor = $('#valor');

		console.log(inputData.value);
		console.log(parseInt(inputQuantidade.value));
		console.log(parseFloat(inputValor.value));
	}
}