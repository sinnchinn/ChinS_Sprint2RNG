import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js"; 

let nameInput = document.getElementById("nameInput");
let nameBtn = document.getElementById("nameBtn");
let groupInput = document.getElementById("groupBtn");
let totalNames = document.getElementById("totalNames");
let removeBtn = document.getElementById("removeBtn");

let student = '';


nameInput.addEventListener('keypress', (e) =>
    nameInput.value = e.target.value
)

nameBtn.addEventListener('click', () => {

    let studentNames = getLocalStorage();

    getStudentDiv.textContent = '';
    student = nameInput.value;

    studentNames.map(student => {

        console.log(student)
        
        let button = document.createElement("button");
        button.id = "removeBtn";
        button.type = "button";
        button.className = "text-black font-mainFont font-bold bg-red-500 hover:bg-red-800 hover:text-white text-sm px-5 py-2.5 rounded-lg"
        button.textContent = "remove"
    
        let p = document.createElement("p");
        p.className = "font-mainFont text-2xl font-bold";
        p.textContent = student;
    
        let div = document.createElement("div");
        div.className = "flex justify-between mt-5 border-2 border-divColorBorder bg-divColorFill ml-60 mr-60 rounded-lg"
    
        div.appendChild(p)
        div.appendChild(button)

        button.addEventListener('click', () => {
            removeFromLocalStorage(student);
            div.remove();
        })

        getStudentDiv.appendChild(div)

        saveToLocalStorage(nameInput.value);

    })


})