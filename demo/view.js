
function bootstrap() {

    // Ubicación de la UNGS.
    var ungsLocation = [-34.5221554, -58.7000067];

    // Creación del componente mapa de Leaflet.
    var map = L.map('map').setView(ungsLocation, 15);

    // Agregamos los Layers de OpenStreetMap.
    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregamos el control para seleccionar Layers al mapa
    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(map);
    // hack:
    map.layersControl = layersControl;

    // Creamos un círculo con centro en la UNGS.
    var circle = L.circle(ungsLocation, {
        color: '#0000AA',
        fillColor: '#0000CC',
        fillOpacity: 0.2,
        radius: 300
    }).addTo(map);

    // Creamos un polígono.

	/*
    L.polygon([
L.latLng(-34.5315387, -58.7031964),
L.latLng(-34.5321615, -58.7023373),
L.latLng(-34.5326769, -58.7015995),
L.latLng(-34.5320479, -58.7005193),
L.latLng(-34.5316151, -58.6999995),
L.latLng(-34.5312452, -58.69959),
L.latLng(-34.5307696, -58.6990938),
L.latLng(-34.5302917, -58.6985825),
L.latLng(-34.5298479, -58.6981285),
L.latLng(-34.5213293, -58.7008651),
L.latLng(-34.5301973, -58.7014575},
    ]).addTo(map);

    // Creamos un circuito.
    L.polyline([
        L.latLng(-34.524309,-58.695315),
        L.latLng(-34.521865, -58.698213),
        L.latLng(-34.520437, -58.699889),
        L.latLng(-34.522388, -58.701957),
        L.latLng(-34.523579, -58.700350)
    ], {color: 'red'}).addTo(map);
*/
    // Creamos un marker sobre la UNGS.
    var ungsMarker = L.marker(ungsLocation);
    ungsMarker.addTo(map);

    // Creamos un pedido de viaje
    var travelreq = new TravelRequest("UNGS", map);

    //
    var car1 = new CarDriver("Pepe", [            
{lat:-34.516597, lon:-58.706859},
{lat:-34.516115, lon:-58.706387},
{lat:-34.515744, lon:-58.705979},

{lat:-34.515599, lon:-58.7056591},
{lat:-34.515599, lon:-58.7056591},
{lat:-34.515599, lon:-58.7056591},
{lat:-34.5157402, lon:-58.7054787},
{lat:-34.5160078, lon:-58.7051268},
{lat:-34.5162309, lon:-58.7048652},
{lat:-34.5163721, lon:-58.7046396},
{lat:-34.5165877, lon:-58.704396},
{lat:-34.5165877, lon:-58.704396},
{lat:-34.5168255, lon:-58.7040893},
{lat:-34.5170411, lon:-58.7038998},
{lat:-34.5172121, lon:-58.7037014},
{lat:-34.5173778, lon:-58.7034888},
{lat:-34.5177347, lon:-58.7030919},
{lat:-34.5177347, lon:-58.7030919},
{lat:-34.5182401, lon:-58.7025686},
{lat:-34.5185523, lon:-58.7020995},
{lat:-34.518955, lon:-58.701602},
{lat:-34.5196079, lon:-58.7008725},
{lat:-34.5196079, lon:-58.7008725},
{lat:-34.5197714, lon:-58.7007101},
{lat:-34.5200368, lon:-58.7003813},
{lat:-34.520297, lon:-58.7000926},
{lat:-34.520297, lon:-58.7000926},
{lat:-34.520624, lon:-58.7001107},
{lat:-34.5208099, lon:-58.700255},
{lat:-34.5212633, lon:-58.7007873},


{lat:-34.5213293, lon:-58.7008651}
        ]);
    //
    travelreq.addCar(car1);
/*
    // Bolt!
    var car2 = new CarDriver("Bolt", [
            {lon: -58.702329, lat: -34.522739},
            {lon: -58.702572, lat: -34.522992},
            {lon: -58.702801, lat: -34.523191},
            {lon: -58.703056, lat: -34.523412},
            {lon: -58.703299, lat: -34.523643}
        ]);
    //
    travelreq.addCar(car2);
*/
    // START!
    travelreq.start();
}

$(bootstrap);
