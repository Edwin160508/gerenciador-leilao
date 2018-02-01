/*Classe responsável para tratamento de conversão de datas*/

class DateHelper {
	
	constructor(){
		
	}
	
	modelaDataBrowserAmericano(dataStringFormat){
		let idioma = navigator.language || navigator.userLanguage; 		
		var date;
		if(idioma === 'en-US'){
			date = new Date(...dataStringFormat.split('-').move(1,2).map((item, indice) => item - indice % 2));
		}else{
			date = new Date(...dataStringFormat.split('-').map((item, indice) => item - indice % 2));
		}
		return date;
	}

}