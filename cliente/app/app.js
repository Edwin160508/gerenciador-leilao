//Instanciando o controller
let negociacaoController = new NegociacaoController();

document
	.querySelector('.form')
	.addEventListener('submit', negociacaoController.adiciona);