var CargarIncidencias = function(url){
	// var i = new Incidencia();





// 	function cargarChoferes(url) {
//      this.url = url;

//      var choferesArray = [];
//      this.iniciarCargar = function(master, posiciones) {

//          function generarArrayDeChoferes(choferes) {

//            for(var k in choferes) {
//              var ch = choferes[k];
//              var autoNew = new auto(ch.car.id,ch.car.description,ch.car.color,ch.car.plateNumber,ch.car.year);
//              var choferRet = new chofer(ch.id,
//                      ch.name,ch.surname ,ch.score,
//                      autoNew);
//                  choferesArray.push(choferRet);
//            }

//          }

//          function cargar(response, self) {
//              console.log("callback llamado");
//              generarArrayDeChoferes(response.drivers);

//              for(var j in choferesArray) {
//                  master.addChofer(choferesArray[j]);
//              }

//          }

//          requestJSON(url, cargar, this);
//        }
     
// }



	var indicenciasArray = [];

	function generarArrayIncidencias(indicencias){
		for(var i in indicencias) {
			var incidencia = new Incidencia(i.id, i.coordinate, i.date,i.type);
			indicenciasArray.push(incidencia);
       }

    }


	function cargar(response, self) {
        generarArrayIncidencias(response.incidents);
        console.log(incidenciasArray);
        // for(var i in incidenciasArray){
        // 	master.add
        // }


  	}

// function cargar(response, self) {
//              console.log("callback llamado");
//              generarArrayDeChoferes(response.drivers);

//              for(var j in choferesArray) {
//                  master.addChofer(choferesArray[j]);
//              }

//          }













	requestJSON(url, cargar, this);
}