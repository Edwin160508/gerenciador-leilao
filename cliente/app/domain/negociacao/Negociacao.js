class Negociacao {

	constructor(_data, _quantidade, _valor){//o construtor atribui o set no formato "this._nomeVariavel"
		Object.assign(this, { _quantidade, _valor});
		this._data = new Date(_data.getTime());
		Object.freeze(this);//Esta instancia será imutável
	}

	obtemVolume() {
		return this._quantidade * this._valor;
	}	

	/*Métodos de encapsulamento*/
	get data(){ //atribuindo "objeto.getData();" simplifica a chamada do get como "objeto.data;"
		return new Date(this._data.getTime());
	}
	get quantidade(){
		return this._quantidade;
	}
	get valor(){
		return this._valor;
	}
}