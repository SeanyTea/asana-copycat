function loadTasks(){
    const taskList = localStorage.getItem('my-task-list') 
    return taskList;
}
function saveTasks(taskList){
    localStorage.setItem('my-task-list',JSON.stringify(taskList))
}

function completeByID(e){
    console.log(e.target.id);
}

export {completeByID,loadTasks,saveTasks}