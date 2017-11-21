var Drawer = function() {
    return {
        drawIncidentInMap: drawIncidentInMap,
        drawTypesInList: drawTypesInList
    }

    /******************************************************************************
     * Función para dibujar un incidente en un mapa.
     */
    function drawIncidentInMap(incident, map, type) {
        console.log("Dibujando el incidente: " + incident.id);

		var info = type.description;
		// Creamos un marker.		
		var p = L.marker(L.latLng(incident.coordinate.lat, incident.coordinate.lon));       
        var carLayer = L.layerGroup().addTo(map);
        
       map.layersControl.addOverlay(carLayer, type.description + " (" + type.delay +")");
       
       carLayer.addLayer(p);
    

	}

    /******************************************************************************
     * Función para listar los tipos de incidente en la página.
     */
    function drawTypesInList(types, nodeId) {        
		types.forEach(function(type) {
            var li = $('<li>');
            li.append(type.description + " (" + type.delay +")");
            $("#"+nodeId).append(li);
        });
    }
}
