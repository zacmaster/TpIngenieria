
function bootstrap() {

        requestJSON = function(url, callback, obj) { 
        var xhttp;
        xhttp = new XMLHttpRequest(); 
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
            if (this.status === 200) {
                callback(JSON.parse(this.responseText), obj); 
                }
            }
        };
        xhttp.open("GET", url, true); 
        xhttp.send(); 
    }
    //var map = L.map("map");


    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(map);
    map.layersControl = layersControl; 

    var masterh = new master(map);

    var cargarChoferesh = new cargarChoferes(Config.choferes);

    var coordenasChoferesh = new coordenasChoferes(Config.choferesCoord);

    cargarChoferesh.iniciarCargar(masterh, coordenasChoferesh);




}

$(bootstrap);
