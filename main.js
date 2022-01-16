
document.addEventListener("DOMContentLoaded", () => {
let details = document.querySelector("#character-info")

    function fetchVillagers(){
        fetch("https://acnhapi.com/v1a/villagers/")
        .then(res => res.json())
        .then((villagers) => sortVillagers(villagers))

    }

    function sortVillagers(villagers){
        let newVillagers = villagers.slice(0,80)
        newVillagers.forEach(createVillagerCard)
    }


    function createVillagerCard(villager){
        

    details.innerHTML += `
                            <div id="grid-container"<button onclick="location.href='${villager.image_uri}'"</button>
                           <div class="img-container" id=${villager.id}><img src = ${villager.icon_uri}/></div>
                            <div id = "character">
                            <p>Name: ${villager.name['name-USen']}</p>
                            <p>Type: ${villager.personality}</p>
                            <p>Birthday: ${villager['birthday-string']}</p>
                            </div>
                            </div>`
                        
    }    

fetchVillagers();
    
})
