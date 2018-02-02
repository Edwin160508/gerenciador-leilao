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
	
		let negociacao = new Negociacao(
			DateHelper.modelaDataBrowserAmericano(this._inputData.value), 
			parseInt(this._inputQuantidade.value), 
			parseFloat(this._inputValor.value)
		);

		console.log(negociacao);
		
	}
}