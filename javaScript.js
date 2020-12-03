const addBoton = document.querySelector(".add-button");
const tareas = document.querySelector(".tareas");
const color = document.getElementById("color");
const text = document.querySelector(".nombre-tarea");
const desTarea = document.querySelector(".des-tarea");

let contador = 0;
color.value = "#FF0000";

addBoton.addEventListener("click",addTask);

function addTask(){
    if(text.value !="" && desTarea.value != ""){
        let div = document.createElement("div");
        contador++;
        div.classList.add(`tarea-${contador}`,"tarea-nueva");
        div.style = `background-color: ${color.value}`;
        div.innerText = `${text.value}: ${desTarea.value}`; 
        tareas.appendChild(div);
        text.value = "";
        desTarea.value = "";  
    }else{
        alert("La tarea debe tener un nombre y una descripcion valida");
    }
}
window.addEventListener("keypress",(e)=>{
    if(e.key === "Enter") addTask();
})

window.addEventListener("click",(e)=>{
    try{
        tareas.removeChild(e.target);
    }catch(e){}
})


