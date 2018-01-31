//Instanciando o controller
let negociacaoController = new NegociacaoController();

document
	.querySelector('.form')
	.addEventListener('submit', function(event){
		negociacaoController.adiciona(event);
	});