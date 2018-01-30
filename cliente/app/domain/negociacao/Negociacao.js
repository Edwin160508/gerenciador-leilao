class Negociacao {

	constructor(data, quantidade, valor){//o construtor atribui o set no formato "this._nomeVariavel"
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);//Esta instancia será imutável
	}

	obtemVolume() {
		return this._quantidade * this._valor;
	}	

	/*Métodos de encapsulamento*/
	get data(){ //atribuindo "objeto.getData();" simplifica a chamada do get como "objeto.data;"
		return this._data;
	}
	get quantidade(){
		return this._quantidade;
	}
	get valor(){
		return this._valor;
	}
}