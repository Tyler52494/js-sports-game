let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamonenumgoals = document.querySelector("#teamone-numgoals");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let teamtwonumgoals = document.querySelector("#teamtwo-numgoals");


teamoneshootbutton.addEventListener("click" , function() {
    console.log ("+ button clicked");
    let oneshots = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = oneshots; 
    if (Math.random()  > 0.50) {
        let onegoals = Number(teamonenumgoals.innerHTML) +1
        teamonenumgoals.innerHTML = onegoals
    }})



teamtwoshootbutton.addEventListener("click" , function() {
    console.log ("+ button clicked");
    let twoshots = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = twoshots; 
    if (Math.random()  > 0.50) {
        let twogoals = Number(teamtwonumgoals.innerHTML) +1
        teamtwonumgoals.innerHTML = twogoals
}})

let resetbutton = document.querySelector("#reset-button");
let numreset = document.querySelector("#num-resets");

resetbutton.addEventListener("click" , function() {
    console.log ("+ button clicked");
    let resetclick = Number(numreset.innerHTML) + 1
    numreset.innerHTML = resetclick
    teamonenumshots.innerHTML = 0
    teamonenumgoals.innerHTML = 0
    teamtwonumshots.innerHTML = 0
    teamtwonumgoals.innerHTML = 0
})