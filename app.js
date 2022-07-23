/*----------------# neoland-loops--------------------------------------

**Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
 Usa la función .***includes*** de javascript.*/
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


products.forEach((element) => {
    if (element.includes("Camiseta")) {
        console.log(element)
    }

});


/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade 
la propiedad ***isApproved*** a true o false en consecuencia.
 Una vez lo tengas compruébalo con un ***console.log***.*/
const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

//Para poder comprobar un array tendremos que recorrerlo tanto al array y al objeto o los objetos en este caso 
//Una condicion hay que hacer para comprobar los trimestres
//Añadir una propiedad a cada objeto .isApproved y sera true o false
// Comprabr con un console.log
alumns.forEach((element, index) => {
    console.log(element.T1, element.T2, element.T3);
    if (element.T1 && element.T2 || element.T1 && element.T3 || element.T2 && element.T3) {
        alumns[index].isApproved = true;
    } else {
        alumns[index].isApproved = false;
    };
});
console.log(alumns);


const numero1 = 1;
const numero2 = 1;
const numero3 = false;
if (numero2 == numero1) {
    console.log("si");
};


//**Iteración #3: Probando For...of**
//Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
//Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (objects of placesToTravel) {
    console.log(objects)
}


//**Iteración #4: Probando For...in**
//Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (key in alien) {
    console.log(alien.key)
}



/*Iteración #5: Probando For
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array. Puedes usar este array:*/

/*1.- recorrer todos los elementos del array
2.- */
const placesToTravel1 = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' },
{ id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }]

let ide = []

for (let index = 0; index < placesToTravel1.length; index++) {
    const place = placesToTravel1[index]
    if (place.id != 11 && place.id != 40) {
        ide.push(place)
    }
}
console.log(ide)

/*const placesToTravel = [
{ id: 5, name: "Japan" },
{ id: 11, name: "Venecia" },
{ id: 23, name: "Murcia" },
{ id: 40, name: "Santander" },
{ id: 44, name: "Filipinas" },
{ id: 59, name: "Madagascar" },
];

for (let index = 0; index < placesToTravel.length; index++) {
const element = placesToTravel[index];
if (element.id === 11 || element.id === 40) {
placesToTravel.splice(index, 1);
}
}
console.log(placesToTravel);*/
/*----------*/

/**teración #6: Mixed For...of e includes**
Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
  Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:*/

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
]

//1.-Recorrer todos los juguetes
//2.- eliminar los que incluyen la palabra "gato"
//3.-Usar funcion *.includes()* para comprobar

let ide2 = []
/*IMPORTANTE!!!: si la lista es de "toys", llamar al objeto "toy", y asi con todas las listas!*/
for (toy of toys) {
    if (!toy.name.includes("gato")) {
        ide2.push(toy)
    }
}
console.log(ide2)


/**Iteración #7: For...of avanzado**
Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas 
(sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:*/


const popularToys = [];
const toys1 = [
    { id: 5, name: 'Buzz MyYear', sellCount: 10 },
    { id: 11, name: 'Action Woman', sellCount: 24 },
    { id: 23, name: 'Barbie Man', sellCount: 15 },
    { id: 40, name: 'El gato con Guantes', sellCount: 8 },
    { id: 40, name: 'El gato felix', sellCount: 35 }
]

//1.-usar bucle for...of para recorrer los juguetes
//2.-Identificar cuales juguetes tienen mas de 15 ventas (sellCount) y...
//3.-...añadirlos al nuevo array *popularToys*
//4.- hacer un console.log en el que aparezcan

for (toy1 of toys1) {
    if (toy1.sellCount > 15) {
        popularToys.push(toy1)
    }
}
console.log(popularToys)