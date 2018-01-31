class NegociacaoController {
	
	constructor(){
		//criando um alias para lembrar um pouco do jquery
		let $ = document.querySelector.bind(document);
		
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');	
	}

	adiciona(event){
		// cancelando a submissão do formulário
		event.preventDefault();

		console.log(this._inputData.value);
		console.log(parseInt(this._inputQuantidade.value));
		console.log(parseFloat(this._inputValor.value));
	}
}