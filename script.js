let container = document.querySelector(".main");
let filterBtn = document.querySelector(".filter")
let resetBtn = document.querySelector(".reset")
let selectBox = document.querySelector("#select")
let input = document.querySelector(".input")
let loading = document.querySelector(".loading");
let main = document.querySelector(".main")

main.style.visibility = "hidden";
setTimeout(() =>{
  loading.style.display = "none";
  main.style.visibility = " visible"
},9000)

async function poke(params) {
    let promise = await fetch (params);
   let result = await promise.json();
   return result;
}






async function fetchPokemon(){
    for ( let i = 1 ; i <= 150; i++){
        let pokemon = await poke(`https://pokeapi.co/api/v2/pokemon/${i}`);
    //    console.log(pokemon)

       createCard(pokemon);
      
    }

   
}

fetchPokemon();

function createCard(pokemon){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML= `
     <div class="front">
            <p class="id">#${pokemon.id}</p>
            <img src="${pokemon.sprites.front_default}" alt="">
            <h1 class="name">${pokemon.name}</h1>
            <p class="type">${pokemon.types[0].type.name}</p>
           </div>
           <div class="back">
            <p class="id">#${pokemon.id}</p>
            <img src="${pokemon.sprites.back_default}" alt="">
            <h1 class="name">${pokemon.name}</h1>
            <br class="">Abilities: </br>${abilities(pokemon.abilities)}</p>
           </div>
    `;

    if (pokemon.types[0].type.name == 'grass'){
        card.style.backgroundColor = "#A0CF59"
    }

    if (pokemon.types[0].type.name == 'fire'){
        card.style.backgroundColor = "#FD842F"
    }

    if (pokemon.types[0].type.name == 'water'){
        card.style.backgroundColor = "#4E98C7"
    }

    if (pokemon.types[0].type.name == 'bug'){
        card.style.backgroundColor = "#79A449"
    }

    if (pokemon.types[0].type.name == 'normal'){
        card.style.backgroundColor = "#A9B0B3"
    }

    if (pokemon.types[0].type.name == 'poison'){
        card.style.backgroundColor = "#BD86CC"
    }

    if (pokemon.types[0].type.name == 'electric'){
        card.style.backgroundColor = "#EFD73F"
    }

    if (pokemon.types[0].type.name == 'ground'){
        card.style.backgroundColor = "#F7E049"
    }

    if (pokemon.types[0].type.name == 'fairy'){
        card.style.backgroundColor = "#FDBDEA"
    }

    if (pokemon.types[0].type.name == 'fighting'){
        card.style.backgroundColor = "#D76F2E"
    }

    if (pokemon.types[0].type.name == 'psychic'){
        card.style.backgroundColor = "#F46EBD"
    }

    if (pokemon.types[0].type.name == 'rock'){
        card.style.backgroundColor = "#A8922C"
    }

    if (pokemon.types[0].type.name == 'ghost'){
        card.style.backgroundColor = "#826AA8"
    }

    if (pokemon.types[0].type.name == 'ice'){
        card.style.backgroundColor = "#5AC7E8"
    }

    if (pokemon.types[0].type.name == 'dragon'){
        card.style.backgroundColor = "#DCAA2B"
    }

    container.appendChild(card)


}
function abilities(arr){
    let str = ''
    arr.forEach((ele) =>{
        // let res = ele.ability.name.toCapitalize();
        str = str + ele.ability.name + ",";
    })
return str;
}

filterBtn.addEventListener("click",()=>{

    let allcards = document.querySelectorAll(".card");
    allcards.forEach((element, index) =>{
        let type = element.querySelector(".type");
       if (selectBox.value.toLowerCase() == type.innerText.toLowerCase()){
        element.style.display = "block"
       }else{
        element.style.display = "none"
       }

    })
 })

 resetBtn.addEventListener("click" , () =>{
    window.location.reload();
 })
 input.addEventListener("keyup",()=>{

    let allcards = document.querySelectorAll(".card");
    allcards.forEach((element, index) =>{
        let name = element.querySelector(".name").innerText;
     
        if (name.startsWith(input.value.toLowerCase())){
            element.style.display = "block"
            
        }else{
            element.style.display = "none";
        }

    })
 })