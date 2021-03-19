/*
    * Framework MILES
    * @license : Teia - Tecnologia WEB.
    * @link http://www.teia.tec.br
		
    * Classe curta para chamadas de classes personalizadas
    * Data de Criacao: 13/03/2021
    * @author Edilson Valentim dos Santos Bitencourt (Theusdido)
*/	
export class tdcModelMiles {
	/*
		* Método p
		* Data de Criacao: 13/03/2021
		* @author Edilson Valentim dos Santos Bitencourt (Theusdido)

		* Carrega os dados de uma classe persistent
        @params classe = Nome da classe/tabela do banco de dados
        @params id = Chave primária da classe/tabela
	*/
    p(classe:string,id:number = 0){
        return {
            metatagdescription:"CEDUP CRICIÚMA - Centro de Educação Profissional",
            metatagauthor:"Teia - Tecnologia WEB"
        };
    }
}