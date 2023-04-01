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
            document.write(`<br> ${this.nombre} pertence a la SILENT GENERATION y su rasgo caracteristico es la AUSTERIDAD <br>`);
        }
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
            document.write(`<br> ${this.nombre} pertence a la BABY BOOM y su rasgo caracteristico es la AMBICION <br>`);
        }
        if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
            document.write(`<br> ${this.nombre} pertence a la GENERACION X y su rasgo caracteristico es la OBSESION POR EL EXITO <br>`);
        }
        if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
            document.write(`<br> ${this.nombre} pertence a la GENERACION Y(millennials) y su rasgo caracteristico es la FRUSTRACION <br>`);
        }
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
            document.write(`<br> ${this.nombre} pertence a la GENERACION Z y su rasgo caracteristico es la IRREVERENCIA <br>`);
        }
    }

    esMayorDeEdad(){
        if (this.edad>=18){
            document.write(`<br>${this.nombre} es MAYOR de edad. <br>`);
        }
        else{
            document.write(`<br>${this.nombre} es MENOR de edad. <br>`)
        }
    }

    mostrarDatos(){
        document.write(`<br>Nombre: ${this.nombre}<br>`);
        document.write(`Edad: ${this.edad}<br>`);
        document.write(`DNI: ${this.dni}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
        document.write(`Peso: ${this.peso}<br>`);
        document.write(`Altura: ${this.altura}<br>`);
        document.write(`Año de nacimiento: ${this.anioNacimiento}<br>`);
    }

    generarDNI(){
        this.dni = Math.floor(Math.random() * 100000000);
    }
}

console.log(Persona)

let persona1 = new Persona("Leandro", 21, "Masculino", 65.7, "1.75m", 2001 );

let persona2 = new Persona("Lionel Messi", 35, "Masculino", 67.3, "1.70m", 1987);
