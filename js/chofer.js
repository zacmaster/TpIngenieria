var chofer = function(id, nombre, auto, año , color) {

    this.id = id;
    this.nombre = nombre;
    this.auto = auto;
    this.año = año;
    this.color = color;
    this.coordenadas = [];
    this.addPosicion = function(lat, lon) {
            this.coordenadas.push(new Posicion(lat, lon));
    }

    var dibujar = function (callback){
        var self = this;
        callback(self.coordenadas,this.nombre);
    }

    this.showDetails = function() {
        return nombre + " auto:" + auto + " color: " + color;
    }
}