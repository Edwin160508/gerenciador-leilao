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
		//console.log(this._inputData.value);
		let array = this._inputData.value.split('-');
		console.log(array);
		console.log(array.move(1,2));
		let data = new Date(
			...this._inputData.value
			.split('-').move(1,2)
			.map((item, indice) => item - indice % 2)
		);

		let data2 = new DateHelper();

		console.log(data);
		console.log("DateHelper "+data2.modelaDataBrowserAmericano(this._inputData.value));
		let negociacao = new Negociacao(
			this._inputData.value, 
			parseInt(this._inputQuantidade.value), 
			parseFloat(this._inputValor.value)
		);

		console.log(negociacao);
		
	}
}