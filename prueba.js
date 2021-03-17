function miFuncion() {
   return "gonzalo"
};


var nombre;

nombre = miFuncion();

/*
if (nombre == "gonzalo") {
    console.log("Tu nombre es " + nombre);
} else if(nombre == "alberto") {
    console.log("Tu nombre es " + nombre);
}   else if(nombre == "paco") {
    console.log("tu nombre es " + nombre);
}
*/


/*
var marcas = ["benchmade", "spyderco", "kizer", "crkt"];
console.log(marcas);

for (var x of marcas) {
    console.log(x);
    
}

*/

/*
var miNavaja = {
    marca: "benchmade",
    seguro: "axis lock",
    blade_length: 8.6,
    medida_hoja: function() {
        console.log(`Tu navaja ${this.marca} tiene ${this.blade_length} cms de hoja`);
        
    }

};

console.log(miNavaja.medida_hoja());

*/

function carro(marca, ruedas, año) {
    this.marca = marca;
    this.ruedas = ruedas;
    this.año = año;

    
}



var nuevoCarro = new carro("mercedes", 4, 2020);


var carroViejo = new carro("bmw", 3, 1897);




var coches = [nuevoCarro, carroViejo];


var cochesFiltrados = coches.filter(function(aleatorio) {
    return aleatorio.ruedas == 4
    
});

console.log(cochesFiltrados);


var cochesMaped = coches.map(function(marcas) {
    return marcas.marca
});



console.log(cochesMaped);


