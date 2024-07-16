const containerEl = document.querySelector(".container")
const tasks = ["Branding", "Partnership","Shipment","Maintenance"];
let tasksIndex = 0;
let characterIndex = 0;
updateText()
function updateText(){
    characterIndex++
    containerEl.innerHTML = `
    <h3>Car ${tasks[tasksIndex].slice(0,characterIndex)}</h3>
    `;
    
    if(characterIndex===tasks[tasksIndex].length){
        tasksIndex++
        characterIndex = 0
    }
    if(tasksIndex === tasks.length)
        {
            tasksIndex = 0;
        }
    setTimeout(updateText, 400);
}

