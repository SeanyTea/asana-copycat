const CreateTask = (name,dueDate,complete) => {
    const getTask = () => {
        return name
    };
    const getDueDate = () => dueDate;
    const isComplete = () => complete;
    return {getTask,getDueDate,isComplete}
}

export default CreateTask

