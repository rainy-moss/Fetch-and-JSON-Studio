// TODO: add code here   

window.addEventListener("load", function() {

    const div = document.getElementById("container");

    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then
    (function(response){
       response.json().then(function(data){
        for (let i=0; i > data.length; i++) {
            let astronaut = data[i];
            container.innerHTML +=`
            <div class="astronaut">
             <div class="bio">
               <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li>Active: ${astronaut.active}</li>
                  <li>Skills: Physician, Chemical Engineer</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">

         </div>`
            }
        });
    });
});