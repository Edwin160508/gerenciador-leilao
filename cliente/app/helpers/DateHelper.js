/*Classe responsável para tratamento de conversão de datas*/

class DateHelper {
	
	constructor(){
		
	}
	
	modelaDataBrowserAmericano(dataStringFormat){
		return new Date(...dataStringFormat.split('-').move(1,2).map((item, indice) => item - indice % 2));
	}

	modelaDataBrowser(dataStringFormat){
		return new Date(...dataStringFormat.split('-').map((item, indice) => item - indice % 2));
	}
}