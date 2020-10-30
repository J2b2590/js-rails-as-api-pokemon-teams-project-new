const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`



function main(){
    getTrainers()
}




function getTrainers(){
    fetch('http://localhost:3000/trainers')
      .then(resp => resp.json())
      .then(resp =>{
        console.log(resp)
        resp.forEach(function(trainer){
        console.log(trainer, "trainers")
  
        renderTrainer(trainer)
  
  
        })
    })
  }






  function renderTrainer(trainer){
      const main = document.querySelector('main')

      const trainerDiv = document.createElement('div')
//////////////////////TrainerDiv id and appeneded to main
      trainerDiv.className = "card"
      trainerDiv.setAttribute('data-id', `${trainer.id}`)

      main.appendChild(trainerDiv)

      /////////////////////

      /////////////////////P tag trainer Name

      const pTag = document.createElement('p')
      pTag.innerHTML = trainer.name
      trainerDiv.appendChild(pTag)

      //////////////////////////////////////

      ////////////////////////////////Add Pokemon Button

      const btn = document.createElement('button')
      btn.innerText = "Add Pokemon"
      btn.setAttribute('data-trainer-id', `${trainer.id}`)
      trainerDiv.appendChild(btn)
      ///////////////////////////////

      ///////////////////////////////UNORDERED LIST
      const pokeList = document.createElement('ul')
      trainerDiv.appendChild(pokeList)
      //////////////////////////////////////////////
      ///////////////////////////////POKE LIST
      trainer.pokemons.forEach(function(pokemon){
        // console.log(pokemon, "pokemon")
        const listItem = document.createElement('li')
        listItem.innerHTML += `${pokemon.nickname}  (${pokemon.species}) <button data-pokemon-id=${pokemon.id} class='release'>Release</button>`
        pokeList.appendChild(listItem)
      })

  }



















  main()