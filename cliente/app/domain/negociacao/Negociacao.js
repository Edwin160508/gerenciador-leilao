class Negociacao {

	constructor(data, quantidade, valor){//o construtor atribui o set no formato "this._nomeVariavel"
		Object.assign(this, { _data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor});
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