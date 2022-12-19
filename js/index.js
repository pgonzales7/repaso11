let pokemons = [
    {id: 1, name: "doduo", type: "air", base_damage: 8, base_hp: 15, speed: 20},
    {id: 2, name: "onix", type: "rock", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 9, base_hp: 12, speed: 21},
    {id: 4, name: "poliwag", type: "water", base_damage: 10, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 28},
    {id: 6, name: "mankey", type: "figth", base_damage: 9, base_hp: 12, speed: 34},
    {id: 7, name: "alakazam", type: "psiquic", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "pikachu", type: "electric", base_damage: 12, base_hp: 18, speed: 35},
    {id: 10, name: "chamander", type: "fire", base_damage: 10, base_hp: 12, speed: 26},
]


//1. Ordernar los pokemons por base_damage de menor a mayor.

pokemons.sort(function (a, b) {
    if (a.base_damage > b.base_damage) {
        return;
    }
    if (a.base_damage < b.base_damage) {
        return -1;
    }
    return 0;
    });
    console.log(pokemons.sort());
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
 
function ordenarPokemons(argument) {
    let validInput = ["name", "id","type", "base_damage", "base_hp", "speed"];
    if (validInput.includes(argument)) {
        let result =
            (argument === "type"||argument === "name")
            ? pokemons.sort((a, b) => a[argument].localeCompare(b[argument]))
            : pokemons.sort((a, b) => a[argument] - b[argument]);
        console.log(result);
    } else {
    console.log("Debes ingresar un argumento válido");
    }
    }
    console.log(ordenarPokemons("speed"));

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
function filtrarPokemons(atribute, value){
    const validarAtributos = Object.keys(pokemons[0])
    if (validarAtributos.includes(atribute)){
        return pokemons.filter(pokemons => pokemons[atribute] === value);
    }else{
        return "El pokemon no existe"
    }
}

console.log(filtrarPokemons("type", "electric"))

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
 

let pokemonMaster = { id: 1, name: "Blastoise", created_date: "19/12/2022", pokemon: [{ id: 1, name: " Blastoise" }],
    };
    console.log(pokemonMaster);
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
 

function aleatoriaPokemons() {
    const aleatorio = Math.floor(Math.random() * pokemons.length);
    pokemonMaster.pokemon.push(pokemons[aleatorio]);
    console.log(pokemonMaster);
    }
    console.log(aleatoriaPokemons())
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 

function atributos() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]["min_damage"] = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        pokemons[i]["max_damage"] = Math.floor(Math.random() * (5 - 3 + 1) + 3);
    }
    return pokemons
    }
    console.log(atributos())
//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
 

function danio(index) {
    if (index < pokemons.length) {
        atributos();
        let seleccionaPokemon = pokemons[index];
        let total_danio =
        seleccionaPokemon.base_damage +
        Math.floor(Math.random() * seleccionaPokemon.max_damage - 1 + seleccionaPokemon.min_damage) + seleccionaPokemon.min_damage;
        console.log(total_danio);
    } else {
        console.log(`Ingresar un número menor a ${pokemons.length}`);
    }
    }
    console.log(danio(7));
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
 

function ordenPokemonsMayor(argument = "daño") {
    let validInput = ["daño", "base_damage", "base_hp", "speed"];
    if (validInput.includes(argument)) {
        atributos();
        for (let i = 0; i < pokemons.length; i++) {
        let seleccionaPokemon = pokemons[i];
        pokemons[i]["daño"] =
            seleccionaPokemon.base_damage + seleccionaPokemon.max_damage;
        }
        let result = pokemons.sort((a, b) => b[argument] - a[argument]);
        console.log(result);
    } else {
        console.log("Por favor, ingresa un argumento válido");
    }
    }

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
 

const root = document.getElementById("root")
    const ul = document.createElement('ul')
    root.append(ul)
    
    pokemons.forEach(pokemon => {
        const li = document.createElement('li')
        li.textContent = pokemon.name
        ul.append(li)
    })
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
 
//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.
 
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.
