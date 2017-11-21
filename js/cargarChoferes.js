 function cargarChoferes(url) {
      this.url = url;

      var choferesArray = [];
      this.iniciarCargar = function(master, posiciones) {

          function generarArrayDeChoferes(choferes) {

              choferes.forEach(function(choferIn) {
                  var choferRet = new chofer(choferIn.id,
                      choferIn.name
                  );
                  choferesArray.push(choferRet);
              });
          }

          function cargar(response, self) {
              console.log("callback llamado");
              generarArrayDeChoferes(response.drivers);

              choferesArray.forEach(function(choferIn) {
                  master.addChofer(choferIn);
              });

              posiciones.cargarPosicionesChofer(master);

          }

          requestJSON(url, cargar, this);
        }
      
}