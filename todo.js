//show table items saved in localstorage on page load
addTaskToTable();

form = document.getElementById('form');
inputTask = document.getElementById('input-task');
addTask = document.getElementById('add-task');

//add tasks to local storage
addTask.addEventListener('click', function(){
    
    //if input is empty, task will not be added
    inputTaskValue = inputTask.value;
    if(inputTaskValue.trim() != 0){
        let webtask = localStorage.getItem('localtask');

    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }

    taskObj.push(inputTaskValue);
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    inputTask.value = '';
    }
    
    addTaskToTable();
})

//add tasks to table
function addTaskToTable(){
    let webtask = localStorage.getItem('localtask');
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }

    let html = '';
    let table = document.getElementById('table');
    taskObj.forEach((item, index) => {
        html+= `<tr class="table-row">
                    <th class="serial" scope="row">${index +  1}.</th>
                    <td class="task">${item }</td>
                    <td class="table-edit"><button class="edit"><i class="fa-solid fa-pencil" onclick="editTaskItem(${index})"></i></button></td>
                    <td class="table-delete"><button class="delete" onclick="deleteTaskItem(${index})"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`;
    })

    table.innerHTML = html;
}

//edit tasks
function editTaskItem(index){
    let addTask = document.getElementById('add-task');
    let editTask = document.getElementById('edit-task');
    let saveIndex = document.getElementById('save-index');

    saveIndex.value = index;
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    inputTask.value = taskObj[index];
    addTask.style.display = 'none';
    editTask.style.display = 'block';
}

let editTask = document.getElementById('edit-task');
editTask.addEventListener('click', function(){
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);

    let saveIndex = document.getElementById('save-index').value;
    if(inputTask.value.trim() != 0){
        taskObj[saveIndex] = inputTask.value; 
    }
    // taskObj[saveIndex] = inputTask.value;
    editTask.style.display = 'none';
    addTask.style.display = 'block';
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    inputTask.value = '';
    addTaskToTable();
})

//delete individual task
function deleteTaskItem(index){
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    
    taskObj.splice(index, 1);
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    addTaskToTable();  
}

//delete all tasks
let deleteAll = document.getElementById('delete-all');
// if(webtask == null){
//     deleteAll.style.display = 'block';
// }
deleteAll.addEventListener('click', function(){
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);

    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    
    addTask.style.display = 'block';
    editTask.style.display = 'none';
    inputTask.value = '';
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    addTaskToTable();
})