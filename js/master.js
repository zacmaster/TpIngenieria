var master = function(map) {

    this.map = map; 
    this.choferInfo = []; 


    this.bindChoferPosicion= function(choferPosicion) {
        this.choferInfo.forEach(function(data) {
            var chofer = data.id;
            if (chofer.id == choferPosicion.id) {

                choferPosicion.positions.forEach(function(position) {
                    chofer.addPosition(position.lat, position.lon);
                });

                chofer.historyPositions.forEach(function(position) {
                    console.log(position);
                });
            }
        });
    }

    this.addChofer = function(chofer) {
        var choferLayer = L.featureGroup().addTo(this.map); 
        choferLayer.bindPopup("");
        this.map.layersControl.addOverlay(chofer, chofer.nombre);
        var updater = function(arrayPosiciones,name) {

            var marker1 = L.Marker.movingMarker(arrayPosiciones, [10000]).addTo(map);
            marker1.once('click', function () {
                if(confirm("Desea realizar el viaje con "+ name + "??")){
                    marker1.start();
                    marker1.closePopup();
                    marker1.unbindPopup();
                    setTimeout(function() {
                     marker1.bindPopup("").openPopup();
                    }, 2000);

                }
            });
    }

        this.choferInfo.push({
            driver: chofer,
            updater: updater
        })

}
    

    this.start = function() {
        this.choferInfo.forEach(function(data) {
            var chofer = data.driver;
            chofer.dibujar(data.updater);
        });
    }
}

