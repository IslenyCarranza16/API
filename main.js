

// api numero uno de poke mostrar - ejercicio 1
const urlPOKE = 'https://pokeapi.co/api/v2/pokemon/';

const resultados = document.querySelector('#resultado')
const formulario = document.querySelector('#form')
const enviar= document.querySelector('#enviar');
enviar.onclick= ()=>anotherfunction(urlPOKE,formulario.numero.value)
async function fecthData (urlAPI, id){
    const response = await fetch(`${urlAPI}${id}`); 
    const data= await response.json(); 
    return data
}

const anotherfunction = async (urlAPI,id)=>{
    try{
        const productos = await fecthData(urlAPI,id);
      console.log(productos)
      let tipo = `${productos.types.map(
        tipo=> `<h2 > ${tipo.type.name}</h2>`
      ).join(' ')}`

      resultados.innerHTML=tipo;
    }

    catch(error){
        console.log(error);

    }
  

}
// API libros - ejercicio 2
const urlBook = 'http://openlibrary.org/search.json?q='

const resultado2 = document.querySelector('#resultado2')
const formulario2 = document.querySelector('#form2')

const enviar2= document.querySelector('#enviar2');
enviar2.onclick= ()=>funcionlibro(urlBook,formulario2.libro.value)


const funcionlibro= async (urlAPI,id)=>{
    try{
        const ida = id.replace(" ", '+')
        const libro = await fecthData(urlAPI,ida);
      console.log(libro.docs[0].author_name)
      let autor = libro.docs[0].author_name;

      resultado2.innerHTML= `<h3 > El autor del libro es ${autor}</h3>` 
    }

    catch(error){
        console.log(error);

    }
  

}
// API autor - ejercicio 3
const urlautor= 'http://openlibrary.org/search.json?author=';
const emAutor= 'asimov';
const resultado3= document.querySelector('#resultado3')
const formulario3 = document.querySelector('#form3')

const enviar3= document.querySelector('#enviar3');
enviar3.onclick= ()=>funcionautor(urlautor,formulario3.autor.value)


const funcionautor= async (urlAPI,id)=>{
    try{
       
        const autor = await fecthData(urlAPI,id);
      console.log(autor.docs)
      let libros = `${autor.docs.map(
        libro=> `<h3 > ${libro.title}</h3>`
      ).join(' ')}`

      resultado3.innerHTML=libros

      
    }
       
    catch(error){
        console.log(error);

    }
  

}
// API musica - ejercicio 4
const urlMuscia = 'https://www.theaudiodb.com/api/v1/json/2/search.php?s='
const banda= 'coldplay'
const resultado4= document.querySelector('#resultado4')
const formulario4 = document.querySelector('#form4')

const enviar4= document.querySelector('#enviar4');
enviar4.onclick= ()=>funcionbanda(urlMuscia,formulario4.banda.value)


const funcionbanda= async (urlAPI,id)=>{
    try{
       
        const banda = await fecthData(urlAPI,id);
      
console.log(banda)
const genero = banda.artists[0].strGenre;
resultado4.innerHTML= `<h3 > El genero del grupo es ${genero}</h3>` 
    
      
    }
       
    catch(error){
        console.log(error);

    }
  

}

//API personaje de starWars - ejercicio 5
const urlSW = 'https://swapi.dev/api/people/'
const idst='1/';
const resultado5 = document.querySelector('#resultado5');
const formulario5= document.querySelector('#form5');
const enviar5= document.querySelector('#enviar5');
enviar5.onclick= ()=>funcionperStar(urlSW,formulario5.star.value)

const funcionperStar= async (urlAPI,id)=>{
    try{
       
        const personaje = await fecthData(urlAPI,id);
      console.log(personaje)
 let urlPelicula = personaje.films
 console.log(urlPelicula)
 obtenerPeliculas(urlPelicula)

  
  
    
      
    }
       
    catch(error){
        console.log(error);

    }
}



function obtenerPeliculas(ArrayPeliculas){
    const promises=[];
    for(let peli of ArrayPeliculas){
        promises.push(fetch(peli).then(response=>response.json()))
    }

    Promise.all(promises).then((results)=>{
        console.log(results)
        let peliculas =`${results.map(result=>
            `<h3 > ${result.title}</h3>`).join(' ')}`
        resultado5.innerHTML=peliculas;
    }
    
    )
}


// Ejercicio 6 API con pokemon crear un array
const API = 'https://pokeapi.co/api/v2/pokemon/';
function fetchPokemon(){
    const promises = [];
for (let i = 1; i <= 151; i++){
 promises.push( fetch(`${API}${i}`).then(response =>response.json())
 );
}
Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
        name: result.name,
        type: result.types.map((type) => type.type.name).join(', '),
        height: result.height,
        weight: result.weight
    }));
 console.log(pokemon)
});
}
fetchPokemon()


// ejercicio 7 bono .. 

const urlMeteo= 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-21&end_date=2023-07-27&api_key=zhAjTefuHgQ6xVdCNzxpI8qeyTzY1GGfitxcLHyQ'
const ubicacion = document.querySelector('#ponermeteoritos')
async function cargarMeteoritos(){
const resultados = await fetch(urlMeteo)
const datos =  await resultados.json();
const datoscerca = await datos.near_earth_objects

  for(const date in datoscerca){
    let arraypordia = datoscerca[date];
    let prueba = `${arraypordia.map(dia=>
        `<h3 > ${dia.name}</h3>`).join(' ')}`

        ubicacion.innerHTML=prueba;
    
  }  
}


cargarMeteoritos();