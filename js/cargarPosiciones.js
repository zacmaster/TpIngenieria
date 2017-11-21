 function coordenasChoferes(url) {
      this.url = url;
      var choferesPosiciones = [];

      this.cargarPosicionesChofer = function(master) {

          function generarArrayPosiciones(driversPositionsData) {

              driversPositionsData.forEach(function(data) {
                  var positionsData = [];

                  data.positions.forEach(function(position) {
                      positionsData.push(new Posicion(position.lat, position.lon));
                  });

                  var choferPosicion = {
                      id: data.id,
                      positions: positionsData
                  };
                  choferesPosiciones.push(choferPosicion);
              });
          }

          function cargarPosiciones(choferesPosicionesReq, self) {

              generarArrayPosiciones(choferesPosicionesReq.positions);

              choferesPosiciones.forEach(function(choferPosicion) {
                  master.bindChoferPosicion(choferPosicion);
              });
          }
          console.log("ejecutando request sobre url: " + url);
          requestJSON(url+"600", cargarPosiciones, this);
      }
  }