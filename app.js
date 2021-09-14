const search = () =>{
    const inputField = document.getElementById('input');
    const input = inputField.value;
    inputField.value = '';
    if(input == ''){
        const show = document.getElementById('showTeam');
        const h1 = document.createElement('h1');
        h1.innerHTML = ` kisu lekho `;
      show.appendChild(h1);

    }
    else{
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${input}`;
        fetch(url)
        .then(res => res.json())
        .then(data => showTeam(data.teams))
    }
       
   
}

const showTeam = teams => {
    console.log(teams)
    try{
        const show = document.getElementById('showTeam');
        show.textContent = '';
      for(team of teams){
        //   console.log(team.idTeam)
        const div = document.createElement('div');
        div.innerHTML = `  <div class="col" onclick='teamById(${team.idTeam})'>
        <div class="card">
          <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${team.strAlternate}</h5>
            <p class="card-text">${team.strStadium}</p>
          </div>
        </div>
      </div>`;
    
      show.appendChild(div);
    
      }
    }
    catch{
        const show = document.getElementById('showTeam');
        const h1 = document.createElement('h1');
        h1.innerHTML = ` kisu painai `;
      show.appendChild(h1);
    }

}


const teamById = id => {
console.log(id)
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;

    fetch(url)
    .then(res => res.json())
    .then(data => showOneTeam(data.teams[0]));
  


   
}

const showOneTeam = team =>{
const singleTeam = document.getElementById('single-team');
singleTeam.textContent = '';
const div = document.createElement('div');
div.innerHTML = `<div class="card" style="width: 18rem;">
<img src="${team.strTeamBadge}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${team.strAlternate}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
singleTeam.appendChild(div);



}