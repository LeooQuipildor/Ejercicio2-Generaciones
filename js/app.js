class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = "";
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion(){
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
            alert(`${this.nombre} pertence a la SILENT GENERATION y su rasgo caracteristico es la AUSTERIDAD`);
        }
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
            alert(`${this.nombre} pertence a la BABY BOOM y su rasgo caracteristico es la AMBICION`);
        }
        if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
            alert(`${this.nombre} pertence a la GENERACION X y su rasgo caracteristico es la OBSESION POR EL EXITO`);
        }
        if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
            alert(`${this.nombre} pertence a la GENERACION Y(millennials) y su rasgo caracteristico es la FRUSTRACION`);
        }
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
            alert(`${this.nombre} pertence a la GENERACION Z y su rasgo caracteristico es la IRREVERENCIA`);
        }
    }

    esMayorDeEdad(){
        if (this.edad>=18){
            alert(`${this.nombre} es MAYOR de edad.`);
        }
        else{
            alert(`${this.nombre} es MENOR de edad.`)
        }
    }

    mostrarDatos(){
        alert(`>
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de nacimiento: ${this.anioNacimiento}
        `)
    }

    generarDNI(){
        this.dni = Math.floor(Math.random() * 100000000);
    }
}


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", enviarDatos);

function enviarDatos(e){
    e.preventDefault();
    console.log(`enviando`)
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let anio = document.getElementById("anio").value;

    nuevaPersona = new Persona(nombre, edad, sexo, peso, altura, anio);
    nuevaPersona.generarDNI();
}

let btnMostrarInfo = document.getElementById("mostrarInfo");
btnMostrarInfo.addEventListener("click", mostrarInfo);

function mostrarInfo() {
    nuevaPersona.mostrarDatos();
}

let btnMostrarGen = document.getElementById("mostrarGen");
btnMostrarGen.addEventListener("click", mostrarGen);

function mostrarGen(){
    nuevaPersona.mostrarGeneracion();
}

let btnMayorEdad = document.getElementById("mayor");
btnMayorEdad.addEventListener("click", mayor);

function mayor(){
    nuevaPersona.esMayorDeEdad();
}
