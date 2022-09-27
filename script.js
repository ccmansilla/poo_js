/*
class Animal { 
    constructor(nombre, propietario, raza, edad, actividad, comida, visita, vacunas) {
        this.nombre = nombre;
        this.propietario = propietario;
        this.raza = raza;
        this.edad = edad;
        this.actividad = actividad;
        this.comida = comida;
        this.visita = visita;
        this.vacunas = vacunas;
    }
}
*/

function Animal(nombre, propietario, raza, edad, actividad, comida, visita, vacunas) {
    this.nombre = nombre;
    this.propietario = propietario;
    this.raza = raza;
    this.edad = edad;
    this.actividad = actividad;
    this.comida = comida;
    this.visita = visita;
    this.vacunas = vacunas;
}

let gato = new Animal('Codito', 'Susi', 'Gato', 2, 'dormir', 'Gati', 6, 2);
console.log(gato);

