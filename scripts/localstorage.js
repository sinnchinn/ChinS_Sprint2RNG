const saveToLocalStorage = (student) => {

    let studentNames = getLocalStorage();

    if(!studentNames.includes(student)){
        studentNames.push(student);
    }

    localStorage.setItem("Students", JSON.stringify(studentNames));
}

const getLocalStorage = () => {

    let localStorageData = localStorage.getItem("Students");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = (student) => {
    
    let studentNames = getLocalStorage();

    let namedIndex = studentNames.indexOf(student);

    studentNames.splice(namedIndex, 1);

    localStorage.setItem("Students", JSON.stringify(studentNames));
}

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage }